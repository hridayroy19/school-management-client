import StudentManage from "@/components/modules/dashboard/admin/student";
import { getAllStudent } from "@/services/student";

const Studentpage = async () => {
  const data = await getAllStudent();
  //   console.log(data, "data");
  return (
    <div>
      <StudentManage data={data?.data} />
    </div>
  );
};

export default Studentpage;
