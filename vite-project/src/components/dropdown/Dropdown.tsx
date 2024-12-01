import { MenuItem } from "../../data/menuitems";
import MenuItems from "./MenuItems";

interface DropDownProps {
    submenus: MenuItem[];
    dropdown: boolean;
    depthLevel: number
}

const DropDown: React.FC<DropDownProps> = ({ submenus, dropdown, depthLevel }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <>
            <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
                {submenus.map((submenu, index) => (
                    <MenuItems items={submenu} key={index} depthLevel={depthLevel}></MenuItems>
                ))}
            </ul>
        </>
    );
};
export default DropDown;
