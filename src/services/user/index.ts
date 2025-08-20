/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";

export const getAllUsers = async () => {
    try {
        const cookieStore = cookies();
        const token = (await cookieStore).get("token")?.value;

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/user`, {
            method: "GET",
            headers: {
                Authorization: token || "",
            },
            next: {
                tags: ["USERS"],
            },
        });

        const result = await res.json();
        return result;
    } catch (error: any) {
        return { error: error.message };
    }
};


export const deleteUser = async (userId: string): Promise<any> => {
    try {
        const cookieStore = cookies();
        const token = (await cookieStore).get("token")?.value;
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/api/user/${userId}`,
            {
                method: "DELETE",
                headers: {
                    Authorization: token || "",
                },
            }

        );
        revalidateTag("USERS")
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};