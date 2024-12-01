import r1 from '../assets/images/r1.png';
import r2 from '../assets/images/r2.png';
import r3 from '../assets/images/r3.png';
import r4 from '../assets/images/r4.png';
import r5 from '../assets/images/dayChuyen1.png';

export interface ProductItem {
    id: number;
    name: string;
    price: number;
    originalPrice: number;
    discount: string;
    image: string;
    detail: string;
    isFavorite: boolean;
    type:string;
    quantity?: number;
    sales: number, 
    date: string,
    popularity: number
    slug?:string,
}

export const productItems: ProductItem[] = [
    {
        id: 1,
        name: "Nhẫn Kim cương, Chung Đôi Vàng trắng",
        price: 10000000,
        originalPrice: 22000000,
        discount: "-15%",
        image: r3,
        detail: "nhan-kim-cuong",
        isFavorite: false,
        type:"nhan-cuoi",
        sales: 150, 
        date: "2024-01-01",
        popularity: 95,
        slug:"Nhẫn-Kim-cương-Chung-Đôi-Vàng-trắng"
    },
    {
        id: 2,
        name: "Nhẫn cưới Vàng trắng Trơn Đơn",
        price: 12000000,
        originalPrice: 18000000,
        discount: "-20%",
        image: r4,
        detail: "/nhan-kim-cuong",
        isFavorite: false,
        type:"nhan-cuoi",
        sales: 200,
        date: "2024-03-15", 
        popularity: 80,
        slug:"Nhẫn-cưới-Vàng-trắng-Trơn-Đơn"
    },
    {
        id: 3,
        name: "Nhẫn cưới Kim cương, Chung Đôi Vàng trắng",
        price: 15000000,
        originalPrice: 22000000,
        discount: "-15%",
        image: r1,
        detail: "/nhan-kim-cuong",
        isFavorite: false,
        type:"nhan-cuoi",
        sales: 100, 
        date: "2024-05-20", 
        popularity: 90,
        slug:"Nhẫn-cưới-Kim-cương-Chung-Đôi-Vàng-trắng"
    },
    {
        id: 4,
        name: "Bông tai Vàng trắng Trơn Đơn",
        price: 12000000,
        originalPrice: 18000000,
        discount: "-20%",
        image: r2,
        detail: "/nhan-kim-cuong",
        isFavorite: false,
        type:"bong-tai",
        sales: 150, 
        date: "2024-01-01", 
        popularity: 95,
        slug: "Bông-tai-Vàng-trắng-Trơn-Đơn"

    },
    {
        id: 5,
        name: "Vòng cổ Vàng trắng Trơn Đơn",
        price: 12000000,
        originalPrice: 18000000,
        discount: "-20%",
        image: r5,
        detail: "/nhan-kim-cuong",
        isFavorite: false,
        type:"vong-co",
        sales: 200, 
        date: "2024-03-15", 
        popularity: 80,
        slug: "Vòng-cổ-Vàng-trắng-Trơn-Đơn"
    },
    {
        id: 6,
        name: "Vòng cổ Vàng trắng Trơn Đơn",
        price: 12000000,
        originalPrice: 18000000,
        discount: "-20%",
        image: r5,
        detail: "/nhan-kim-cuong",
        isFavorite: false,
        type:"vong-co",
        sales: 100, 
        date: "2024-05-20", 
        popularity: 90,
        slug: "Vòng-cổ-Vàng-trắng-Trơn-Đơn"
    },
    {
        id: 7,
        name: "Vòng cổ Vàng trắng Trơn Đơn",
        price: 12000000,
        originalPrice: 18000000,
        discount: "-20%",
        image: r5,
        detail: "/nhan-kim-cuong",
        isFavorite: false,
        type:"vong-co",
        sales: 150, 
        date: "2024-01-01", 
        popularity: 95,
        slug: "Vòng-cổ-Vàng-trắng-Trơn-Đơn"
    },
    {
        id: 8,
        name: "Vòng cổ Vàng trắng Trơn Đơn",
        price: 12000000,
        originalPrice: 18000000,
        discount: "-20%",
        image: r5,
        detail: "/nhan-kim-cuong",
        isFavorite: false,
        type:"vong-co",
        sales: 200, 
        date: "2024-03-15", 
        popularity: 80,
        slug: "Vòng-cổ-Vàng-trắng-Trơn-Đơn"

    },
    {
        id: 9,
        name: "Bông tai Vàng trắng Trơn Đơn",
        price: 12000000,
        originalPrice: 18000000,
        discount: "-20%",
        image: r2,
        detail: "/nhan-kim-cuong",
        isFavorite: false,
        type:"bong-tai",
        sales: 150, 
        date: "2024-01-01", 
        popularity: 95,
        slug: "Bông-tai-Vàng-trắng-Trơn-Đơn"
    },
]