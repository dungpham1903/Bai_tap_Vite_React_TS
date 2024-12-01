
type propTypes = {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
const ModalPopup: React.FC<propTypes> = ({ open, onClose, children }) => {
    return (
        <>
            <div className={`fixed inset-0 flex justify-center items-center transition-colors 
            ${open ? "visible bg-neutral-1-900 bg-opacity-30 z-50 px-4" : "invisible"}`} onClick={onClose}>
                <div className={`bg-white rounded-lg shadow  transition-all
                ${open ? "scale-100 opacity-100" : "scale-110 opacity-0"}`} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </>
    )
}
export default ModalPopup;