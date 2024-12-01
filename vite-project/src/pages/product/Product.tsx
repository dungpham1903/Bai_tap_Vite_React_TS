
import './pagination.css';
import r3 from '../../assets/images/r3.png';
import vongCo from '../../assets/images/vong-co.png';
import nhanDoi from '../../assets/images/nhan-doi.png';
import { useRef, useState } from 'react';
import ModalPopup from '../../components/modals/Modal';
import CountValue from '../../components/CountValue';
import ProductList from '../../modules/product/ProductList';
import { useGallery } from '../../contexts/GalleryContext';
import DropdownFilter from '../../modules/product/ProductSort';
import { TDropdownData } from '../../types/general.types';
import { Link, useSearchParams } from 'react-router-dom';


const filterdata: TDropdownData[] = [
    {
        value: "",
        label: "Được đề xuất",
    },
    {
        value: "top-sales",
        label: "Bán chạy",
    },
    {
        value: "latest",
        label: "Mới nhất",
    },
    {
        value: "popular",
        label: "Phổ biến",
    },
];
export const Product = () => {
    const [open, setOpen] = useState<boolean>(false)
    const categoryRef = useRef<(HTMLDivElement | null)[]>([]);
    const arrowRef = useRef<HTMLSpanElement>(null);
    const [isToggle, setIsToggle] = useState(false);
    const { products } = useGallery();
    const [selectedCategpory, setSelectedCategpory] = useState<string[]>([]);
    const [sortOption, setSortOption] = useState<string>('');
    const [searchParams, setSearchParams] = useSearchParams();
    const searchKeyword = searchParams.get('search') || '';

    const [minPrice, setMinPrice] = useState<number | ''>('');
    const [maxPrice, setMaxPrice] = useState<number | ''>('');
    const [error, setError] = useState<string | null>(null);


    const currentPage = parseInt(searchParams.get("page") || "1", 10);
    const updateQueryParams = (newParams: Record<string, string | number | null | undefined>) => {
        const updatedParams = new URLSearchParams(searchParams);

        Object.entries(newParams).forEach(([key, value]) => {
            if (value !== null && value !== undefined) {
                updatedParams.set(key, value.toString());
            } else {
                updatedParams.delete(key);
            }
        });
        setSearchParams(updatedParams);
    };
    //Dropdown filter
    const toggleCategory = () => {
        categoryRef.current.forEach((categoryElemnet) => {
            if (categoryElemnet && arrowRef.current) {
                const isCurrentlyHidden = categoryElemnet.classList.contains('hidden');

                categoryElemnet.classList.toggle('hidden', !isCurrentlyHidden);
                categoryElemnet.classList.toggle('flex', isCurrentlyHidden);
                arrowRef.current.classList.toggle('rotate-180', isCurrentlyHidden);
            }

        });
        setIsToggle(!isToggle);
    };
    //Đếm số SP yêu thích
    const favoriteCount = products.length > 0
        ? products.filter((item) => item.isFavorite === true).length : 0;
    // const handleCheckboxFavorite = (event: React.ChangeEvent<HTMLInputElement>, type: string) => {}

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>, category: string) => {
        const updatedCategory = event.target.checked
            ? [...selectedCategpory, category] // Thêm type mới
            : selectedCategpory.filter((selectedCategpory) => selectedCategpory !== category); // Loại bỏ type không được chọn
        setSelectedCategpory(updatedCategory);
        updateQueryParams({ categpory: updatedCategory.length > 0 ? updatedCategory.join(',') : null });
    };

    const handlePageChange = (page: number) => {
        updateQueryParams({ page });
    };
    const handleSort = (value: string) => {
        setSortOption(value);
        updateQueryParams({ sort: value });
    };
    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinPrice(e.target.value ? parseInt(e.target.value, 10) : '');
    };

    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxPrice(e.target.value ? parseInt(e.target.value, 10) : '');
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (minPrice === '' && maxPrice === '') {
            setError("Vui lòng điền khoảng giá phù hợp"); // Hiển thị thông báo lỗi
            return;
        }
        setError(null);
        updateQueryParams({
            minPrice: minPrice || null,
            maxPrice: maxPrice || null,
        });
    };
    return (
        <>
            <div>
                <section className='banner bg-bannerProduct bg-cover relative w-screen  z-0'>
                    <div className="absolute inset-0 bg-primary-1 opacity-80"></div>
                    <div className='w-full px-4 mx-auto'>
                        <div className='w-full h-80 flex justify-center flex-wrap'>
                            <div className='flex flex-col items-center justify-center text-center relative w-full'>
                                <div className="flex flex-col justify-between">
                                    <span className="text-heading-2 text-white font-semibold mb-4">Sản phẩm</span>
                                    <div className="flex text-body-1 font-normal text-white ">
                                        <Link to="/" className="opacity-80">Trang chủ</Link>
                                        <span className="flex items-center mx-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 7 12" fill="none">
                                                <path d="M6.1776 5.619L1.38085 0.823847C1.17037 0.613901 0.829363 0.613901 0.618353 0.823847C0.407875 1.03379 0.407875 1.3748 0.618353 1.58475L5.03463 5.99943L0.618884 10.4141C0.408406 10.6241 0.408406 10.9651 0.618884 11.1755C0.829362 11.3855 1.1709 11.3855 1.38138 11.1755L6.17813 6.38044C6.38537 6.17266 6.38537 5.82629 6.1776 5.619Z" fill="white" />
                                            </svg>
                                        </span>
                                        <Link to="/product">Sản phẩm</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="my-16">
                    <div className="'w-full px-4 mx-auto lg:max-w-5xl xl:max-w-7xl">
                        <div className='flex flex-col'>
                            <div className="grid grid-cols-1 xl:grid-cols-4 pb-6 gap-6">
                                <div className="col-span-1 flex flex-col gap-3">
                                    <div className="flex flex-col border-b-[0.5px] border-neutral-2-200 gap-5">
                                        <span className="text-header-1 font-normal text-neutral-1-600">Mục luc</span>
                                        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-1 text-body-1 text-neutral-1-900 font-normal">
                                            <div className="flex justify-between items-center p-3">
                                                <span>
                                                    Yêu thích &#40;<span>{favoriteCount || 0}</span>&#41;
                                                </span>
                                                <input className="w-[18px] h-[18px] rounded border border-neutral-2-200 border-solid cursor-pointer"
                                                    type="checkbox"
                                                    onChange={(event) => handleCheckboxChange(event, "favorite")}
                                                />
                                            </div>

                                            <div className="flex justify-between items-center p-3"> Vòng cổ
                                                <input className="w-[18px] h-[18px] rounded border border-neutral-2-200 border-solid cursor-pointer"
                                                    type="checkbox"
                                                    onChange={(event) => handleCheckboxChange(event, "vong-co")}
                                                />
                                            </div>
                                            <div className="flex justify-between items-center p-3"> Nhẫn cưới
                                                <input className="w-[18px] h-[18px] rounded border border-neutral-2-200 border-solid cursor-pointer"
                                                    type="checkbox"
                                                    onChange={(event) => handleCheckboxChange(event, "nhan-cuoi")}
                                                />
                                            </div>
                                            <div className="flex justify-between items-center p-3"> Bông tai
                                                <input className="w-[18px] h-[18px] rounded border border-neutral-2-200 border-solid cursor-pointer"
                                                    type="checkbox"
                                                    onChange={(event) => handleCheckboxChange(event, "bong-tai")}
                                                />
                                            </div>

                                            <div ref={(el) => (categoryRef.current[0] = el)} className="hidden justify-between items-center p-3"> Vòng tay<input className="w-[18px] h-[18px] rounded border border-neutral-2-200 border-solid" type="checkbox" /></div>
                                            <div ref={(el) => (categoryRef.current[1] = el)} className="hidden justify-between items-center p-3"> Bông tai<input className="w-[18px] h-[18px] rounded border border-neutral-2-200 border-solid" type="checkbox" /></div>
                                            <div ref={(el) => (categoryRef.current[2] = el)} className="hidden justify-between items-center p-3"> Vòng cổ<input className="w-[18px] h-[18px] rounded border border-neutral-2-200 border-solid" type="checkbox" /></div>

                                            <button className=" flex justify-between items-center p-3" onClick={toggleCategory}>{isToggle ? 'Thu gọn' : 'Xem thêm'}
                                                <span ref={arrowRef} className="text-neutral-1-500 ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="10" viewBox="0 0 17 10" fill="none">
                                                        <path d="M8.97725 9.17045L16.17 1.97533C16.4849 1.65961 16.4849 1.1481 16.17 0.831583C15.8551 0.515865 15.3436 0.515865 15.0286 0.831583L8.40661 7.456L1.78459 0.83238C1.46967 0.516664 0.958157 0.516664 0.64244 0.83238C0.32752 1.1481 0.32752 1.66041 0.64244 1.97612L7.83511 9.17125C8.14677 9.48211 8.66632 9.48211 8.97725 9.17045Z" fill="#919EAB" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <span className="text-header-1 font-normal text-neutral-1-600">Giá</span>
                                        <form
                                            onSubmit={handleSubmit}
                                            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-4 text-body-2">

                                            <div className="grid grid-cols-2 h-12 gap-4 ">
                                                <label className="">
                                                    <input
                                                        className="w-full h-full text-center bg-neutral-3-50 placeholder:border-none"
                                                        type="number"
                                                        onChange={handleMinPriceChange}
                                                        value={minPrice}
                                                        placeholder="Từ">
                                                    </input>
                                                </label>
                                                <label className="">
                                                    <input
                                                        className="w-full h-full text-center bg-neutral-3-50 placeholder:border-none"
                                                        type="number"
                                                        placeholder="Đến"
                                                        onChange={handleMaxPriceChange}
                                                        value={maxPrice}
                                                    ></input>
                                                </label>
                                            </div>
                                            <span className='flex justify-start w-full'>
                                                {error && <p className="text-error-400">{error}</p>}
                                            </span>

                                            <button className=" h-12 bg-primary-1  text-white font-normal">Tìm kiếm</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-span-1 xl:col-span-3 flex flex-col gap-10">
                                    <div className='flex flex-col gap-4'>
                                        <div className="w-full flex justify-between items-center">
                                            <span className="text-header-2 text-neutral-1-600 font-medium">Sắp xếp theo:</span>
                                            <DropdownFilter data={filterdata} onSort={handleSort}>
                                            </DropdownFilter>
                                        </div>
                                        {/* <form className='h-11 rounded-full border-solid border-neutral-2-200 border pr-4
                                        items-center justify-start pl-4 gap-2 show-on-desktop'>
                                        <button
                                            className='w-6 h-6'
                                            type='submit'>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75ZM2.25 10C2.25 5.71979 5.71979 2.25 10 2.25C14.2802 2.25 17.75 5.71979 17.75 10C17.75 14.2802 14.2802 17.75 10 17.75C5.71979 17.75 2.25 14.2802 2.25 10Z" fill="#919EAB" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M14.4697 14.4697C14.7626 14.1768 15.2374 14.1768 15.5303 14.4697L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L14.4697 15.5303C14.1768 15.2374 14.1768 14.7626 14.4697 14.4697Z" fill="#919EAB" />
                                            </svg>
                                        </button>
                                        <label>
                                            <input
                                                className="outline-none"
                                                type="text"
                                                placeholder='Tìm kiếm'
                                                onChange={handleFilterChange}
                                            >
                                            </input>
                                        </label>
                                    </form> */}
                                        {searchKeyword && (
                                            <span className="text-header-2 text-neutral-1-600 font-medium">
                                                Kết quả tìm kiếm với '<span className="text-secondary-1">{searchKeyword}</span>'
                                            </span>
                                        )}

                                    </div>
                                    <ProductList
                                        selectedTypes={selectedCategpory}
                                        sortBy={sortOption}
                                        searchKeyword={searchKeyword}
                                        currentPage={currentPage} // Truyền `currentPage` xuống ProductList
                                        onPageChange={handlePageChange} // Truyền hàm để cập nhật trang
                                    >
                                    </ProductList>

                                    <ModalPopup open={open} onClose={() => setOpen(false)}>
                                        <div className='flex flex-col gap-4 xl:w-[500px]'>
                                            <div className='flex justify-between border-b border-neutral-1-300 p-4'>
                                                <span className='text-primary-1 font-semibold text-header-1'>Thêm vào giỏ hàng</span>
                                                <button className="py-1 px-2  text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                    </svg>
                                                    <span className="sr-only">Close modal</span>
                                                </button>
                                            </div>
                                            <div className="flex flex-col gap-4 p-4">
                                                <div className="flex gap-6 ">
                                                    <img className="w-[100px] h-[100px] object-cover bg-neutral-3-50" src={r3}></img>
                                                    <div className="flex flex-col gap-2">
                                                        <span className="text-body-1 text-neutral-1-900 font-normal">Bộ trang sức bạc đính đá Silver</span>
                                                        <div className="flex gap-2">
                                                            <span className="text-body-2 text-neutral-1-600 font-normal">Giá:</span>
                                                            <span className="text-body-2 text-secondary-1 font-semibold">3.000.000đ</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-4">
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-body-2 text-neutral-1-600 font-normal">Size nhẫn:</span>
                                                        <select className="text-body-1 text-neutral-1-600 border rounded-sm py-2 px-4 " id="" name="">
                                                            <option value="">8</option>
                                                        </select>
                                                    </div>
                                                    <div className="flex justify-between items-center ">
                                                        <span className="text-body-2 text-neutral-1-600 font-normal">Số lượng</span>
                                                        <CountValue></CountValue>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='flex border-t border-neutral-1-300 p-4 text-body-1 font-medium gap-3 justify-end'>
                                                <button className='flex gap-2 items-center border-2 border-primary-1 rounded-md p-2'>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <g clipPath="url(#clip0_4337_7853)">
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M5.00016 14.791C4.42487 14.791 3.9585 15.2574 3.9585 15.8327C3.9585 16.408 4.42487 16.8743 5.00016 16.8743C5.57546 16.8743 6.04183 16.408 6.04183 15.8327C6.04183 15.2574 5.57546 14.791 5.00016 14.791ZM2.7085 15.8327C2.7085 14.567 3.73451 13.541 5.00016 13.541C6.26582 13.541 7.29183 14.567 7.29183 15.8327C7.29183 17.0983 6.26582 18.1243 5.00016 18.1243C3.73451 18.1243 2.7085 17.0983 2.7085 15.8327Z" fill="#161C24" />
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M14.1667 14.791C13.5914 14.791 13.125 15.2574 13.125 15.8327C13.125 16.408 13.5914 16.8743 14.1667 16.8743C14.742 16.8743 15.2083 16.408 15.2083 15.8327C15.2083 15.2574 14.742 14.791 14.1667 14.791ZM11.875 15.8327C11.875 14.567 12.901 13.541 14.1667 13.541C15.4323 13.541 16.4583 14.567 16.4583 15.8327C16.4583 17.0983 15.4323 18.1243 14.1667 18.1243C12.901 18.1243 11.875 17.0983 11.875 15.8327Z" fill="#161C24" />
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M2.7085 2.5C2.7085 2.15482 2.98832 1.875 3.3335 1.875H5.00016C5.34534 1.875 5.62516 2.15482 5.62516 2.5V13.5417H14.1668C14.512 13.5417 14.7918 13.8215 14.7918 14.1667C14.7918 14.5118 14.512 14.7917 14.1668 14.7917H5.00016C4.65498 14.7917 4.37516 14.5118 4.37516 14.1667V3.125H3.3335C2.98832 3.125 2.7085 2.84518 2.7085 2.5Z" fill="#161C24" />
                                                                <path fillRule="evenodd" clipRule="evenodd" d="M4.37662 4.12151C4.40121 3.77721 4.70026 3.51804 5.04456 3.54263L16.7112 4.37596C16.8842 4.38832 17.0443 4.47199 17.1531 4.60697C17.262 4.74194 17.3099 4.91609 17.2854 5.08776L16.4521 10.9211C16.4081 11.229 16.1444 11.4577 15.8334 11.4577H5.00003C4.65485 11.4577 4.37503 11.1779 4.37503 10.8327C4.37503 10.4875 4.65485 10.2077 5.00003 10.2077H15.2913L15.9531 5.575L4.9555 4.78945C4.6112 4.76486 4.35202 4.46581 4.37662 4.12151Z" fill="#161C24" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0_4337_7853">
                                                                    <rect width="20" height="20" fill="white" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </span>
                                                    <span className='text-primary-1'>Thêm vào giỏ hàng</span>
                                                </button>
                                                <button className='flex gap-2 items-center  bg-primary-1 rounded-md p-3'>
                                                    <span className='text-white'>Mua ngay</span>
                                                </button>
                                            </div>
                                        </div>
                                    </ModalPopup>
                                </div>
                            </div>
                            <div className="w-full flex flex-col justify-between mb-10 gap-6 lg:flex-row">
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
            </div>
        </>)
}