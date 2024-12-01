
import { useGallery } from '../../contexts/GalleryContext';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Field, Label, Radio, RadioGroup } from '@headlessui/react'
import { BsCashCoin } from 'react-icons/bs';
import CheckoutForm from '../../components/form/CheckoutForm';

const plans = [
    { id: 1, name: 'Thanh toán khi nhận hàng', icon: (<BsCashCoin className='w-10 h-10 ' />) },
    {
        id: 2, name: 'Thẻ thanh toán quốc tế ', icon: (
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="#000000" width="800px" height="800px"
                className="w-10 h-10"

                viewBox="0 0 24 24">
                <path d="M16.539 9.186a4.155 4.155 0 0 0-1.451-.251c-1.6 0-2.73.806-2.738 1.963-.01.85.803 1.329 1.418 1.613.631.292.842.476.84.737-.004.397-.504.577-.969.577-.639 0-.988-.089-1.525-.312l-.199-.093-.227 1.332c.389.162 1.09.301 1.814.313 1.701 0 2.813-.801 2.826-2.032.014-.679-.426-1.192-1.352-1.616-.563-.275-.912-.459-.912-.738 0-.247.299-.511.924-.511a2.95 2.95 0 0 1 1.213.229l.15.067.227-1.287-.039.009zm4.152-.143h-1.25c-.389 0-.682.107-.852.493l-2.404 5.446h1.701l.34-.893 2.076.002c.049.209.199.891.199.891h1.5l-1.31-5.939zm-10.642-.05h1.621l-1.014 5.942H9.037l1.012-5.944v.002zm-4.115 3.275.168.825 1.584-4.05h1.717l-2.551 5.931H5.139l-1.4-5.022a.339.339 0 0 0-.149-.199 6.948 6.948 0 0 0-1.592-.589l.022-.125h2.609c.354.014.639.125.734.503l.57 2.729v-.003zm12.757.606.646-1.662c-.008.018.133-.343.215-.566l.111.513.375 1.714H18.69v.001h.001z" /></svg>
        )
    },
    {
        id: 3, name: 'Ví điện tử', icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 296 296"
                className="w-10 h-10"
            >
                <path
                    d="M276,0H20C9,0,0,9,0,20v256c0,11,9,20,20,20h256c11,0,20-9,20-20V20C296,9,287,0,276,0z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    fill="#A50064"
                />
                <g>
                    <path
                        d="M204.8,139c23.5,0,42.5-19,42.5-42.5c0-23.5-19-42.5-42.5-42.5c-23.5,0-42.5,19-42.5,42.5   C162.3,120,181.3,139,204.8,139z M204.8,78.4c10,0,18.1,8.1,18.1,18.1c0,10-8.1,18.1-18.1,18.1c-10,0-18.1-8.1-18.1-18.1   C186.7,86.5,194.8,78.4,204.8,78.4z"
                        fill="#FFFFFF"
                    />
                    <path
                        d="M204.8,157.4c-23.5,0-42.5,19-42.5,42.5c0,23.5,19,42.5,42.5,42.5c23.5,0,42.5-19,42.5-42.5   C247.3,176.4,228.3,157.4,204.8,157.4z M204.8,218c-10,0-18.1-8.1-18.1-18.1c0-10,8.1-18.1,18.1-18.1c10,0,18.1,8.1,18.1,18.1   C222.9,209.9,214.8,218,204.8,218z"
                        fill="#FFFFFF"
                    />
                    <path
                        d="M118.2,157.4c-7.2,0-13.8,2.4-19.1,6.4c-5.3-4-12-6.4-19.1-6.4c-17.6,0-31.9,14.3-31.9,31.9v53.2h24.4V189   c0-4,3.2-7.2,7.2-7.2c4,0,7.2,3.2,7.2,7.2v53.4h24.4V189c0-4,3.2-7.2,7.2-7.2c4,0,7.2,3.2,7.2,7.2v53.4H150v-53.2   C150,171.7,135.8,157.4,118.2,157.4z"
                        fill="#FFFFFF"
                    />
                    <path
                        d="M118.2,54c-7.2,0-13.8,2.4-19.1,6.4c-5.3-4-12-6.4-19.1-6.4C62.3,54,48,68.3,48,85.9V139h24.4V85.6   c0-4,3.2-7.2,7.2-7.2c4,0,7.2,3.2,7.2,7.2V139h24.4V85.6c0-4,3.2-7.2,7.2-7.2c4,0,7.2,3.2,7.2,7.2V139H150V85.9   C150,68.3,135.8,54,118.2,54z"
                        fill="#FFFFFF"
                    />
                </g>
            </svg>
        )
    },
]
export interface CheckoutValues {
    name: string;
    phone: string;
    email: string;
    address: string;
    note: string;
    paymentMethod: string;
}
export const Checkout = () => {
    const { checkoutItems } = useGallery();
    const [selected, setSelected] = useState(plans[0])
    // const navigate = useNavigate();
    const [checkoutData, setCheckoutData] = useState<CheckoutValues>({
        name: '',
        phone: '',
        email: '',
        address: '',
        note: '',
        paymentMethod: '',
    });

    // const handleFormSubmit = (data: CheckoutValues) => {
    //     setCheckoutData(data); // Cập nhật dữ liệu khi form được submit
    // };

    // const handleFormChange = (field: string, value: string) => {
    //     setFormData(prevState => ({
    //         ...prevState,
    //         [field]: value,
    //     }));
    // };
    const totalItemsInCart = checkoutItems.reduce((total, item) => {
        return total + (item.quantity || 0);
    }, 0);
    const totalPriceInCart = checkoutItems.reduce((total, item) => {
        return total + (item.price * (item.quantity || 0));
    }, 0);

    const shipCost = checkoutItems.length > 0 ? 25000 : 0;
    const totalPayment = totalPriceInCart + shipCost;

    // const handleSubmit = () => {
    //     const orderDetails = {
    //         checkoutData,
    //         checkoutItems,
    //         totalPayment,
    //     };
    //     navigate("/CompleteCheckout", { state: orderDetails });
    // }
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
                        </div>
                        <div className="grid grid-cols-1 pb-6 gap-10 xl:grid-cols-3">
                            <div>
                                <div className="col-span-1 flex flex-col gap-6 xl:col-span-2">
                                    <div className="flex flex-col justify-between  text-body-1 font-normal gap-4">
                                        <div className="flex items-center gap-4 bg-neutral-2-50 p-4">
                                            <span className="text-neutral-1-900">THÔNG TIN NHẬN HÀNG</span>
                                        </div>
                                        <CheckoutForm checoutData={checkoutData} />
                                        <div className="flex flex-col items-center gap-4">
                                            <span className="text-body-1 text-neutral-1-900 font-normal p-4 bg-neutral-2-50 w-full">PHƯƠNG THỨC THANH TOÁN</span>
                                            <div className='flex w-full p-4'>
                                                <RadioGroup value={selected} onChange={setSelected} aria-label="Server size" className="flex flex-col w-full gap-6">
                                                    {plans.map((plan) => (
                                                        <Field key={plan.id} className="flex items-center w-full gap-4 justify-start ">
                                                            <Radio
                                                                value={plan}
                                                                className=" group flex size-5 items-center justify-center rounded-full border-2 bg-white data-[checked]:border-primary-1"
                                                            >
                                                                <span className="invisible size-2 rounded-full bg-primary-1 group-data-[checked]:visible" />
                                                            </Radio>
                                                            <span>{plan.icon}</span>
                                                            <Label>{plan.name}</Label>
                                                        </Field>
                                                    ))}
                                                </RadioGroup>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-1 flex flex-col ">
                                    <div className='border-neutral-2-50 border flex flex-col gap-4'>
                                        <span className="text-body-1 text-neutral-1-900 font-normal p-4 bg-neutral-2-50 w-full">TỔNG TIN ĐƠN HÀNG</span>
                                        <div className="flex flex-col gap-6 px-4">
                                            {checkoutItems.length > 0 &&
                                                checkoutItems.map((item) => (
                                                    <div key={item.id} className="flex flex-col gap-4 border-b border-neutral-1-50 pb-4">
                                                        <div className="flex gap-6 items-center justify-between">
                                                            <div className='flex items-center gap-6'>
                                                                <img className="w-28 h-28 object-contain bg-neutral-3-50" src={item.image}></img>
                                                            </div>
                                                            <div className="flex flex-col gap-4 h-full justify-between md:w-[320px]">
                                                                <Link to={`/product-detail/${item.id}`}>
                                                                    <span className="text-body-1 text-neutral-1-900 font-normal ">{item.name}</span>
                                                                </Link>
                                                                <div className="flex gap-2 justify-between">
                                                                    <span className="text-body-1 text-neutral-1-600 font-normal">Giá:</span>
                                                                    <span className="text-body-1 text-secondary-1 font-semibold">{item.price.toLocaleString()}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                        <div className="flex flex-col p-4 text-body-1 font-normal text-neutral-1-600 gap-6">
                                            <div className="flex justify-between">
                                                <span >Tổng số mặt hàng</span>
                                                <span>{totalItemsInCart}</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Tạm tính</span>
                                                <span>{totalPriceInCart.toLocaleString()} đ</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Chiết khấu/Giảm giá</span>
                                                <span className="text-error-400 font-semibold">0%</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span >Tổng cộng đơn hàng</span>
                                                <span>{totalPriceInCart.toLocaleString()} đ</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Phí giao hàng</span>
                                                <span>{shipCost.toLocaleString()} đ</span>
                                            </div>

                                            <div className="flex flex-col gap-6 border-t border-neutral-2-50 pt-6">
                                                <div className="flex justify-between text-header-2 text-primary-1 font-medium">
                                                    <span>TỔNG TIỀN</span>
                                                    <span>{totalPayment.toLocaleString()} đ</span>
                                                </div>
                                                <button
                                                    onClick={() => handleSubmit()}
                                                    className="bg-primary-1 text-body-2 font-normal text-white h-12">HOÀN TẤT THANH TOÁN</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div >
            </div >
        </>
    )
}