
import searchIcon from '../images/search-line.png';
import cartIcon from '../images/Badge.png';
import logo from '../images/Logo.png';
import menuLine from '../images/menu-line.png';
export const Header = () => {
    return (<>
        <header className='header'>
            <div className='grid-header'>
                <nav className='container__header'>
                    <div className='header__menu-line hide-on-desktop'>
                        <img src={menuLine} alt='' width={27} height={27}></img>
                    </div>
                    <div className='header__logo'>
                        <img src={logo} alt='' width={184} height={60}></img>
                    </div>
                    <ul className='header__navbar-list show-on-desktop'>
                        <li className='header__navbar-item' style={{ color: '#003468', fontWeight: 'bold', }}>Trang chủ</li>
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
                </nav>
            </div>
        </header>
    </>)
}
