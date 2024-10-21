
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import avt from '../../assets/images/avatar.png'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './swiperCards.scss';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function SwiperCards() {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="swiper-cards"
            >
                <SwiperSlide className="swiper-slide-cards">
                    <div className='Customer--rattings'>
                        <span>
                            “Sản phẩm chất lượng, nhân viên vui vẻ hoà đồng, rất hài lòng với cách tư vấn của nhân viên. Sẽ quay lại mua hàng”.
                        </span>
                        <div className='Customer'>
                            <div className='Customer--avatar'>
                                <img src={avt}></img>
                            </div>
                            <div className="Customer--info">
                                <span className='text-navy'>Trần Thị Tuyết Mai</span>
                                <p className='' style={{ fontSize: 10 }}>Khách hàng, TP HCM</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-cards">
                    <div className='Customer--rattings'>
                        <span>
                            “Sản phẩm chất lượng, nhân viên vui vẻ hoà đồng, rất hài lòng với cách tư vấn của nhân viên. Sẽ quay lại mua hàng”.
                        </span>
                        <div className='Customer'>
                            <div className='Customer--avatar'>
                                <img src={avt}></img>
                            </div>
                            <div className="Customer--info">
                                <span className='text-navy'>Trần Thị Tuyết Mai</span>
                                <p className='' style={{ fontSize: 10 }}>Khách hàng, TP HCM</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-cards">
                    <div className='Customer--rattings'>
                        <span>
                            “Sản phẩm chất lượng, nhân viên vui vẻ hoà đồng, rất hài lòng với cách tư vấn của nhân viên. Sẽ quay lại mua hàng”.
                        </span>
                        <div className='Customer'>
                            <div className='Customer--avatar'>
                                <img src={avt}></img>
                            </div>
                            <div className="Customer--info">
                                <span className='text-navy'>Trần Thị Tuyết Mai</span>
                                <p className='' style={{ fontSize: 10 }}>Khách hàng, TP HCM</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-cards">
                    <div className='Customer--rattings'>
                        <span>
                            “Sản phẩm chất lượng, nhân viên vui vẻ hoà đồng, rất hài lòng với cách tư vấn của nhân viên. Sẽ quay lại mua hàng”.
                        </span>
                        <div className='Customer'>
                            <div className='Customer--avatar'>
                                <img src={avt}></img>
                            </div>
                            <div className="Customer--info">
                                <span className='text-navy'>Trần Thị Tuyết Mai</span>
                                <p className='' style={{ fontSize: 10 }}>Khách hàng, TP HCM</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
