"use server";
import { jwtDecode } from "jwt-decode";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";


export const registerUser = async (userData: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });
        const result = await res.json();
        return result;
    } catch (error: any) {
        return Error(error);
    }
};




export const loginUser = async (userData: FieldValues) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        const result = await res.json();
        console.log(result,"data")
        if (result.status) {
            (await cookies()).set("token", result.token);
        }

        return result;
    } catch (error: any) {
        return Error(error);
    }
};


export const getCurrentUser = async () => {
  const accessToken = (await cookies()).get("token")?.value;
  let decodedData = null;

  if (accessToken) {
    decodedData = await jwtDecode(accessToken);
    return decodedData;
  } else {
    return null;
  }
};