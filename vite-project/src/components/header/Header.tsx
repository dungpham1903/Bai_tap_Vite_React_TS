
import searchIcon from '../../assets/images/search-line.png';
import cartIcon from '../../assets/images/Badge.png';
import logo from '../../assets/images/Logo.png';

import './header.scss';
import NavbarMenu from './NavbarMenu';
import { menuItems } from '../../menuitems';
import MenuItems from './MenuItems';

export const Header = () => {

    const depthLevel = 0;
    return (<>
        <header className='header'>
            <div className='grid-header'>
                <div className='container__header'>
                    <NavbarMenu></NavbarMenu>
                    <div className='header__logo'>
                        <img src={logo} alt='' width={184} height={60}></img>
                    </div>
                    <ul className='header__navbar-list show-on-desktop'>
                        {menuItems.map((menu, index) => (
                            <MenuItems items={menu} key={index} depthLevel={depthLevel}></MenuItems>
                        ))}
                    </ul>
                    <form className='header__search header__search--separate'>
                        <div className='search__input show-on-desktop'>
                            <img src={searchIcon} alt='' width={24} height={24}></img>
                            <div className='search__text'>Tìm kiếm</div>
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
