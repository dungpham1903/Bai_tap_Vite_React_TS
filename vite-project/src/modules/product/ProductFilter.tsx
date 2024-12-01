interface ProductFilterProps {
    onCheckboxChange: (checked: boolean) => void;
}
const ProductFilter: React.FC<ProductFilterProps> = ({ onCheckboxChange }) => {
    const handleCheckboxClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        onCheckboxChange(e.target.checked);
    };
    return (
        <div className="flex justify-between items-center p-3">
            Nhẫn cưới
            <input
                className="w-[18px] h-[18px] rounded border border-neutral-2-200 border-solid"
                type="checkbox"
                onChange={handleCheckboxClick}
            />
        </div>
    );
};

export default ProductFilter;