import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './swiperBanner.scss';

import ellipse from "../../assets/images/Ellipse.png"
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
                className="swiper-banner">
                <SwiperSlide className="swiper-slide-banner">
                    <div className='banner banner-1'>
                        <div className='banner-container'>
                            <div className='row-1'>
                                <div className='banner-content'>
                                    <div className='banner-content-title'>
                                        <span className="banner-text-lg">Bộ sưu tập mới</span>
                                        <span className="banner-text-lg"><span className='text-yellow'>Giảm 15% </span>giá sản phẩm
                                        </span>
                                        <div className="banner-content-title-ellipse">
                                            <img src={ellipse} alt="Ellipse" className="ellipse-img"></img>
                                        </div>
                                    </div>
                                    <div className='banner-item'>
                                        <p className="banner-text-sm">Chúng tôi tự tin cung cấp cho quý khách những sản phẩm đá quý tốt nhất, dịch vụ của chúng tôi đã có mặt hơn 12 tỉnh thành Việt Nam. Sang trọng, quý phái là những gì chúng tôi mang lại cho khách hàng.</p>
                                        <div className="bg-bt">XEM THÊM</div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Banner banner-2">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Banner banner-2">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Banner banner-2">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="Banner banner-2">
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}