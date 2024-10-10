import { useRef } from "react";
import './header.scss'
import menuLine from '../../assets/images/menu-line.png';


export default function Navbar() {
    const navRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const dropRef = useRef<HTMLDivElement>(null);

    const showNavBar = () => {
        if (navRef.current && overlayRef.current) {
            navRef.current?.classList.toggle("responsive_nav");
            overlayRef.current?.classList.toggle("active_overlay");
        }
    }
    const showDropdown = () => {
        dropRef.current?.classList.toggle("dropdown_active")
    }

    return (
        <>
            <div ref={overlayRef} className="overlay" onClick={showNavBar}></div>
            <nav className="Menu" ref={navRef}>
                <button className='header__menu-line hide-on-desktop nav-btn nav-close-btn' onClick={showNavBar}>
                    <img src={menuLine} alt='' width={27} height={27}></img>
                </button>
                <div className="header__submenu hide-on-desktop">
                    <li className="submenu__item">
                        <button className="btn-dropdown">
                            <p className="header__navbar-item" >Trang chủ</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M12.7071 15.7251C12.3166 16.1156 11.6834 16.1156 11.2929 15.7251L6 10.4322L7.4 9.03223L12 13.6322L16.6 9.03223L18 10.4322L12.7071 15.7251Z" fill="currentColor"></path>
                            </svg>
                        </button>
                    </li>
                    <div className="submenu__item">
                        <li className="header__navbar-item" >Sản phẩm</li>
                    </div>
                    <div className="submenu__item">
                        <li className="header__navbar-item" >Giới thiệu</li>
                    </div>
                    <div className="submenu__item">
                        <li className="header__navbar-item" >Liên hệ</li>
                    </div>
                </div>
            </nav>
            <button className='header__menu-line hide-on-desktop nav-btn' onClick={showNavBar}>
                <img src={menuLine} alt='' width={27} height={27}></img>
            </button>
        </>
    );
}