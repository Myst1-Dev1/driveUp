import { signInAction } from "@/actions/signActions";
import { Loading } from "@/components/loading";
import React, { useActionState, useEffect } from "react";

interface SignInProps {
    setFormType:React.Dispatch<React.SetStateAction<string>>;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SignIn({ setFormType, setIsModalOpen }:SignInProps) {
    const [formState, formAction, pending] = useActionState(signInAction, { success: false });

    useEffect(() => {
        if (formState.success) {
            setIsModalOpen(false);
        }
    }, [formState.success, setIsModalOpen]);

    return (
        <>
            <div>
                <h2 className="font-semibold text-center text-xl mt-5">Bem vindo</h2>
                <form action={formAction} className="mt-5">
                    <input className="mb-5 input" name="email" type="email" placeholder="Email" />
                    <input className="input" name="password" type="password" placeholder="Senha" />
                    <span className="font-light text-center block text-sm mt-3">Não possui uma conta? <span onClick={() => setFormType("signUp")} className="text-blue-400 font-medium cursor-pointer transition-all duration-500 hover:text-blue-600">Cadastro</span></span>
                    {formState.message && (
                        <p className="text-red-500 text-sm text-center mt-2">{formState.message}</p>
                    )}
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
        </>
    )
}