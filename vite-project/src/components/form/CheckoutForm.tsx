import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Input } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { AddressParams } from '../../types/AddressTypes';
import { IoIosArrowDown } from 'react-icons/io';
import clsx from 'clsx'
import validate from '../../utils/validate';
import { useFormik } from 'formik';
import { citiesApi } from '../../services/api/citiesApi';
import districtsApi from '../../services/api/districtsApi';
import wardsApi from '../../services/api/wardsApi';
import { CheckoutValues } from '../../pages/cart/Checkout';

// interface CheckoutFormProps {
//     formData: CheckoutFormValues;
//     onChange: (field: string, value: string) => void;
// }
interface CheckoutFormProps {
    checkoutData: CheckoutValues;
}
const CheckoutForm: React.FC<CheckoutFormProps> = ({ checkoutData }) => {
    const [query, setQuery] = useState('')
    const [cities, setCities] = useState<AddressParams[]>([]);
    const [districts, setDistricts] = useState<AddressParams[]>([]);
    const [wards, setWards] = useState<AddressParams[]>([]);
    const [selectedCity, setSelectedCity] = useState<AddressParams | null>(null);
    const [selectedDistrict, setSelectedDistrict] = useState<AddressParams | null>(null);
    const [selectedWards, setSelectedWards] = useState<AddressParams | null>(null);
    const [error, setError] = useState<string>();
    const { checkoutItems } = useGallery();


    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            address: "",
            city: "",
            district: "",
            ward: "",
            note: ""
        },
        validate,
        onSubmit: (values) => {
            console.log('Form submitted with values:', values);
        },
        enableReinitialize: true, // Giúp tái khởi tạo giá trị khi form được cập nhật
    })
    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await citiesApi.getAll();
                setCities(response.data);
            } catch (error) {
                setError('Failed to fetch cities: ');
                console.log("error", error);
            }
        };
        fetchCities();
    }, []);

    // useEffect(() => {

    //     onChange(formik.values);

    // }, [formik.values, onChange]);
    const filteredCities =
        query === ''
            ? cities
            : cities.filter((city) =>
                city.name.toLowerCase().includes(query.toLowerCase())
            )
    useEffect(() => {
        if (!selectedCity) return;
        const fetchDistricts = async () => {
            try {
                const response = await districtsApi.get(selectedCity.code)
                setDistricts(response.data)
            } catch (error) {
                setError('Failed to fetch districts: ');
                console.log("error", error);
            }
        }
        fetchDistricts();
    }, [selectedCity])

    const filteredDistricts =
        query === ''
            ? districts
            : districts.filter((district) =>
                district.name.toLowerCase().includes(query.toLowerCase())
            )

    useEffect(() => {
        if (!selectedDistrict) return;
        const fetchWards = async () => {
            try {
                const response = await wardsApi.get(selectedDistrict.code)
                setWards(response.data)
            } catch (error) {
                setError('Failed to fetch wards: ');
                console.log("error", error);
            }
        }
        fetchWards();
    }, [selectedDistrict])

    const filteredWards =
        query === ''
            ? wards
            : wards.filter((ward) =>
                ward.name.toLowerCase().includes(query.toLowerCase())
            )
    const handleComboboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        formik.handleChange(event); // Gọi Formik để cập nhật giá trị của form
        setQuery(event.target.value); // Cập nhật state tùy chỉnh cho combobox
    };
    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { name, value } = e.target;
    //     onChange(name, value);
    // };

    return (
        <>
            <form onSubmit={formik.handleSubmit} className='flex flex-col gap-4 text-body-2 font-normal'>
                <div className="col-span-1 flex flex-col gap-6 xl:col-span-2">
                    <div className="flex flex-col justify-between  text-body-1 font-normal gap-4">
                        <div className="flex items-center gap-4 bg-neutral-2-50 p-4">
                            <span className="text-neutral-1-900">THÔNG TIN NHẬN HÀNG</span>
                        </div>
                        <div>
                            <div className='flex flex-col md:flex-row justify-between gap-4'>
                                <div className='w-full'>
                                    <Input className="px-3 py-3 border border-neutral-1-400 rounded-sm mb-2 w-full"
                                        type="text"
                                        placeholder='Họ tên'
                                        name="name"
                                        value={formik.values.name}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        autoComplete='off'
                                    />
                                    {/* {formik.touched.name && formik.errors.name ? (<p className=" text-error-500 pl-2">{formik.errors.name}</p>) : null} */}
                                </div>
                                <div className='w-full'>
                                    <Input className="px-3 py-3 border border-neutral-1-400 rounded-sm mb-2 w-full"
                                        type="text"
                                        placeholder='Số điện thoại'
                                        autoComplete='off'
                                        name="phone"
                                        value={formik.values.phone}
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                    />
                                    {formik.touched.phone && formik.errors.phone ? (<p className=" text-error-500 pl-2">{formik.errors.phone}</p>) : null}
                                </div>
                            </div>
                            <div className='grid grid-cols-1 gap-4'>
                                <Input className="px-3 py-3 border border-neutral-1-400 rounded-sm"
                                    type="text"
                                    placeholder='Email'
                                    autoComplete='off'
                                    name="email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                />
                                {formik.touched.email && formik.errors.email ? (<p className=" text-error-500 pl-2">{formik.errors.email}</p>) : null}
                            </div>
                            <div className='grid grid-cols-1 gap-4'>
                                <Input className="px-3 py-3 border border-neutral-1-400 rounded-sm"
                                    type="text"
                                    placeholder='Địa chỉ'
                                    autoComplete='off'
                                    name="address"
                                    value={formik.values.address}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}

                                />
                                {formik.touched.address && formik.errors.address ? (<p className=" text-error-500 pl-2">{formik.errors.address}</p>) : null}
                            </div>
                            <div className='flex flex-col md:flex-row w-full gap-4'>
                                <div className='w-full '>
                                    <Combobox
                                        as="div"
                                        className="flex relative px-3 py-3 border border-neutral-1-400 rounded-sm w-full mb-2"
                                        value={selectedCity}
                                        onChange={(value) => setSelectedCity(value)}
                                        onClose={() => setQuery('')}
                                    >
                                        <ComboboxInput
                                            className="w-full rounded-lg border-none text-sm leading-6 text-neutral-1-900 focus:outline-none"
                                            aria-label="Assignee"
                                            placeholder="Chọn Tỉnh/Thành phố"
                                            displayValue={(city: AddressParams | null) => city?.name ?? ''}
                                            autoComplete='off'
                                            onChange={handleComboboxChange}
                                            onBlur={formik.handleBlur}
                                            name="city"

                                        />
                                        <ComboboxButton className="text-black right-0 top-0">
                                            <IoIosArrowDown />
                                        </ComboboxButton>
                                        <ComboboxOptions
                                            anchor="bottom"
                                            transition
                                            className={clsx(
                                                'w-[var(--input-width)] rounded-xl border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible shadow-custom',
                                                'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                                            )}
                                        >
                                            {filteredCities.map((city) => (
                                                <ComboboxOption
                                                    key={city.code}
                                                    value={formik.values.city}
                                                    className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-neutral-1-300  text-body-2"
                                                >
                                                    {city.name}
                                                </ComboboxOption>
                                            ))}
                                        </ComboboxOptions>
                                    </Combobox>
                                    {formik.touched.city && formik.errors.city ? (<p className=" text-error-500 pl-2">{formik.errors.city}</p>) : null}
                                </div>
                                <div className='w-full'>

                                    <Combobox
                                        as="div"
                                        className="flex  px-3 py-3 border border-neutral-1-400 rounded-sm w-full  mb-2"
                                        value={selectedDistrict}
                                        onChange={(value) => setSelectedDistrict(value)}
                                        onClose={() => setQuery('')}
                                    >

                                        <ComboboxInput
                                            className="w-full rounded-lg border-none text-sm leading-6 text-neutral-1-900 focus:outline-none"
                                            aria-label="Assignee"
                                            placeholder="Chọn Quận/Huyện"
                                            displayValue={(district: AddressParams | null) => district?.name ?? ''}
                                            autoComplete='off'
                                            onChange={handleComboboxChange}
                                            onBlur={formik.handleBlur}
                                            name="district"
                                        />
                                        <ComboboxButton className="text-black right-0 top-0">
                                            <IoIosArrowDown />
                                        </ComboboxButton>
                                        <ComboboxOptions
                                            anchor="bottom"
                                            transition
                                            className={clsx(
                                                'w-[var(--input-width)] rounded-xl border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible shadow-custom',
                                                'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                                            )}                                                >
                                            {filteredDistricts.map((district) => (
                                                <ComboboxOption
                                                    key={district.code}
                                                    value={district}
                                                    className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-neutral-1-300 text-body-2 "
                                                >
                                                    {district.name}
                                                </ComboboxOption>
                                            ))}
                                        </ComboboxOptions>
                                    </Combobox>
                                    {formik.touched.district && formik.errors.district ? (<p className=" text-error-500 pl-2">{formik.errors.district}</p>) : null}
                                </div>
                                <div className='w-full'>
                                    <Combobox
                                        as="div"
                                        className="flex relative px-3 py-3 border border-neutral-1-400 rounded-sm w-full mb-2"
                                        value={selectedWards}
                                        onChange={(value) => setSelectedWards(value)}
                                        onClose={() => setQuery('')}
                                    >
                                        <ComboboxInput
                                            className="w-full rounded-lg border-none text-sm leading-6 text-neutral-1-900 focus:outline-none"
                                            aria-label="Assignee"
                                            placeholder="Chọn Phường/Xã"
                                            displayValue={(ward: AddressParams | null) => ward?.name ?? ''}
                                            autoComplete='off'
                                            onChange={handleComboboxChange}
                                            onBlur={formik.handleBlur}
                                            name="ward"
                                        />
                                        <ComboboxButton className="text-black right-0 top-0">
                                            <IoIosArrowDown />
                                        </ComboboxButton>
                                        <ComboboxOptions
                                            anchor="bottom"
                                            transition
                                            className={clsx(
                                                'w-[var(--input-width)] rounded-xl border border-white/5 bg-white p-1 [--anchor-gap:var(--spacing-1)] empty:invisible shadow-custom',
                                                'transition duration-100 ease-in data-[leave]:data-[closed]:opacity-0'
                                            )}                                                >
                                            {filteredWards.map((ward) => (
                                                <ComboboxOption
                                                    key={ward.code}
                                                    value={ward}
                                                    className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-neutral-1-300 text-body-2 "
                                                >
                                                    {ward.name}
                                                </ComboboxOption>
                                            ))}
                                        </ComboboxOptions>
                                    </Combobox>
                                    {formik.touched.ward && formik.errors.ward ? (<p className=" text-error-500 pl-2">{formik.errors.ward}</p>) : null}
                                </div>
                            </div>
                            <div className='grid grid-cols-1 gap-4'>
                                <Input className="px-3 py-3 border border-neutral-1-400 rounded-sm"
                                    type="text"
                                    placeholder='Ghi chú'
                                    autoComplete='off'
                                    name="note"
                                    value={formik.values.note}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.note && formik.errors.note ? (<p className=" text-error-500 pl-2">{formik.errors.note}</p>) : null}
                            </div>
                        </div>
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
            </form>
        </>


    );
};

export default CheckoutForm;