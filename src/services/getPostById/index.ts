import { api } from "../axios";

export async function getPostById(id: number) {
    try {
        const res = await api.get("/blog/getPost/" + id);

        return res.data;
    } catch (error) {
        console.log(error);
    }
}