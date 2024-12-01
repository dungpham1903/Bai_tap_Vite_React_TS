import { useState } from "react";

export default function CountValue() {
    const [count, setCount] = useState(1);

    const handleDecrease = () => {
        if (count > 1) setCount(count - 1);
    };

    const handleIncrease = () => {
        setCount(count + 1);
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = Number(e.target.value);
        if (!isNaN(newQuantity) && newQuantity > 0) {
            setCount(newQuantity);
        }
    };
    return (
        <>
            <div className="flex items-center">
                <button className="w-[24px] h-[24px]" onClick={handleDecrease}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="4" viewBox="0 0 21 4" fill="none">
                        <path d="M20.4722 2.36144C20.4722 3.15918 19.8255 3.80588 19.0278 3.80588H1.69444C0.896699 3.80588 0.25 3.15918 0.25 2.36144C0.25 1.56369 0.8967 0.916992 1.69444 0.916992H19.0278C19.8255 0.916992 20.4722 1.56369 20.4722 2.36144Z" fill="#003468" />
                    </svg>
                </button>
                <input
                    type="text"
                    id="counter-value"
                    value={count}
                    onChange={handleChange}
                    className="w-[30px] h-[30px] text-body-1 text-neutral-1-600 border rounded-sm text-center mx-3" />
                <button className="w-[24px] h-[24px]" onClick={handleIncrease}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 21 21" fill="none">
                        <path d="M19.0273 11.8056H11.8051V19.0278C11.8051 19.4109 11.6529 19.7783 11.382 20.0492C11.1111 20.32 10.7437 20.4722 10.3606 20.4722C9.97753 20.4722 9.61013 20.32 9.33925 20.0492C9.06836 19.7783 8.91618 19.4109 8.91618 19.0278V11.8056H1.69396C1.31087 11.8056 0.943466 11.6534 0.67258 11.3825C0.401694 11.1116 0.249512 10.7442 0.249512 10.3611C0.249512 9.97802 0.401694 9.61062 0.67258 9.33974C0.943466 9.06885 1.31087 8.91667 1.69396 8.91667H8.91618V1.69444C8.91618 1.31135 9.06836 0.943954 9.33925 0.673068C9.61013 0.402182 9.97753 0.25 10.3606 0.25C10.7437 0.25 11.1111 0.402182 11.382 0.673068C11.6529 0.943954 11.8051 1.31135 11.8051 1.69444V8.91667H19.0273C19.4104 8.91667 19.7778 9.06885 20.0487 9.33974C20.3196 9.61062 20.4717 9.97802 20.4717 10.3611C20.4717 10.7442 20.3196 11.1116 20.0487 11.3825C19.7778 11.6534 19.4104 11.8056 19.0273 11.8056Z" fill="#003468" />
                    </svg>
                </button>
            </div>
        </>
    )
}