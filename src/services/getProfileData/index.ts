import { cookies } from "next/headers";
import { api } from "../axios";

export async function getProfileData() {
  const cookieStore = await cookies();
  const token = cookieStore.get("user-token")?.value;

  if (!token) {
    throw new Error("Token não encontrado");
  }

  const res = await api.get("/user/getProfileById", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
}