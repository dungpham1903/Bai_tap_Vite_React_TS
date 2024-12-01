import { createContext, ReactNode, useContext, useState } from "react";
import { ProductItem, productItems } from "../data/productItems";
import { useLocalStorage } from "../hook/useLocalStorage";
import { FaCircleCheck } from "react-icons/fa6";
import ModalSuccess from "../components/modals/SuccessModal";

type GalleryContextType = {
    products: ProductItem[];
    cartItems: ProductItem[];
    setProducts: React.Dispatch<React.SetStateAction<ProductItem[]>>;
    setCartItems: React.Dispatch<React.SetStateAction<ProductItem[]>>;
    toggleFavorite: (productId: number) => void;
    addToCart: (newItem: ProductItem, newQuantity: number) => void;
    removeFromCart: (newItem: number) => void;
    updateItemQuantity: (productId: number, newQuantity: number) => void;
    handleCheckout: (products: ProductItem[]) => void
    checkoutItems: ProductItem[];
    setCheckoutItems: React.Dispatch<React.SetStateAction<ProductItem[]>>;
    clearCart: () => void;
};

const GalleryContext = createContext<GalleryContextType | undefined>(undefined);
function GalleryProvider(props: { children: ReactNode }) {
    const { storedValue, setValue } = useLocalStorage("products", productItems);
    const { storedValue: storedCart, setValue: setStoredCart } = useLocalStorage<ProductItem[]>("cartItems", []);
    const [products, setProducts] = useState<ProductItem[]>(storedValue);
    const [cartItems, setCartItems] = useState<ProductItem[]>(storedCart);
    const [checkoutItems, setCheckoutItems] = useState<ProductItem[]>([]); // Thêm state này
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);

    function toggleFavorite(productId: number) {
        const updatedArray = products.map(product => {
            if (product.id === productId) {
                return { ...product, isFavorite: !product.isFavorite }
            }
            return product;
        })
        setProducts(updatedArray);
        setValue(updatedArray);
    }
    function removeFromCart(productId: number) {
        setCartItems((prevItems) => {
            const result = prevItems.filter((item) => item.id !== productId)
            setStoredCart(result)
            return result;
        });
    }
    function updateItemQuantity(productId: number, newQuantity: number) {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId
                    ? { ...item, quantity: Math.max(newQuantity, 1) }
                    : item
            )
        );
    }
    function addToCart(newItem: ProductItem, newQuantity: number) {
        setCartItems((prevItems) => {
            const isExisted = prevItems.find((item) => item.id === newItem.id)
            if (isExisted) {
                const updatedItems = prevItems.map(item =>
                    item.id === newItem.id
                        ? { ...item, quantity: (item.quantity || 1) + newQuantity }
                        : item
                );
                setStoredCart(updatedItems);
                return updatedItems;
            }
            const newItems = [...prevItems, { ...newItem, quantity: newQuantity }]
            setStoredCart(newItems)
            return newItems;
        });
        setShowSuccessPopup(true);

        setTimeout(() => setShowSuccessPopup(false), 3000);
    }
    function clearCart() {
        setCartItems([]);
    };
    function handleCheckout(selectedProducts: ProductItem[]) {
        setCheckoutItems(selectedProducts);
    }
    const value = {
        products,
        cartItems,
        checkoutItems,
        setCheckoutItems,
        setProducts,
        setCartItems,
        toggleFavorite,
        addToCart,
        removeFromCart,
        updateItemQuantity,
        handleCheckout,
        clearCart,
    };
    return (
        <GalleryContext.Provider value={value}{...props}>
            <ModalSuccess open={showSuccessPopup} onClose={() => setShowSuccessPopup(false)}>

                <div className='flex flex-col gap-4 xl:w-[500px]'>

                    <div className="flex flex-col gap-4 p-6 items-center text-center">
                        <div>
                            <FaCircleCheck color="#28A745" size={48} />
                        </div>
                        <span className="text-neutral-1-900 font-semibold text-header-1">Sản phẩm đã được thêm vào giỏ hàng</span>
                        <span className="text-neutral-1-600 font-normal text-body-2">Ấn vào giỏ hàng để thanh toán!</span>
                        <button className="text-white font-medium text-body-1 p-2 w-full bg-success-400 rounded-lg"
                            onClick={() => setShowSuccessPopup(false)}>Đóng</button>
                    </div>

                </div>
            </ModalSuccess>
            {props.children}
        </GalleryContext.Provider>
    )
}
function useGallery() {
    const context = useContext(GalleryContext);
    if (typeof context === "undefined")
        throw new Error("useGallery must be used within a GalleryProvider")
    return context;
}

export { useGallery, GalleryProvider }