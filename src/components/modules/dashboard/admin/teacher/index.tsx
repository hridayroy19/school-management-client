"use client";

import { ITeacher } from "@/types";
import TeacherCard from "./TeacherCard";

type ITeacherPropps = {
  data: ITeacher[];
};

export default function TeacherManagement({ data }: ITeacherPropps) {
    // console.log(data,"data")
  return (
    <div>
      <div className="flex justify-between  text-white">
        <h1 className="text-2xl font-bold mb-10">Teacher ManageMent </h1>
        <p>All Teacher</p>
      </div>{" "}
      <TeacherCard data={data} />
    </div>
  );
}
