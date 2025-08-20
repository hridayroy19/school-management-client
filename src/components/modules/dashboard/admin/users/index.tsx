"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from "@/types";
import CreateUserModal from "./CreateUserModal";
import { HRTable } from "@/components/ui/core/HRTable";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import { toast } from "sonner";
import { deleteUser } from "@/services/user";
import { useState } from "react";
import UpdateUserModal from "@/components/ui/core/HRModal/UpdateUserModle";
import DeleteConfirmationModal from "@/components/ui/core/HRModal/DeleteConfirmationModal";

type IUserPropes = {
  data: IUser[];
};

const ManageUser = ({ data }: IUserPropes) => {
  // console.log(data)
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [selectedUserName, setSelectedUserName] = useState<string | null>(null);

  const handleDelete = (user: IUser) => {
    setSelectedUserId(user._id);
    setSelectedUserName(user.name);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedUserId) {
        const res = await deleteUser(selectedUserId);
        if (res.success) {
          toast.success(res.message);
          setDeleteModalOpen(false);
        } else {
          toast.error(res.message);
        }
      }
    } catch (err: any) {
      console.error(err?.message);
    }
  };

  const handleUpdate = (user: IUser) => {
    setSelectedUserId(user._id);
    setUpdateModalOpen(true);
  };

  const columns: ColumnDef<IUser>[] = [
    {
      accessorKey: "name",
      header: "UserName",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "role",
      header: "Role",
    },
    {
      accessorKey: "userStatus",
      header: "Status",
    },
    {
      accessorKey: "acti",
      header: () => <div>Action</div>,
      cell: ({ row }) => (
        <button
          className="text-red-500"
          title="Delete"
          onClick={() => handleDelete(row.original)}
        >
          <Trash className="w-5 h-5" />
        </button>
      ),
    },
    {
      accessorKey: "action_7",
      header: () => <div>Update</div>,
      cell: ({ row }) => (
        <button
          className="text-green-700"
          title="Update"
          onClick={() => handleUpdate(row.original)}
        >
          <Edit className="w-5 h-5" />
        </button>
      ),
    },
  ];
  return (
    <div>
      <div className="flex text-white items-center justify-between">
        <h1 className="text-xl font-bold">Manage Users</h1>
        <CreateUserModal />
      </div>
      <HRTable data={data} columns={columns} />
      <DeleteConfirmationModal
        name={selectedUserName}
        isOpen={isDeleteModalOpen}
        onOpenChange={setDeleteModalOpen}
        onConfirm={handleDeleteConfirm}
      />

      <UpdateUserModal
        id={selectedUserId}
        isOpen={isUpdateModalOpen}
        onOpenChange={setUpdateModalOpen}
      />
    </div>
  );
};

export default ManageUser;
