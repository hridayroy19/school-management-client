"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */

import { revalidateTag } from "next/cache";
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