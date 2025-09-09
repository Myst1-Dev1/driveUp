import { createCarAction } from "@/actions/carActions";
import { Loading } from "@/components/loading";
import { Modal } from "@/components/modal";
import React, { useActionState, useState } from "react";
import { FaCloudUploadAlt, FaPlus } from "react-icons/fa";

interface CarModalProps {
    isOpenModal: boolean;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CarModal({ isOpenModal, setIsOpenModal }:CarModalProps) {
    const [formState, formAction, pending] = useActionState(createCarAction, { success: false });
    const [file, setFile] = useState<File | null>();
    const [files, setFiles] = useState<FileList | null>(null);

  // Função para lidar com a seleção de arquivos
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (selectedFiles) {
            setFiles(selectedFiles);
        }
    };

    return (
        <>
            <Modal maxWidth="max-w-[720px] overflow-y-auto scrollDontShow h-[500px] 2xl:h-[800px] z-50" isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal}>
                <form action={formAction}>
                    <div>
                        <label
                            htmlFor="carImage"
                            className={`cursor-pointer h-40 w-full grid place-items-center ${file ? '' : 'bg-gray-200'}`}
                            style={file ? { backgroundImage: `url(${URL.createObjectURL(file)})`, backgroundSize: 'cover', backgroundPosition: 'center' } : {}}
                        >
                            {file ? '' : <FaCloudUploadAlt className="text-3xl" />}
                        </label>
                        <input type="file" name="image_url" id="carImage" className="hidden" onChange={(e) => setFile(e.target.files?.[0])} />
                    </div>
                    <div className="mt-5 flex w-full justify-between items-center gap-4">
                        <label htmlFor="carImages">
                            <div className="cursor-pointer w-14 h-14 lg:w-24 lg:h-24 grid place-items-center bg-gray-200">
                            <FaPlus className="text-xl lg:text-3xl" />
                            </div>
                        </label>

                        <div className="flex w-full justify-between">
                            {files && Array.from(files).slice(0, 5).map((file, index) => (
                            <div
                                key={index}
                                className="w-14 h-14 lg:w-24 lg:h-24 bg-gray-200"
                                style={{
                                backgroundImage: `url(${URL.createObjectURL(file)})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                }}
                            />
                            ))}
                            {files && Array.from(files).length < 5 &&
                            [...Array(5 - files.length)].map((_, index) => (
                                <div key={index} className="w-14 h-14 lg:w-24 lg:h-24 bg-gray-200" />
                            ))}
                        </div>
                        <input type="file" name="thumbnail_urls" id="carImages" className="hidden" multiple onChange={handleFileChange} />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
                        <input type="text" className="input" name="name" placeholder="Nome do carro" />
                        <input type="text" className="input" name="car_model" placeholder="Modelo do carro" />
                        <input type="text" className="input" name="year" placeholder="Ano do carro" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                        <input type="text" className="input" name="passengers" placeholder="Número de passageiros" />
                        <input type="text" className="input" name="transmission" placeholder="Transmissão" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
                        <input type="text" className="input" name="fuel" placeholder="Combustível" />
                        <input type="number" className="input" name="fuel_capacity" placeholder="Capacidade do tanque" />
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
                        <input type="number" className="input" name="price_per_hour" placeholder="Preço por horá" />
                        <input type="number" className="input" name="price_per_day" placeholder="Preço por dia" />
                        <input type="number" className="input" name="price_per_week" placeholder="Preço por semana" />
                    </div>
                    <textarea placeholder="Descrição do carro" className="input mt-5 h-28 resize-none" name="description"/>
                    {formState.message && (
                        <p className={`${formState.success ? 'text-green-500' : 'text-red-500'} text-sm text-center mt-2`}>{formState.message}</p>
                    )}
                    <button
                        type="submit"
                        disabled={pending}
                        aria-disabled={pending}
                        className={`font-semibold cursor-pointer p-3 w-full rounded-lg text-white transition-all duration-500 mt-5 text-xl
                            ${pending ? 'cursor-not-allowed opacity-70' : 'bg-black hover:bg-blue-400'}`}
                        >
                        {pending ? <Loading /> : 'Criar Carro'}
                    </button>
                </form> 
            </Modal>
        </>
    )
}