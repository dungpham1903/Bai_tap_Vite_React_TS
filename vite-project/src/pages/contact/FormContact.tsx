import { useState } from "react";
import ModalPopup from "../../components/modals/Modal";
import { useFormik } from "formik";
import { FaCircleCheck } from "react-icons/fa6";
interface ValuesType {
    name: string;
    email: string;
    phone: string;
    content: string;
}

interface ErrorsType {
    name?: string;
    email?: string;
    phone?: string;
    content?: string;
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

    return errors;
}
export default function FormInput() {

    const [open, setOpen] = useState<boolean>(false)

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            content: ""
        },
        validate,
        onSubmit: () => {
            if (Object.keys(formik.errors).length === 0) {
                setOpen(true);
            } else {
                console.log("Có lỗi validate:", formik.errors);
            }
        }
    })


    return (
        <>
            <form className='flex flex-col gap-6 text-body-2 font-normal' onSubmit={formik.handleSubmit}>
                <div className='flex flex-col gap-3'>
                    <label className='font-semibold'>Họ và tên</label>
                    <input className="px-6 py-3 border border-neutral-2-200 rounded-sm"
                        type="text"
                        placeholder='Nhập họ tên của bạn'
                        name="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                    />
                    {formik.touched.name && formik.errors.name ? (<p className=" text-error-500">{formik.errors.name}</p>) : null}
                </div>
                <div className='flex flex-col gap-3'>
                    <label className='font-semibold'>Email</label>
                    <input className="px-6 py-3 border border-neutral-2-200 rounded-sm"
                        type="text"
                        placeholder='Nhập email của bạn'
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (<p className=" text-error-500">{formik.errors.email}</p>) : null}
                </div>
                <div className='flex flex-col gap-3'>
                    <label className='font-semibold'>Điện thoại</label>
                    <input className="px-6 py-3 border border-neutral-2-200 rounded-sm"
                        type="text"

                        placeholder='Nhập số điện thoại của bạn'
                        name="phone"
                        value={formik.values.phone}
                        onChange={(e) => {
                            const onlyNums = e.target.value.replace(/[^0-9]/g, ""); // Loại bỏ tất cả ký tự không phải số
                            formik.setFieldValue("phone", onlyNums);
                        }}
                        onBlur={formik.handleBlur}


                    />
                    {formik.touched.phone && formik.errors.phone ? (<p className=" text-error-500">{formik.errors.phone}</p>) : null}
                </div>
                <div className='flex flex-col gap-3'>
                    <label className='font-semibold'>Nội dung</label>
                    <textarea className="px-6 py-3 h-[86px] border border-neutral-2-200 rounded-sm flex items-start"
                        placeholder='Nhập nội dung của bạn'
                        name="content"
                        value={formik.values.content}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}

                    ></textarea>
                </div>
                <button type="submit" className=' bg-primary-1 text-body-2 text-white font-normal py-3'>GỬI</button>
            </form>
            <ModalPopup open={open} onClose={() => setOpen(false)}>
                <div className='flex flex-col gap-4 xl:w-[500px]'>

                    <div className="flex flex-col gap-4 p-6 items-center text-center">
                        <div>
                            <FaCircleCheck color="#28A745" size={48} />
                        </div>
                        <span className="text-neutral-1-900 font-semibold text-header-1">Gửi thông tin thành công</span>
                        <span className="text-neutral-1-600 font-normal text-body-2">Cảm ơn bạn đa liên hệ với chung tôi, chúng tôi sẽ liên hệ bạn sớm nhất có thể!</span>
                        <button className="text-white font-medium text-body-1 p-2 w-full bg-success-400 rounded-lg"
                            onClick={() => setOpen(false)}>Đóng</button>
                    </div>
                </div>
            </ModalPopup>
        </>

    );
};