import mapAddress from '../../assets/images/address.png';
import FormContact from './FormContact';

export const Contact = () => {

    return (<>
        <div>
            <section className='banner bg-bannerProduct bg-cover relative w-screen  z-0'>
                <div className="absolute inset-0 bg-primary-1 opacity-80"></div>
                <div className='w-full px-4 mx-auto'>
                    <div className='w-full h-80 flex justify-center flex-wrap'>
                        <div className='flex flex-col items-center justify-center text-center relative w-full'>
                            <div className="flex flex-col justify-between">
                                <span className="text-heading-2 text-white font-semibold mb-4">Liên hệ</span>
                                <div className="flex text-body-1 font-normal text-white ">
                                    <span className="opacity-80">Trang chủ</span>
                                    <span className="flex items-center mx-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 7 12" fill="none">
                                            <path d="M6.1776 5.619L1.38085 0.823847C1.17037 0.613901 0.829363 0.613901 0.618353 0.823847C0.407875 1.03379 0.407875 1.3748 0.618353 1.58475L5.03463 5.99943L0.618884 10.4141C0.408406 10.6241 0.408406 10.9651 0.618884 11.1755C0.829362 11.3855 1.1709 11.3855 1.38138 11.1755L6.17813 6.38044C6.38537 6.17266 6.38537 5.82629 6.1776 5.619Z" fill="white" />
                                        </svg>
                                    </span>
                                    <span>Liên hệ</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="Noven-Contact">
                <div className="my-16">
                    <div className="'w-full px-4 mx-auto lg:max-w-5xl xl:max-w-7xl">
                        <div className="flex flex-col gap-4">
                            <span className="text-heading-2 text-neutral-1-900 font-semibold">Thông tin liên hệ</span>
                            <div className="grid grid-cols-1 gap-10 xl:grid-cols-2">
                                <div className="flex flex-col gap-5">
                                    <div className="grid grid-cols-1 gap-4 text-body-1 font-normal text-neutral-1-900 md:grid-cols-3 xl:grid-cols-1">
                                        <div className="flex flex-col gap-2 ">
                                            <div className="flex gap-2 items-center">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <g clipPath="url(#clip0_5298_2777)">
                                                            <path d="M10.0001 0C6.00613 0 2.75684 3.2493 2.75684 7.2432C2.75684 12.1998 9.23883 19.4763 9.51481 19.7836C9.77402 20.0723 10.2266 20.0718 10.4854 19.7836C10.7613 19.4763 17.2433 12.1998 17.2433 7.2432C17.2432 3.2493 13.994 0 10.0001 0ZM10.0001 10.8875C7.99063 10.8875 6.35586 9.25266 6.35586 7.2432C6.35586 5.23375 7.99066 3.59898 10.0001 3.59898C12.0095 3.59898 13.6443 5.23379 13.6443 7.24324C13.6443 9.2527 12.0095 10.8875 10.0001 10.8875Z" fill="#C48C46" />
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_5298_2777">
                                                                <rect width="20" height="20" fill="white" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                                <span className="text-neutral-1-600">Địa chỉ</span>
                                            </div>
                                            <span className="ml-7">Số 1 Cống Quỳnh, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex gap-2 items-center">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <g clipPath="url(#clip0_4347_9419)">
                                                            <g clipPath="url(#clip1_4347_9419)">
                                                                <path d="M18.3993 13.122C17.1748 13.1224 15.9724 12.9313 14.833 12.5551C14.2747 12.3648 13.5884 12.5398 13.2478 12.8898L10.9995 14.5881C8.39112 13.1968 6.78416 11.5913 5.41024 9.00338L7.05721 6.81266C7.48515 6.38503 7.6385 5.7605 7.45436 5.17462C7.07588 4.02942 6.88343 2.82776 6.88305 1.60276C6.88283 0.717816 6.16266 -0.00190866 5.27776 -0.0016346L1.60484 -0.000497043C0.719948 -0.000222978 0.000222975 0.719948 0.000497036 1.60484C0.00363849 11.7481 8.25817 19.9974 18.4014 19.9943C19.2863 19.994 20.006 19.2739 20.0057 18.389L20.0046 14.7263C20.0043 13.8415 19.2841 13.1217 18.3993 13.122Z" fill="#C48C46" />
                                                            </g>
                                                        </g>
                                                        <defs>
                                                            <clipPath id="clip0_4347_9419">
                                                                <rect width="20" height="20" fill="white" />
                                                            </clipPath>
                                                            <clipPath id="clip1_4347_9419">
                                                                <rect width="20" height="20" fill="white" transform="rotate(-0.0177453)" />
                                                            </clipPath>
                                                        </defs>
                                                    </svg>
                                                </span>
                                                <span className="text-neutral-1-600">Số điện thoại</span>
                                            </div>
                                            <span className="ml-7">028 0974 847</span>
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex gap-2 items-center">
                                                <span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <path d="M19.8239 4.31055L13.7583 10.175L19.8239 16.0394C19.9335 15.8163 20.0001 15.5698 20.0001 15.3065V5.04337C20.0001 4.78007 19.9335 4.53356 19.8239 4.31055Z" fill="#C48C46" />
                                                        <path d="M18.2423 3.33301H1.75797C1.48738 3.33301 1.23406 3.39774 1.00488 3.50444L8.75735 11.0103C9.44281 11.6774 10.5575 11.6774 11.243 11.0103L18.9954 3.50444C18.7663 3.39774 18.5129 3.33301 18.2423 3.33301Z" fill="#C48C46" />
                                                        <path d="M0.176172 4.31055C0.0665235 4.53356 0 4.78007 0 5.04337V15.3065C0 15.5698 0.0665235 15.8164 0.176172 16.0394L6.24176 10.175L0.176172 4.31055Z" fill="#C48C46" />
                                                        <path d="M12.9298 10.9814L12.0715 11.8167C10.9294 12.9281 9.0709 12.9281 7.92875 11.8167L7.07047 10.9814L1.00488 16.8459C1.23406 16.9526 1.48738 17.0173 1.75797 17.0173H18.2423C18.5129 17.0173 18.7663 16.9526 18.9954 16.8459L12.9298 10.9814Z" fill="#C48C46" />
                                                    </svg>
                                                </span>
                                                <span className="text-neutral-1-600">Email</span>
                                            </div>
                                            <span className="ml-7">info@gmail.com</span>
                                        </div>
                                    </div>
                                    <div className='relative w-full h-[252px] md:h-[378px] xl:h-[252px]'>
                                        <span className='absolute top-7 left-28'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                                                <circle cx="19.5" cy="19.5" r="19.5" fill="#003468" fillOpacity="0.2" />
                                                <circle cx="19.4996" cy="19.5016" r="13.65" fill="#003468" fillOpacity="0.4" />
                                                <g filter="url(#filter0_b_4347_9431)">
                                                    <circle cx="19.5002" cy="19.4992" r="7.8" fill="#003468" />
                                                </g>
                                                <defs>
                                                    <filter id="filter0_b_4347_9431" x="-18.2998" y="-18.3008" width="75.6001" height="75.5996" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation="15" />
                                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_4347_9431" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_4347_9431" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                        </span>
                                        <img className="w-full h-full object-cover" src={mapAddress} alt="" />
                                    </div>
                                </div>
                                <FormContact></FormContact>
                                {/* <form className='flex flex-col gap-6 text-body-2 font-normal'>
                                    <div className='flex flex-col gap-3'>
                                        <span className='font-semibold'>Họ và tên</span>
                                        <input className="px-6 py-3 border border-neutral-2-200 rounded-sm" type="text" placeholder='Nhập họ tên của bạn' />
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <span className='font-semibold'>Email</span>
                                        <input className="px-6 py-3 border border-neutral-2-200 rounded-sm" type="text" placeholder='Nhập email của bạn' />
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <span className='font-semibold'>Điện thoại</span>
                                        <input className="px-6 py-3 border border-neutral-2-200 rounded-sm" type="text" placeholder='Nhập số điện thoại của bạn' />
                                    </div>
                                    <div className='flex flex-col gap-3'>
                                        <span className='font-semibold'>Nội dung</span>
                                        <input className="px-6 py-3 h-[86px] border border-neutral-2-200 rounded-sm" type="text" placeholder='Nhập nội dung của bạn' />
                                    </div>
                                    <button className=' bg-primary-1 text-body-2 text-white font-normal py-3'>GỬI</button>
                                </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>

    )
}