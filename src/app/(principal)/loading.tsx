import Image from "next/image";

export default function Loading() {
    return (
        <>
            <div className="z-50 relative text-white bg-black min-h-screen w-full flex flex-col gap-4 items-center justify-center">
                <Image src="/images/loading.gif" width={200} height={200} alt="imagem de loading" />
                <p className="font-3xl font-semibold">carregando...</p>
            </div>
        </>
    )
}