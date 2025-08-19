/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { IStudent } from "@/types";
import { HRTable } from "@/components/ui/core/HRTable";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import DeleteConfirmationModal from "@/components/ui/core/HRModal/DeleteConfirmationModal";
import { deleteStudent } from "@/services/student";
import StudentUpdateModle from "@/components/ui/core/HRModal/StudentUpdateModle";

type IStudentPropes = {
  data: IStudent[];
};

const StudentManage = ({ data }: IStudentPropes) => {
  // delete modal state
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  // update modal state
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: IStudent) => {
    setSelectedId(data?._id);
    setSelectedItem(data?.userId?.name || "");
    setDeleteModalOpen(true);
  };

  const handleUpdate = (data: IStudent) => {
    setSelectedId(data?._id);
    setUpdateModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteStudent(selectedId);
        if (res.status) {
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

  const columns: ColumnDef<IStudent>[] = [
    {
      accessorKey: "userId.name",
      header: "Student Name",
    },
    {
      accessorKey: "guardianName",
      header: "Guardian Name",
    },
    {
      accessorKey: "guardianPhone",
      header: "Guardian Phone",
    },
    {
      accessorKey: "address",
      header: "Section",
    },
    {
      accessorKey: "rollNumber",
      header: "Roll Number",
    },
    {
      accessorKey: "contactPhone",
      header: "Contact Phone",
    },
    {
      accessorKey: "actions",
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
      accessorKey: "actions_2",
      header: () => <div>Update</div>,
      cell: ({ row }) => (
        <button
          className="text-blue-500"
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
        <h1 className="text-xl font-bold">Manage Student</h1>
      </div>

      <HRTable data={data} columns={columns} />

      {/* Delete Modal */}
      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isDeleteModalOpen}
        onOpenChange={setDeleteModalOpen}
        onConfirm={handleDeleteConfirm}
      />

      {/* Update Modal */}
      <StudentUpdateModle
        id={selectedId}
        isOpen={isUpdateModalOpen}
        onOpenChange={setUpdateModalOpen}
      />
    </div>
  );
};

export default StudentManage;
