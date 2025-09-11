import { cookies } from "next/headers";

export async function getProfileData() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("user-token")?.value;
  
    if (!token) {
      throw new Error("Token não encontrado");
    }
  
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}user/getProfileById`, {
        method: "GET",
        cache: "no-store",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
  
      if (!res.ok) {
        throw new Error(`Erro na API: ${res.status}`);
      }
  
      const data = await res.json();
      return data;
  } catch (error) {
    console.error("Erro no getProfileById:", error);
    return null;
  }
}