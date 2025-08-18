import StudentProfile from "@/components/modules/student/studentProfile/StudentProfile";
import { getCurrentUser } from "@/services/AuthService";

const page = async () => {
    const user = await getCurrentUser()
 console.log(user)
    return (
        <div>
           <StudentProfile student={user} />
        </div>
    );
};

export default page;