interface ValuesType {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    district: string;
    ward: string;
    note: string;
}
interface ErrorsType {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
    city?: string;
    district?: string;
    ward?: string;
    note?: string;
}
const validate = (values: ValuesType) => {
    const errors: ErrorsType = {};
    if (!values.name) {
        errors.name = "Vui lòng nhập họ tên";
    } else if (values.name.length > 20) {
        errors.name = "Tên không dài quá 20 ký tự"
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!values.email) {
        errors.email = "Vui lòng nhập email";
    } else if (!emailPattern.test(values.email)) {
        errors.email = "Email không hợp lệ";
    }
    if (!values.phone) {
        errors.phone = "Vui lòng nhập số điện thoại";
    }
    if(!values.address){
        errors.address = "Vui lòng nhập địa chỉ";
    }
    if(!values.city){
        errors.city = "Vui lòng nhập tỉnh/thành phố";
    }
    if(!values.district){
        errors.district = "Vui lòng nhập quận/huyện";
    }
    if(!values.ward){
        errors.ward = "Vui lòng nhập phường/xã";
    }
    if(values.note.length > 20)
        errors.note = "Ghi chú không dài quá 20 ký tự"
    return errors;
}
export default validate