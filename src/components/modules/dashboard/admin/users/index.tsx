import CreateUserModal from "./CreateUserModal";

const ManageUser = () => {
  return (
    <div>
      <div className="flex text-white items-center justify-between">
        <h1 className="text-xl font-bold">Manage Users</h1>
        <div className="text-white">
          <CreateUserModal />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
