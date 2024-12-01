
import search from '../../assets/images/search.png';
import quality from '../../assets/images/Qality.png';
import repeat from '../../assets/images/Repeat.png';
import pic1 from '../../assets/images/pic1.png';
import pic2 from '../../assets/images/pic2.png';
import pic3 from '../../assets/images/pic3.png';
import pic4 from '../../assets/images/pic4.png';
import pic5 from '../../assets/images/Rectangle 152.png';
import nhanCuoi from '../../assets/images/nhanCuoi.jfif';
import ellipse from '../../assets/images/Ellipse.png';
import diamond from '../../assets/images/collectionDiamond.png';
import r1 from '../../assets/images/r1.png';
import r2 from '../../assets/images/r2.png';
import r3 from '../../assets/images/r3.png';
import r4 from '../../assets/images/r4.png';
import vongCo from '../../assets/images/vong-co.png';
import nhanDoi from '../../assets/images/nhan-doi.png';
import view from '../../assets/images/eye-line.png';
import add from '../../assets/images/cart-line.png';
import './home.css'

import SwiperCards from '../../components/swipers/card/SwiperCards';
import SwiperBanner from '../../components/swipers/banner/SwiperBanner';

export const Home = () => {
    return (<>
        <div>
            <SwiperBanner></SwiperBanner>
            <div className="mt-16">
                <div className="w-full pr-5 pl-5 mr-auto ml-auto lg:max-w-5xl xl:max-w-7xl ">
                    <div className="flex flex-wrap justify-center gap-10 mb-16">
                        <div className="w-full md:w-[45%] lg:w-[30%] flex flex-col items-center ">
                            <img src={search} className='w-6 h-6'></img>
                            <h1 className='text-center text-header-1 font-medium px-20 pt-2'><span className='text-error-400'>01.</span> Đồ trang sức độc đáo & ý nghĩa</h1>
                            <p className='text-center text-body-2 text-neutral-1-600 pt-4'>Từ những kho báu thủ công đến những món đồ cổ điển đến các biểu tượng di sản</p>
                        </div>
                        <div className="w-full md:w-[45%] lg:w-[30%] flex flex-col items-center">
                            <img src={quality} className='w-6 h-6'></img>
                            <h1 className='text-center text-header-1 font-medium pt-2 '><span className='text-error-400'>02.</span> Chất lượng được kiểm tra chuyên nghiệp</h1>
                            <p className='text-center text-body-2 text-neutral-1-600 pt-4'>Những kim loại quý, bền nhất và đá quý đạt tiêu chuẩn</p>
                        </div>
                        <div className="w-full md:w-[45%] lg:w-[30%] flex flex-col items-center">
                            <img src={repeat} className='w-6 h-6'></img>
                            <h1 className='text-center text-header-1 font-medium px-16 pt-2'><span className='text-error-400'>03.</span> Tuổi đời và sự tái tạo của sản phẩm</h1>
                            <p className='text-center text-body-2 text-neutral-1-600 pt-4'>Được thiết kế bền vững để được làm mới, có thể tái chế hoặc bán lại liên tục</p>
                        </div>

                    </div>
                    <div className="mb-16 flex flex-wrap gap-5 lg:gap-6 justify-between">
                        <div className="flex flex-col w-full md:w-[48%] lg:w-[23%]">
                            <img src={pic4} ></img>
                            <div className='flex items-center mt-4 w-28 justify-between'>
                                <a className='text-body-2 text-primary-1 font-normal text-center'>NHẪN CƯỚI</a>
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
                        <div className="flex flex-col w-full md:w-[48%] lg:w-[23%]">
                            <img src={pic1} ></img>
                            <div className='flex items-center mt-4 w-28 justify-between'>
                                <a className='text-body-2 text-primary-1 font-normal text-center'>NHẪN CƯỚI</a>
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
                        <div className="flex flex-col w-full md:w-[48%] lg:w-[23%]">
                            <img src={pic2} ></img>
                            <div className='flex items-center mt-4 w-28 justify-between'>
                                <a className='text-body-2 text-primary-1 font-normal text-center'>NHẪN CƯỚI</a>
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
                        <div className="flex flex-col w-full md:w-[48%] lg:w-[23%]">
                            <img src={pic3} ></img>
                            <div className='flex items-center mt-4 w-28 justify-between'>
                                <a className='text-body-2 text-primary-1 font-normal text-center'>NHẪN CƯỚI</a>
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
                    <div className="flex flex-col lg:flex-row mb-16 justify-between">
                        <div className="w-full lg:w-[54%] flex flex-col justify-between">
                            <span className='w-full mb-4 font-medium text-neutral-1-900 text-heading-3 gap-10'>Bộ sưu tập của chúng tôi</span>
                            <div className="flex flex-row lg:flex-col pb-12 flex-wrap gap-4">
                                <div className='w-2/5 md:w-[18%] lg:w-full flex items-center '>
                                    <div className='w-4 h-[2px] bg-primary-1 mr-2'></div>
                                    <span className='text-body-2 text-primary-1 font-normal'>Nhẫn cưới</span>
                                    <div className='w-4 h-[2px] bg-primary-1 ml-2'></div>
                                </div>
                                <span className='w-2/5 md:w-[18%] lg:w-full flex items-center text-body-2 text-neutral-1-600 font-normal'>Trang sức bạc</span>
                                <span className='w-2/5 md:w-[18%] lg:w-full flex items-center text-body-2 text-neutral-1-600 font-normal'>Trang sức vàng</span>
                                <span className='w-2/5 md:w-[18%] lg:w-full flex items-center text-body-2 text-neutral-1-600 font-normal'>Dây chuyền bạc</span>
                                <span className='w-2/5 md:w-[18%] lg:w-full flex items-center text-body-2 text-neutral-1-600 font-normal'>Dây chuyền vàng</span>
                                <span className='w-2/5 md:w-[18%] lg:w-full flex items-center text-body-2 text-neutral-1-600 font-normal'>Bông tai bạc</span>
                            </div>
                        </div>
                        <div className="w-full lg:w-[66%] flex-col-reverse md:flex-row flex items-end gap-3 justify-between">
                            <div className="w-full flex flex-col md:w-[40%]">
                                <img src={pic5} ></img>
                                <div className='flex items-center h-12 w-full justify-between'>
                                    <a className='text-body-2 text-primary-1 font-normal'>KHÁM PHÁ BỘ SƯU TẬP MỚI NHẤT</a>
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
                            <div className="w-full md:w-[60%] h-[480px] mb-12 object-cover">
                                <img className='h-full w-full' src={nhanCuoi} ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='banner flex items-center bg-primary-1 w-full h-[493px] md:h-[453px] lg:h-[488px]'>
                <div className='w-full pr-5 pl-5 mr-auto ml-auto lg:max-w-4xl'>
                    <div className='w-full h-full flex justify-center flex-wrap'>
                        <div className='flex flex-col flex-wrap text-center w-full py-10 gap-10'>
                            <div className='flex flex-col  relative items-center '>
                                <span className="text-white text-heading-3 lg:text-display-3 font-medium px-3 md:px-36 lg:px-0 whitespace-normal">Shopping online không ngại khoảng cách
                                    <br className='md:hidden'></br><span className='text-heading-2 lg:text-display-3 font-semibold text-secondary-1 ml-2'>FREE SHIP</span>
                                    <img src={ellipse} alt="Ellipse" className="w-[154px] lg:w-[290px] h-[12px] right-[90px] min-[425px]:right-28 md:right-52  lg:h-[16px] lg:right-24  absolute"></img>
                                </span>
                            </div>
                            <div className='flex flex-col items-center gap-7'>
                                <p className="text-body-2 font-normal text-neutral-1-400 text-center">Chúng tôi tự tin cung cấp cho quý khách những sản phẩm đá quý tốt nhất, dịch vụ của chúng tôi đã có mặt hơn 12 tỉnh thành Việt Nam. Sang trọng, quý phái là những gì chúng tôi mang lại cho khách hàng.</p>
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="bg-secondary-1 text-white w-[190px] h-[48px] flex justify-center items-center">MUA NGAY</div>
                                    <div className="bg-primary-1 text-white w-[190px] h-[48px] flex justify-center items-center">XEM THÊM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-16">
                <div className="w-full pr-5 pl-5 mr-auto ml-auto lg:max-w-screen-xl">
                    <div className="flex flex-col justify-center items-center gap-10">
                        <div className="w-full flex flex-col justify-center items-center text-center gap-4 lg:max-w-3xl">
                            <span className='text-heading-3 font-medium text-neutral-1-900'>Sản phẩm nổi bật trong tháng</span>
                            <span className='text-body-1 font-normal text-neutral-1-600'>Mua sắm ngay các sản phẩm bán chạy nhất của tháng, có thể bạn cũng sẽ thích những mặt hàng này,
                                hãy thêm chúng vào giỏ hàng của bạn ngay bây giờ.</span>
                        </div>
                        <div className="w-full flex flex-col lg:flex-row justify-between mb-10 gap-6">
                            <div className="w-full flex flex-col border border-solid border-neutral-2-200 justify-between relative text-center">
                                <img src={diamond}></img>

                                <div className='flex flex-col items-center gap-2 mb-4'>
                                    <span className='text-heading-4 text-primary-1 font-semibold text-center'>Nhẫn cưới Kim cương, Chung Đôi Vàng trắng</span>
                                    <span className='text-heading-2 text-secondary-1 font-semibold text-center'>15.000.000 đ</span>
                                    <div>
                                        <span className='text-[16px] leading-[18.75px] line-through text-neutral-1-600 italic font-light'>22.000.000đ </span>
                                        <span className='text-[16px] leading-[18.75px] text-neutral-1-600 italic font-normal'>(-15%)</span>
                                    </div>
                                </div>
                                <div className='w-full h-12 bg-primary-1 text-white text-body-2 flex items-center justify-center'>XEM THÊM</div>

                                <div className='absolute left-8'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="94" viewBox="0 0 64 94" fill="none">
                                        <path d="M0 0H64V93.5756L32 60.6265L0 93.5756V0Z" fill="#2B88FB" />
                                        <path d="M22.082 24.7381V25.7741H19.422V34.4961H18.148V25.7741H15.474V24.7381H22.082ZM26.9963 34.6221C26.2776 34.6221 25.6243 34.4588 25.0363 34.1321C24.4576 33.8054 24.0003 33.3434 23.6643 32.7461C23.3376 32.1394 23.1743 31.4394 23.1743 30.6461C23.1743 29.8621 23.3423 29.1714 23.6783 28.5741C24.0236 27.9674 24.4903 27.5054 25.0783 27.1881C25.6663 26.8614 26.3243 26.6981 27.0523 26.6981C27.7803 26.6981 28.4383 26.8614 29.0263 27.1881C29.6143 27.5054 30.0763 27.9628 30.4123 28.5601C30.7576 29.1574 30.9303 29.8528 30.9303 30.6461C30.9303 31.4394 30.7529 32.1394 30.3983 32.7461C30.0529 33.3434 29.5816 33.8054 28.9843 34.1321C28.3869 34.4588 27.7243 34.6221 26.9963 34.6221ZM26.9963 33.5021C27.4536 33.5021 27.8829 33.3948 28.2843 33.1801C28.6856 32.9654 29.0076 32.6434 29.2503 32.2141C29.5023 31.7848 29.6283 31.2621 29.6283 30.6461C29.6283 30.0301 29.5069 29.5074 29.2643 29.0781C29.0216 28.6488 28.7043 28.3314 28.3123 28.1261C27.9203 27.9114 27.4956 27.8041 27.0383 27.8041C26.5716 27.8041 26.1423 27.9114 25.7503 28.1261C25.3676 28.3314 25.0596 28.6488 24.8263 29.0781C24.5929 29.5074 24.4763 30.0301 24.4763 30.6461C24.4763 31.2714 24.5883 31.7988 24.8123 32.2281C25.0456 32.6574 25.3536 32.9794 25.7363 33.1941C26.1189 33.3994 26.5389 33.5021 26.9963 33.5021ZM33.8793 28.2381C34.1313 27.7994 34.5047 27.4354 34.9993 27.1461C35.5033 26.8474 36.0867 26.6981 36.7493 26.6981C37.4307 26.6981 38.0467 26.8614 38.5973 27.1881C39.1573 27.5148 39.596 27.9768 39.9133 28.5741C40.2307 29.1621 40.3893 29.8481 40.3893 30.6321C40.3893 31.4068 40.2307 32.0974 39.9133 32.7041C39.596 33.3108 39.1573 33.7821 38.5973 34.1181C38.0467 34.4541 37.4307 34.6221 36.7493 34.6221C36.096 34.6221 35.5173 34.4774 35.0133 34.1881C34.5187 33.8894 34.1407 33.5208 33.8793 33.0821V38.1361H32.6053V26.8241H33.8793V28.2381ZM39.0873 30.6321C39.0873 30.0534 38.9707 29.5494 38.7373 29.1201C38.504 28.6908 38.1867 28.3641 37.7853 28.1401C37.3933 27.9161 36.9593 27.8041 36.4833 27.8041C36.0167 27.8041 35.5827 27.9208 35.1813 28.1541C34.7893 28.3781 34.472 28.7094 34.2293 29.1481C33.996 29.5774 33.8793 30.0768 33.8793 30.6461C33.8793 31.2248 33.996 31.7334 34.2293 32.1721C34.472 32.6014 34.7893 32.9328 35.1813 33.1661C35.5827 33.3901 36.0167 33.5021 36.4833 33.5021C36.9593 33.5021 37.3933 33.3901 37.7853 33.1661C38.1867 32.9328 38.504 32.6014 38.7373 32.1721C38.9707 31.7334 39.0873 31.2201 39.0873 30.6321ZM45.2527 25.5361V24.3741H47.8847V34.4961H46.5967V25.5361H45.2527Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className='w-full flex flex-wrap gap-4 justify-between'>
                                <div className="w-full md:w-[48%] h-[454px] flex flex-col border border-solid border-neutral-3-200 relative justify-between">
                                    <img className='object-contain w-full h-1/2' src={r1}></img>
                                    <div className='flex flex-col gap-2 p-4 text-center justify-between '>
                                        <span className='text-header-1 text-primary-1 font-normal text-center' >Nhẫn cưới Kim cương, Chung Đôi Vàng trắng</span>
                                        <span className='text-header-1 text-secondary-1 font-normal text-center'>15.000.000 đ</span>
                                        <div>
                                            <span className='text-[16px] leading-[18.75px] line-through text-neutral-1-600 italic font-light'>22.000.000đ </span>
                                            <span className='text-[16px] leading-[18.75px] text-neutral-1-600 italic font-normal'>(-15%)</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className="flex items-center text-caption-2 font-poppins font-normal text-primary-1 gap-2">
                                                <img src={view}></img>
                                                <a className='' href='#'>Xem</a>
                                            </div>
                                            <div className="flex items-center text-caption-2 font-poppins font-normal text-primary-1 gap-2">
                                                <a className='' href='#'>Thêm</a>
                                                <img src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='absolute right-3 top-3'>
                                        <div className='w-[58px] h-[26px] bg-error-400 text-caption-2 font-normal font-poppins text-white text-center p-1'>
                                            <span>Sale</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-[48%] h-[454px] flex flex-col border border-solid border-neutral-3-200 relative justify-between">
                                    <img className='object-contain w-full h-1/2' src={r2}></img>
                                    <div className='flex flex-col gap-2 p-4 text-center justify-between '>
                                        <span className='text-header-1 text-primary-1 font-normal text-center' >Nhẫn cưới Kim cương, Chung Đôi Vàng trắng</span>
                                        <span className='text-header-1 text-secondary-1 font-normal text-center'>15.000.000 đ</span>
                                        <div>
                                            <span className='text-[16px] leading-[18.75px] line-through text-neutral-1-600 italic font-light'>22.000.000đ </span>
                                            <span className='text-[16px] leading-[18.75px] text-neutral-1-600 italic font-normal'>(-15%)</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className="flex items-center text-caption-2 font-poppins font-normal text-primary-1 gap-2">
                                                <img src={view}></img>
                                                <a className='' href='#'>Xem</a>
                                            </div>
                                            <div className="flex items-center text-caption-2 font-poppins font-normal text-primary-1 gap-2">
                                                <a className='' href='#'>Thêm</a>
                                                <img src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='absolute right-3 top-3'>
                                        <div className='w-[58px] h-[26px] bg-error-400 text-caption-2 font-normal font-poppins text-white text-center p-1'>
                                            <span>Sale</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-[48%] h-[454px] flex flex-col border border-solid border-neutral-3-200 relative justify-between">
                                    <img className='object-contain w-full h-1/2' src={r3}></img>
                                    <div className='flex flex-col gap-2 p-4 text-center justify-between '>
                                        <span className='text-header-1 text-primary-1 font-normal text-center' >Nhẫn cưới Kim cương, Chung Đôi Vàng trắng</span>
                                        <span className='text-header-1 text-secondary-1 font-normal text-center'>15.000.000 đ</span>
                                        <div>
                                            <span className='text-[16px] leading-[18.75px] line-through text-neutral-1-600 italic font-light'>22.000.000đ </span>
                                            <span className='text-[16px] leading-[18.75px] text-neutral-1-600 italic font-normal'>(-15%)</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className="flex items-center text-caption-2 font-poppins font-normal text-primary-1 gap-2">
                                                <img src={view}></img>
                                                <a className='' href='#'>Xem</a>
                                            </div>
                                            <div className="flex items-center text-caption-2 font-poppins font-normal text-primary-1 gap-2">
                                                <a className='' href='#'>Thêm</a>
                                                <img src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='absolute right-3 top-3'>
                                        <div className='w-[58px] h-[26px] bg-success-400 text-caption-2 font-normal font-poppins text-white text-center p-1'>
                                            <span>New</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-[48%] h-[454px] flex flex-col border border-solid border-neutral-3-200 relative justify-between">
                                    <img className='object-contain w-full h-1/2' src={r4}></img>
                                    <div className='flex flex-col gap-2 p-4 text-center justify-between '>
                                        <span className='text-header-1 text-primary-1 font-normal text-center'>Nhẫn cưới Kim cương, Chung Đôi Vàng trắng</span>
                                        <span className='text-header-1 text-secondary-1 font-normal text-center'>15.000.000 đ</span>
                                        <div>
                                            <span className='text-[16px] leading-[18.75px] line-through text-neutral-1-600 italic font-light'>22.000.000đ </span>
                                            <span className='text-[16px] leading-[18.75px] text-neutral-1-600 italic font-normal'>(-15%)</span>
                                        </div>
                                        <div className='flex justify-between'>
                                            <div className="flex items-center text-caption-2 font-poppins font-normal text-primary-1 gap-2">
                                                <img src={view}></img>
                                                <a className='' href='#'>Xem</a>
                                            </div>
                                            <div className="flex items-center text-caption-2 font-poppins font-normal text-primary-1 gap-2">
                                                <a className='' href='#'>Thêm</a>
                                                <img src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='absolute right-3 top-3'>
                                        <div className='w-[58px] h-[26px] bg-success-400 text-caption-2 font-normal font-poppins text-white text-center p-1'>
                                            <span>New</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col justify-between mb-10 gap-6 lg:flex-row">
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
                        <div className="flex flex-col w-full gap-6 lg:flex-row">
                            <div className='w-full lg:w-2/5 flex items-center'>
                                <div className='flex flex-col justify-evenly pl-4'>
                                    <span className='text-caption-2 font-normal text-neutral-1-600'>Nhận xét</span>
                                    <span className='text-heading-4 font-medium text-neutral-1-900 py-4'>Đánh giá của khách hàng</span>
                                    <div className='flex items-center w-16 justify-between'>

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" transform="rotate(180 0 0)">
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
                            <div className='w-full h-[335px] md:h-[375px] bg-neutral-3-50 flex items-center'>
                                <SwiperCards></SwiperCards>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>)
}