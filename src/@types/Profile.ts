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
    rentalHistory: [];
}