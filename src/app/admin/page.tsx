import Image from "next/image"

export default function Admin() {
    return (
        <>
            <div className="container w-full min-h-screen flex justify-center items-center">
                <div className="max-w-md w-full grid grid-cols-1 gap-6 place-items-center">
                    <Image src="/images/logo-dark.png" className="max-w-40 w-full object-cover" width={200} height={200} alt="logo" />
                    <div className="w-full">
                        <h2 className="text-xl text-center font-semibold mb-5">Bem vindo</h2>
                        <form action="" className="w-full flex flex-col gap-4">
                            <input type="email" className="input" placeholder="Email" />
                            <input type="password" className="input" placeholder="Senha" />
                            <button className="w-full p-3 rounded-lg text-white bg-blue-500 font-semibold cursor-pointer mt-3 transition-all duration-500 hover:bg-blue-700">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}