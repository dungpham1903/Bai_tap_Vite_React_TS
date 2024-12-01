import { Link, useSearchParams } from "react-router-dom";
import { useGallery } from "../../contexts/GalleryContext";

import { ProductItem } from "../../data/productItems";
import ModalPopup from "../../components/modals/Modal";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { IconContext } from "react-icons";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
interface ProductListProps {
    selectedTypes: string[];
    sortBy: string;
    searchKeyword: string
    currentPage: number;
    onPageChange: (page: number) => void; // Thêm props để gọi callback
}

// Utility Functions
const filterByType = (products: ProductItem[], selectedTypes: string[]) => {
    if (selectedTypes.includes("favorite")) {
        return products.filter((item) => item.isFavorite);
    }
    return selectedTypes.length > 0
        ? products.filter((item) => selectedTypes.includes(item.type))
        : products;
};

const filterByKeyword = (products: ProductItem[], searchKeyword: string) => {
    return searchKeyword
        ? products.filter((item) => item.name.toLowerCase().includes(searchKeyword.toLowerCase()))
        : products;
};

const filterByPrice = (products: ProductItem[], minPrice: number | null, maxPrice: number | null) => {
    return products.filter((item) => {
        const price = item.price; // Giá của từng sản phẩm
        if (minPrice !== null && maxPrice !== null) {
            return price >= minPrice && price <= maxPrice;
        }
        if (minPrice !== null) {
            return price >= minPrice;
        }
        if (maxPrice !== null) {
            return price <= maxPrice;
        }
        return true; // Không lọc nếu cả minPrice và maxPrice đều null
    });
};

const sortByCriteria = (products: ProductItem[], sortBy: string) => {
    switch (sortBy) {
        case "top-sales":
            return [...products].sort((a, b) => b.sales - a.sales); // Assuming products have a 'sales' property
        case "latest":
            return [...products].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Assuming products have a 'date' property
        case "popular":
            return [...products].sort((a, b) => b.popularity - a.popularity); // Assuming products have a 'popularity' property
        default:
            return products;
    }
};
const calculatePageCount = (products: ProductItem[], itemsPerPage: number): number => {
    if (itemsPerPage <= 0) return 0; // Tránh chia cho 0
    return Math.ceil(products.length / itemsPerPage);
};
const paginateItems = (products: ProductItem[], currentPage: number, itemsPerPage: number) => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return products.slice(startIndex, startIndex + itemsPerPage);
};

// Main Component
const ProductList: React.FC<ProductListProps> = ({ selectedTypes, sortBy, currentPage, searchKeyword, onPageChange }) => {
    const { products } = useGallery();
    const [searchParams] = useSearchParams();


    const minPrice = parseInt(searchParams.get('minPrice') || '', 10) || null;
    const maxPrice = parseInt(searchParams.get('maxPrice') || '', 10) || null;

    // Apply filters and transformations
    let filteredItems = filterByType(products, selectedTypes);
    filteredItems = filterByKeyword(filteredItems, searchKeyword);
    filteredItems = filterByPrice(filteredItems, minPrice, maxPrice);

    const sortedItems = sortByCriteria(filteredItems, sortBy);

    const itemsPerPage = 6;
    const pageCount = calculatePageCount(sortedItems, itemsPerPage)
    const paginatedItems = paginateItems(sortedItems, currentPage, itemsPerPage);
    const handlePageChange = (selectedItem: { selected: number }) => {
        const newPage = selectedItem.selected + 1; // `selected` là số bắt đầu từ 0
        onPageChange(newPage); // Gọi callback để cập nhật URL
    };
    return (
        <div className="grid grid-cols-1 gap-6">
            <div
                className={`grid ${paginatedItems.length === 0 ? 'grid-cols-1' : ' grid-cols-1 md:grid-cols-2 xl:grid-cols-3'
                    }  w-full gap-6`}
            >
                {paginatedItems.length === 0 ? (
                    <div className="text-center text-gray-500">Không tìm thấy sản phẩm</div>
                ) : (
                    paginatedItems.map((item) => (
                        <ProductItems key={item.id} info={item}></ProductItems>
                    ))
                )}
            </div>
            <div className='flex items-center justify-center'>
                <ReactPaginate
                    nextLabel={
                        <IconContext.Provider value={{ color: currentPage === pageCount ? "#ccc" : "#003468", size: "16px" }}>
                            <GoTriangleRight />
                        </IconContext.Provider>
                    }
                    onPageChange={handlePageChange}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    pageCount={pageCount}
                    previousLabel={
                        <IconContext.Provider value={{ color: currentPage === 1 ? "#ccc" : "#003468", size: "16px" }}>
                            <GoTriangleLeft />
                        </IconContext.Provider>
                    }
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    previousLinkClassName="page-link"
                    nextClassName="page-item"
                    nextLinkClassName="page-link"
                    breakLabel="..."
                    breakClassName="page-item"
                    breakLinkClassName="page-link"
                    containerClassName="pagination"
                    activeClassName="active-bullet"
                    renderOnZeroPageCount={null}
                    forcePage={currentPage - 1} // Cập nhật số trang theo URL
                />
            </div>
        </div >

    );
};
type ProductItemProps = {
    info: ProductItem;
};
const ProductItems: React.FC<ProductItemProps> = ({ info }) => {
    const { toggleFavorite, addToCart } = useGallery();

    const [open, setOpen] = useState<boolean>(false)

    const [quantity, setQuantity] = useState<number>(1);
    const handleIncrease = () => setQuantity((prev) => prev + 1);
    const handleDecrease = () => setQuantity((prev) => Math.max(prev - 1, 1));
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = Number(e.target.value);
        if (!isNaN(newQuantity) && newQuantity > 0) {
            setQuantity(newQuantity);
        }
    };
    const handleAddToCart = () => {
        addToCart(info, quantity)
        setOpen(false);
    }

    return (
        <>
            <div className="relative flex flex-col items-center border border-neutral-2-200 cursor-pointer group ">
                <Link to={`/product-detail/${info.slug}`}>
                    <img className="w-full h-[237px] object-contain" src={info.image} alt="Product" />
                    <div className="p-4 flex flex-col gap-6">
                        <div className="flex flex-col text-center gap-2">
                            <span className="text-primary-1 text-header-1 font-normal">
                                {info.name}
                            </span>
                            <span className="text-secondary-1 font-normal text-header-1">
                                {info.price.toLocaleString()} đ</span>
                            <span>
                                <span className="text-[16px] leading-[18.75px] line-through text-neutral-1-600 italic font-light">
                                    {info.originalPrice.toLocaleString()} đ</span>
                                <span className="text-[16px] leading-[18.75px] text-neutral-1-600 italic font-normal">
                                    ({info.discount})</span>
                            </span>
                        </div>
                    </div>
                </Link>
                <div className="flex justify-between w-full px-4 pb-4 ">
                    <Link to={`/product-detail/${info.slug}`} className="flex items-center text-caption-2 font-poppins font-normal text-primary-1 gap-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_4317_4348)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M10.0002 8.95833C9.42487 8.95833 8.9585 9.4247 8.9585 10C8.9585 10.5753 9.42487 11.0417 10.0002 11.0417C10.5755 11.0417 11.0418 10.5753 11.0418 10C11.0418 9.4247 10.5755 8.95833 10.0002 8.95833ZM7.7085 10C7.7085 8.73435 8.73451 7.70833 10.0002 7.70833C11.2658 7.70833 12.2918 8.73435 12.2918 10C12.2918 11.2657 11.2658 12.2917 10.0002 12.2917C8.73451 12.2917 7.7085 11.2657 7.7085 10Z" fill="#161C24" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.39008 10C4.50907 13.5564 7.05093 15.2083 9.99984 15.2083C12.9487 15.2083 15.4906 13.5564 17.6096 10C15.4906 6.4436 12.9487 4.79167 9.99984 4.79167C7.05093 4.79167 4.50907 6.4436 2.39008 10ZM1.12386 9.6899C3.41413 5.68214 6.3665 3.54167 9.99984 3.54167C13.6332 3.54167 16.5855 5.68214 18.8758 9.6899C18.9856 9.88205 18.9856 10.1179 18.8758 10.3101C16.5855 14.3179 13.6332 16.4583 9.99984 16.4583C6.3665 16.4583 3.41413 14.3179 1.12386 10.3101C1.01405 10.1179 1.01405 9.88205 1.12386 9.6899Z" fill="#161C24" />
                            </g>
                            <defs>
                                <clipPath id="clip0_4317_4348">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <span>Xem</span>
                    </Link>
                    <button className="flex items-center text-caption-2 font-poppins font-normal text-primary-1 gap-2"
                        onClick={() => setOpen(true)}>

                        <span >Thêm</span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_4317_4351)">
                                <path fillRule="evenodd" clipRule="evenodd" d="M5.00016 14.7917C4.42487 14.7917 3.9585 15.258 3.9585 15.8333C3.9585 16.4086 4.42487 16.875 5.00016 16.875C5.57546 16.875 6.04183 16.4086 6.04183 15.8333C6.04183 15.258 5.57546 14.7917 5.00016 14.7917ZM2.7085 15.8333C2.7085 14.5677 3.73451 13.5417 5.00016 13.5417C6.26582 13.5417 7.29183 14.5677 7.29183 15.8333C7.29183 17.099 6.26582 18.125 5.00016 18.125C3.73451 18.125 2.7085 17.099 2.7085 15.8333Z" fill="#161C24" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M14.1667 14.7917C13.5914 14.7917 13.125 15.258 13.125 15.8333C13.125 16.4086 13.5914 16.875 14.1667 16.875C14.742 16.875 15.2083 16.4086 15.2083 15.8333C15.2083 15.258 14.742 14.7917 14.1667 14.7917ZM11.875 15.8333C11.875 14.5677 12.901 13.5417 14.1667 13.5417C15.4323 13.5417 16.4583 14.5677 16.4583 15.8333C16.4583 17.099 15.4323 18.125 14.1667 18.125C12.901 18.125 11.875 17.099 11.875 15.8333Z" fill="#161C24" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M2.7085 2.5C2.7085 2.15482 2.98832 1.875 3.3335 1.875H5.00016C5.34534 1.875 5.62516 2.15482 5.62516 2.5V13.5417H14.1668C14.512 13.5417 14.7918 13.8215 14.7918 14.1667C14.7918 14.5118 14.512 14.7917 14.1668 14.7917H5.00016C4.65498 14.7917 4.37516 14.5118 4.37516 14.1667V3.125H3.3335C2.98832 3.125 2.7085 2.84518 2.7085 2.5Z" fill="#161C24" />
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.37662 4.12216C4.40121 3.77786 4.70026 3.51869 5.04456 3.54328L16.7112 4.37662C16.8842 4.38897 17.0443 4.47264 17.1531 4.60762C17.262 4.74259 17.3099 4.91674 17.2854 5.08842L16.4521 10.9217C16.4081 11.2297 16.1444 11.4584 15.8334 11.4584H5.00003C4.65485 11.4584 4.37503 11.1785 4.37503 10.8334C4.37503 10.4882 4.65485 10.2084 5.00003 10.2084H15.2913L15.9531 5.57565L4.9555 4.79011C4.6112 4.76551 4.35202 4.46646 4.37662 4.12216Z" fill="#161C24" />
                            </g>
                            <defs>
                                <clipPath id="clip0_4317_4351">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                    </button>
                </div>
                <span
                    className="absolute left-5 top-5 z-10 cursor-pointer w-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
                    onClick={() => toggleFavorite(info.id)}
                >
                    <svg className="max-w-full "
                        width="42" height="38" viewBox="0 0 42 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 37.7499C19.6563 36.5582 18.1375 35.3186 16.5313 33.9999H16.5104C10.8542 29.3749 4.44376 24.1416 1.61251 17.8707C0.682335 15.8743 0.18939 13.7022 0.16665 11.4999C0.160438 8.47799 1.37245 5.58112 3.52877 3.464C5.6851 1.34688 8.60372 0.188223 11.625 0.249901C14.0847 0.253786 16.4913 0.964653 18.5583 2.29782C19.4666 2.88734 20.2884 3.60043 21 4.41657C21.7156 3.60364 22.5376 2.89096 23.4438 2.29782C25.5099 0.96439 27.916 0.253481 30.375 0.249901C33.3963 0.188223 36.3149 1.34688 38.4712 3.464C40.6276 5.58112 41.8396 8.47799 41.8334 11.4999C41.8121 13.7058 41.3191 15.8816 40.3875 17.8812C37.5563 24.152 31.1479 29.3832 25.4917 33.9999L25.4708 34.0166C23.8625 35.327 22.3458 36.5666 21.0021 37.7666L21 37.7499ZM11.625 4.41657C9.68441 4.39228 7.81266 5.13499 6.41667 6.48323C5.07164 7.80441 4.31991 9.61458 4.33316 11.4999C4.35694 13.1051 4.72048 14.6871 5.40001 16.1416C6.73649 18.8472 8.53982 21.2958 10.7271 23.3749C12.7917 25.4582 15.1667 27.4749 17.2208 29.1707C17.7896 29.6395 18.3688 30.1124 18.9479 30.5853L19.3125 30.8832C19.8688 31.3374 20.4438 31.8082 21 32.2707L21.0271 32.2457L21.0396 32.2353H21.0521L21.0708 32.2207H21.0813H21.0917L21.1292 32.1895L21.2146 32.1207L21.2292 32.1082L21.2521 32.0916H21.2646L21.2833 32.0749L22.6667 30.9395L23.0292 30.6416C23.6146 30.1645 24.1938 29.6916 24.7625 29.2228C26.8167 27.527 29.1938 25.5124 31.2583 23.4187C33.4459 21.3407 35.2493 18.8926 36.5854 16.1874C37.2772 14.7203 37.646 13.1218 37.6668 11.4999C37.6754 9.6204 36.924 7.81718 35.5833 6.4999C34.19 5.14557 32.318 4.39674 30.375 4.41657C28.004 4.39642 25.7374 5.39025 24.1458 7.14782L21 10.7728L17.8542 7.14782C16.2626 5.39025 13.996 4.39642 11.625 4.41657Z"
                            fill={`${info.isFavorite ? "#DA072D" : "#003468"}`} />
                    </svg>
                </span>
            </div>
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
                            <img className="w-24 h-24 object-contain bg-neutral-3-50" src={info.image}></img>
                            <div className="flex flex-col gap-2">
                                <span className="text-body-1 text-neutral-1-900 font-normal">{info.name}</span>
                                <div className="flex gap-2">
                                    <span className="text-body-2 text-neutral-1-600 font-normal">Giá:</span>
                                    <span className="text-body-2 text-secondary-1 font-semibold">{info.price.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex justify-between items-center">
                                <span className="text-body-2 text-neutral-1-600 font-normal">Size nhẫn:</span>
                                <select className="text-body-1 text-neutral-1-600 border rounded-sm py-2 px-4 " id="" name="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                            <div className="flex justify-between items-center ">
                                <span className="text-body-2 text-neutral-1-600 font-normal">Số lượng</span>
                                <div className="flex items-center">
                                    <button className="w-[24px] h-[24px]"
                                        onClick={handleDecrease}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="4" viewBox="0 0 21 4" fill="none">
                                            <path d="M20.4722 2.36144C20.4722 3.15918 19.8255 3.80588 19.0278 3.80588H1.69444C0.896699 3.80588 0.25 3.15918 0.25 2.36144C0.25 1.56369 0.8967 0.916992 1.69444 0.916992H19.0278C19.8255 0.916992 20.4722 1.56369 20.4722 2.36144Z" fill="#003468" />
                                        </svg>
                                    </button>
                                    <input
                                        type="text"
                                        id="counter-value"
                                        value={quantity}
                                        onChange={handleChange}
                                        className="w-[30px] h-[30px] text-body-1 text-neutral-1-600 border rounded-sm text-center mx-3" />
                                    <button className="w-[24px] h-[24px]"
                                        onClick={handleIncrease}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 21" fill="none">
                                            <path d="M19.0273 11.8056H11.8051V19.0278C11.8051 19.4109 11.6529 19.7783 11.382 20.0492C11.1111 20.32 10.7437 20.4722 10.3606 20.4722C9.97753 20.4722 9.61013 20.32 9.33925 20.0492C9.06836 19.7783 8.91618 19.4109 8.91618 19.0278V11.8056H1.69396C1.31087 11.8056 0.943466 11.6534 0.67258 11.3825C0.401694 11.1116 0.249512 10.7442 0.249512 10.3611C0.249512 9.97802 0.401694 9.61062 0.67258 9.33974C0.943466 9.06885 1.31087 8.91667 1.69396 8.91667H8.91618V1.69444C8.91618 1.31135 9.06836 0.943954 9.33925 0.673068C9.61013 0.402182 9.97753 0.25 10.3606 0.25C10.7437 0.25 11.1111 0.402182 11.382 0.673068C11.6529 0.943954 11.8051 1.31135 11.8051 1.69444V8.91667H19.0273C19.4104 8.91667 19.7778 9.06885 20.0487 9.33974C20.3196 9.61062 20.4717 9.97802 20.4717 10.3611C20.4717 10.7442 20.3196 11.1116 20.0487 11.3825C19.7778 11.6534 19.4104 11.8056 19.0273 11.8056Z" fill="#003468" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex border-t border-neutral-1-300 p-4 text-body-1 font-medium gap-3 justify-end'>
                        <button className='flex gap-2 items-center border-2 border-primary-1 rounded-md p-2'
                            onClick={handleAddToCart}>
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
                            <span className='text-primary-1'
                            >Thêm vào giỏ hàng</span>
                        </button>
                        <button className='flex gap-2 items-center  bg-primary-1 rounded-md p-3'>
                            <span className='text-white'>Mua ngay</span>
                        </button>
                    </div>
                </div>
            </ModalPopup>

        </>
    )
}
export default ProductList;