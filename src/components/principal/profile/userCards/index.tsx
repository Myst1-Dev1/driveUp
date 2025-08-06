import Image from "next/image";

export function UserCards() {
    return (
        <>
            <div className="flex flex-col gap-5">
                <button className="max-w-60 w-full ml-auto bg-blue-500 p-3 text-white rounded-md font-semibold cursor-pointer transition-all duration-500 hover:bg-blue-700">Adicionar novo cartão</button>
                <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-0">
                    <div className="flex justify-between items-center p-3 w-full lg:max-w-96 rounded-md border border-gray-300 bg-white">
                        <div className="flex flex-col gap-3">
                            <Image src="/images/card-logo.webp" className="w-24 object-cover" width={200} height={200} alt="logo do cartão"/>
                            <h5 className="font-medium">MasterCard</h5>
                            <h6 className="text-gray-500 font-medium">****4567</h6>
                            <span className="font-light text-gray-500 text-xs">Expira em 07/29</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <button className="bg-green-400 cursor-pointer text-white p-2 rounded-md max-w-24 font-semibold w-full transition-all duration-500 hover:brightness-90">Editar</button>
                            <button className="bg-red-600 cursor-pointer text-white p-2 rounded-md max-w-24 font-semibold w-full transition-all duration-500 hover:brightness-90">Excluir</button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center p-3 w-full lg:max-w-96 rounded-md border border-gray-300 bg-white">
                        <div className="flex flex-col gap-3">
                            <Image src="/images/card-logo.webp" className="w-24 object-cover" width={200} height={200} alt="logo do cartão"/>
                            <h5 className="font-medium">MasterCard</h5>
                            <h6 className="text-gray-500 font-medium">****4567</h6>
                            <span className="font-light text-gray-500 text-xs">Expira em 07/29</span>
                        </div>
                        <div className="flex flex-col gap-4">
                            <button className="bg-green-400 cursor-pointer text-white p-2 rounded-md max-w-24 font-semibold w-full transition-all duration-500 hover:brightness-90">Editar</button>
                            <button className="bg-red-600 cursor-pointer text-white p-2 rounded-md max-w-24 font-semibold w-full transition-all duration-500 hover:brightness-90">Excluir</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}