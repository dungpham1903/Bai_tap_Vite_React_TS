
import search from '../assets/images/search-line.png';
import quality from '../assets/images/Qality.png';
import repeat from '../assets/images/Repeat.png';
import pic1 from '../assets/images/pic1.png';
import pic2 from '../assets/images/pic2.png';
import pic3 from '../assets/images/pic3.png';
import pic4 from '../assets/images/pic4.png';
import arrowRight from '../assets/images/Arrow-Right.png';
import pic5 from '../assets/images/Rectangle 152.png';
import pic6 from '../assets/images/Rectangle 150.png';
import ellipse from '../assets/images/Ellipse.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './home.scss';

export const Home = () => {
    return (<>
        <body style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper">
                <SwiperSlide>
                    <div className='banner banner-1'>
                        <div className='banner-container'>
                            <div className='row-1'>
                                <div className='banner-content'>
                                    <div className='banner-content-title'>
                                        <span className="banner-text-lg">Bộ sưu tập mới</span>
                                        <span className="banner-text-lg"><span className='yellow-text'>Giảm 15% </span>giá sản phẩm
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
            <div className="Noven-home">
                <div className="Home-container">
                    <div className="Home-content-1">
                        <div className="content-item-1">
                            <img src={search} width={24} height={24}></img>
                            <h1 className='text-item-1'><span className='red-text'>01.</span> Đồ trang sức độc đáo & ý nghĩa</h1>
                            <p className='text-item-2'>Từ những kho báu thủ công đến những món đồ cổ điển đến các biểu tượng di sản</p>
                        </div>
                        <div className="content-item-1">
                            <img src={quality} width={24} height={24}></img>
                            <h1 className='text-item-1'><span className='red-text'>02.</span> Chất lượng được kiểm tra chuyên nghiệp</h1>
                            <p className='text-item-2'>Những kim loại quý, bền nhất và đá quý đạt tiêu chuẩn</p>
                        </div>
                        <div className="content-item-1">
                            <img src={repeat} width={24} height={24}></img>
                            <h1 className='text-item-1'><span className='red-text'>03.</span> Tuổi đời và sự tái tạo của sản phẩm</h1>
                            <p className='text-item-2'>Được thiết kế bền vững để được làm mới, có thể tái chế hoặc bán lại liên tục</p>
                        </div>
                    </div>
                    <div className="Home-content-2">
                        <div className="content-item-2">
                            <img src={pic4} ></img>
                            <div className='text-item-3'>
                                <a className='text-navy'>NHẪN CƯỚI</a>
                                <img src={arrowRight}></img>
                            </div>
                        </div>
                        <div className="content-item-2">
                            <img src={pic1} ></img>
                            <div className='text-item-3'>
                                <a className='text-navy'>VÒNG CỔ</a>
                                <img src={arrowRight}></img>
                            </div>
                        </div>
                        <div className="content-item-2">
                            <img src={pic2} ></img>
                            <div className='text-item-3'>
                                <a className='text-navy'>VÒNG TAY</a>
                                <img src={arrowRight}></img>
                            </div>
                        </div>
                        <div className="content-item-2">
                            <img src={pic3} ></img>
                            <div className='text-item-3'>
                                <a className='text-navy'>BÔNG TAI</a>
                                <img src={arrowRight}></img>
                            </div>
                        </div>
                    </div>
                    <div className="Home-content-3">
                        <div className="box-item-left">
                            <span className='item-left-title'>Bộ sưu tập của chúng tôi</span>
                            <div className="item-left-content">
                                <div className='left-content-text'>
                                    <div className='lineL'></div>
                                    <span className='' style={{ color: '#003468', fontWeight: 500 }}>Nhẫn cưới</span>
                                    <div className='lineR'></div>
                                </div>
                                <span className='left-content-text'>Trang sức bạc</span>
                                <span className='left-content-text'>Trang sức vàng</span>
                                <span className='left-content-text'>Dây chuyền bạc</span>
                                <span className='left-content-text'>Dây chuyền vàng</span>
                                <span className='left-content-text'>Bông tai bạc</span>
                            </div>
                        </div>
                        <div className="box-item-right">
                            <div className="item-right-content">
                                <img src={pic5} ></img>
                                <div className='text-item-right'>
                                    <span className='text-item-right-sm'>KHÁM PHÁ BỘ SƯU TẬP MỚI NHẤT</span>
                                    <div className="text-item-right-icon">
                                        <img src={arrowRight} width={24} height={24}></img>
                                    </div>
                                </div>
                            </div>
                            <div className="item-right-img">
                                <img src={pic6} ></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='banner banner-2 '>
                <div className='banner-container'>
                    <div className='row-1 '>
                        <div className='banner-content-2'>
                            <div className='banner-content-title-2'>
                                <span className="banner-text-lg-2 text-white">Shopping online không ngại</span>
                                <div className="title-line-2">
                                    <span className="banner-text-lg-2 text-white">khoảng cách </span>
                                    <div className="banner-content-title-ellipse">
                                        <span className='banner-text-lg-2 yellow-text'> FREE SHIP</span>
                                        <img src={ellipse} alt="Ellipse" className="ellipse-img"></img>
                                    </div>
                                </div>
                            </div>
                            <div className='banner-item'>
                                <p className="banner-text-sm">Chúng tôi tự tin cung cấp cho quý khách những sản phẩm đá quý tốt nhất, dịch vụ của chúng tôi đã có mặt hơn 12 tỉnh thành Việt Nam. Sang trọng, quý phái là những gì chúng tôi mang lại cho khách hàng.</p>
                                <div className="banner-bt-flex-row">
                                    <div className="bg-bt bt-yellow">MUA NGAY</div>
                                    <div className="bg-bt">XEM THÊM</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Noven-home">
                <div className="Home-container">
                    <div className="Home-content-4">
                        <div className="Content-4-title">
                            <span className='title-md'>Sản phẩm nổi bật trong tháng</span>
                            <span className='text-sm'>Mua sắm ngay các sản phẩm bán chạy nhất của tháng, có thể bạn cũng sẽ thích những mặt hàng này,
                                hãy thêm chúng vào giỏ hàng của bạn ngay bây giờ.</span>
                        </div>
                        <div className="Content-4-Card">
                            <div className="card-lg"></div>
                            <div className="card-sm"></div>
                        </div>
                    </div>
                </div>
            </div>
        </body>

    </>)
}