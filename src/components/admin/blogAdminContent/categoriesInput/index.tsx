import React from "react";
import { FaTimes } from "react-icons/fa";

type CategoriesInputProps = {
  name?: string;                 // nome do campo hidden enviado ao backend
  initial?: string[];            // categorias iniciais (ex: ao editar)
  placeholder?: string;
  maxTags?: number;
};

export function CategoriesInput({
  name = "post_categories",
  initial = [],
  placeholder = "Inovação (Enter para adicionar)",
  maxTags = 10,
}: CategoriesInputProps) {
  const [value, setValue] = React.useState("");
  const [tags, setTags] = React.useState<string[]>(initial);

  const addTag = (raw: string) => {
    const token = raw.trim();
    if (!token) return;
    if (tags.includes(token)) return;
    if (tags.length >= maxTags) return;
    setTags((t) => [...t, token]);
    setValue("");
  };

  const removeTag = (idx: number) => {
    setTags((t) => t.filter((_, i) => i !== idx));
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    // adiciona com Enter, vírgula ou Tab
    if (e.key === "Enter" || e.key === "," || e.key === "Tab") {
      if (value.trim()) {
        e.preventDefault();
        addTag(value);
      }
    }
    // remover último com Backspace quando input está vazio
    if (e.key === "Backspace" && !value && tags.length) {
      e.preventDefault();
      removeTag(tags.length - 1);
    }
  };

  const onPaste: React.ClipboardEventHandler<HTMLInputElement> = (e) => {
    // suporta colar "tag1, tag2; tag3"
    const text = e.clipboardData.getData("text");
    if (!text) return;
    e.preventDefault();
    text
      .split(/[,;\n]/)
      .map((t) => t.trim())
      .filter(Boolean)
      .forEach(addTag);
  };

  return (
    <div className="flex flex-col gap-2">
      {/* chips */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <span
              key={`${t}-${i}`}
              className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-zinc-200 text-sm"
            >
              {t}
              <button
                type="button"
                onClick={() => removeTag(i)}
                className="cursor-pointer text-zinc-600 hover:text-zinc-900"
                aria-label={`Remover ${t}`}
              >
                <FaTimes size={12} />
              </button>
            </span>
          ))}
        </div>
      )}

      {/* input visível */}
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={onKeyDown}
        onPaste={onPaste}
        onBlur={() => addTag(value)}            // adiciona ao sair do campo
        placeholder={placeholder}
      />

      {/* input hidden que vai pro backend */}
      <input type="hidden" name={name} value={JSON.stringify(tags)} />
    </div>
  );
}