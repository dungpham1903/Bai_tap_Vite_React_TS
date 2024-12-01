
import trash from '../../assets/images/trash-line.png';
import vongCo from '../../assets/images/vong-co.png';
import nhanDoi from '../../assets/images/nhan-doi.png';
import view from '../../assets/images/eye-line.png';
import add from '../../assets/images/cart-line.png';
import p1 from '../../assets/images/dayChuyen1.png';
import p2 from '../../assets/images/dayChuyen2.png';
import p3 from '../../assets/images/dayChuyen3.png';
import p4 from '../../assets/images/dayChuyen4.png';
import SwiperSlideCards from "../../components/swipers/product/SwiperSlideCards";
import { useGallery } from '../../contexts/GalleryContext';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const Cart = () => {
    const items = Array(4).fill(null);
    const images = [p1, p2, p3, p4];
    const { cartItems, removeFromCart, updateItemQuantity, handleCheckout, clearCart } = useGallery();
    const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
    const navigate = useNavigate();

    const cartItemCount = cartItems.length;

    const totalItemsInCart = cartItems.reduce((total, item) => {
        if (selectedItems.has(item.id)) {
            return total + (item.quantity || 0);
        }
        return total;
    }, 0);
    const totalPriceInCart = cartItems.reduce((total, item) => {
        if (selectedItems.has(item.id)) {
            return total + (item.price * (item.quantity || 0));
        }
        return total
    }, 0);
    const handleCheckBoxItem = (id: number) => {
        const newSelectedItems = new Set(selectedItems);
        if (newSelectedItems.has(id)) {
            newSelectedItems.delete(id); // Nếu đã chọn, bỏ chọn
        } else {
            newSelectedItems.add(id); // Nếu chưa chọn, thêm vào
        }
        setSelectedItems(newSelectedItems);
    }
    const shipCost = 0;
    const totalPayment = totalPriceInCart + shipCost

    const selectedProducts = cartItems.filter(item => selectedItems.has(item.id));
    const handleCheckoutClick = () => {
        if (selectedProducts.length > 0) {
            handleCheckout(selectedProducts); // Cập nhật danh sách sản phẩm đã chọn
            navigate('/checkout'); // Chuyển hướng đến trang thanh toán
        } else {
            alert('Vui lòng chọn ít nhất một sản phẩm!');
        }
    };


    return (<>
        <section className='banner bg-bannerProduct bg-cover relative w-screen z-0'>
            <div className="absolute inset-0 bg-primary-1 opacity-80"></div>
            <div className='w-full px-4 mx-auto'>
                <div className='w-full h-80 flex justify-center flex-wrap'>
                    <div className='flex flex-col items-center justify-center text-center relative w-full'>
                        <div className="flex flex-col justify-between">
                            <span className="text-heading-2 text-white font-semibold mb-4">Sản phẩm</span>
                            <div className="flex text-body-1 font-normal text-white ">
                                <span className="opacity-80">Trang chủ</span>
                                <span className="flex items-center mx-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 7 12" fill="none">
                                        <path d="M6.1776 5.619L1.38085 0.823847C1.17037 0.613901 0.829363 0.613901 0.618353 0.823847C0.407875 1.03379 0.407875 1.3748 0.618353 1.58475L5.03463 5.99943L0.618884 10.4141C0.408406 10.6241 0.408406 10.9651 0.618884 11.1755C0.829362 11.3855 1.1709 11.3855 1.38138 11.1755L6.17813 6.38044C6.38537 6.17266 6.38537 5.82629 6.1776 5.619Z" fill="white" />
                                    </svg>
                                </span>
                                <span>Sản phẩm</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="my-16">
            <div className="'w-full px-4 mx-auto lg:max-w-5xl xl:max-w-7xl">
                <div className='flex flex-col'>
                    <div className="flex items-center gap-2 text-header-1 font-normal text-neutral-1-900 mb-[34px]">
                        <span>GIỎ HÀNG CỦA BẠN </span><br className="min-[375px]:hidden" />
                        <div className="text-title-1">
                            &#40;<span>{cartItemCount || 0}</span> sản phẩm&#41;
                        </div>
                    </div>
                    <div className="grid grid-cols-1 pb-6 gap-10 xl:grid-cols-3">
                        <div className="col-span-1 flex flex-col gap-6 xl:col-span-2">
                            <div className="flex justify-between bg-neutral-3-50 text-body-1 font-normal p-4">
                                <div className="flex items-center gap-4">
                                    <label className="block w-[18px] h-[18px]"><input className="w-full h-full rounded border border-neutral-2-200 border-solid " type="checkbox"></input></label>
                                    <span className="text-neutral-1-900">CHI TIẾT SẢN PHẨM</span>
                                </div>
                                <button
                                    className="text-primary-1 "
                                    onClick={clearCart}
                                >Xoá giỏ hàng</button>
                            </div>
                            <div className="flex flex-col gap-6 px-4">
                                {cartItems.length > 0 &&
                                    cartItems.map((item) => (
                                        <div key={item.id} className="flex flex-col gap-4 md:w-[486px] border-b border-neutral-1-50 pb-4">
                                            <div className="flex gap-6 items-center justify-between">
                                                <div className='flex items-center gap-6'>
                                                    <label className="">
                                                        <input
                                                            type="checkbox"
                                                            className=" w-[18px] h-[18px] rounded border-none focus:bg-white "
                                                            checked={selectedItems.has(item.id)}
                                                            onChange={() => handleCheckBoxItem(item.id)}>
                                                        </input>
                                                    </label>
                                                    <img className="w-28 h-28 object-contain bg-neutral-3-50" src={item.image}></img>
                                                </div>
                                                <div className="flex flex-col gap-4 h-full justify-between md:w-[320px]">
                                                    <Link to={`/product-detail/${item.id}`}>
                                                        <span className="text-body-1 text-neutral-1-900 font-normal ">{item.name}</span>
                                                    </Link>
                                                    <div className="flex gap-2 justify-between">
                                                        <span className="text-body-1 text-neutral-1-600 font-normal">Giá:</span>
                                                        <span className="text-body-1 text-secondary-1 font-semibold">{item.price.toLocaleString()}</span>
                                                    </div>
                                                    <div className='flex justify-between'>
                                                        <div className="flex justify-between items-center">
                                                            <select className="text-body-1 text-neutral-1-600 border rounded-xl py-2 px-4 " id="" name="">
                                                                <option value="">1</option>
                                                                <option value="">2</option>
                                                                <option value="">3</option>
                                                            </select>
                                                        </div>
                                                        <div className="flex justify-between items-center border rounded-xl p-2 ">
                                                            <div className="flex items-center">
                                                                <button className=""
                                                                    onClick={() => updateItemQuantity(item.id, (item.quantity || 1) - 1)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="4" viewBox="0 0 21 4" fill="none">
                                                                        <path d="M20.4722 2.36144C20.4722 3.15918 19.8255 3.80588 19.0278 3.80588H1.69444C0.896699 3.80588 0.25 3.15918 0.25 2.36144C0.25 1.56369 0.8967 0.916992 1.69444 0.916992H19.0278C19.8255 0.916992 20.4722 1.56369 20.4722 2.36144Z" fill="#003468" />
                                                                    </svg>
                                                                </button>
                                                                <input
                                                                    type="text"
                                                                    id="counter-value"
                                                                    value={item.quantity}
                                                                    onChange={(e) => updateItemQuantity(item.id, Number(e.target.value))}
                                                                    className="w-[30px] h-[30px] text-body-1 text-neutral-1-600  text-center mx-3" />
                                                                <button className=""
                                                                    onClick={() => updateItemQuantity(item.id, (item.quantity || 1) + 1)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 21" fill="none">
                                                                        <path d="M19.0273 11.8056H11.8051V19.0278C11.8051 19.4109 11.6529 19.7783 11.382 20.0492C11.1111 20.32 10.7437 20.4722 10.3606 20.4722C9.97753 20.4722 9.61013 20.32 9.33925 20.0492C9.06836 19.7783 8.91618 19.4109 8.91618 19.0278V11.8056H1.69396C1.31087 11.8056 0.943466 11.6534 0.67258 11.3825C0.401694 11.1116 0.249512 10.7442 0.249512 10.3611C0.249512 9.97802 0.401694 9.61062 0.67258 9.33974C0.943466 9.06885 1.31087 8.91667 1.69396 8.91667H8.91618V1.69444C8.91618 1.31135 9.06836 0.943954 9.33925 0.673068C9.61013 0.402182 9.97753 0.25 10.3606 0.25C10.7437 0.25 11.1111 0.402182 11.382 0.673068C11.6529 0.943954 11.8051 1.31135 11.8051 1.69444V8.91667H19.0273C19.4104 8.91667 19.7778 9.06885 20.0487 9.33974C20.3196 9.61062 20.4717 9.97802 20.4717 10.3611C20.4717 10.7442 20.3196 11.1116 20.0487 11.3825C19.7778 11.6534 19.4104 11.8056 19.0273 11.8056Z" fill="#003468" />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button
                                                        className="flex gap-2"
                                                        onClick={() => removeFromCart(item.id)}>
                                                        <img className="w-5 h-5 object-cover" src={trash}></img>
                                                        <span className="text-body-2 text-neutral-1-600 font-normal">Xoá</span>
                                                    </button>
                                                </div>
                                            </div>
                                            {/* <div className="flex flex-col gap-4">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-body-2 text-neutral-1-600 font-normal">Size nhẫn:</span>
                                                    <select className="text-body-1 text-neutral-1-600 border rounded-sm py-2 px-4 " id="" name="">
                                                        <option value="">1</option>
                                                        <option value="">2</option>
                                                        <option value="">3</option>
                                                    </select>
                                                </div>
                                                <div className="flex justify-between items-center ">
                                                    <span className="text-body-2 text-neutral-1-600 font-normal">Số lượng</span>
                                                    <div className="flex items-center">
                                                        <button className="w-[24px] h-[24px]"
                                                            onClick={() => updateItemQuantity(item.id, (item.quantity || 1) - 1)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="4" viewBox="0 0 21 4" fill="none">
                                                                <path d="M20.4722 2.36144C20.4722 3.15918 19.8255 3.80588 19.0278 3.80588H1.69444C0.896699 3.80588 0.25 3.15918 0.25 2.36144C0.25 1.56369 0.8967 0.916992 1.69444 0.916992H19.0278C19.8255 0.916992 20.4722 1.56369 20.4722 2.36144Z" fill="#003468" />
                                                            </svg>
                                                        </button>
                                                        <input
                                                            type="text"
                                                            id="counter-value"
                                                            value={item.quantity}
                                                            onChange={(e) => updateItemQuantity(item.id, Number(e.target.value))}
                                                            className="w-[30px] h-[30px] text-body-1 text-neutral-1-600 border rounded-sm text-center mx-3" />
                                                        <button className="w-[24px] h-[24px]"
                                                            onClick={() => updateItemQuantity(item.id, (item.quantity || 1) + 1)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 21" fill="none">
                                                                <path d="M19.0273 11.8056H11.8051V19.0278C11.8051 19.4109 11.6529 19.7783 11.382 20.0492C11.1111 20.32 10.7437 20.4722 10.3606 20.4722C9.97753 20.4722 9.61013 20.32 9.33925 20.0492C9.06836 19.7783 8.91618 19.4109 8.91618 19.0278V11.8056H1.69396C1.31087 11.8056 0.943466 11.6534 0.67258 11.3825C0.401694 11.1116 0.249512 10.7442 0.249512 10.3611C0.249512 9.97802 0.401694 9.61062 0.67258 9.33974C0.943466 9.06885 1.31087 8.91667 1.69396 8.91667H8.91618V1.69444C8.91618 1.31135 9.06836 0.943954 9.33925 0.673068C9.61013 0.402182 9.97753 0.25 10.3606 0.25C10.7437 0.25 11.1111 0.402182 11.382 0.673068C11.6529 0.943954 11.8051 1.31135 11.8051 1.69444V8.91667H19.0273C19.4104 8.91667 19.7778 9.06885 20.0487 9.33974C20.3196 9.61062 20.4717 9.97802 20.4717 10.3611C20.4717 10.7442 20.3196 11.1116 20.0487 11.3825C19.7778 11.6534 19.4104 11.8056 19.0273 11.8056Z" fill="#003468" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <button
                                                    className="flex gap-2"
                                                    onClick={() => removeFromCart(item.id)}>
                                                    <img className="w-5 h-5 object-cover" src={trash}></img>
                                                    <span className="text-body-2 text-neutral-1-600 font-normal">Xoá</span>
                                                </button>
                                            </div> */}
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="col-span-1 flex flex-col ">
                            <div className='border-neutral-2-50 border flex flex-col'>
                                <span className="text-body-1 text-neutral-1-900 font-normal p-4 bg-neutral-2-50 w-full">TỔNG QUAN ĐƠN HÀNG</span>
                                <div className="flex flex-col p-4 text-body-1 font-normal text-neutral-1-600 gap-6">
                                    <div className="flex justify-between">
                                        <span >Tổng số mặt hàng</span>
                                        <span>{totalItemsInCart}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Tạm tính</span>
                                        <span>{totalPriceInCart.toLocaleString()} đ</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Chiết khấu/Giảm giá</span>
                                        <span className="text-error-400 font-semibold">0%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span >Tổng cộng đơn hàng</span>
                                        <span>{totalPriceInCart.toLocaleString()} đ</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Phí giao hàng</span>
                                        <span>{shipCost.toLocaleString()} đ</span>
                                    </div>

                                    <div className="flex flex-col gap-6 border-t border-neutral-2-50 pt-6">
                                        <div className="flex justify-between text-header-2 text-primary-1 font-medium">
                                            <span>TỔNG TIỀN</span>
                                            <span>{totalPayment.toLocaleString()} đ</span>
                                        </div>
                                        <button
                                            className="bg-primary-1 text-body-2 font-normal text-white h-12"
                                            onClick={handleCheckoutClick}
                                        >THANH TOÁN
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex flex-col justify-between gap-6 my-20 lg:flex-row">
                        <div className="w-full h-[200px] bg-neutral-3-50 flex justify-between relative">
                            <img className='object-contain w-2/5 h-full' src={vongCo}></img>
                            <div className='flex flex-col justify-evenly items-end pr-4 '>
                                <span className='text-caption-2 font-normal text-neutral-1-600 text-right'>Vòng cổ</span>
                                <span className='text-heading-4 font-medium text-neutral-1-900 text-right'>Bộ sưu tập vòng cổ</span>
                                <div className='flex items-center w-28 justify-between text-right pl-3'>
                                    <span className='text-body-2 text-primary-1 font-normal text-center'>XEM THÊM</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clipPath="url(#clip0_5178_2903)">
                                            <path d="M5 12H19" stroke="#003468" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15 16L19 12" stroke="#003468" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15 8L19 12" stroke="#003468" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_5178_2903">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-[200px] bg-neutral-3-50 flex justify-between">
                            <div className='flex flex-col justify-evenly pl-4'>
                                <span className='text-caption-2 font-normal text-neutral-1-600'>Nhẫn</span>
                                <span className='text-heading-4 font-medium text-neutral-1-900'>Bộ sưu tập nhẫn</span>
                                <div className='flex items-center w-28 justify-between'>
                                    <span className='text-body-2 text-primary-1 font-normal text-center'>XEM THÊM</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clipPath="url(#clip0_5178_2903)">
                                            <path d="M5 12H19" stroke="#003468" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15 16L19 12" stroke="#003468" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M15 8L19 12" stroke="#003468" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_5178_2903">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                            <img className='object-contain w-2/5 h-full' src={nhanDoi}></img>
                        </div>
                    </div>
                    <div className="flex items-center justify-between text-heading-3 font-medium text-neutral-1-900 mb-10">
                        <span>Sản phẩm mới </span>
                        <div className="flex gap-4">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                                </svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 md:hidden">
                        <SwiperSlideCards></SwiperSlideCards>
                    </div>
                    <div className="hidden grid-cols-1 w-full gap-6 md:grid md:grid-cols-2 xl:grid-cols-4 ">
                        {items.map((_, index) => (
                            <div key={index} className="relative flex flex-col items-center border border-neutral-2-200 ">
                                <img className="w-[265px] h-[237px] object-contain" src={images[index]} alt="Product" />
                                <div className="p-4 flex flex-col gap-6">
                                    <div className="flex flex-col text-center gap-2">
                                        <span className="text-primary-1 text-header-1 font-normal">
                                            Nhẫn cưới Kim cương, Chung Đôi Vàng trắng
                                        </span>
                                        <span className="text-secondary-1 font-normal text-header-1">15.000.000 đ</span>
                                        <span>
                                            <span className="text-[16px] leading-[18.75px] line-through text-neutral-1-600 italic font-light">22.000.000đ</span>
                                            <span className="text-[16px] leading-[18.75px] text-neutral-1-600 italic font-normal">(-15%)</span>
                                        </span>
                                    </div>
                                    <div className="flex justify-between">
                                        <div className="flex items-center text-caption-2 font-poppins font-normal text-primary-1 gap-2">
                                            <img src={view} alt="View Icon" />
                                            <a href="#">Xem</a>
                                        </div>
                                        <div className="flex items-center text-caption-2 font-poppins font-normal text-primary-1 gap-2">
                                            <a href="#">Thêm</a>
                                            <img src={add} alt="Add Icon" />
                                        </div>
                                    </div>
                                    <div className='absolute right-3 top-3'>
                                        <div className='w-[58px] h-[26px] bg-success-400 text-caption-2 font-normal font-poppins text-white text-center p-1'>
                                            <span>New</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    </>
    )
}