/* eslint-disable @typescript-eslint/no-explicit-any */




export const getAllTeacherr = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/api/teacher`, {
            next: {
                tags: ["class"],
            },
        });

        return res.json();
    } catch (error: any) {
        return Error(error);
    }
};
