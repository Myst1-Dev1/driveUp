import Image from "next/image";

interface PostDescriptionProps {
    postData:string | any;
}

export function PostDescription({ postData }:PostDescriptionProps) {
    if (!postData) return null;

    // quebra o texto em linhas, considerando \r\n também
    const lines = postData.split(/\r?\n/).filter((line:any) => line.trim() !== "");

    return (
        <div className="font-light text-gray-500 text-sm mb-4">
        {lines.map((line:any, index:any) => {
            // regex para checar se é imagem
            if (/^https?:\/\/.*\.(jpg|jpeg|png|webp)(\?.*)?$/i.test(line.trim())) {
            return (
                <div key={index} className="py-6">
                <Image
                    src={line.trim()}
                    alt={`Imagem do post ${index}`}
                    width={1024}
                    height={600}
                    className="rounded-lg mx-auto w-full h-80 object-cover object-center"
                />
                </div>
            );
            }

            // texto normal
            return <p key={index} className="mb-4">{line}</p>;
        })}
        </div>
    );
}