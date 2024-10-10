
import searchIcon from '../../assets/images/search-line.png';
import cartIcon from '../../assets/images/Badge.png';
import logo from '../../assets/images/Logo.png';
import menuLine from '../../assets/images/menu-line.png';

import { useRef } from "react";
import './header.scss'
import Navbar from './Navbar';
export const Header = () => {
    return (<>
        <header className='header'>
            <div className='grid-header'>
                <div className='container__header'>
                    <Navbar></Navbar>
                    <div className='header__logo'>
                        <img src={logo} alt='' width={184} height={60}></img>
                    </div>
                    <ul className='header__navbar-list show-on-desktop'>
                        <li className='header__navbar-item'>Trang chủ</li>
                        <li className='header__navbar-item'>Sản phẩm</li>
                        <li className='header__navbar-item'>Giới thiệu</li>
                        <li className='header__navbar-item'>Liên hệ</li>
                    </ul>
                    <form className='header__search header__search--separate'>
                        <div className='search__input show-on-desktop'>
                            <img src={searchIcon} alt='' width={24} height={24}></img>
                            <div className='header__'>Tìm kiếm</div>
                        </div>
                        <div className='header__cart hide-on-desktop'>
                            <img src={searchIcon} alt='' width={22} height={22}></img>
                        </div>
                        <div className='header__cart'>
                            <img src={cartIcon} alt='' width={27} height={27}></img>
                        </div>
                    </form>
                </div>
            </div>
        </header>
    </>)
}
