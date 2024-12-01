import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import r3 from '../../../assets/images/r3.png';

import view from '../../../assets/images/eye-line.png';
import add from '../../../assets/images/cart-line.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRef } from 'react';


export default function SwiperSlideCards() {
    const paginationRef = useRef<HTMLDivElement>(null);
    return (<>
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
                clickable: true,
                el: paginationRef.current,
            }}
            modules={[Pagination]}
            onBeforeInit={(swiper) => {
                // Gán pagination el từ ref sau khi Swiper khởi tạo
                if (swiper.params.pagination && typeof swiper.params.pagination !== 'boolean') {
                    swiper.params.pagination.el = paginationRef.current;
                }
            }}
            className="w-full h-full lg:bullet-custom">
            <SwiperSlide>
                <div className="relative flex flex-col items-center border border-neutral-2-200 ">
                    <img className="w-[265px] h-[237px] object-contain" src={r3} alt="Product" />
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
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative flex flex-col items-center border border-neutral-2-200 ">
                    <img className="w-[265px] h-[237px] object-contain" src={r3} alt="Product" />
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
            </SwiperSlide>
        </Swiper>
        <div ref={paginationRef} className='custom-pagination flex justify-center mt-4'></div>
    </>
    )
}