// import { useState } from "react";


// export default function SearchProduct() {
//     // const [url, setUrl] = useState(
//     //     "http://localhost:5173/product?"
//     // )
//     // const [filter, setFilter] = useState("");
//     // const filterDebounce = useDebounce(filter, 500);
//     // const handleFilterChange = (e) => {
//     //     setFilter(e.target.value);
//     // }
//     // useEffect(() => {
//     //     if (filterDebounce) {
//     //         setUrl("http://localhost:8080/product?key")
//     //     }
//     // })
//     const [searchKeyword, setSearchKeyword] = useState<string>('');
//     const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setSearchKeyword(e.target.value);
//     };
//     return (
//         <form className='h-[42px]'>
//             <div className='h-full rounded-full border-solid border-neutral-2-200 border pr-4
//     items-center justify-start pl-4 gap-2 show-on-desktop'>
//                 <button
//                     className='w-6 h-6'
//                     type='submit'>
//                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path fillRule="evenodd" clipRule="evenodd" d="M10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75ZM2.25 10C2.25 5.71979 5.71979 2.25 10 2.25C14.2802 2.25 17.75 5.71979 17.75 10C17.75 14.2802 14.2802 17.75 10 17.75C5.71979 17.75 2.25 14.2802 2.25 10Z" fill="#919EAB" />
//                         <path fillRule="evenodd" clipRule="evenodd" d="M14.4697 14.4697C14.7626 14.1768 15.2374 14.1768 15.5303 14.4697L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L14.4697 15.5303C14.1768 15.2374 14.1768 14.7626 14.4697 14.4697Z" fill="#919EAB" />
//                     </svg>
//                 </button>
//                 <label>
//                     <input
//                         className="outline-none"
//                         type="text"
//                         placeholder='Tìm kiếm'
//                         onChange={handleFilterChange}
//                     ></input>
//                 </label>
//             </div>
//             <span className=' hide-on-desktop'>
//                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                     <path fillRule="evenodd" clipRule="evenodd" d="M10 3.75C6.54822 3.75 3.75 6.54822 3.75 10C3.75 13.4518 6.54822 16.25 10 16.25C13.4518 16.25 16.25 13.4518 16.25 10C16.25 6.54822 13.4518 3.75 10 3.75ZM2.25 10C2.25 5.71979 5.71979 2.25 10 2.25C14.2802 2.25 17.75 5.71979 17.75 10C17.75 14.2802 14.2802 17.75 10 17.75C5.71979 17.75 2.25 14.2802 2.25 10Z" fill="#161C24" />
//                     <path fillRule="evenodd" clipRule="evenodd" d="M14.4697 14.4697C14.7626 14.1768 15.2374 14.1768 15.5303 14.4697L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L14.4697 15.5303C14.1768 15.2374 14.1768 14.7626 14.4697 14.4697Z" fill="#161C24" />
//                 </svg>
//             </span>
//         </form>
//     )
// }