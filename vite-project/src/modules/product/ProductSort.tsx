import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { TDropdownData } from '../../types/general.types';
import { useState } from 'react';
interface DropdownProps {
    data?: TDropdownData[];
    onSort: (value: string) => void; // Add the onSort prop

}
const DropdownFilter = ({ data = [], onSort }: DropdownProps) => {

    const [selected, setSelected] = useState<string>("Được đề xuất");

    const handleSelect = (value: string, label: string) => {
        setSelected(label);
        onSort(value);
    };
    return (
        <Menu as="div" className="relative text-body-1 text-neutral-1-900 font-normal basis-[236px] z-10" >
            {({ open }) => (
                <>
                    <MenuButton
                        className="w-full flex items-center justify-between px-4 py-3 bg-neutral-3-50">
                        <span>{selected}</span>
                        <span
                            style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M12.7071 15.7251C12.3166 16.1156 11.6834 16.1156 11.2929 15.7251L6 10.4322L7.4 9.03223L12 13.6322L16.6 9.03223L18 10.4322L12.7071 15.7251Z" fill="currentColor"></path>
                            </svg>
                        </span>
                    </MenuButton>
                    <MenuItems as="div" className="absolute left-0 right-0 top-full w-full shadow-custom bg-white">
                        {data.length > 0 &&
                            data.map((item) => (
                                <MenuItem
                                    key={item.value}
                                    as="div"
                                    className="px-4 py-3 cursor-pointer hover:text-secondary-2"
                                    data-value={item.value}
                                    onClick={() => handleSelect(item.value, item.label)}
                                >
                                    {item.label}
                                </MenuItem>
                            ))}
                    </MenuItems>
                </>
            )}
        </Menu>
    );
};
export default DropdownFilter;
// import { Field, Select } from '@headlessui/react'

// import { IoIosArrowDown } from 'react-icons/io'

// export default function DropdownFilter() {
//     return (
//         <div className=" text-body-1 text-neutral-1-900 font-normal basis-[236px] z-10">
//             <Field className="flex ">
//                 <Select
//                     className="mt-3 block w-full appearance-none rounded-lg border-none bg-white/5 py-1.5 px-3 text-sm leading-6 text-black
//                     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/25"
//                 >
//                     <option value="active">Active</option>
//                     <option value="paused">Paused</option>
//                     <option value="delayed">Delayed</option>
//                     <option value="canceled">Canceled</option>
//                 </Select>
//                 <IoIosArrowDown
//                 />


//             </Field>
//         </div>
//     )
// }