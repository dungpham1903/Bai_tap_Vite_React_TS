
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
import diamond from '../assets/images/collectionDiamond.png';
import r1 from '../assets/images/r1.png';
import r2 from '../assets/images/r2.png';
import r3 from '../assets/images/r3.png';
import r4 from '../assets/images/r4.png';
import vongCo from '../assets/images/vong-co.png';
import nhanDoi from '../assets/images/nhan-doi.png';
import view from '../assets/images/eye-line.png';
import add from '../assets/images/cart-line.png';


import SwiperCards from './header/SwiperCards';
import SwiperBanner from './header/SwiperBanner';
import './home.scss';

export const Home = () => {
    return (<>
        <body style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <SwiperBanner></SwiperBanner>
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
                                        <span className='banner-text-lg-2 text-yellow'> FREE SHIP</span>
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
                            <div className="card-lg">
                                <img src={diamond}></img>
                                <div>
                                    <div className='card-lg-content'>
                                        <span className='text-navy' style={{ fontSize: 18 }}>Nhẫn cưới Kim cương, Chung Đôi Vàng trắng</span>
                                        <div className='text-yellow' style={{ fontSize: 24 }}>15.000.000 đ</div>
                                        <div className='text-line'>22.000.000đ (-15%)</div>
                                    </div>
                                    <div className='card-lg-view-more'>XEM THÊM</div>
                                </div>
                                <div className='tag-top1'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="94" viewBox="0 0 64 94" fill="none">
                                        <path d="M0 0H64V93.5756L32 60.6265L0 93.5756V0Z" fill="#2B88FB" />
                                        <path d="M22.082 24.7381V25.7741H19.422V34.4961H18.148V25.7741H15.474V24.7381H22.082ZM26.9963 34.6221C26.2776 34.6221 25.6243 34.4588 25.0363 34.1321C24.4576 33.8054 24.0003 33.3434 23.6643 32.7461C23.3376 32.1394 23.1743 31.4394 23.1743 30.6461C23.1743 29.8621 23.3423 29.1714 23.6783 28.5741C24.0236 27.9674 24.4903 27.5054 25.0783 27.1881C25.6663 26.8614 26.3243 26.6981 27.0523 26.6981C27.7803 26.6981 28.4383 26.8614 29.0263 27.1881C29.6143 27.5054 30.0763 27.9628 30.4123 28.5601C30.7576 29.1574 30.9303 29.8528 30.9303 30.6461C30.9303 31.4394 30.7529 32.1394 30.3983 32.7461C30.0529 33.3434 29.5816 33.8054 28.9843 34.1321C28.3869 34.4588 27.7243 34.6221 26.9963 34.6221ZM26.9963 33.5021C27.4536 33.5021 27.8829 33.3948 28.2843 33.1801C28.6856 32.9654 29.0076 32.6434 29.2503 32.2141C29.5023 31.7848 29.6283 31.2621 29.6283 30.6461C29.6283 30.0301 29.5069 29.5074 29.2643 29.0781C29.0216 28.6488 28.7043 28.3314 28.3123 28.1261C27.9203 27.9114 27.4956 27.8041 27.0383 27.8041C26.5716 27.8041 26.1423 27.9114 25.7503 28.1261C25.3676 28.3314 25.0596 28.6488 24.8263 29.0781C24.5929 29.5074 24.4763 30.0301 24.4763 30.6461C24.4763 31.2714 24.5883 31.7988 24.8123 32.2281C25.0456 32.6574 25.3536 32.9794 25.7363 33.1941C26.1189 33.3994 26.5389 33.5021 26.9963 33.5021ZM33.8793 28.2381C34.1313 27.7994 34.5047 27.4354 34.9993 27.1461C35.5033 26.8474 36.0867 26.6981 36.7493 26.6981C37.4307 26.6981 38.0467 26.8614 38.5973 27.1881C39.1573 27.5148 39.596 27.9768 39.9133 28.5741C40.2307 29.1621 40.3893 29.8481 40.3893 30.6321C40.3893 31.4068 40.2307 32.0974 39.9133 32.7041C39.596 33.3108 39.1573 33.7821 38.5973 34.1181C38.0467 34.4541 37.4307 34.6221 36.7493 34.6221C36.096 34.6221 35.5173 34.4774 35.0133 34.1881C34.5187 33.8894 34.1407 33.5208 33.8793 33.0821V38.1361H32.6053V26.8241H33.8793V28.2381ZM39.0873 30.6321C39.0873 30.0534 38.9707 29.5494 38.7373 29.1201C38.504 28.6908 38.1867 28.3641 37.7853 28.1401C37.3933 27.9161 36.9593 27.8041 36.4833 27.8041C36.0167 27.8041 35.5827 27.9208 35.1813 28.1541C34.7893 28.3781 34.472 28.7094 34.2293 29.1481C33.996 29.5774 33.8793 30.0768 33.8793 30.6461C33.8793 31.2248 33.996 31.7334 34.2293 32.1721C34.472 32.6014 34.7893 32.9328 35.1813 33.1661C35.5827 33.3901 36.0167 33.5021 36.4833 33.5021C36.9593 33.5021 37.3933 33.3901 37.7853 33.1661C38.1867 32.9328 38.504 32.6014 38.7373 32.1721C38.9707 31.7334 39.0873 31.2201 39.0873 30.6321ZM45.2527 25.5361V24.3741H47.8847V34.4961H46.5967V25.5361H45.2527Z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <div className='cards-sm'>
                                <div className="card-sm">
                                    <img className='card-sm-img' src={r1}></img>
                                    <div className='card-sm-content'>
                                        <span className='text-navy' style={{ fontSize: 15 }}>Nhẫn cưới Kim cương, Chung Đôi Vàng trắng</span>
                                        <span className='text-yellow' style={{ fontSize: 20 }}>15.000.000 đ</span>
                                        <span className='text-line'>22.000.000đ (-15%)</span>
                                        <div className='card-sm-bt'>
                                            <div className="card__view">
                                                <img src={view}></img>
                                                <a className='btn-txt' href='#'>Xem</a>
                                            </div>
                                            <div className="card__add">
                                                <a className='btn-txt' href='#'>Thêm</a>
                                                <img src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='tag-sm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="20" viewBox="0 0 58 26" fill="none">
                                            <rect width="58" height="26" fill="#EA3E53" />
                                            <path d="M19.576 17.084C19.024 17.084 18.528 16.988 18.088 16.796C17.656 16.596 17.316 16.324 17.068 15.98C16.82 15.628 16.692 15.224 16.684 14.768H17.848C17.888 15.16 18.048 15.492 18.328 15.764C18.616 16.028 19.032 16.16 19.576 16.16C20.096 16.16 20.504 16.032 20.8 15.776C21.104 15.512 21.256 15.176 21.256 14.768C21.256 14.448 21.168 14.188 20.992 13.988C20.816 13.788 20.596 13.636 20.332 13.532C20.068 13.428 19.712 13.316 19.264 13.196C18.712 13.052 18.268 12.908 17.932 12.764C17.604 12.62 17.32 12.396 17.08 12.092C16.848 11.78 16.732 11.364 16.732 10.844C16.732 10.388 16.848 9.984 17.08 9.632C17.312 9.28 17.636 9.008 18.052 8.816C18.476 8.624 18.96 8.528 19.504 8.528C20.288 8.528 20.928 8.724 21.424 9.116C21.928 9.508 22.212 10.028 22.276 10.676H21.076C21.036 10.356 20.868 10.076 20.572 9.836C20.276 9.588 19.884 9.464 19.396 9.464C18.94 9.464 18.568 9.584 18.28 9.824C17.992 10.056 17.848 10.384 17.848 10.808C17.848 11.112 17.932 11.36 18.1 11.552C18.276 11.744 18.488 11.892 18.736 11.996C18.992 12.092 19.348 12.204 19.804 12.332C20.356 12.484 20.8 12.636 21.136 12.788C21.472 12.932 21.76 13.16 22 13.472C22.24 13.776 22.36 14.192 22.36 14.72C22.36 15.128 22.252 15.512 22.036 15.872C21.82 16.232 21.5 16.524 21.076 16.748C20.652 16.972 20.152 17.084 19.576 17.084ZM23.559 13.688C23.559 13.016 23.695 12.428 23.967 11.924C24.239 11.412 24.611 11.016 25.083 10.736C25.563 10.456 26.095 10.316 26.679 10.316C27.255 10.316 27.755 10.44 28.179 10.688C28.603 10.936 28.919 11.248 29.127 11.624V10.424H30.231V17H29.127V15.776C28.911 16.16 28.587 16.48 28.155 16.736C27.731 16.984 27.235 17.108 26.667 17.108C26.083 17.108 25.555 16.964 25.083 16.676C24.611 16.388 24.239 15.984 23.967 15.464C23.695 14.944 23.559 14.352 23.559 13.688ZM29.127 13.7C29.127 13.204 29.027 12.772 28.827 12.404C28.627 12.036 28.355 11.756 28.011 11.564C27.675 11.364 27.303 11.264 26.895 11.264C26.487 11.264 26.115 11.36 25.779 11.552C25.443 11.744 25.175 12.024 24.975 12.392C24.775 12.76 24.675 13.192 24.675 13.688C24.675 14.192 24.775 14.632 24.975 15.008C25.175 15.376 25.443 15.66 25.779 15.86C26.115 16.052 26.487 16.148 26.895 16.148C27.303 16.148 27.675 16.052 28.011 15.86C28.355 15.66 28.627 15.376 28.827 15.008C29.027 14.632 29.127 14.196 29.127 13.7ZM33.1683 8.12V17H32.0763V8.12H33.1683ZM41.0295 13.46C41.0295 13.668 41.0175 13.888 40.9935 14.12H35.7375C35.7775 14.768 35.9975 15.276 36.3975 15.644C36.8055 16.004 37.2975 16.184 37.8735 16.184C38.3455 16.184 38.7375 16.076 39.0495 15.86C39.3695 15.636 39.5935 15.34 39.7215 14.972H40.8975C40.7215 15.604 40.3695 16.12 39.8415 16.52C39.3135 16.912 38.6575 17.108 37.8735 17.108C37.2495 17.108 36.6895 16.968 36.1935 16.688C35.7055 16.408 35.3215 16.012 35.0415 15.5C34.7615 14.98 34.6215 14.38 34.6215 13.7C34.6215 13.02 34.7575 12.424 35.0295 11.912C35.3015 11.4 35.6815 11.008 36.1695 10.736C36.6655 10.456 37.2335 10.316 37.8735 10.316C38.4975 10.316 39.0495 10.452 39.5295 10.724C40.0095 10.996 40.3775 11.372 40.6335 11.852C40.8975 12.324 41.0295 12.86 41.0295 13.46ZM39.9015 13.232C39.9015 12.816 39.8095 12.46 39.6255 12.164C39.4415 11.86 39.1895 11.632 38.8695 11.48C38.5575 11.32 38.2095 11.24 37.8255 11.24C37.2735 11.24 36.8015 11.416 36.4095 11.768C36.0255 12.12 35.8055 12.608 35.7495 13.232H39.9015Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="card-sm">
                                    <img className='card-sm-img' src={r2}></img>
                                    <div className='card-sm-content'>
                                        <span className='text-navy' style={{ fontSize: 15 }}>Nhẫn cưới Kim cương, Chung Đôi Vàng trắng</span>
                                        <span className='text-yellow' style={{ fontSize: 20 }}>15.000.000 đ</span>
                                        <span className='text-line'>22.000.000đ (-15%)</span>
                                        <div className='card-sm-bt'>
                                            <div className="card__view">
                                                <img src={view}></img>
                                                <a className='btn-txt' href='#'>Xem</a>
                                            </div>
                                            <div className="card__add">
                                                <a className='btn-txt' href='#'>Thêm</a>
                                                <img src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='tag-sm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="20" viewBox="0 0 58 26" fill="none">
                                            <rect width="58" height="26" fill="#EA3E53" />
                                            <path d="M19.576 17.084C19.024 17.084 18.528 16.988 18.088 16.796C17.656 16.596 17.316 16.324 17.068 15.98C16.82 15.628 16.692 15.224 16.684 14.768H17.848C17.888 15.16 18.048 15.492 18.328 15.764C18.616 16.028 19.032 16.16 19.576 16.16C20.096 16.16 20.504 16.032 20.8 15.776C21.104 15.512 21.256 15.176 21.256 14.768C21.256 14.448 21.168 14.188 20.992 13.988C20.816 13.788 20.596 13.636 20.332 13.532C20.068 13.428 19.712 13.316 19.264 13.196C18.712 13.052 18.268 12.908 17.932 12.764C17.604 12.62 17.32 12.396 17.08 12.092C16.848 11.78 16.732 11.364 16.732 10.844C16.732 10.388 16.848 9.984 17.08 9.632C17.312 9.28 17.636 9.008 18.052 8.816C18.476 8.624 18.96 8.528 19.504 8.528C20.288 8.528 20.928 8.724 21.424 9.116C21.928 9.508 22.212 10.028 22.276 10.676H21.076C21.036 10.356 20.868 10.076 20.572 9.836C20.276 9.588 19.884 9.464 19.396 9.464C18.94 9.464 18.568 9.584 18.28 9.824C17.992 10.056 17.848 10.384 17.848 10.808C17.848 11.112 17.932 11.36 18.1 11.552C18.276 11.744 18.488 11.892 18.736 11.996C18.992 12.092 19.348 12.204 19.804 12.332C20.356 12.484 20.8 12.636 21.136 12.788C21.472 12.932 21.76 13.16 22 13.472C22.24 13.776 22.36 14.192 22.36 14.72C22.36 15.128 22.252 15.512 22.036 15.872C21.82 16.232 21.5 16.524 21.076 16.748C20.652 16.972 20.152 17.084 19.576 17.084ZM23.559 13.688C23.559 13.016 23.695 12.428 23.967 11.924C24.239 11.412 24.611 11.016 25.083 10.736C25.563 10.456 26.095 10.316 26.679 10.316C27.255 10.316 27.755 10.44 28.179 10.688C28.603 10.936 28.919 11.248 29.127 11.624V10.424H30.231V17H29.127V15.776C28.911 16.16 28.587 16.48 28.155 16.736C27.731 16.984 27.235 17.108 26.667 17.108C26.083 17.108 25.555 16.964 25.083 16.676C24.611 16.388 24.239 15.984 23.967 15.464C23.695 14.944 23.559 14.352 23.559 13.688ZM29.127 13.7C29.127 13.204 29.027 12.772 28.827 12.404C28.627 12.036 28.355 11.756 28.011 11.564C27.675 11.364 27.303 11.264 26.895 11.264C26.487 11.264 26.115 11.36 25.779 11.552C25.443 11.744 25.175 12.024 24.975 12.392C24.775 12.76 24.675 13.192 24.675 13.688C24.675 14.192 24.775 14.632 24.975 15.008C25.175 15.376 25.443 15.66 25.779 15.86C26.115 16.052 26.487 16.148 26.895 16.148C27.303 16.148 27.675 16.052 28.011 15.86C28.355 15.66 28.627 15.376 28.827 15.008C29.027 14.632 29.127 14.196 29.127 13.7ZM33.1683 8.12V17H32.0763V8.12H33.1683ZM41.0295 13.46C41.0295 13.668 41.0175 13.888 40.9935 14.12H35.7375C35.7775 14.768 35.9975 15.276 36.3975 15.644C36.8055 16.004 37.2975 16.184 37.8735 16.184C38.3455 16.184 38.7375 16.076 39.0495 15.86C39.3695 15.636 39.5935 15.34 39.7215 14.972H40.8975C40.7215 15.604 40.3695 16.12 39.8415 16.52C39.3135 16.912 38.6575 17.108 37.8735 17.108C37.2495 17.108 36.6895 16.968 36.1935 16.688C35.7055 16.408 35.3215 16.012 35.0415 15.5C34.7615 14.98 34.6215 14.38 34.6215 13.7C34.6215 13.02 34.7575 12.424 35.0295 11.912C35.3015 11.4 35.6815 11.008 36.1695 10.736C36.6655 10.456 37.2335 10.316 37.8735 10.316C38.4975 10.316 39.0495 10.452 39.5295 10.724C40.0095 10.996 40.3775 11.372 40.6335 11.852C40.8975 12.324 41.0295 12.86 41.0295 13.46ZM39.9015 13.232C39.9015 12.816 39.8095 12.46 39.6255 12.164C39.4415 11.86 39.1895 11.632 38.8695 11.48C38.5575 11.32 38.2095 11.24 37.8255 11.24C37.2735 11.24 36.8015 11.416 36.4095 11.768C36.0255 12.12 35.8055 12.608 35.7495 13.232H39.9015Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="card-sm">
                                    <img className='card-sm-img' src={r3}></img>
                                    <div className='card-sm-content'>
                                        <span className='text-navy' style={{ fontSize: 15 }}>Nhẫn cưới Kim cương, Chung Đôi Vàng trắng</span>
                                        <span className='text-yellow' style={{ fontSize: 20 }}>15.000.000 đ</span>
                                        <span className='text-line'>22.000.000đ (-15%)</span>
                                        <div className='card-sm-bt'>
                                            <div className="card__view">
                                                <img src={view}></img>
                                                <a className='btn-txt' href='#'>Xem</a>
                                            </div>
                                            <div className="card__add">
                                                <a className='btn-txt' href='#'>Thêm</a>
                                                <img src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='tag-sm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="20" viewBox="0 0 58 26" fill="none">
                                            <rect width="58" height="26" fill="#28A745" />
                                            <path d="M23.5 17H22.408L18.016 10.34V17H16.924V8.624H18.016L22.408 15.272V8.624H23.5V17ZM31.3615 13.46C31.3615 13.668 31.3495 13.888 31.3255 14.12H26.0695C26.1095 14.768 26.3295 15.276 26.7295 15.644C27.1375 16.004 27.6295 16.184 28.2055 16.184C28.6775 16.184 29.0695 16.076 29.3815 15.86C29.7015 15.636 29.9255 15.34 30.0535 14.972H31.2295C31.0535 15.604 30.7015 16.12 30.1735 16.52C29.6455 16.912 28.9895 17.108 28.2055 17.108C27.5815 17.108 27.0215 16.968 26.5255 16.688C26.0375 16.408 25.6535 16.012 25.3735 15.5C25.0935 14.98 24.9535 14.38 24.9535 13.7C24.9535 13.02 25.0895 12.424 25.3615 11.912C25.6335 11.4 26.0135 11.008 26.5015 10.736C26.9975 10.456 27.5655 10.316 28.2055 10.316C28.8295 10.316 29.3815 10.452 29.8615 10.724C30.3415 10.996 30.7095 11.372 30.9655 11.852C31.2295 12.324 31.3615 12.86 31.3615 13.46ZM30.2335 13.232C30.2335 12.816 30.1415 12.46 29.9575 12.164C29.7735 11.86 29.5215 11.632 29.2015 11.48C28.8895 11.32 28.5415 11.24 28.1575 11.24C27.6055 11.24 27.1335 11.416 26.7415 11.768C26.3575 12.12 26.1375 12.608 26.0815 13.232H30.2335ZM41.5629 10.424L39.5109 17H38.3829L36.7989 11.78L35.2149 17H34.0869L32.0229 10.424H33.1389L34.6509 15.944L36.2829 10.424H37.3989L38.9949 15.956L40.4829 10.424H41.5629Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="card-sm">
                                    <img className='card-sm-img' src={r4}></img>
                                    <div className='card-sm-content'>
                                        <span className='text-navy' style={{ fontSize: 15 }}>Nhẫn cưới Kim cương, Chung Đôi Vàng trắng</span>
                                        <span className='text-yellow' style={{ fontSize: 20 }}>15.000.000 đ</span>
                                        <span className='text-line'>22.000.000đ (-15%)</span>
                                        <div className='card-sm-bt'>
                                            <div className="card__view">
                                                <img src={view}></img>
                                                <a className='btn-txt' href='#'>Xem</a>
                                            </div>
                                            <div className="card__add">
                                                <a className='btn-txt' href='#'>Thêm</a>
                                                <img src={add}></img>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='tag-sm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="20" viewBox="0 0 58 26" fill="none">
                                            <rect width="58" height="26" fill="#28A745" />
                                            <path d="M23.5 17H22.408L18.016 10.34V17H16.924V8.624H18.016L22.408 15.272V8.624H23.5V17ZM31.3615 13.46C31.3615 13.668 31.3495 13.888 31.3255 14.12H26.0695C26.1095 14.768 26.3295 15.276 26.7295 15.644C27.1375 16.004 27.6295 16.184 28.2055 16.184C28.6775 16.184 29.0695 16.076 29.3815 15.86C29.7015 15.636 29.9255 15.34 30.0535 14.972H31.2295C31.0535 15.604 30.7015 16.12 30.1735 16.52C29.6455 16.912 28.9895 17.108 28.2055 17.108C27.5815 17.108 27.0215 16.968 26.5255 16.688C26.0375 16.408 25.6535 16.012 25.3735 15.5C25.0935 14.98 24.9535 14.38 24.9535 13.7C24.9535 13.02 25.0895 12.424 25.3615 11.912C25.6335 11.4 26.0135 11.008 26.5015 10.736C26.9975 10.456 27.5655 10.316 28.2055 10.316C28.8295 10.316 29.3815 10.452 29.8615 10.724C30.3415 10.996 30.7095 11.372 30.9655 11.852C31.2295 12.324 31.3615 12.86 31.3615 13.46ZM30.2335 13.232C30.2335 12.816 30.1415 12.46 29.9575 12.164C29.7735 11.86 29.5215 11.632 29.2015 11.48C28.8895 11.32 28.5415 11.24 28.1575 11.24C27.6055 11.24 27.1335 11.416 26.7415 11.768C26.3575 12.12 26.1375 12.608 26.0815 13.232H30.2335ZM41.5629 10.424L39.5109 17H38.3829L36.7989 11.78L35.2149 17H34.0869L32.0229 10.424H33.1389L34.6509 15.944L36.2829 10.424H37.3989L38.9949 15.956L40.4829 10.424H41.5629Z" fill="white" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="Content-4-Card">
                            <div className="card-md">
                                <img src={vongCo}></img>
                                <div className='card-md-content' style={{ alignItems: 'flex-end' }}>
                                    <span className='text-sm'>Vòng cổ</span>
                                    <span className='text-lg'>Bộ sưu tập vòng cổ</span>
                                    <div className='text-arrow text-navy'>
                                        <span className='text-sm'>XEM THÊM</span>
                                        <img src={arrowRight}></img>
                                    </div>
                                </div>
                            </div>
                            <div className="card-md">
                                <div className='card-md-content'>
                                    <span className='text-sm'>Nhẫn</span>
                                    <span className='text-lg'>Bộ sưu tập nhẫn</span>
                                    <div className='text-arrow text-navy'>
                                        <span className='text-sm '>XEM THÊM</span>
                                        <img src={arrowRight}></img>
                                    </div>
                                </div>
                                <img src={nhanDoi}></img>
                            </div>
                        </div>
                        <div className="Content-Swiper">
                            <div className='Content-Swiper--title'>
                                <div className='card-md-content'>
                                    <span className='text-sm'>Nhận xét</span>
                                    <span className='text-lg'>Đánh giá của khách hàng</span>
                                    <div className='text-arrow text-navy'>
                                        <span className='text-sm'>XEM THÊM</span>
                                        <img src={arrowRight}></img>
                                    </div>
                                </div>
                            </div>
                            <div className='Content-Swiper--rattings'>
                                <SwiperCards></SwiperCards>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>

    </>)
}