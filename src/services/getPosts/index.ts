import { api } from "../axios";

export async function getPosts() {
    try {
        const res = await api.get("/blog/getPosts");

        return res.data;
    } catch (error) {
        console.log(error);
    }
}