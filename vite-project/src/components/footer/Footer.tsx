import typeCards from '../../assets/images/Frame 10950.png';
import btnEmail from '../../assets/images/Frame 10960.png';
export const Footer = () => {
    return (<>
        <footer>
            <section className=" bg-primary-2 lg:h-[387px]">
                <div className="w-full pr-5 pl-5 mr-auto ml-auto lg:max-w-screen-xl h-full">
                    <div className="flex flex-row flex-wrap justify-between  py-6 md:py-10 lg:py-20 gap-12 h-full">
                        <div className="flex flex-col gap-8 w-full lg:w-[30%]">
                            <span className='text-white text-header-2 font-semibold'>VỀ CHÚNG TÔI</span>
                            <a className='text-neutral-1-400 text-body-2 font-normal'>Chúng tôi luôn cung cấp cho bạn những sản phẩm trang sức đẹp và chất lượng nhất, mẫu mã được thiết kế tinh xảo hoàn mỹ nhất!</a>
                            <div className='flex flex-col'>
                                <a className='text-neutral-1-400 text-body-2 font-normal pb-4'>Phương thức thanh toán</a>
                                <img src={typeCards} width={200} height={30}></img>
                            </div>

                        </div>
                        <div className='flex flex-col md:flex-row gap-12 lg:w-[65%]'>
                            <div className='flex w-full md:w-1/2 justify-between'>
                                <div className="w-1/2 flex flex-col">
                                    <h1 className='text-white text-header-2 font-semibold mb-8'>THÔNG TIN</h1>
                                    <a className='text-neutral-1-400 text-body-2 font-normal mb-3'>Giới thiệu</a>
                                    <a className='text-neutral-1-400 text-body-2 font-normal mb-3'>Thông tin</a>
                                    <a className='text-neutral-1-400 text-body-2 font-normal mb-3'>Liên hệ</a>
                                    <a className='text-neutral-1-400 text-body-2 font-normal mb-3'>Sự kiện</a>

                                </div>
                                <div className="w-1/2 flex flex-col">
                                    <span className='text-white text-header-2 font-semibold mb-8'>CHÍNH SÁCH</span>
                                    <a className='text-neutral-1-400 text-body-2 font-normal mb-3'>Vận chuyển</a>
                                    <a className='text-neutral-1-400 text-body-2 font-normal mb-3'>Hỗ trợ</a>
                                    <a className='text-neutral-1-400 text-body-2 font-normal mb-3'>Đổi & trả hàng</a>
                                    <a className='text-neutral-1-400 text-body-2 font-normal mb-3'>Thanh toán</a>
                                </div>
                            </div>
                            <div className="flex flex-col gap-8 md:w-1/2">
                                <span className='text-white text-header-2 font-semibold'>NHẬN TIN MỚI NHẤT</span>
                                <a className='text-neutral-1-400 text-body-2 font-normal'>Đăng ký theo dõi để cập nhật những tin tức mới nhanh nhất và nhiều chương trình khuyến mãi từ cữa hàng của chúng tôi.</a>
                                <form className='form-email w-[264px] h-10 flex justify-between '>
                                    <input className='w-[194px] bg-primary-2 text-caption-2 text-neutral-1-400 font-normal border-b border-neutral-2-100' placeholder="Nhập email của bạn"></input>
                                    <button>
                                        <img src={btnEmail}></img>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    </>)
}
