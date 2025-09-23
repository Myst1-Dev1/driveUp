import { Profile } from "@/@types/Profile";
import { updateProfileAction } from "@/actions/profileActions";
import { Loading } from "@/components/loading";
import Image from "next/image";
import { useActionState, useState } from "react";
import { FaUpload } from "react-icons/fa";

interface UserDataProps {
    profile: Profile;
}

export function UserData({ profile }:UserDataProps) {
    const [state, action, pending] = useActionState(updateProfileAction, { success: false });
    const [file , setFile] = useState<File | any>();

    return (
        <>
            <form action={action} className="max-w-xl w-full flex flex-col gap-5">
                <div className="flex flex-col gap-3 mb-3">
                    <Image className="object-cover w-24 h-24 block mx-auto rounded-full aspect-square" src={file ? URL.createObjectURL(file) : profile?.avatarUrl || "/images/uploadUserPhoto.png"} width={200} height={200} alt="foto de upload"/>
                    <label htmlFor="avatar" className="mx-auto font-semibold cursor-pointer flex gap-3 items-center"><FaUpload /> Enviar foto de perfil</label>
                    <input type="file" id="avatar" className="hidden" name="avatarUrl" onChange={(e) => setFile(e.target.files?.[0])} accept="image/*" />
                </div>
                <div className="flex flex-col gap-5 lg:flex-row">
                    <input type="text" className="input" placeholder="Nome" defaultValue={profile?.fullName} name="fullName" />
                    <input type="tel" className="input" placeholder="Cpf" defaultValue={profile?.cpfCnpj} name="cpfCnpj" />
                </div>
                <div className="flex flex-col gap-5 lg:flex-row">
                    <input type="text" className="input" placeholder="Endereço" defaultValue={profile?.address} name="address" />
                    <input type="tel" className="input" placeholder="Número" defaultValue={profile?.phone} name="phone" />
                </div>
                <input type="date" className="input text-gray-500" defaultValue={profile?.birthDate ? profile.birthDate.split("T")[0] : ""} name="birthDate" />
                <button className="mt-3 max-w-60 w-full bg-black text-white rounded-md p-3 cursor-pointer block mx-auto transition-all duration-500 hover:bg-blue-400">
                    {pending ? <Loading /> : 'Atualizar'}
                </button>
                {!state.success && state.message && (
                    <p className="text-red-500 text-sm text-center">{state.message}</p>
                )}
                {state.success && <p className="text-green-600 text-sm text-center">Perfil atualizado!</p>}
            </form>
        </>
    )
}