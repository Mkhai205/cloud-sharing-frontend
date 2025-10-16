export interface IUser {
    id: string;
    email: string;
    provider: string | null;
    providerId: string;
    firstName: string;
    lastName: string;
    avatarUrl: string | null;
    isAccountVerified: boolean;
    credits: number;
    createdAt: Date;
    updatedAt: Date;
}
