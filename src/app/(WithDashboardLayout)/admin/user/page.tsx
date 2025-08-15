import ManageUser from "@/components/modules/dashboard/admin/users";
import { getAllUsers } from "@/services/user";

const Userpage = async () => {
  const data = await getAllUsers();
  return (
    <div>
      <ManageUser data={data.result} />
    </div>
  );
};

export default Userpage;
