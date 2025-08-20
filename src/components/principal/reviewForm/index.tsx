'use client';

import { createCarReview } from "@/actions/carActions";
import { useAppSelector } from "@/services/store/hooks";
import { useActionState } from "react";

interface ReviewFormProps {
    id: number;
}

export function ReviewForm({ id }:ReviewFormProps) {
    const { data: user } = useAppSelector(s => s.user);

    const actionWithId = async (prevState: any, formData: FormData) => {
        return await createCarReview(prevState, formData, id);
    };

    const [formState, formAction, pending] = useActionState(actionWithId, { success: false });

    return (
        <>
            <div className="py-16">
                <h2 className="text-2xl font-semibold text-center">Faça uma avaliação</h2>
                <form action={formAction} className="grid grid-cols-1 gap-5 max-w-md w-ful place-items-center m-auto mt-10">
                    <input type="text" className="hidden" name="evaluatorUrl" defaultValue={user?.data[0].avatarUrl} />
                    <input type="text" className="input" placeholder="Nome" name="evaluatorName" defaultValue={user?.data[0].fullName} />
                    <textarea className="input h-32 resize-none" name="comment" placeholder="Comentário sobre o que achou da experiência com o carro" />
                    {formState.message && <p className={`py-4 ${formState.success ? 'text-green-500' : 'text-red-600'}`}>{formState.message}</p>}
                    <button className={`${pending ? 'opacity-80 cursor-not-allowed' : 'bg-blue-500 hover:brightness-90'} block mx-auto max-w-48 rounded-xl w-full p-3 text-white cursor-pointer transition-all duration-500`}>
                        {pending ? 'Carregando' : 'Enviar'}
                    </button>
                </form>
            </div>
        </>
    )
}