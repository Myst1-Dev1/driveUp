import { api } from "../axios";

export async function getCars() {
    try {
        const res = await api.get("/car/getCars");

        return res.data;
    } catch (error) {
        console.log(error);
    }
}