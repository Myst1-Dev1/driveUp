import React from "react";

interface ModalProps {
    maxWidth: string;
    isOpenModal: boolean;
    setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode
}

export function Modal({ maxWidth, isOpenModal, setIsOpenModal, children }: ModalProps) {
    return (
        <>
        {isOpenModal &&
            <div onClick={() => setIsOpenModal(false)} className="fixed z-30 top-0 left-0 right-0 w-full min-h-screen bg-black/40">
                <div 
                    onClick={(e) => e.stopPropagation()}
                    className={`rounded-lg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 ${maxWidth} w-full`}>
                    {children}
                </div>
            </div>
        }
        </>
    )
}