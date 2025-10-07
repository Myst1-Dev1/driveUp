export async function getCars() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}car/getCars`, {
      method: "GET",
      next: {
        revalidate: 5
      },
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