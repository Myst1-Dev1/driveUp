import { CarType } from "@/@types/Car";
import { updateCarAction } from "@/actions/carActions";
import { Loading } from "@/components/loading";
import { Modal } from "@/components/modal";
import React, { useActionState, useMemo, useState, useEffect } from "react";
import { FaCloudUploadAlt, FaPlus, FaTimes, FaTrashAlt } from "react-icons/fa";

interface CarModalProps {
  isOpenModal: boolean;
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  data: CarType[];
  carId: number;
}

const MAX_THUMBS = 5;

/* ------- helpers para previews ------- */
function useObjectUrl(file: File | null | undefined) {
  const [url, setUrl] = useState<string | null>(null);
  useEffect(() => {
    if (!file) return setUrl(null);
    const u = URL.createObjectURL(file);
    setUrl(u);
    return () => URL.revokeObjectURL(u);
  }, [file]);
  return url;
}

function useObjectUrls(list: FileList | null) {
  const [urls, setUrls] = useState<string[]>([]);
  useEffect(() => {
    if (!list) return setUrls([]);
    const arr = Array.from(list).slice(0, MAX_THUMBS).map((f) => URL.createObjectURL(f));
    setUrls(arr);
    return () => arr.forEach((u) => URL.revokeObjectURL(u));
  }, [list]);
  return urls;
}

export function UpdateCarModal({ isOpenModal, setIsOpenModal, data, carId }: CarModalProps) {
  const actionWithId = async (prevState: any, formData: FormData) =>
    updateCarAction(prevState, formData, carId);

  const [formState, formAction, pending] = useActionState(actionWithId, { success: false });

  const [file, setFile] = useState<File | null>(null);
  const [files, setFiles] = useState<FileList | null>(null);

  const car = useMemo(() => data?.find((c) => c.id === carId), [data, carId]);

  const [existingThumbs, setExistingThumbs] = useState<string[]>([]);
  useEffect(() => {
    setExistingThumbs(car?.thumbnail_urls || []);
  }, [carId, car]);

  const thumbInputRef = React.useRef<HTMLInputElement>(null);

  const coverPreview = useObjectUrl(file);
  const thumbsPreview = useObjectUrls(files);

  const coverSrc = coverPreview || car?.image_url || "/images/car-img.jpg";

  const slotsLeft = Math.max(0, MAX_THUMBS - existingThumbs.length);
  const allThumbsToShow = [...existingThumbs, ...thumbsPreview].slice(0, MAX_THUMBS);
  const blanks = Math.max(0, MAX_THUMBS - allThumbsToShow.length);

  const handleNewFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files ? Array.from(e.target.files) : [];
    const kept = selected.slice(0, slotsLeft);
    const dt = new DataTransfer();
    kept.forEach((f) => dt.items.add(f));
    if (thumbInputRef.current) thumbInputRef.current.files = dt.files;
    setFiles(dt.files);
  };

  const handleRemoveThumb = (index: number) => {
    if (index < existingThumbs.length) {
      setExistingThumbs((prev) => prev.filter((_, i) => i !== index));
      return;
    }
    const previewIdx = index - existingThumbs.length;
    setFiles((prev) => {
      if (!prev) return prev;
      const dt = new DataTransfer();
      Array.from(prev).forEach((f, i) => {
        if (i !== previewIdx) dt.items.add(f);
      });
      if (thumbInputRef.current) thumbInputRef.current.files = dt.files;
      return dt.files;
    });
  };

  return (
    <Modal
      maxWidth="max-w-[720px] overflow-y-auto scrollDontShow h-[500px] 2xl:h-[800px] z-50"
      isOpenModal={isOpenModal}
      setIsOpenModal={setIsOpenModal}
    >
      <form action={formAction}>
        <input type="hidden" name="existing_image_url" value={car?.image_url ?? ""} />
        <input
          type="hidden"
          name="existing_thumbnail_urls"
          value={JSON.stringify(existingThumbs)}
        />

        <div>
          <label
            htmlFor="carImage"
            className="cursor-pointer h-40 w-full grid place-items-center rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url(${coverSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {!file && !car?.image_url && <FaCloudUploadAlt className="text-3xl" />}
          </label>
          <input
            type="file"
            id="carImage"
            name="image_url"
            accept="image/*"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] ?? null)}
          />
        </div>

        <div className="mt-5 flex w-full items-center gap-4">
          <label htmlFor="carImages">
            <div
              className={`cursor-pointer w-14 h-14 lg:w-24 lg:h-24 grid place-items-center rounded ${
                slotsLeft === 0 ? "bg-gray-200/60 pointer-events-none" : "bg-gray-200"
              }`}
              title={slotsLeft === 0 ? "Limite de 5 imagens atingido" : "Adicionar imagens"}
            >
              <FaPlus className="text-xl lg:text-3xl" />
            </div>
          </label>

          <div className="flex w-full justify-between gap-2">
            {allThumbsToShow.map((src, i) => (
              <div
                key={i}
                className="relative w-14 h-14 lg:w-24 lg:h-24 rounded bg-center bg-cover bg-gray-200 overflow-hidden"
                style={{ backgroundImage: `url(${src})` }}
              >
                <button
                  type="button"
                  onClick={() => handleRemoveThumb(i)}
                  className="cursor-pointer absolute -top-2 -right-2 grid place-items-center rounded-md bg-white w-6 h-6"
                  aria-label="Remover miniatura"
                  title="Remover"
                >
                  <FaTrashAlt className="text-red-600" />
                </button>
              </div>
            ))}

            {Array.from({ length: blanks }).map((_, i) => (
              <div key={`blank-${i}`} className="w-14 h-14 lg:w-24 lg:h-24 rounded bg-gray-200" />
            ))}
          </div>

          <input
            ref={thumbInputRef}
            type="file"
            id="carImages"
            name="thumbnail_urls"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleNewFiles}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
          <input className="input" name="name" placeholder="Nome do carro" defaultValue={car?.name} />
          <input className="input" name="car_model" placeholder="Modelo do carro" defaultValue={car?.car_model} />
          <input className="input" name="year" placeholder="Ano do carro" defaultValue={car?.year} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
          <input className="input" name="passengers" placeholder="Número de passageiros" defaultValue={car?.passengers} />
          <input className="input" name="transmission" placeholder="Transmissão" defaultValue={car?.transmission} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
          <input className="input" name="fuel" placeholder="Combustível" defaultValue={car?.fuel} />
          <input type="number" className="input" name="fuel_capacity" placeholder="Capacidade do tanque" defaultValue={car?.fuel_capacity} />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
          <input type="number" className="input" name="price_per_hour" placeholder="Preço por horá" defaultValue={car?.price_per_hour} />
          <input type="number" className="input" name="price_per_day" placeholder="Preço por dia" defaultValue={car?.price_per_day} />
          <input type="number" className="input" name="price_per_week" placeholder="Preço por semana" defaultValue={car?.price_per_week} />
        </div>
        <textarea
          className="input mt-5 h-28 resize-none"
          name="description"
          placeholder="Descrição do carro"
          defaultValue={car?.description}
        />

        {formState.message && (
          <p className={`${formState.success ? "text-green-500" : "text-red-500"} text-sm text-center mt-2`}>
            {formState.message}
          </p>
        )}

        <button
            type="submit"
            disabled={pending}
            aria-disabled={pending}
            className={`font-semibold cursor-pointer p-3 w-full rounded-lg text-white transition-all duration-500 mt-5 text-xl
                ${pending ? 'cursor-not-allowed opacity-70' : 'bg-black hover:bg-blue-400'}`}
            >
            {pending ? <Loading /> : 'Atualizar Carro'}
        </button>
      </form>
    </Modal>
  );
}