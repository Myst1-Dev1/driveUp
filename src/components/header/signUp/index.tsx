import { signUpAction } from "@/actions/signActions";
import { Loading } from "@/components/loading";
import React, { useActionState, useEffect } from "react";
import { toast } from "react-toastify";

interface SignUpProps {
    setFormType:React.Dispatch<React.SetStateAction<string>>;
}

export function SignUp({ setFormType }:SignUpProps) {

    async function handleCreateAccount(prevState: any, formData: FormData) {
        const result = await signUpAction(prevState, formData);

        if (result?.message) {
            if (result.success) {
                toast.success(result.message);
            } else {
                toast.error(result.message);
            }
        }

        return result;
    }

    const [formState, formAction, pending] = useActionState(handleCreateAccount, { success: false });

    useEffect(() => {
        if (formState.success) {
            setFormType('signIn');
        }
    }, [formState.success, setFormType]);

    return (
        <>
             <div>
                <h2 className="font-semibold text-center text-xl mt-5">Criar conta</h2>
                <form action={formAction} className="mt-5">
                    <div className="flex flex-col lg:flex-row gap-4 mb-0 lg:mb-5">
                        <input className="input" type="email" placeholder="Email" name="email" />
                        <input className="input mb-4 lg:mb-0" type="tel" placeholder="Telefone" name="phone" />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 mb-0 lg:mb-5">
                        <input className="input" type="text" placeholder="Endereço" name="address" />
                        <input className="input mb-4 lg:mb-0" type="tel" placeholder="CPF/CNPJ" name="cpfCnpj" />
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4">
                        <input className="input" type="password" placeholder="Senha" name="passwordHash" />
                        <input className="input" type="password" placeholder="Confirme a senha" name="confirmPassword" />
                    </div>
                    <input type="date" className="input mt-4 text-gray-500" name="birthDate" />
                    <span className="font-light text-center block text-sm mt-3">Já possui uma conta? <span onClick={() => setFormType("signIn")} className="text-blue-400 font-medium cursor-pointer transition-all duration-500 hover:text-blue-600">Entrar</span></span>
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
                        {pending ? <Loading /> : 'Cadastrar'}
                    </button>
                </form>
            </div>
        </>
    )
}