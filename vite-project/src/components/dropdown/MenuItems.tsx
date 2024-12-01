import { useState, useEffect, useRef } from "react";
import DropDown from "./Dropdown";
import { NavLink } from "react-router-dom";
import { MenuItem } from "../../data/menuitems";
interface MenuItemProps {
    items: MenuItem;
    depthLevel: number;
}

const MenuItems: React.FC<MenuItemProps> = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    const ref = useRef<HTMLLIElement>(null);
    useEffect(() => {
        //Nếu nhấp hoặc chạm vào bên ngoài menu thả xuống sẽ đóng dropdown
        const handler = (event: MouseEvent | TouchEvent) => {
            if (dropdown && ref.current && !ref.current.contains(event.target as Node)) {
                setDropdown(false);
            }
        }
        document.addEventListener("mousedown", handler); //sự kiện nhấp chuột.
        document.addEventListener("touchstart", handler); //sự kiện chạm màn hình.
        return () => {
            document.removeEventListener("mousedown", handler); //sự kiện nhấp chuột.
            document.removeEventListener("touchstart", handler); //sự kiện chạm màn hình.
        }
    }, [dropdown]);
    const onMouseEnter = () => {
        setDropdown(true);
    }
    const onMouseLeave = () => {
        setDropdown(false);
    }

    return (
        <>
            <li className="relative flex items-center text-header-2 text-neutral-1-500 font-medium" ref={ref}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {items.submenu ? (
                    <>
                        <button
                            className="flex items-center cursor-pointer p-3 justify-between w-full"
                            type="button"
                            aria-haspopup="menu"
                            aria-expanded={dropdown ? "true" : "false"}
                            onClick={() => setDropdown((prev) => !prev)}
                        >
                            <NavLink
                                to={items.link}
                                className={({ isActive }) =>
                                    `${isActive ? "text-primary-1" : ""} hover:text-primary-1`
                                }
                            >{items.title}
                            </NavLink>
                            <span className={`arrow ${dropdown ? "rotate" : ""}`}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12.7071 15.7251C12.3166 16.1156 11.6834 16.1156 11.2929 15.7251L6 10.4322L7.4 9.03223L12 13.6322L16.6 9.03223L18 10.4322L12.7071 15.7251Z" fill="currentColor"></path>
                                </svg>
                            </span>
                        </button>
                        <DropDown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel} />
                    </>
                ) : (
                    <div className="p-3">
                        <NavLink className={({ isActive }) =>
                            `${isActive ? "text-primary-1" : ""} hover:text-primary-1`
                        }
                            to={items.link}>{items.title}</NavLink>
                    </div>
                )}
            </li>
        </>
    );
};
export default MenuItems;

