import ResultManage from "@/components/modules/dashboard/admin/result";
import { getCurrentUser } from "@/services/AuthService";
import { getAllClass } from "@/services/Class/Index";
import { getAllResult } from "@/services/result";
import { getAllStudent } from "@/services/student";
import { getAllSubject } from "@/services/subject";

const Resultpage = async () => {
  const data = await getAllResult();
  const cls = await getAllClass();
  const subject = await getAllSubject()
  const student = await getAllStudent()
  
    const user = await getCurrentUser()
    // console.log(user)
  
  return (
    <div>
          <ResultManage
        data={data.data}
        classes={cls.data}
        subjects={subject.data}
        students={student.data}
        user={user}
      />
    </div>
  );
};

export default Resultpage;
