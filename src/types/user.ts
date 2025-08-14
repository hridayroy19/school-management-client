export interface IUser {
    id: string;
    name: string;
    email: string;
    profile: string | "";
    role: "STUDENT" | "ADMIN" | "TEACHER";
    iat?: number;
    exp?: number;
}