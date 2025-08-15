import DashboardCharts from "@/components/modules/dashboard/admin/Chat";
import DashboardCard from "@/components/modules/dashboard/admin/UserCard";

const page = () => {
    return (
        <div>
           <DashboardCard/>
            <DashboardCharts/>
        </div>
    );
};

export default page;