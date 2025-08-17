"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */


export const creteStudent = async (userData: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/student/create-student`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        revalidateTag("STUDENT")
        const result = await res.json();
        return result;
    } catch (error: any) {
        return Error(error);
    }
};



import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";
export const getAllStudent = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/student`, {
            next: {
                tags: ["STUDENT"],
            },
        });

        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};

export const deleteStudent = async (userId: string): Promise<any> => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/api/student/${userId}`,
            { method: "DELETE", }

        );
        revalidateTag("STUDENT")
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};


