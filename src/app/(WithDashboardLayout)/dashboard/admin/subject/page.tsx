import SubjectManage from "@/components/modules/dashboard/admin/subject";
import { getAllSubject } from "@/services/subject";

const Subjcetpage = async() => {
    const data = await getAllSubject()
    return (
        <>
            <SubjectManage data={data?.data} />
        </>
    );
};

export default Subjcetpage;