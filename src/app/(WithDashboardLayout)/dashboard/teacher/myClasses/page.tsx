import MyClassManagement from "@/components/modules/dashboard/teacher/myClass/MyClassManagement";
import { getCurrentUser } from "@/services/AuthService";
import { getClsddById } from "@/services/teacher";

const Classpage = async () => {
  const teacher = await getCurrentUser();
  const asignStudent = await getClsddById({ id: teacher.id });
  // const clssId = asignStudent?.data?.assignedClasses?.[0]?._id;
  // const getClassStudent  = await getStudentByClass({id:clssId})
  // //  console.log(studentClass,"student")
  return (
    <div>
      <MyClassManagement  asignStudent={asignStudent} />
    </div>
  ); 
};

export default Classpage;
