import Image from "next/image";
import { FaUpload } from "react-icons/fa";

export function UserData() {
    return (
        <>
            <form action="" className="max-w-xl w-full flex flex-col gap-5">
                <div className="flex flex-col gap-3 mb-3">
                    <Image className="object-cover w-24 h-24 block mx-auto" src="/images/uploadUserPhoto.png" width={200} height={200} alt="foto de upload"/>
                    <label htmlFor="avatar" className="mx-auto font-semibold cursor-pointer flex gap-3 items-center"><FaUpload /> Enviar foto de perfil</label>
                    <input type="file" id="avatar" className="hidden" name="avatar" />
                </div>
                <div className="flex flex-col gap-5 lg:flex-row">
                    <input type="text" className="input" placeholder="Nome" />
                    <input type="tel" className="input" placeholder="Cpf" />
                </div>
                <div className="flex flex-col gap-5 lg:flex-row">
                    <input type="text" className="input" placeholder="Endereço" />
                    <input type="tel" className="input" placeholder="Número" />
                </div>
                <input type="date" className="input text-gray-500" />
                <button className="mt-3 max-w-60 w-full bg-black text-white rounded-md p-3 cursor-pointer block mx-auto transition-all duration-500 hover:bg-blue-400">Atualizar</button>
            </form>
        </>
    )
}