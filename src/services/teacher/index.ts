"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */

import { revalidateTag } from "next/cache";
import { FieldValues } from "react-hook-form";


export const creteTeacher = async (userData: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/teacher/create-techer`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        revalidateTag("TEACHER")
        const result = await res.json();
        return result;
    } catch (error: any) {
        return Error(error);
    }
};


export const getAllTeacherr = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/teacher`, {
            next: {
                tags: ["TEACHER"],
            },
        });

        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};


export const deleteTeacher = async (userId: string): Promise<any> => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/api/teacher/create-delete/${userId}`,
            { method: "DELETE", }

        );
        revalidateTag("TEACHER")
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};


export const updateTeacherr = async (userId: string, data: any): Promise<any> => {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/api/teacher/update-techer/${userId}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            }
        );

        revalidateTag("TEACHER");

        return res.json();
    } catch (error: any) {
        console.error("Update student error:", error);
        throw error;
    }
};