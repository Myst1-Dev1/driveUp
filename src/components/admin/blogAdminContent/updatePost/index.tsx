import { updatePostAction } from "@/actions/blogActions";
import { useActionState, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { CategoriesInput } from "../categoriesInput";
import { Posts } from "@/@types/Posts";
import { Loading } from "@/components/loading";
import { AddRelatedPosts } from "../addRelatedPosts";

interface UpdatePostProps {
  postId: number;
  postData: Posts[];
}

export function UpdatePost({ postId, postData }: UpdatePostProps) {
  const actionWithId = async (prevState: any, formData: FormData) =>
    updatePostAction(prevState, formData, postId, relatedPost);

  const [formState, formAction, pending] = useActionState(actionWithId, { success: false });

  const [file, setFile] = useState<File | null>(null);

  const currentPost = postData?.find((post) => post.id === postId);

  const coverPreview = file ? URL.createObjectURL(file) : currentPost?.post_image_url;

  const [relatedPost, setRelatedPosts] = useState<Posts[]>(currentPost?.related_posts || []);

    function handleAddARelatedPostToPost(id: number) {
        const relatedPostData = postData.find((data) => data.id === id);

        if (relatedPostData && !relatedPost.some((post: Posts) => post.id === id)) {
            setRelatedPosts((prevState: Posts[]) => [...prevState, relatedPostData]);
        }
    }

    function handleDeleteRelatedPost(id: number) {
        setRelatedPosts((prevState: Posts[]) => prevState.filter((post) => post.id !== id));
    }

  return (
    <div className="mt-10">
      <form action={formAction} className="max-w-md w-full flex flex-col gap-4">
        <div
          className={`${file ? "" : "bg-zinc-200"} rounded-md h-40 grid place-items-center w-full`}
          style={{
            backgroundImage: file || coverPreview ? `url(${coverPreview})` : undefined,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
        <label htmlFor="uploadImg" className="cursor-pointer flex items-center gap-3 bg-black/40 text-white p-3">
            <FaCloudUploadAlt className="text-3xl" />
            <h5>Atualizar foto de capa</h5>
        </label>
          <input
            type="file"
            name="post_image_url"
            id="uploadImg"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="title" className="font-semibold">
            Titulo do artigo
          </label>
          <input
            type="text"
            id="title"
            name="post_title"
            className="input"
            placeholder="Um incrivel carro voador"
            defaultValue={currentPost?.post_title}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="categories" className="font-semibold">
            Categorias do artigo
          </label>
          <CategoriesInput
            name="post_categories"
            maxTags={5}
            initial={currentPost?.post_categories || []}
          />
        </div>

        <div className="flex flex-col gap-3">
          <label htmlFor="description" className="font-semibold">
            Descrição do artigo
          </label>
          <textarea
            className="input h-40 resize-none"
            name="post_description"
            id="description"
            placeholder="Um incrivel carro voador muito bom"
            defaultValue={currentPost?.post_description}
          />
        </div>

        <AddRelatedPosts postData={postData} relatedPost={relatedPost} handleAddARelatedPostToPost={handleAddARelatedPostToPost} handleDeleteRelatedPost={handleDeleteRelatedPost} />

        {formState.message ? (
          <p
            className={`${
              formState.success === false ? "text-red-500" : "text-green-500"
            }`}
          >
            {formState.message}
          </p>
        ) : (
          ""
        )}

        {/* Botão de envio */}
        <button
          type="submit"
          disabled={pending}
          aria-disabled={pending}
          className={`block mx-auto bg-blue-500 p-3 max-w-48 w-full font-semibold rounded-lg text-white transition-all duration-500 cursor-pointer hover:brightness-75 ${
            pending ? "opacity-80 cursor-not-allowed" : ""
          }`}
        >
          {pending ? <Loading /> : "Enviar"}
        </button>
      </form>
    </div>
  );
}