import r1 from '../../assets/images/r1.png';
import r2 from '../../assets/images/r2.png';
import r3 from '../../assets/images/r3.png';
import r4 from '../../assets/images/r4.png';
import view from '../../assets/images/eye-line.png';
import add from '../../assets/images/cart-line.png';


import SwiperSlideCards from '../../components/swipers/product/SwiperSlideCards';
import { useRef, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import { useGallery } from '../../contexts/GalleryContext';
import ModalPopup from '../../components/modals/Modal';
import { FaCircleCheck } from 'react-icons/fa6';

const items = Array(4).fill(null);
const images = [r1, r2, r3, r4,];
export const ProductDetails = () => {
    const btnRef = useRef<HTMLSpanElement>(null);
    const arrowRef = useRef<HTMLSpanElement>(null);

    const { products, addToCart } = useGallery();

    const { slug } = useParams<{ slug: string }>();
    const product = slug ? products.find((item) => item.slug === slug) : null;

    const [quantity, setQuantity] = useState<number>(1);
    const [openSuccess, setOpenSuccess] = useState(false);
    if (!product) {
        return <p>Không tìm thấy sản phẩm</p>;
    }
    const handleIncrease = () => setQuantity((prev) => prev + 1);
    const handleDecrease = () => setQuantity((prev) => Math.max(prev - 1, 1));
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = Number(e.target.value);
        if (!isNaN(newQuantity) && newQuantity > 0) {
            setQuantity(newQuantity);
        }
    };
    const handleAddToCart = () => {
        addToCart(product, quantity)
    }

    const toggleDropdown = () => {

        if (btnRef.current && arrowRef.current) {
            const isCurrentlyHidden = btnRef.current.classList.contains('hidden');

            btnRef.current?.classList.toggle('hidden', !isCurrentlyHidden);
            btnRef.current?.classList.toggle('flex', isCurrentlyHidden);
            arrowRef.current.classList.toggle('rotate-180', isCurrentlyHidden);
        }
    };

    return (<>
        <div>
            <section className='banner bg-bannerProduct bg-cover relative w-screen  z-0'>
                <div className="absolute inset-0 bg-primary-1 opacity-80"></div>
                <div className='w-full px-4 mx-auto'>
                    <div className='w-full h-80 flex justify-center flex-wrap'>
                        <div className='flex flex-col items-center justify-center text-center relative w-full'>
                            <div className="flex flex-col justify-between">
                                <span className="text-heading-2 text-white font-semibold mb-4">Sản phẩm</span>
                                <div className="flex flex-wrap items-center justify-center text-body-1 font-normal text-white ">
                                    <Link to="/product" className="opacity-80 hover:opacity-100">Trang chủ</Link>
                                    <span className="flex items-center mx-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 7 12" fill="none">
                                            <path d="M6.1776 5.619L1.38085 0.823847C1.17037 0.613901 0.829363 0.613901 0.618353 0.823847C0.407875 1.03379 0.407875 1.3748 0.618353 1.58475L5.03463 5.99943L0.618884 10.4141C0.408406 10.6241 0.408406 10.9651 0.618884 11.1755C0.829362 11.3855 1.1709 11.3855 1.38138 11.1755L6.17813 6.38044C6.38537 6.17266 6.38537 5.82629 6.1776 5.619Z" fill="white" />
                                        </svg>
                                    </span>
                                    <Link to="/product" className="opacity-80 hover:opacity-100">Sản phẩm</Link>
                                    <span className="flex items-center mx-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 7 12" fill="none">
                                            <path d="M6.1776 5.619L1.38085 0.823847C1.17037 0.613901 0.829363 0.613901 0.618353 0.823847C0.407875 1.03379 0.407875 1.3748 0.618353 1.58475L5.03463 5.99943L0.618884 10.4141C0.408406 10.6241 0.408406 10.9651 0.618884 11.1755C0.829362 11.3855 1.1709 11.3855 1.38138 11.1755L6.17813 6.38044C6.38537 6.17266 6.38537 5.82629 6.1776 5.619Z" fill="white" />
                                        </svg>
                                    </span>
                                    <span>{product?.name}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="my-16">
                <div className="'w-full px-4 mx-auto lg:max-w-5xl xl:max-w-7xl">
                    <div className='flex flex-col'>
                        <div className='flex flex-col gap-10 mb-10'>
                            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                                <div className='h-[460px] bg-neutral-3-50'>
                                    <img className="w-full h-full object-contain" src={product.image} alt="" />
                                </div>
                                <div className="flex flex-col gap-6">
                                    <span className='text-heading-3 text-neutral-1-900 font-medium'>{product.name}</span>
                                    <div className='flex relative gap-2 items-center'>
                                        <div className='w-6 h-6'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 17" fill="none">
                                                <path d="M4.29981 16.1246C3.91648 16.4246 3.52481 16.4329 3.12481 16.1496C2.72481 15.8663 2.59148 15.4913 2.72481 15.0246L4.14981 10.3996L0.524809 7.82461C0.124809 7.54128 0.00414245 7.16628 0.162809 6.69961C0.320809 6.23294 0.641476 5.99961 1.12481 5.99961H5.59981L7.04981 1.19961C7.13314 0.966276 7.26248 0.786943 7.43781 0.66161C7.61248 0.536943 7.79981 0.474609 7.99981 0.474609C8.19981 0.474609 8.38714 0.536943 8.56181 0.66161C8.73714 0.786943 8.86648 0.966276 8.94981 1.19961L10.3998 5.99961H14.8748C15.3581 5.99961 15.6791 6.23294 15.8378 6.69961C15.9958 7.16628 15.8748 7.54128 15.4748 7.82461L11.8498 10.3996L13.2748 15.0246C13.4081 15.4913 13.2748 15.8663 12.8748 16.1496C12.4748 16.4329 12.0831 16.4246 11.6998 16.1246L7.99981 13.2996L4.29981 16.1246Z" fill="#F0A328" />
                                            </svg>
                                        </div>
                                        <div className='w-6 h-6'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 17" fill="none">
                                                <path d="M4.29981 16.1246C3.91648 16.4246 3.52481 16.4329 3.12481 16.1496C2.72481 15.8663 2.59148 15.4913 2.72481 15.0246L4.14981 10.3996L0.524809 7.82461C0.124809 7.54128 0.00414245 7.16628 0.162809 6.69961C0.320809 6.23294 0.641476 5.99961 1.12481 5.99961H5.59981L7.04981 1.19961C7.13314 0.966276 7.26248 0.786943 7.43781 0.66161C7.61248 0.536943 7.79981 0.474609 7.99981 0.474609C8.19981 0.474609 8.38714 0.536943 8.56181 0.66161C8.73714 0.786943 8.86648 0.966276 8.94981 1.19961L10.3998 5.99961H14.8748C15.3581 5.99961 15.6791 6.23294 15.8378 6.69961C15.9958 7.16628 15.8748 7.54128 15.4748 7.82461L11.8498 10.3996L13.2748 15.0246C13.4081 15.4913 13.2748 15.8663 12.8748 16.1496C12.4748 16.4329 12.0831 16.4246 11.6998 16.1246L7.99981 13.2996L4.29981 16.1246Z" fill="#F0A328" />
                                            </svg>
                                        </div>
                                        <div className='w-6 h-6'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 17" fill="none">
                                                <path d="M4.29981 16.1246C3.91648 16.4246 3.52481 16.4329 3.12481 16.1496C2.72481 15.8663 2.59148 15.4913 2.72481 15.0246L4.14981 10.3996L0.524809 7.82461C0.124809 7.54128 0.00414245 7.16628 0.162809 6.69961C0.320809 6.23294 0.641476 5.99961 1.12481 5.99961H5.59981L7.04981 1.19961C7.13314 0.966276 7.26248 0.786943 7.43781 0.66161C7.61248 0.536943 7.79981 0.474609 7.99981 0.474609C8.19981 0.474609 8.38714 0.536943 8.56181 0.66161C8.73714 0.786943 8.86648 0.966276 8.94981 1.19961L10.3998 5.99961H14.8748C15.3581 5.99961 15.6791 6.23294 15.8378 6.69961C15.9958 7.16628 15.8748 7.54128 15.4748 7.82461L11.8498 10.3996L13.2748 15.0246C13.4081 15.4913 13.2748 15.8663 12.8748 16.1496C12.4748 16.4329 12.0831 16.4246 11.6998 16.1246L7.99981 13.2996L4.29981 16.1246Z" fill="#F0A328" />
                                            </svg>
                                        </div>
                                        <div className='w-6 h-6'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 17" fill="none">
                                                <path d="M4.29981 16.1246C3.91648 16.4246 3.52481 16.4329 3.12481 16.1496C2.72481 15.8663 2.59148 15.4913 2.72481 15.0246L4.14981 10.3996L0.524809 7.82461C0.124809 7.54128 0.00414245 7.16628 0.162809 6.69961C0.320809 6.23294 0.641476 5.99961 1.12481 5.99961H5.59981L7.04981 1.19961C7.13314 0.966276 7.26248 0.786943 7.43781 0.66161C7.61248 0.536943 7.79981 0.474609 7.99981 0.474609C8.19981 0.474609 8.38714 0.536943 8.56181 0.66161C8.73714 0.786943 8.86648 0.966276 8.94981 1.19961L10.3998 5.99961H14.8748C15.3581 5.99961 15.6791 6.23294 15.8378 6.69961C15.9958 7.16628 15.8748 7.54128 15.4748 7.82461L11.8498 10.3996L13.2748 15.0246C13.4081 15.4913 13.2748 15.8663 12.8748 16.1496C12.4748 16.4329 12.0831 16.4246 11.6998 16.1246L7.99981 13.2996L4.29981 16.1246Z" fill="#F0A328" />
                                            </svg>
                                        </div>
                                        <div className='w-6 h-6'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M9.92316 6.07583L8.00023 1.57501L6.07696 6.07584L1.2101 6.51768L4.88822 9.74342L3.80447 14.5173L8.00018 12.0097L12.1951 14.5178L11.1112 9.74336L14.7899 6.51773L9.92316 6.07583ZM2.7519 14.6368L3.78122 10.1027L0.290533 7.04131C0.0338123 6.8173 -0.0634802 6.46195 0.0418692 6.13797C0.147219 5.81398 0.433847 5.58461 0.773211 5.55323L5.39198 5.13391L7.21808 0.860487C7.35273 0.546514 7.65937 0.34375 8.00008 0.34375C8.34079 0.34375 8.64744 0.546514 8.78208 0.859754L10.6082 5.13391L15.2262 5.55323C15.5662 5.58387 15.8536 5.81398 15.9583 6.13797C16.0636 6.46256 15.9656 6.8173 15.7089 7.04192L12.2182 10.1027L13.2475 14.6368C13.3229 14.9695 13.1936 15.3142 12.9168 15.5148C12.6408 15.7149 12.2735 15.7309 11.9821 15.5556L8.00008 13.1748L4.01658 15.5556C3.88193 15.6361 3.73191 15.6769 3.58066 15.6769C3.40524 15.6769 3.23128 15.6222 3.0826 15.5148C2.80598 15.3148 2.67658 14.9702 2.7519 14.6368Z" fill="#161C24" />
                                            </svg>
                                        </div>
                                        <span className='text-body-2 text-neutral-1-900 font-normal'>4 đánh giá</span>
                                    </div>
                                    <span className='text-heading-2 text-secondary-1 font-semibold'>{product.price.toLocaleString()}</span>
                                    <span className='text-body-1 text-neutral-1-600 font-normal'>Chất liệu: <span className='text-primary-1'>Bạc</span></span>
                                    <div className='flex flex-col items-start gap-6'>
                                        <div className='flex items-center gap-5'>
                                            <span className='text-body-1 text-neutral-1-600 font-normal'>Kích cỡ:</span>
                                            <select className="text-body-1 text-neutral-1-600 border rounded-sm py-2 px-4 " id="" name="">
                                                <option value="">1</option>
                                                <option value="">2</option>
                                                <option value="">3</option>
                                            </select>
                                            <a className='text-body-2 text-primary-1 font-normal'>Hướng dẫn chọn kích cỡ</a>
                                        </div>
                                        <div className='flex items-center gap-5'>
                                            <span className='text-body-1 text-neutral-1-600 font-normal'>Số lượng:</span>
                                            <div className="flex items-center">
                                                <button className="w-[24px] h-[24px]"
                                                    onClick={handleDecrease}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="4" viewBox="0 0 21 4" fill="none">
                                                        <path d="M20.4722 2.36144C20.4722 3.15918 19.8255 3.80588 19.0278 3.80588H1.69444C0.896699 3.80588 0.25 3.15918 0.25 2.36144C0.25 1.56369 0.8967 0.916992 1.69444 0.916992H19.0278C19.8255 0.916992 20.4722 1.56369 20.4722 2.36144Z" fill="#003468" />
                                                    </svg>
                                                </button>
                                                <input
                                                    type="text"
                                                    id="counter-value"
                                                    value={quantity}
                                                    onChange={handleChange}
                                                    className="w-[30px] h-[30px] text-body-1 text-neutral-1-600 border rounded-sm text-center mx-3" />
                                                <button className="w-[24px] h-[24px]"
                                                    onClick={handleIncrease}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 21" fill="none">
                                                        <path d="M19.0273 11.8056H11.8051V19.0278C11.8051 19.4109 11.6529 19.7783 11.382 20.0492C11.1111 20.32 10.7437 20.4722 10.3606 20.4722C9.97753 20.4722 9.61013 20.32 9.33925 20.0492C9.06836 19.7783 8.91618 19.4109 8.91618 19.0278V11.8056H1.69396C1.31087 11.8056 0.943466 11.6534 0.67258 11.3825C0.401694 11.1116 0.249512 10.7442 0.249512 10.3611C0.249512 9.97802 0.401694 9.61062 0.67258 9.33974C0.943466 9.06885 1.31087 8.91667 1.69396 8.91667H8.91618V1.69444C8.91618 1.31135 9.06836 0.943954 9.33925 0.673068C9.61013 0.402182 9.97753 0.25 10.3606 0.25C10.7437 0.25 11.1111 0.402182 11.382 0.673068C11.6529 0.943954 11.8051 1.31135 11.8051 1.69444V8.91667H19.0273C19.4104 8.91667 19.7778 9.06885 20.0487 9.33974C20.3196 9.61062 20.4717 9.97802 20.4717 10.3611C20.4717 10.7442 20.3196 11.1116 20.0487 11.3825C19.7778 11.6534 19.4104 11.8056 19.0273 11.8056Z" fill="#003468" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <span className='text-body-2 text-neutral-1-900 font-normal'>
                                        Nhẫn cưới chính là sự kết nối và sự gắn bó lâu dài của hai người, mong muốn sống trọn đời bên nhau. Khi đã đeo trên tay chiếc nhẫn cưới thì mỗi người phải có trách nhiệm với cuộc sống hôn nhân do đó, nhẫn chính là biểu tượng của sự chung thủy, sắt son và là minh chứng cho tình yêu của đôi lứa.
                                    </span>
                                    <button className=' bg-primary-1 text-body-2 text-white font-normal py-3'
                                        onClick={handleAddToCart}>THÊM VÀO GIỎ HÀNG
                                    </button>
                                    <ModalPopup open={openSuccess} onClose={() => setOpenSuccess(false)}>
                                        <div className='flex flex-col gap-4 xl:w-[500px]'>
                                            <div className="flex flex-col gap-4 p-6 items-center text-center">
                                                <div>
                                                    <FaCircleCheck color="#28A745" size={48} />
                                                </div>
                                                <span className="text-neutral-1-900 font-semibold text-header-1">Sản phẩm đã được thêm vào giỏ hàng</span>
                                                <span className="text-neutral-1-600 font-normal text-body-2">Ấn vào giỏ hàng để thanh toán!</span>
                                                <button className="text-white font-medium text-body-1 p-2 w-full bg-success-400 rounded-lg"
                                                    onClick={() => setOpenSuccess(false)}>Đóng</button>
                                            </div>
                                        </div>
                                    </ModalPopup>

                                </div>
                            </div>
                            <div className="flex flex-col gap-4">
                                <div className='flex flex-col'>
                                    <button className='flex ' onClick={toggleDropdown}>
                                        <span ref={arrowRef} className='mr-4'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path d="M12.7071 15.7251C12.3166 16.1156 11.6834 16.1156 11.2929 15.7251L6 10.4322L7.4 9.03223L12 13.6322L16.6 9.03223L18 10.4322L12.7071 15.7251Z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                        <span className='text-body-2 text-neutral-1-900 font-normal'>Thông tin sản phẩm</span>
                                    </button>
                                    <span ref={btnRef} className='hidden text-body-2 text-neutral-1-600 font-normal pl-10 pt-[10px]'>Thông thường, nhẫn cưới được chế tác bằng chất liệu vàng, ngoài việc mang đến vẻ đẹp và giá trị vật chất, vàng còn là biểu tượng của sự son sắt, thủy chung. Không quá cầu kỳ, nhẫn cưới đến từ thương hiệu PNJ trong BST Hạnh Phúc Vàng sở hữu sự nổi bật nhờ vào điểm nhấn lấp lánh của những viên đá ECZ – Swarovski đính trên nhẫn, tạo nên vẻ đẹp sang trọng và tinh tế.</span>
                                </div>
                                <div className='flex flex-col'>
                                    <button className='flex'>
                                        <span className='mr-4'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path d="M12.7071 15.7251C12.3166 16.1156 11.6834 16.1156 11.2929 15.7251L6 10.4322L7.4 9.03223L12 13.6322L16.6 9.03223L18 10.4322L12.7071 15.7251Z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                        <span className='text-body-2 text-neutral-1-900 font-normal'>Thông tin chi tiết</span>
                                    </button>
                                </div>
                                <div className='flex flex-col'>
                                    <button className='flex'>
                                        <span className='mr-4'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                <path d="M12.7071 15.7251C12.3166 16.1156 11.6834 16.1156 11.2929 15.7251L6 10.4322L7.4 9.03223L12 13.6322L16.6 9.03223L18 10.4322L12.7071 15.7251Z" fill="currentColor"></path>
                                            </svg>
                                        </span>
                                        <span className='text-body-2 text-neutral-1-900 font-normal'>Những câu hỏi thường gặp</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-between text-heading-3 font-medium text-neutral-1-900 mb-10">
                            <span>Sản phẩm cùng bộ</span>
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
        </div>
    </>

    )
}