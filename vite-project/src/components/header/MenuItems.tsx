import { useState, useEffect, useRef } from "react";
import DropDown from "./Dropdown";
interface MenuItemProps {
    items: {
        title: string;
        submenu?: {
            title: string;
            submenu?: {
                title: string;
            }[];
        }[];
    };
    depthLevel: number;
}

const MenuItems: React.FC<MenuItemProps> = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    let ref = useRef<HTMLLIElement>(null);
    useEffect(() => {
        const handler = (event: MouseEvent | TouchEvent) => {
            if (dropdown && ref.current && !ref.current.contains(event.target as Node)) {
                setDropdown(false);
            }
        }
        document.addEventListener("mousedown", handler); //sự kiện nhấp chuột.
        document.addEventListener("touchstart", handler); //sự kiện chạm màn hình.
    }, [dropdown]);
    const onMouseEnter = () => {
        setDropdown(true);
    }
    const onMouseLeave = () => {
        setDropdown(false);
    }

    return (
        <>
            <li className="menu__items" ref={ref}
            // onMouseEnter={onMouseEnter}
            // onMouseLeave={onMouseLeave}
            >
                {items.submenu ? (
                    <>
                        <button
                            type="button"
                            aria-haspopup="menu"
                            aria-expanded={dropdown ? "true" : "false"}
                            onClick={() => setDropdown((prev) => !prev)}>
                            {items.title}
                            <span className="arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12.7071 15.7251C12.3166 16.1156 11.6834 16.1156 11.2929 15.7251L6 10.4322L7.4 9.03223L12 13.6322L16.6 9.03223L18 10.4322L12.7071 15.7251Z" fill="currentColor"></path>
                                </svg>
                            </span>
                        </button>
                        <DropDown submenus={items.submenu} dropdown={dropdown} depthLevel={depthLevel} />
                    </>
                ) : (
                    <a href="/#">{items.title}</a>
                )}
            </li>
        </>
    );
};
export default MenuItems;
