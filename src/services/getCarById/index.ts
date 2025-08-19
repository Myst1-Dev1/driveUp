import { api } from "../axios";

export async function getCarById(id: number) {
    try {
        const res = await api.get("/car/getCar/" + id);

        return res.data;
    } catch (error) {
        console.log(error);
    }
}