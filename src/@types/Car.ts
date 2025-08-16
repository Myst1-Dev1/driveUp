

export type CarType = {
    id: number;
    availability: boolean;
    car_model: string;
    description: string;
    fuel: string;
    fuel_capacity: number;
    image_url: string;
    name: string;
    passengers: number;
    price_per_hour: number;
    price_per_day: number;
    price_per_week: number;
    reviews: [];
    thumbnail_urls: String[];
    transmission: string;
    year: number;
}