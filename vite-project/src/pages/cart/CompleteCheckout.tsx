import React from 'react';
import { FaCircleCheck } from 'react-icons/fa6';
import { Link, useLocation } from 'react-router-dom';

const CompleteCheckout = () => {
    const location = useLocation();
    const { formData, checkoutItems, totalPayment } = location.state || {};
    return (
        <>
            <div className="my-16">
                <div className="'w-full px-4 mx-auto lg:max-w-5xl xl:max-w-7xl">
                    <div className='flex flex-col'>
                        <div className="flex items-center gap-2 text-header-2 font-normal text-neutral-1-900 mb-[34px]">
                            <span>Giỏ hàng của bạn </span><br className="min-[375px]:hidden" />
                            <span className="flex items-center mx-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 7 12" fill="none">
                                    <path d="M6.1776 5.619L1.38085 0.823847C1.17037 0.613901 0.829363 0.613901 0.618353 0.823847C0.407875 1.03379 0.407875 1.3748 0.618353 1.58475L5.03463 5.99943L0.618884 10.4141C0.408406 10.6241 0.408406 10.9651 0.618884 11.1755C0.829362 11.3855 1.1709 11.3855 1.38138 11.1755L6.17813 6.38044C6.38537 6.17266 6.38537 5.82629 6.1776 5.619Z" fill="black" />
                                </svg>
                            </span>
                            <span>Thanh toán</span><br className="min-[375px]:hidden" />
                            <span className="flex items-center mx-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 7 12" fill="none">
                                    <path d="M6.1776 5.619L1.38085 0.823847C1.17037 0.613901 0.829363 0.613901 0.618353 0.823847C0.407875 1.03379 0.407875 1.3748 0.618353 1.58475L5.03463 5.99943L0.618884 10.4141C0.408406 10.6241 0.408406 10.9651 0.618884 11.1755C0.829362 11.3855 1.1709 11.3855 1.38138 11.1755L6.17813 6.38044C6.38537 6.17266 6.38537 5.82629 6.1776 5.619Z" fill="black" />
                                </svg>
                            </span>
                            <span>Hoàn tất đơn hàng</span><br className="min-[375px]:hidden" />
                        </div>
                        <div className='w-full flex flex-col items-center bg-white border border-neutral-1-50 p-4 rounded-lg'>
                            <div className='flex flex-col gap-4 w-full'>
                                <div className="flex flex-col gap-4 p-6 items-center text-center">
                                    <div>
                                        <FaCircleCheck color="#c48c46" size={48} />
                                    </div>
                                    <span className="text-neutral-1-900 font-semibold text-header-1">Đặt hàng thành công!</span>
                                    <span className="text-neutral-1-600 font-normal text-body-2">Đơn hàng sẽ sớm được giao đến bạn</span>

                                </div>
                            </div>
                            <div className="grid grid-cols-1 pb-6 gap-10 xl:grid-cols-2 w-full">
                                <div className="col-span-1 flex flex-col gap-6  border-neutral-2-50 border">
                                    <div className="flex flex-col justify-between  text-body-1 font-normal gap-4">
                                        <div className="flex items-center gap-4 bg-neutral-2-50 p-4">
                                            <span className="text-neutral-1-900">THÔNG TIN NHẬN HÀNG</span>
                                        </div>
                                        <div className='flex flex-col w-full px-4 gap-4'>
                                            <div className='flex justify-between'>
                                                <span>Tên người nhận</span>
                                                <span>{formData?.name}</span>
                                            </div>
                                            <div className='flex justify-between'>
                                                <span>Email</span>
                                                <span>{formData?.email}</span>
                                            </div>
                                            <div className='flex justify-between'>
                                                <span>Số điện</span>
                                                <span>{formData?.phone}</span>
                                            </div>
                                            <div className='flex justify-between'>
                                                <span>Đại chỉ</span>
                                                <span>{formData?.address}</span>
                                            </div>
                                            <div className='flex justify-between'>
                                                <span>Phương thức thanh toán</span>
                                                <span>{formData?.paymentType}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1 flex flex-col w-full">
                                    <div className='border-neutral-2-50 border flex flex-col gap-4'>
                                        <span className="text-body-1 text-neutral-1-900 font-normal p-4 bg-neutral-2-50 w-full">TỔNG TIN ĐƠN HÀNG</span>
                                        <div className="flex flex-col gap-6 p-4 border-b border-neutral-1-50">
                                            {checkoutItems.length > 0 &&
                                                checkoutItems.map((item) => (
                                                    <div key={item.id} className="flex flex-col gap-4 ">
                                                        <div className="flex gap-6 items-center justify-between">
                                                            <div className='flex items-center gap-6 w-32 h-32 '>
                                                                <img className="w-32 h-32 object-contain bg-neutral-3-50" src={item.image}></img>
                                                            </div>
                                                            <div className="flex flex-col gap-4 h-full justify-between ">
                                                                <Link to={`/product-detail/${item.id}`}>
                                                                    <span className="text-body-1 text-neutral-1-900 font-normal ">{item.name}</span>
                                                                </Link>
                                                                <div className="flex gap-2 justify-end">
                                                                    <span className="text-body-1 text-neutral-1-600 font-normal">Giá:</span>
                                                                    <span className="text-body-1 text-secondary-1 font-semibold">{item.price.toLocaleString()}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                        <div className="flex flex-col p-4 text-body-1 font-normal text-neutral-1-600 gap-6">
                                            <div className="flex flex-col gap-6  border-neutral-2-50">
                                                <div className="flex justify-between text-header-2 text-primary-1 font-medium">
                                                    <span>TỔNG TIỀN</span>
                                                    <span>{totalPayment.toLocaleString()} đ</span>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className='bg-primary-1 text-white w-48 p-4 rounded-lg'>Tiếp tục mua sắm</button>

                        </div>

                    </div>
                </div >
            </div >
        </>
    );
};

export default CompleteCheckout;