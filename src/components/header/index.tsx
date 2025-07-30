import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <>
            <header className="container py-6 flex justify-between w-full absolute top-0 left-0 right-0">
                <Image className="w-40 h-10 object-cover" src="/images/logo-dark.png" width={200} height={200} alt="logo" />
                <div className="flex gap-5 items-center max-w-md w-full">
                    <nav className="flex gap-4 w-full">
                        <Link className="font-medium transition-all duration-500 hover:text-blue-600" href="">Home</Link>
                        <Link className="font-medium transition-all duration-500 hover:text-blue-600" href="">Quem somos</Link>
                        <Link className="font-medium transition-all duration-500 hover:text-blue-600" href="">Serviços</Link>
                        <Link className="font-medium transition-all duration-500 hover:text-blue-600" href="">Contato</Link>
                    </nav>
                    <button className="bg-zinc-800 text-white rounded-xl max-w-20 w-full p-2 cursor-pointer transition-all duration-500 hover:bg-blue-600">Login</button>
                </div>
            </header>
        </>
    )
}