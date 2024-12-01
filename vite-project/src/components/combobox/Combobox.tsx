// import { Combobox, ComboboxButton, ComboboxInput, ComboboxOptions } from '@headlessui/react';
// import React from 'react';
// import { AddressParams } from '../../types/AddressTypes';
// import { IoIosArrowDown } from 'react-icons/io';

// interface ComboboxProps {
//     items: { name: string; code: string }[];
//     value: any;
//     setValue: (value: any) => void;
//     placeholder: string;
//     setQuery: (value: string) => void;
// }
// const Combobox: FC<ComboboxProps> = ({ items, value, setValue, placeholder, setQuery }) => {
//     return (
//         <>
//             <Combobox
//                 as="div"
//                 className="flex relative px-6 py-3 border border-neutral-1-400 rounded-sm"
//                 value={value}
//                 onChange={setValue}
//             >
//                 <ComboboxInput
//                     className="w-full rounded-lg border-none text-sm leading-6 text-neutral-1-900 focus:outline-none"
//                     aria-label="Assignee"
//                     placeholder={placeholder}
//                     displayValue={(city: AddressParams | null) => city?.name ?? ''}
//                     onChange={(event) => setQuery(event.target.value)}
//                 />
//                 <ComboboxButton className="text-black right-0 top-0">
//                     <IoIosArrowDown />
//                 </ComboboxButton>
//                 <ComboboxOptions
//                     anchor="bottom"
//                     className="absolute  top-0 bg-white p-2 shadow-custom w-[320px] max-h-40 overflows-y-auto"
//                 >
//                     {filteredCities.map((city) => (
//                         <ComboboxOption
//                             key={city.code}
//                             value={city}
//                             className="data-[focus]:bg-neutral-3-50 p-2 "
//                         >
//                             {city.name}
//                         </ComboboxOption>
//                     ))}
//                 </ComboboxOptions>
//             </Combobox>

//         </>

//     );
// };

// export default Combobox