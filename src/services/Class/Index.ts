"use server"

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

/* eslint-disable @typescript-eslint/no-explicit-any */


export const CreateClass = async (data: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/class/create-class`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: (await cookies()).get("token")!.value,
            },
            body: JSON.stringify(data),
        });
        revalidateTag("class")
        const result = await res.json();
        return result;
    } catch (error: any) {
        return Error(error);
    }
};

export const getAllClass = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/class`, {
            next: {
                tags: ["class"],
            },
            headers:{
                Authorization: (await cookies()).get("token")!.value,
            }
        });

        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};
