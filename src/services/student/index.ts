"use server"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const creteStudent = async (userData: FieldValues) => {
    try {
        const cookieStore = cookies();
        const token = (await cookieStore).get("token")?.value;
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/student/create-student`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: token || "",
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


export const getAllStudent = async () => {
    try {
        const cookieStore = cookies();
        const token = (await cookieStore).get("token")?.value;
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/student`, {
            next: {
                tags: ["STUDENT"],
            },
            headers: {
                Authorization: token || "",
            }
        });

        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};

export const deleteStudent = async (userId: string): Promise<any> => {
    try {
        const cookieStore = cookies();
        const token = (await cookieStore).get("token")?.value;
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/api/student/delete-student/${userId}`,
            {
                method: "DELETE", headers: {
                    Authorization: token || "",
                }
            }

        );
        revalidateTag("STUDENT")
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};

export const updateStudent = async (userId: string, data: any): Promise<any> => {
    try {
        const cookieStore = cookies();
        const token = (await cookieStore).get("token")?.value;
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_API}/api/student/update-student/${userId}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: token || "",
                },
                body: JSON.stringify(data),
            }
        );

        if (!res.ok) {
            throw new Error(`Failed to update student: ${res.statusText}`);
        }

        revalidateTag("STUDENT");

        return res.json();
    } catch (error: any) {
        console.error("Update student error:", error);
        throw error;
    }
};



export const getStudentByClass = async ({ id }: { id: string }) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/student/classId/${id}`, {
            next: {
                tags: ["STUDENT"],
            },
        });

        if (!res.ok) throw new Error("Failed to fetch result");
        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};
