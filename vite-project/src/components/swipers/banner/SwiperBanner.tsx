import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './swiperBanner.scss';

import ellipse from "../../../assets/images/Ellipse.png"

export default function SwiperBanner() {

    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="w-full h-full lg:bullet-custom">
                <SwiperSlide className="relative text-center flex justify-center items-center ">
                    <div className='banner bg-bannerHome flex w-screen h-[488px] md:h-[530px] lg:h-[716px] bg-cover '>
                        <div className='w-full px-4 mx-auto lg:max-w-4xl'>
                            <div className='w-full h-full flex justify-center flex-wrap'>
                                <div className='flex flex-col items-center justify-between text-center relative w-full mt-4 pt-8 pb-4 lg:pb-12'>
                                    <div className='flex flex-col font-poppins relative'>
                                        <span className="text-heading-3 font-medium md:text-display-5">Bộ sưu tập mới</span>
                                        <span className="text-heading-3 font-medium md:text-display-5 "><span className='text-secondary-1'>Giảm 15% </span>giá sản phẩm
                                        </span>
                                        <div className="flex flex-col">
                                            <img src={ellipse} alt="Ellipse" className="w-36 md:w-56 h-auto -translate-y-2"></img>
                                        </div>
                                    </div>
                                    <div className='flex flex-col items-center gap-4 pb-6'>
                                        <p className="text-body-2 text-neutral-1-600 md:px-20 lg:px-0">Chúng tôi tự tin cung cấp cho quý khách những sản phẩm đá quý tốt nhất, dịch vụ của chúng tôi đã có mặt hơn 12 tỉnh thành Việt Nam. Sang trọng, quý phái là những gì chúng tôi mang lại cho khách hàng.</p>
                                        <button className="bg-primary-1 text-white w-[190px] h-[48px] flex justify-center items-center">XEM THÊM</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner bg-bannerHome flex w-screen h-[488px] md:h-[530px] lg:h-[716px] bg-cover ">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner bg-bannerHome flex w-screen h-[488px] md:h-[530px] lg:h-[716px] bg-cover ">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner bg-bannerHome flex w-screen h-[488px] md:h-[530px] lg:h-[716px] bg-cover ">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="banner bg-bannerHome flex w-screen h-[488px] md:h-[530px] lg:h-[716px] bg-cover ">
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}