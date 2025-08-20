import TeacherDashboard from "@/components/modules/dashboard/teacher/dashboard/TeacherDashboard";
import { getCurrentUser } from "@/services/AuthService";
import { getStudentByClass } from "@/services/student";
import { getClsddById } from "@/services/teacher";

const TeacherPage = async () => {
  const teacher = await getCurrentUser();
  const asignStudent = await getClsddById({ id: teacher.id });
  const clssId = asignStudent?.data?.assignedClasses?.[0]?._id;
  const assignedStudents = await getStudentByClass({ id: clssId });

  return (
    <div>
      <TeacherDashboard assignedStudents={assignedStudents} />
    </div>
  );
};

export default TeacherPage;
