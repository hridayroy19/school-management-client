"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUser } from "@/types";
import CreateUserModal from "./CreateUserModal";
import { HRTable } from "@/components/ui/core/HRTable";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import { toast } from "sonner";
import DeleteConfirmationModal from "@/components/ui/core/HRModal/DeleteConfirmationModal";
import { deleteUser } from "@/services/user";
import { useState } from "react";
import UpdateUserModal from "@/components/ui/core/HRModal/UpdateUserModle";

type IUserPropes = {
  data: IUser[];
};

const ManageUser = ({ data }: IUserPropes) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: IUser) => {
    console.log(data);
    setSelectedId(data?._id);
    setSelectedItem(data?.name);
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteUser(selectedId);
        console.log(res);
        if (res.success) {
          toast.success(res.message);
          setModalOpen(false);
        } else {
          toast.error(res.message);
        }
      }
    } catch (err: any) {
      console.error(err?.message);
    }
  };


  const handleUpdate = (data: IUser) => {
    console.log(data);
    setSelectedId(data?._id);
    setSelectedItem(data?.name);
    setModalOpen(true);
  };

  const handleUpdateUser = async () => {
    try {
      if (selectedId) {
        const res = await deleteUser(selectedId);
        console.log(res);
        if (res.success) {
          toast.success(res.message);
          setModalOpen(false);
        } else {
          toast.error(res.message);
        }
      }
    } catch (err: any) {
      console.error(err?.message);
    }
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
      accessorKey: "action",
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
      accessorKey: "Update",
      header: () => <div>Update</div>,
      cell: ({ row }) => (
        <button
          className="text-red-500"
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
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />

      <UpdateUserModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleUpdateUser}
      />
    </div>
  );
};

export default ManageUser;
