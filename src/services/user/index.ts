"use server"

import { revalidateTag } from "next/cache";
/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllUsers = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/user`, {
            next: {
                tags: ["USERS"],
            },
        });

        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};


export const deleteUser = async (userId: string): Promise<any> => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/api/user/${userId}`,
            { method: "DELETE", }

        );
        revalidateTag("USERS")
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};