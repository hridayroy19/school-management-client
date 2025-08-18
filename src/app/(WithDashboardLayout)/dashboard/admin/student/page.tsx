import StudentManage from "@/components/modules/dashboard/admin/student";
import { getAllStudent } from "@/services/student";

const Studentpage = async () => {
  const data = await getAllStudent();
  //   console.log(data, "data");
  return (
    <>
      <StudentManage data={data?.data} />
    </>
  );
};

export default Studentpage;
