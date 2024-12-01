
export interface MenuItem {
    title: string; // Tiêu đề của mục
    link: string; // Đường dẫn
    submenu?: MenuItem[]; // Submenu (tùy chọn) chứa danh sách các MenuItem
}
export const menuItems = [
    {
        title: 'Trang chủ',
        link: '/',
    },
    {
        title: 'Sản phẩm',
        link: '/product',
        submenu: [
            {
                title: 'Nhẫn cưới',
                link: '/nhancuoi:',
            },
            {
                title: 'Vòng cổ',
                link: '/vongco',
            },
            {
                title: 'Vòng tay',
                link: '/vongtay',
                submenu: [
                    {
                        title: 'Kim cương',
                        link: '/kimcuong',
                    },
                    {
                        title: 'Bạck kim',
                        link: '/bachkim',

                    },
                    {
                        title: 'Vàng',
                        link: '/vang',
                    },
                ],
            },
            {
                title: 'Bông tai',
                link: '/bongtai',

            },
        ],
    },
    {
        title: 'Giới thiệu',
        link: '/about',
        submenu: [
            {
                title: 'Về chúng tôi',
                link: '/aboutus',
            },
            {
                title: 'Facebook',
                link: '/face',
            },
            {
                title: 'tiktok',
                link: '/tiktok',
            },
        ],
    },
    {
        title: 'Liên hệ',
        link: '/contact',
    },

];