import StudentProfilePage from "@/components/modules/dashboard/admin/student/StudentProfilePage";
import { getCurrentUser } from "@/services/AuthService";
import { getResultById } from "@/services/result";

const Profilepage = async() => {
  const student = await getCurrentUser()

   const resultsResponse = await getResultById({ id: student.id });
      
      const results = resultsResponse?.data?.results || [];
      const studentData = resultsResponse?.data?.student;
      // console.log(results, studentData ,"data")

  return (
    <div>
      <StudentProfilePage student={student} results={results} studentData={studentData} />
    </div>
  );
};

export default Profilepage;
