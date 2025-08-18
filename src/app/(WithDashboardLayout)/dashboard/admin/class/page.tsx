import ClassManage from "@/components/modules/dashboard/admin/class";
import { getAllClass } from "@/services/Class/Index";
import React from "react";

const page = async () => {
  const data = await getAllClass();
  console.log(data)
  return (
    <div>
      <ClassManage data={data.data} />
    </div>
  );
};

export default page;
