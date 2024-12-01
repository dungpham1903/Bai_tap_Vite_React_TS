import { useRef } from "react";
import './navbar.scss'




export default function NavbarMenu() {
    const navRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const burgerRef = useRef<HTMLButtonElement>(null);
    // let isSubmenuOpen: boolean = false


    const showNavBar = () => {
        const allSubmenus = document.querySelectorAll(".submenu");
        const allArrows = document.querySelectorAll(".menu-arrow");

        if (navRef.current && burgerRef.current) {
            navRef.current?.classList.toggle("responsive_nav");
            overlayRef.current?.classList.toggle("active_overlay");
            burgerRef.current?.classList.toggle("active");
        }

        allSubmenus.forEach((submenu) => {
            submenu.classList.remove("show");
        });
        allArrows.forEach((arrow) => {
            arrow.classList.remove("rotate");
        });
    }

    const toggleSubMenu = (button: HTMLButtonElement) => {
        const nextSibling = button.nextElementSibling as HTMLElement | null;
        const allSubmenus = document.querySelectorAll(".submenu");
        const allArrows = document.querySelectorAll(".menu-arrow");


        allSubmenus.forEach((submenu) => {
            if (submenu !== nextSibling) {
                submenu.classList.remove("show");
            }
        });
        allArrows.forEach((arrow) => {
            arrow.classList.remove("rotate");
        });

        if (nextSibling) {
            const isCurrentlyOpen = nextSibling.classList.contains("show");
            const arrow = button.querySelector(".menu-arrow") as HTMLElement;

            nextSibling.classList.toggle("show", !isCurrentlyOpen);
            if (arrow) arrow.classList.toggle("rotate", !isCurrentlyOpen);
            // isSubmenuOpen = !isCurrentlyOpen;
        }
    }
    return (
        <>
            <div ref={overlayRef} className="fixed top-0 left-0 w-full h-full bg-overlay-1 invisible opacity-0 transition-opacity z-10" onClick={showNavBar}></div>
            <nav id="sidebar" className="lg:hidden" ref={navRef}>
                <button ref={burgerRef} className='lg:hidden nav-btn nav-close-btn burger' onClick={showNavBar}>
                    <span className="burger-line" ></span>
                    <span className="burger-line" ></span>
                    <span className="burger-line" ></span>
                </button>
                <ul className="menu hide-on-desktop">
                    <li className="menu-item"><a className="menu-link" href="/#">Trang chủ</a></li>
                    <li className="menu-item menu-dropdown">
                        <button className="menu-button" onClick={(e) => toggleSubMenu(e.currentTarget)}>
                            <a href="/product">Sản phẩm</a>
                            <span className="menu-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12.7071 15.7251C12.3166 16.1156 11.6834 16.1156 11.2929 15.7251L6 10.4322L7.4 9.03223L12 13.6322L16.6 9.03223L18 10.4322L12.7071 15.7251Z" fill="currentColor"></path>
                                </svg>
                            </span>
                        </button>
                        <ul className="submenu" >
                            <div>
                                <li className="submenu-item"><a className="submenu-link">Nhẫn cưới</a></li>
                                <li className="submenu-item"><a className="submenu-link">Vòng cổ</a></li>
                                <li className="submenu-item"><a className="submenu-link">Vòng tay</a></li>
                                <li className="submenu-item"><a className="submenu-link">Bông tai</a></li>
                            </div>
                        </ul>
                    </li>
                    <li className="menu-item menu-dropdown">
                        <button className="menu-button" onClick={(e) => toggleSubMenu(e.currentTarget)}>
                            <a href="/about">Giới thiệu</a>
                            <span className="menu-arrow">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12.7071 15.7251C12.3166 16.1156 11.6834 16.1156 11.2929 15.7251L6 10.4322L7.4 9.03223L12 13.6322L16.6 9.03223L18 10.4322L12.7071 15.7251Z" fill="currentColor"></path>
                                </svg>
                            </span>
                        </button>
                        <ul className="submenu" >
                            <div>
                                <li className="submenu-item"><a className="submenu-link">Nhẫn cưới</a></li>
                                <li className="submenu-item"><a className="submenu-link">Vòng cổ</a></li>
                                <li className="submenu-item"><a className="submenu-link">Vòng tay</a></li>
                                <li className="submenu-item"><a className="submenu-link">Bông tai</a></li>
                            </div>
                        </ul>
                    </li>
                    <li className="menu-item"><a className="menu-link" href="/contact">Liên hệ</a></li>
                </ul>
            </nav>
            <button className='burger header__menu-line hide-on-desktop nav-btn' onClick={showNavBar}>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
                <span className="burger-line"></span>
            </button>
        </>
    );
}
