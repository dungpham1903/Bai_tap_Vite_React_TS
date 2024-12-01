

import vongCo from '../../assets/images/vong-co.png';
import nhanDoi from '../../assets/images/nhan-doi.png';

export const About = () => {
    return (<>
        <div>
            <section className='banner bg-bannerProduct bg-cover relative w-screen  z-0'>
                <div className="absolute inset-0 bg-primary-1 opacity-80"></div>
                <div className='w-full px-4 mx-auto'>
                    <div className='w-full h-80 flex justify-center flex-wrap'>
                        <div className='flex flex-col items-center justify-center text-center relative w-full'>
                            <div className="flex flex-col justify-between">
                                <span className="text-heading-2 text-white font-semibold mb-4">Giới thiệu</span>
                                <div className="flex text-body-1 font-normal text-white ">
                                    <span className="opacity-80">Trang chủ</span>
                                    <span className="flex items-center mx-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 7 12" fill="none">
                                            <path d="M6.1776 5.619L1.38085 0.823847C1.17037 0.613901 0.829363 0.613901 0.618353 0.823847C0.407875 1.03379 0.407875 1.3748 0.618353 1.58475L5.03463 5.99943L0.618884 10.4141C0.408406 10.6241 0.408406 10.9651 0.618884 11.1755C0.829362 11.3855 1.1709 11.3855 1.38138 11.1755L6.17813 6.38044C6.38537 6.17266 6.38537 5.82629 6.1776 5.619Z" fill="white" />
                                        </svg>
                                    </span>
                                    <span>Giới thiệu</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="my-16">
                <div className="'w-full px-4 mx-auto lg:max-w-5xl xl:max-w-7xl">
                    <div className='grid grid-cols-1 gap-10 xl:grid-cols-3'>
                        <div className="flex flex-col gap-6 xl:col-span-1">
                            <span className="text-heading-3 text-neutral-1-900 font-medium">Về chúng tôi</span>
                            <span className="text-body-1 text-neutral-1-600 font-normal border-t border-neutral-2-200 pt-6">Noven tự tin là nhà cung cấp những trang sức quý giá và đồng thời là một trong những công ty lớn nhất Việt Nam về trang sức. Trang sức được cung cấp ra ngoài thị trường đều làm hài lòng khách hàng.</span>
                        </div>
                        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:xl:col-span-2">
                            <div className="flex flex-col justify-center items-center text-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clipPath="url(#clip0_4347_9146)">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4.05546 4.05546C4.57118 3.53973 5.27065 3.25 6 3.25H16C16.4641 3.25 16.9092 3.43437 17.2374 3.76256C17.5656 4.09075 17.75 4.53587 17.75 5V7.25H18C18.4641 7.25 18.9092 7.43437 19.2374 7.76256C19.5656 8.09075 19.75 8.53587 19.75 9V12C19.75 12.4142 19.4142 12.75 19 12.75C18.5858 12.75 18.25 12.4142 18.25 12V9C18.25 8.93369 18.2237 8.87011 18.1768 8.82322C18.1299 8.77634 18.0663 8.75 18 8.75H6C5.56137 8.75 5.13355 8.64521 4.75 8.44949V18C4.75 18.3315 4.8817 18.6495 5.11612 18.8839C5.35054 19.1183 5.66848 19.25 6 19.25H18C18.0663 19.25 18.1299 19.2237 18.1768 19.1768C18.2237 19.1299 18.25 19.0663 18.25 19V16C18.25 15.5858 18.5858 15.25 19 15.25C19.4142 15.25 19.75 15.5858 19.75 16V19C19.75 19.4641 19.5656 19.9092 19.2374 20.2374C18.9092 20.5656 18.4641 20.75 18 20.75H6C5.27065 20.75 4.57118 20.4603 4.05546 19.9445C3.53973 19.4288 3.25 18.7293 3.25 18V6C3.25 5.27065 3.53973 4.57118 4.05546 4.05546ZM4.75 6C4.75 6.33152 4.8817 6.64946 5.11612 6.88388C5.35054 7.1183 5.66848 7.25 6 7.25H16.25V5C16.25 4.93369 16.2237 4.87011 16.1768 4.82322C16.1299 4.77634 16.0663 4.75 16 4.75H6C5.66848 4.75 5.35054 4.8817 5.11612 5.11612C4.8817 5.35054 4.75 5.66848 4.75 6Z" fill="#161C24" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M16 12.75C15.6685 12.75 15.3505 12.8817 15.1161 13.1161C14.8817 13.3505 14.75 13.6685 14.75 14C14.75 14.3315 14.8817 14.6495 15.1161 14.8839C15.3505 15.1183 15.6685 15.25 16 15.25H19.25V12.75H16ZM14.0555 12.0555C14.5712 11.5397 15.2707 11.25 16 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12V16C20.75 16.4142 20.4142 16.75 20 16.75H16C15.2707 16.75 14.5712 16.4603 14.0555 15.9445C13.5397 15.4288 13.25 14.7293 13.25 14C13.25 13.2707 13.5397 12.5712 14.0555 12.0555Z" fill="#161C24" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4347_9146">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <div className='flex flex-col px-4 pb-4 pt-2 gap-4'>
                                    <span className="font-poppins text-heading-4  text-error-400 font-normal">01. <span className="text-heading-4 text-neutral-1-900 ">Trả góp 0% lãi xuất</span></span>
                                    <span className="text-neutral-1-600 text-body-2 font-normal"> Áp dụng dễ dàng qua thẻ tín dụng của hơn 20 ngân hàng </span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center ">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clipPath="url(#clip0_4347_9151)">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7 15.75C6.30964 15.75 5.75 16.3096 5.75 17C5.75 17.6904 6.30964 18.25 7 18.25C7.69036 18.25 8.25 17.6904 8.25 17C8.25 16.3096 7.69036 15.75 7 15.75ZM4.25 17C4.25 15.4812 5.48122 14.25 7 14.25C8.51878 14.25 9.75 15.4812 9.75 17C9.75 18.5188 8.51878 19.75 7 19.75C5.48122 19.75 4.25 18.5188 4.25 17Z" fill="#161C24" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17 15.75C16.3096 15.75 15.75 16.3096 15.75 17C15.75 17.6904 16.3096 18.25 17 18.25C17.6904 18.25 18.25 17.6904 18.25 17C18.25 16.3096 17.6904 15.75 17 15.75ZM14.25 17C14.25 15.4812 15.4812 14.25 17 14.25C18.5188 14.25 19.75 15.4812 19.75 17C19.75 18.5188 18.5188 19.75 17 19.75C15.4812 19.75 14.25 18.5188 14.25 17Z" fill="#161C24" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M4 5.75C3.9337 5.75 3.87011 5.77634 3.82322 5.82322C3.77634 5.87011 3.75 5.9337 3.75 6V16.25H5C5.41421 16.25 5.75 16.5858 5.75 17C5.75 17.4142 5.41421 17.75 5 17.75H3C2.58579 17.75 2.25 17.4142 2.25 17V6C2.25 5.53587 2.43437 5.09075 2.76256 4.76256C3.09075 4.43437 3.53587 4.25 4 4.25H13C13.4142 4.25 13.75 4.58579 13.75 5V5.25H18C18.2634 5.25 18.5076 5.38822 18.6431 5.61413L21.6368 10.6036C21.6743 10.6637 21.7035 10.7295 21.7229 10.7994C21.7424 10.8696 21.7512 10.9413 21.75 11.0123V17C21.75 17.4142 21.4142 17.75 21 17.75H19C18.5858 17.75 18.25 17.4142 18.25 17C18.25 16.5858 18.5858 16.25 19 16.25H20.25V11.75H13.75V16.25H15C15.4142 16.25 15.75 16.5858 15.75 17C15.75 17.4142 15.4142 17.75 15 17.75H9C8.58579 17.75 8.25 17.4142 8.25 17C8.25 16.5858 8.58579 16.25 9 16.25H12.25V5.75H4ZM13.75 6.75V10.25H19.6754L17.5754 6.75H13.75Z" fill="#161C24" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4347_9151">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <div className='flex flex-col px-4 pb-4 pt-2 gap-4'>
                                    <span className="font-poppins text-heading-4  text-error-400 font-normal">02. <span className="text-heading-4 text-neutral-1-900 ">Giao hàng 3h</span></span>
                                    <span className="text-neutral-1-600 text-body-2 font-normal">Sở hữu ngay món trang sức yêu thích chỉ trong vòng 3 giờ</span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clipPath="url(#clip0_4347_9157)">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9 3.75C7.20507 3.75 5.75 5.20507 5.75 7C5.75 8.79493 7.20507 10.25 9 10.25C10.7949 10.25 12.25 8.79493 12.25 7C12.25 5.20507 10.7949 3.75 9 3.75ZM4.25 7C4.25 4.37665 6.37665 2.25 9 2.25C11.6234 2.25 13.75 4.37665 13.75 7C13.75 9.62335 11.6234 11.75 9 11.75C6.37665 11.75 4.25 9.62335 4.25 7Z" fill="#161C24" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M7 15.75C6.13805 15.75 5.3114 16.0924 4.7019 16.7019C4.09241 17.3114 3.75 18.138 3.75 19V21C3.75 21.4142 3.41421 21.75 3 21.75C2.58579 21.75 2.25 21.4142 2.25 21V19C2.25 17.7402 2.75044 16.532 3.64124 15.6412C4.53204 14.7504 5.74022 14.25 7 14.25H11C12.2598 14.25 13.468 14.7504 14.3588 15.6412C15.2496 16.532 15.75 17.7402 15.75 19V21C15.75 21.4142 15.4142 21.75 15 21.75C14.5858 21.75 14.25 21.4142 14.25 21V19C14.25 18.138 13.9076 17.3114 13.2981 16.7019C12.6886 16.0924 11.862 15.75 11 15.75H7Z" fill="#161C24" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.2736 2.94403C15.3764 2.54276 15.7849 2.30076 16.1862 2.4035C17.208 2.66511 18.1136 3.25933 18.7603 4.09249C19.407 4.92566 19.758 5.95036 19.758 7.00506C19.758 8.05977 19.407 9.08447 18.7603 9.91763C18.1136 10.7508 17.208 11.345 16.1862 11.6066C15.7849 11.7094 15.3764 11.4674 15.2736 11.0661C15.1709 10.6648 15.4129 10.2562 15.8142 10.1535C16.5132 9.97451 17.1329 9.56793 17.5754 8.99787C18.0178 8.42782 18.258 7.7267 18.258 7.00506C18.258 6.28343 18.0178 5.58231 17.5754 5.01225C17.1329 4.4422 16.5132 4.03562 15.8142 3.85663C15.4129 3.75388 15.1709 3.3453 15.2736 2.94403Z" fill="#161C24" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M17.274 14.9621C17.3775 14.561 17.7866 14.3199 18.1877 14.4234C19.2028 14.6855 20.1027 15.276 20.747 16.103C21.3914 16.93 21.7441 17.9469 21.7502 18.9953L21.7502 18.9996H21.7502V20.9996C21.7502 21.4138 21.4144 21.7496 21.0002 21.7496C20.586 21.7496 20.2502 21.4138 20.2502 20.9996V19.0019C20.2456 18.2853 20.0043 17.5903 19.5638 17.025C19.1229 16.4592 18.5072 16.0551 17.8127 15.8758C17.4116 15.7722 17.1704 15.3632 17.274 14.9621Z" fill="#161C24" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4347_9157">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <div className='flex flex-col px-4 pb-4 pt-2 gap-4'>
                                    <span className="font-poppins text-heading-4  text-error-400 font-normal">03. <span className="text-heading-4 text-neutral-1-900 ">Người bạn vàng</span></span>
                                    <span className="text-neutral-1-600 text-body-2 font-normal">Giải pháp tài chính cầm đồ Người Bạn Vàng</span>
                                </div>
                            </div>
                            <div className="flex flex-col justify-center items-center text-center ">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g clipPath="url(#clip0_4347_9162)">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M15.5303 8.46967C15.8232 8.76256 15.8232 9.23744 15.5303 9.53033L9.53033 15.5303C9.23744 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7626 8.46967 14.4697L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967Z" fill="#161C24" />
                                            <path d="M9.5 10C9.77614 10 10 9.77614 10 9.5C10 9.22386 9.77614 9 9.5 9C9.22386 9 9 9.22386 9 9.5C9 9.77614 9.22386 10 9.5 10Z" fill="#161C24" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M9.5 9.75C9.63807 9.75 9.75 9.63807 9.75 9.5C9.75 9.36193 9.63807 9.25 9.5 9.25C9.36193 9.25 9.25 9.36193 9.25 9.5C9.25 9.63807 9.36193 9.75 9.5 9.75ZM8.25 9.5C8.25 8.80964 8.80964 8.25 9.5 8.25C10.1904 8.25 10.75 8.80964 10.75 9.5C10.75 10.1904 10.1904 10.75 9.5 10.75C8.80964 10.75 8.25 10.1904 8.25 9.5Z" fill="#161C24" />
                                            <path d="M14.5 15C14.7761 15 15 14.7761 15 14.5C15 14.2239 14.7761 14 14.5 14C14.2239 14 14 14.2239 14 14.5C14 14.7761 14.2239 15 14.5 15Z" fill="#161C24" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M14.5 14.75C14.6381 14.75 14.75 14.6381 14.75 14.5C14.75 14.3619 14.6381 14.25 14.5 14.25C14.3619 14.25 14.25 14.3619 14.25 14.5C14.25 14.6381 14.3619 14.75 14.5 14.75ZM13.25 14.5C13.25 13.8096 13.8096 13.25 14.5 13.25C15.1904 13.25 15.75 13.8096 15.75 14.5C15.75 15.1904 15.1904 15.75 14.5 15.75C13.8096 15.75 13.25 15.1904 13.25 14.5Z" fill="#161C24" />
                                            <path fillRule="evenodd" clipRule="evenodd" d="M12.01 3.76172C11.8189 3.76172 11.6297 3.79949 11.4532 3.87287C11.2767 3.94625 11.1165 4.05379 10.9818 4.1893L10.9803 4.19079L10.2803 4.89079L10.2788 4.89228C9.72648 5.44152 8.97933 5.75002 8.2004 5.75046L7.19997 5.75046C6.81541 5.75046 6.4466 5.90323 6.17467 6.17516C5.90274 6.44708 5.74997 6.8159 5.74997 7.20046V8.20046C5.74953 8.97939 5.44103 9.72696 4.89179 10.2793L4.8903 10.2808L4.1903 10.9808L4.18881 10.9823C4.0533 11.117 3.94577 11.2772 3.87239 11.4537C3.79901 11.6301 3.76123 11.8194 3.76123 12.0105C3.76123 12.2016 3.79901 12.3908 3.87239 12.5672C3.94577 12.7437 4.0533 12.9039 4.18881 13.0386L4.19031 13.0401L4.89179 13.7416C5.44103 14.294 5.74953 15.0411 5.74997 15.82L5.74997 16.8205C5.74997 17.205 5.90274 17.5738 6.17467 17.8458C6.4466 18.1177 6.81541 18.2705 7.19997 18.2705H8.19997C8.9789 18.2709 9.72648 18.5794 10.2788 19.1286L10.2803 19.1301L10.9818 19.8316C11.1165 19.9671 11.2767 20.0747 11.4532 20.148C11.6297 20.2214 11.8189 20.2592 12.01 20.2592C12.2011 20.2592 12.3903 20.2214 12.5667 20.148C12.7432 20.0747 12.9034 19.9671 13.0382 19.8316L13.0396 19.8301L13.7396 19.1301L13.7411 19.1286C14.2935 18.5794 15.0406 18.2709 15.8195 18.2705H16.82C17.2045 18.2705 17.5734 18.1177 17.8453 17.8458C18.1172 17.5738 18.27 17.205 18.27 16.8205V15.8205C18.2704 15.0415 18.5789 14.294 19.1282 13.7416L19.1296 13.7401L19.8296 13.0401L19.8311 13.0386C19.9666 12.9039 20.0742 12.7437 20.1476 12.5672C20.2209 12.3908 20.2587 12.2016 20.2587 12.0105C20.2587 11.8194 20.2209 11.6301 20.1476 11.4537C20.0742 11.2772 19.9666 11.117 19.8311 10.9823L19.8296 10.9808L19.1296 10.2808L19.1282 10.2793C18.5789 9.72696 18.2704 8.97982 18.27 8.20089V7.20046C18.27 6.8159 18.1172 6.44708 17.8453 6.17516C17.5734 5.90323 17.2045 5.75046 16.82 5.75046H15.82C15.041 5.75002 14.2935 5.44152 13.7411 4.89228L13.7396 4.89079L13.0396 4.19079L13.0382 4.1893C12.9034 4.05379 12.7432 3.94625 12.5667 3.87287C12.3903 3.79949 12.2011 3.76172 12.01 3.76172ZM4.24997 7.20046C4.24997 6.41807 4.56078 5.66773 5.11401 5.1145C5.66724 4.56126 6.41758 4.25046 7.19997 4.25046L8.19954 4.25046C8.19948 4.25046 8.19961 4.25046 8.19954 4.25046C8.58201 4.25019 8.94906 4.09883 9.22043 3.82934C9.2202 3.82957 9.22067 3.82911 9.22043 3.82934L9.91815 3.13162C9.91841 3.13137 9.91866 3.13112 9.91891 3.13086C10.1929 2.85553 10.5186 2.63702 10.8772 2.48786C11.2362 2.33857 11.6212 2.26172 12.01 2.26172C12.3988 2.26172 12.7837 2.33857 13.1427 2.48786C13.5014 2.63702 13.8271 2.85554 14.1011 3.13089C14.1013 3.13113 14.1015 3.13138 14.1018 3.13162L14.7988 3.82864C14.7986 3.82844 14.799 3.82885 14.7988 3.82864C15.0702 4.09818 15.4377 4.25019 15.8202 4.25046C15.8202 4.25046 15.8203 4.25046 15.8202 4.25046H16.82C17.6024 4.25046 18.3527 4.56126 18.9059 5.1145C19.4592 5.66773 19.77 6.41807 19.77 7.20046V8.20003C19.7702 8.58251 19.9215 8.9494 20.191 9.2208C20.1912 9.22108 20.1915 9.22135 20.1918 9.22162L20.8888 9.91864C20.8892 9.91902 20.8896 9.91939 20.8899 9.91976C21.1651 10.1937 21.3835 10.5192 21.5326 10.8777C21.6819 11.2367 21.7587 11.6217 21.7587 12.0105C21.7587 12.3993 21.6819 12.7842 21.5326 13.1432C21.3834 13.5018 21.165 13.8274 20.8897 14.1014C20.8894 14.1017 20.8891 14.102 20.8888 14.1023L20.1918 14.7993C20.1916 14.7995 20.192 14.7991 20.1918 14.7993C19.9222 15.0707 19.7702 15.4383 19.77 15.8209V16.8205C19.77 17.6028 19.4592 18.3532 18.9059 18.9064C18.3527 19.4597 17.6024 19.7705 16.82 19.7705H15.8204C15.4378 19.7707 15.0709 19.9221 14.7994 20.1917C14.7992 20.1919 14.7996 20.1915 14.7994 20.1917L14.1018 20.8893C14.1015 20.8896 14.1012 20.8899 14.1009 20.8902C13.8269 21.1655 13.5013 21.3839 13.1427 21.5331C12.7837 21.6823 12.3988 21.7592 12.01 21.7592C11.6212 21.7592 11.2362 21.6823 10.8772 21.5331C10.5187 21.384 10.1932 21.1656 9.91928 20.8904C9.9189 20.8901 9.91853 20.8897 9.91815 20.8893L9.22114 20.1923C9.22086 20.192 9.22059 20.1917 9.22031 20.1915C8.94891 19.922 8.58202 19.7707 8.19954 19.7705H7.19997C6.41758 19.7705 5.66724 19.4597 5.11401 18.9064C4.56078 18.3532 4.24997 17.6028 4.24997 16.8205L4.24997 15.8209C4.24997 15.8208 4.24997 15.821 4.24997 15.8209C4.2497 15.4384 4.0983 15.0713 3.82877 14.7999C3.82856 14.7997 3.82897 14.8001 3.82877 14.7999L3.13114 14.1023C3.13089 14.102 3.13064 14.1018 3.1304 14.1015C2.85505 13.8276 2.63653 13.5019 2.48737 13.1432C2.33808 12.7842 2.26123 12.3993 2.26123 12.0105C2.26123 11.6217 2.33808 11.2367 2.48737 10.8777C2.63653 10.5191 2.85504 10.1934 3.13038 9.9194C3.13063 9.91915 3.13088 9.91889 3.13114 9.91864L3.82815 9.22162C3.82792 9.22186 3.82839 9.22139 3.82815 9.22162C4.09764 8.95025 4.2497 8.58269 4.24997 8.20022C4.24997 8.20016 4.24997 8.20028 4.24997 8.20022V7.20046Z" fill="#161C24" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_4347_9162">
                                                <rect width="24" height="24" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </span>
                                <div className='flex flex-col px-4 pb-4 pt-2 gap-4'>
                                    <span className="font-poppins text-heading-4  text-error-400 font-normal">04. <span className="text-heading-4 text-neutral-1-900 ">Ưu đãi đến 1,5 triệu</span></span>
                                    <span className="text-neutral-1-600 text-body-2 font-normal">Đặt online - nhận ưu đãi tại showroom</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="my-16 bg-neutral-3-50">
                <div className="w-full px-4 mx-auto lg:max-w-5xl xl:max-w-7xl">
                    <div className="grid grid-cols-1 py-9 gap-4 md:grid-cols-2">
                        <div className="flex gap-4">
                            <div className=" w-1/2 flex flex-col gap-4 items-center ">
                                <span className="text-heading-1 text-primary-1 font-semibold">500+</span>
                                <span className="text-header-1 text-neutral-1-900 font-normal">Khách hàng</span>
                            </div>
                            <div className=" w-1/2 flex flex-col gap-4 items-center">
                                <span className="text-heading-1 text-primary-1 font-semibold">100+</span>
                                <span className="text-header-1 text-neutral-1-900 font-normal">Sản phẩm</span>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className=" w-1/2 flex flex-col gap-4 items-center ">
                                <span className="text-heading-1 text-primary-1 font-semibold">99+</span>
                                <span className="text-header-1 text-neutral-1-900 font-normal">Nhân viên</span>
                            </div>
                            <div className=" w-1/2 flex flex-col gap-4 items-center">
                                <span className="text-heading-1 text-primary-1 font-semibold">10+</span>
                                <span className="text-header-1 text-neutral-1-900 font-normal">Năm trong nghề</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="my-16">
                <div className="'w-full px-4 mx-auto lg:max-w-5xl xl:max-w-7xl">
                    <div className="w-full flex flex-col justify-between gap-6 my-20 lg:flex-row">
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
                </div>
            </div>
        </div>
    </>

    )
}