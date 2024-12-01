import './header.css'
import logo from '../../assets/images/Logo.png';
import NavbarMenu from '../navbar/NavbarMenu';
import { menuItems } from '../../data/menuitems';
import MenuItems from '../dropdown/MenuItems';
import { Link } from 'react-router-dom';
import ModalCart from '../modals/CartModal';
import { useSearch } from '../../contexts/SearchContext';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';


export const Header = () => {
    const depthLevel = 0;

    const { searchKeyword, setSearchKeyword } = useSearch();
    const navigate = useNavigate();

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchKeyword(e.target.value);

    };
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Ngăn chặn việc reload trang
        navigate(`/product?search=${encodeURIComponent(searchKeyword)}`);
        setSearchKeyword('');
    };
    return (
        <>
            <div className='bg-white p-3 sticky top-0 z-50  w-full border border-neutral-100'
            >
                <div className='w-full px-4 mx-auto lg:max-w-5xl xl:max-w-7xl'>
                    <div className='flex items-center justify-between'>
                        <NavbarMenu></NavbarMenu>
                        <div className=''>
                            <Link to="/#">
                                <img src={logo} alt='' width={184} height={60}></img>
                            </Link>
                        </div>
                        <ul className='show-on-desktop list-none xl:gap-6'>
                            {menuItems.map((menu, index) => (
                                <MenuItems items={menu} key={index} depthLevel={depthLevel}></MenuItems>
                            ))}
                        </ul>
                        <div className=' flex relative items-center'>
                            <form
                                className='lg:h-[42px] '
                                onSubmit={handleSubmit}>
                                <div
                                    className='h-full rounded-full border-solid border-neutral-2-200 border pr-4
                                items-center justify-start pl-4 gap-2 show-on-desktop'>
                                    <button
                                        className='w-6 h-6'
                                        type='submit'>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75ZM2.25 10C2.25 5.71979 5.71979 2.25 10 2.25C14.2802 2.25 17.75 5.71979 17.75 10C17.75 14.2802 14.2802 17.75 10 17.75C5.71979 17.75 2.25 14.2802 2.25 10Z" fill="#919EAB" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M14.4697 14.4697C14.7626 14.1768 15.2374 14.1768 15.5303 14.4697L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L14.4697 15.5303C14.1768 15.2374 14.1768 14.7626 14.4697 14.4697Z" fill="#919EAB" />
                                        </svg>
                                    </button>
                                    <label>
                                        <input
                                            className="outline-none"
                                            type="text"
                                            placeholder='Tìm kiếm'
                                            onChange={handleSearchChange}
                                            value={searchKeyword}
                                        ></input>
                                    </label>
                                </div>
                                <span className='hide-on-desktop '>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75ZM2.25 10C2.25 5.71979 5.71979 2.25 10 2.25C14.2802 2.25 17.75 5.71979 17.75 10C17.75 14.2802 14.2802 17.75 10 17.75C5.71979 17.75 2.25 14.2802 2.25 10Z" fill="#161C24" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M14.4697 14.4697C14.7626 14.1768 15.2374 14.1768 15.5303 14.4697L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L14.4697 15.5303C14.1768 15.2374 14.1768 14.7626 14.4697 14.4697Z" fill="#161C24" />
                                    </svg>
                                </span>
                            </form>
                            <div className='w-[1px] h-4 bg-neutral-2-200 ml-4'></div>
                            <ModalCart></ModalCart>
                        </div>
                    </div>
                </div>
            </div>
        </>)
}
