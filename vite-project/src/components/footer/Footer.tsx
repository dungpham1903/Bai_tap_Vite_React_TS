import './footer.scss';
import typeCards from '../../assets/images/Frame 10950.png';
import btnEmail from '../../assets/images/Frame 10960.png';
export const Footer = () => {
    return (<>
        <footer>
            <section className="footer-section">
                <div className="footer-container">
                    <div className="footer-content">
                        <div className="content__item item-1">
                            <span className='subject'>VỀ CHÚNG TÔI</span>
                            <a>Chúng tôi luôn cung cấp cho bạn những sản phẩm trang sức đẹp và chất lượng nhất, mẫu mã được thiết kế tinh xảo hoàn mỹ nhất!</a>

                            <a className=''>Phương thức thanh toán</a>
                            <img src={typeCards} width={200} height={30}></img>

                        </div>
                        <div className="content__item item-2">
                            <h1 className='subject'>THÔNG TIN</h1>
                            <a>Giới thiệu</a>
                            <a>Thông tin</a>
                            <a>Liên hệ</a>
                            <a>Sự kiện</a>

                        </div>
                        <div className="content__item item-2">
                            <span className='subject'>CHÍNH SÁCH</span>
                            <a>Vận chuyển</a>
                            <a>Hỗ trợ</a>
                            <a>Đổi & trả hàng</a>
                            <a>Thanh toán</a>
                        </div>
                        <div className="content__item item-3">
                            <span className='subject'>NHẬN TIN MỚI NHẤT</span>
                            <a>Đăng ký theo dõi để cập nhật những tin tức mới nhanh nhất và nhiều chương trình khuyến mãi từ cữa hàng của chúng tôi.</a>
                            <form className='form-email'>
                                <input placeholder="Nhập email của bạn"></input>
                                <button>
                                    <img src={btnEmail}></img>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    </>)
}
