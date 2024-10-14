import { useRef, useState } from "react";
import './navbar.scss'
import menuLine from '../../assets/images/menu-line.png';
import { menuItems } from "../../menuitems";
import MenuItems from "./MenuItems";



export default function NavbarMenu() {
    const navRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    const showNavBar = () => {
        if (navRef.current && overlayRef.current) {
            navRef.current?.classList.toggle("responsive_nav");
            overlayRef.current?.classList.toggle("active_overlay");
        }
    }

    const depthLevel = 0;
    return (
        <>
            <div ref={overlayRef} className="overlay" onClick={showNavBar}></div>
            <nav className="Nav-menu" ref={navRef}>
                <button className='header__menu-line hide-on-desktop nav-btn nav-close-btn' onClick={showNavBar}>
                    <img src={menuLine} alt='' width={27} height={27}></img>
                </button>
                <div className="menus hide-on-desktop">
                    {menuItems.map((menu, index) => (
                        <MenuItems
                            key={index}
                            items={menu}
                            depthLevel={depthLevel}
                        />
                    ))}
                </div>
            </nav>
            <button className='header__menu-line hide-on-desktop nav-btn' onClick={showNavBar}>
                <img src={menuLine} alt='' width={27} height={27}></img>
            </button>
        </>
    );
}