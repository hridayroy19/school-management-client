/* eslint-disable @typescript-eslint/no-explicit-any */
"use server"

import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";



export const getAllResult = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/result`, {
            next: {
                tags: ["rsult"],
            },
        });

        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};




export const CreateResult = async (userData: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/result/create-result`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        revalidateTag("rsult")
        const result = await res.json();
        return result;
    } catch (error: any) {
        return Error(error);
    }
};
