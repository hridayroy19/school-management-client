"use client";

import UpdateStudentForm from "@/components/modules/dashboard/admin/users/UpdateStudentForm";
import { useParams } from "next/navigation";

const StudentUpdate = () => {
  const params = useParams();
  const id = params?.id as string;
  return (
    <div>
      <UpdateStudentForm id={id} />
    </div>
  );
};

export default StudentUpdate;
