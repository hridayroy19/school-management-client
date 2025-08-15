import { Calendar13 } from "@/components/modules/dashboard/admin/Calender";
import DashboardCharts from "@/components/modules/dashboard/admin/Chat";
import DashboardCard from "@/components/modules/dashboard/admin/UserCard";

const page = () => {
    return (
        <div>
           <DashboardCard/>
            <DashboardCharts/>
            <Calendar13/>
        </div>
    );
};

export default page;