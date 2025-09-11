
export async function getCarById(id: number) {
     try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}car/getCar/` + id, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      throw new Error(`Erro na API: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Erro no getCars:", error);
    return null;
  }
}