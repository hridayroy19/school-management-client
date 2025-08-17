"use client";

import UpdateTeacherForm from "@/components/modules/dashboard/admin/users/updateTeacher";
import { useParams } from "next/navigation";

const TeacherUpdate = () => {
  const params = useParams();
  const id = params?.id as string;
  return (
    <div>
      <UpdateTeacherForm id={id} />
    </div>
  );
};

export default TeacherUpdate;