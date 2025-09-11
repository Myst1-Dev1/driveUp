export type Profile = {
    id: number;
    userId: number;
    userType: string;
    fullName: string;
    address: string;
    avatarUrl: string;
    birthDate: string;
    cpfCnpj: string;
    favorites: [];
    phone: string;
    rentalHistory: RentalHistory[];
}

type RentalHistory = {
    carId: number;
    createdAt: string;
    dropoffLocation: string;
    endDate: string;
    id: number;
    pickupLocation: string;
    startDate: string;
    status: string;
    totalPrice: number;
    userId: number;
}