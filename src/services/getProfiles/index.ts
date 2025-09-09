import { api } from "../axios";

export async function getProfiles() {
    try {
        const res = await api.get("user/getAllProfiles");

        return res.data;
    } catch (error) {
        console.log(error);
    }
}