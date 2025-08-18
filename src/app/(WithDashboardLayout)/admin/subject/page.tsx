import SubjectManage from "@/components/modules/dashboard/admin/subject";
import { getAllSubject } from "@/services/subject";

const Subjcetpage = async() => {
    const data = await getAllSubject()
    return (
        <div>
            <SubjectManage data={data?.data} />
        </div>
    );
};

export default Subjcetpage;