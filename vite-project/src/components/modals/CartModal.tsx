import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useGallery } from '../../contexts/GalleryContext';

const ModalCart = () => {
    const { cartItems } = useGallery();
    const cartItemCount = cartItems.length;
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
        <div>
            <li className="relative flex items-center text-header-2 text-neutral-1-500 font-medium p-3" ref={ref}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <button
                    className="flex items-center cursor-pointer justify-between w-full"
                    type="button"
                    aria-haspopup="menu"
                    aria-expanded={dropdown ? "true" : "false"}
                    onClick={() => setDropdown((prev) => !prev)}
                >
                    <Link to="/cart">
                        <span className='w-6 h-6 relative'>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_5374_3284)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M6 17.75C5.30964 17.75 4.75 18.3096 4.75 19C4.75 19.6904 5.30964 20.25 6 20.25C6.69036 20.25 7.25 19.6904 7.25 19C7.25 18.3096 6.69036 17.75 6 17.75ZM3.25 19C3.25 17.4812 4.48122 16.25 6 16.25C7.51878 16.25 8.75 17.4812 8.75 19C8.75 20.5188 7.51878 21.75 6 21.75C4.48122 21.75 3.25 20.5188 3.25 19Z" fill="#161C24" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M17 17.75C16.3096 17.75 15.75 18.3096 15.75 19C15.75 19.6904 16.3096 20.25 17 20.25C17.6904 20.25 18.25 19.6904 18.25 19C18.25 18.3096 17.6904 17.75 17 17.75ZM14.25 19C14.25 17.4812 15.4812 16.25 17 16.25C18.5188 16.25 19.75 17.4812 19.75 19C19.75 20.5188 18.5188 21.75 17 21.75C15.4812 21.75 14.25 20.5188 14.25 19Z" fill="#161C24" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M3.25 3C3.25 2.58579 3.58579 2.25 4 2.25H6C6.41421 2.25 6.75 2.58579 6.75 3V16.25H17C17.4142 16.25 17.75 16.5858 17.75 17C17.75 17.4142 17.4142 17.75 17 17.75H6C5.58579 17.75 5.25 17.4142 5.25 17V3.75H4C3.58579 3.75 3.25 3.41421 3.25 3Z" fill="#161C24" />
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.25194 4.9466C5.28145 4.53344 5.64031 4.22243 6.05347 4.25194L20.0535 5.25194C20.261 5.26676 20.4531 5.36717 20.5838 5.52914C20.7144 5.69111 20.7719 5.90009 20.7425 6.1061L19.7425 13.1061C19.6897 13.4756 19.3733 13.75 19 13.75H6.00003C5.58582 13.75 5.25003 13.4142 5.25003 13C5.25003 12.5858 5.58582 12.25 6.00003 12.25H18.3496L19.1437 6.69078L5.9466 5.74813C5.53344 5.71861 5.22243 5.35976 5.25194 4.9466Z" fill="#161C24" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_5374_3284">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            {cartItemCount > 0 && (
                                <span className='w-5 h-5 rounded-full flex items-center justify-center text-white bg-error-400 text-caption-2 font-normal absolute right-0 top-0 translate-x-2/4 -translate-y-2/4'>
                                    {cartItemCount}
                                </span>
                            )}
                        </span>
                    </Link>
                </button>
                <ul className={`absolute right-0 top-12 bg-white  flex-col shadow-custom ${dropdown ? "flex" : "hidden"}`}>
                    <div className='relative w-[350px]'>
                        <div className='absolute right-2 bg-white rotate-45 w-6 h-6 -translate-y-2 z-10 '></div>
                        <div className='p-3 text-body-2 border-b border-neutral-1-50'>
                            <span className=''>Sản phẩm được thêm gần đây</span>
                        </div>
                    </div>
                    {cartItems.length > 0 &&
                        cartItems.map((item) => (
                            <div key={item.id} className="flex p-3 ">
                                <div className="flex gap-4 items-center justify-between">
                                    <div className='flex items-center gap-6'>
                                        <img className="w-20 h-20 object-contain bg-neutral-3-50" src={item.image}></img>
                                    </div>
                                    <div className="flex flex-col gap-2 h-full justify-between md:w-[300px]">
                                        <Link to={`/product-detail/${item.id}`}>
                                            <span className="text-body-2 text-neutral-1-900 font-normal">{item.name}</span>
                                        </Link>
                                        <div className="flex gap-2 ">
                                            <span className="text-body-2 text-neutral-1-600 font-normal">Giá:</span>
                                            <span className="text-body-2 text-secondary-1 font-semibold">{item.price.toLocaleString()}</span>
                                        </div>
                                        <div className='rounded-md flex items-center justify-center w-6'>
                                            <span className='text-primary-1 text-body-2 '>x{item.quantity}</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                    <div className='p-3 text-body-2  flex justify-between items-center border-t border-neutral-1-50'>
                        <span className='text-primary-1'>Hiện có <span>{cartItemCount || 0}</span> sản phẩm </span>
                        <Link to={'/cart'}
                            className='bg-primary-1 rounded-md p-2 text-white'>Xem giỏ hàng
                        </Link>
                    </div>
                </ul>


            </li>
        </div>
    );
};

export default ModalCart;