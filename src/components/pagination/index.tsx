"use client";

import { useState, useMemo } from "react";

interface PaginationProps<T> {
  data: T[]; // O array de dados (carros, usuários, posts, etc)
  itemsPerPage: number; // Quantos itens vão aparecer em cada página
  renderItem: (item: T, index: number) => React.ReactNode; // Função para dizer COMO renderizar cada item
  gridColumn?: boolean;
}

export function Pagination<T>({ data, itemsPerPage, renderItem, gridColumn }: PaginationProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const currentData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return data?.slice(start, start + itemsPerPage);
  }, [currentPage, data, itemsPerPage]);

  return (
    <div className="flex flex-col gap-6">
      {/* Renderiza os itens da página atual */}
      <div className={`grid grid-cols-1 ${gridColumn ? '' : 'md:grid-cols-2 lg:grid-cols-3'} 2xl:grid-cols-4 gap-8 place-items-center py-10`}>
        {currentData?.map(renderItem)}
      </div>

      {/* Controles de paginação */}
      <div className="flex justify-end items-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(p => p - 1)}
          className="cursor-pointer px-3 py-1 bg-gray-600 text-white rounded-md disabled:opacity-50"
        >
          {"<"}
        </button>

        {Array.from({ length: totalPages })?.map((_, idx) => {
          const page = idx + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`cursor-pointer w-8 h-8 grid place-items-center rounded-md font-semibold transition-all duration-300 ${
                currentPage === page
                  ? "bg-blue-500 text-white"
                  : "bg-gray-600 text-white hover:bg-blue-400"
              }`}
            >
              {page}
            </button>
          );
        })}

        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(p => p + 1)}
          className="cursor-pointer px-3 py-1 bg-gray-600 text-white rounded-md disabled:opacity-50"
        >
          {">"}
        </button>
      </div>
    </div>
  );
}