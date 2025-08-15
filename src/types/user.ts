export interface IUser {
    _id: string;
    name: string;
    email: string;
    profile: string | "";
    role: "STUDENT" | "ADMIN" | "TEACHER";
    iat?: number;
    exp?: number;
    userStatus?:string
}