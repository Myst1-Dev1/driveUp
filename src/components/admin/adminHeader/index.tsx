import { FaBell, FaSun } from "react-icons/fa6";

export function AdminHeader() {
    return (
        <>
            <div className="border-b border-gray-300 w-full py-4 flex gap-4 justify-end items-end px-5">
                <FaSun className="cursor-pointer transition-all duration-500 hover:text-blue-500" />
                <FaBell className="cursor-pointer transition-all duration-500 hover:text-blue-500" />
            </div>
        </>
    )
}