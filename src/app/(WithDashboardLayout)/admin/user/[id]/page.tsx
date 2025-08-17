"use client";

import UpdateStudentForm from "@/components/modules/dashboard/admin/users/UpdateStudentForm";
import { useParams } from "next/navigation";

const UserPage = () => {
  const { id } = useParams();
  return (
    <div>
      <UpdateStudentForm id={id} />
    </div>
  );
};

export default UserPage;
