"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";


export const creteSubject = async (userData: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/subject/create-subject`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: (await cookies()).get("token")!.value,
            },
            body: JSON.stringify(userData),
        });
        revalidateTag("subject")
        const result = await res.json();
        return result;
    } catch (error: any) {
        return Error(error);
    }
};


export const getAllSubject = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/subject`, {
            next: {
                tags: ["subject"],
            },
        });

        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};
