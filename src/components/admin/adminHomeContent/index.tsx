'use client';

import { signInAction } from "@/actions/signActions";
import { Loading } from "@/components/loading";
import Image from "next/image"
import { useRouter } from "next/navigation";
import { useActionState } from "react";
import { toast } from "react-toastify";

export function AdminHomeContent() {
    const router = useRouter();

    async function handleLogin(prevState: any, data: FormData) {
        const result = await signInAction(prevState, data);
    
        if (result.success) {
            router.push('/admin/panel');
        } else {
            toast.error(result.message);
        }

        return result;
    }

    const [formState, formAction, pending] = useActionState(handleLogin, { success: false });

    return (
        <>
            <div className="container w-full min-h-screen flex justify-center items-center">
                <div className="max-w-md w-full grid grid-cols-1 gap-6 place-items-center">
                    <Image src="/images/logo-dark.png" className="max-w-40 w-full object-cover" width={200} height={200} alt="logo" />
                    <div className="w-full">
                        <h2 className="text-xl text-center font-semibold mb-5">Bem vindo</h2>
                        <form action={formAction} className="w-full flex flex-col gap-4">
                            <input type="email" className="input" name="email" placeholder="Email" />
                            <input type="password" className="input" name="password" placeholder="Senha" />
                            <button
                                type="submit"
                                disabled={pending}
                                aria-disabled={pending}
                                className={`font-semibold p-3 w-full rounded-lg text-white bg-black hover:bg-blue-400 transition-all duration-500 mt-5 text-xl
                                    ${pending ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                                >
                                {pending ? <Loading /> : 'Entrar'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}