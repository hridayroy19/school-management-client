import TeacherManagement from "@/components/modules/dashboard/admin/teacher";
import { getAllTeacherr } from "@/services/teacher";

const Teacherpage = async() => {
  const data = await getAllTeacherr()
  // console.log(data)
  return (
    <div>
      <TeacherManagement data={data.data} />
    </div>
  );
};

export default Teacherpage;
