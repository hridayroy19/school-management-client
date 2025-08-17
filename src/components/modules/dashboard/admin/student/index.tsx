/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { IStudent } from "@/types";
import { HRTable } from "@/components/ui/core/HRTable";
import { ColumnDef } from "@tanstack/react-table";
import { Trash } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import DeleteConfirmationModal from "@/components/ui/core/HRModal/DeleteConfirmationModal";
import { deleteStudent } from "@/services/student";

type IStudentPropes = {
  data: IStudent[];
};

const StudentManage = ({ data }: IStudentPropes) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDelete = (data: IStudent) => {
    console.log(data);
    setSelectedId(data?._id);
    setSelectedItem(data?.userId?.name || "");
    setModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    try {
      if (selectedId) {
        const res = await deleteStudent(selectedId);
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
      header: "guardianPhone",
    },
    {
      accessorKey: "address",
      header: "Section",
    },
    {
      accessorKey: "rollNumber",
      header: "rollNumber",
    },
    {
      accessorKey: "contactPhone",
      header: "contactPhone",
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
  ];
  return (
    <div>
      <div className="flex text-white items-center justify-between">
        <h1 className="text-xl font-bold">Manage Student</h1>
      </div>
      <HRTable data={data} columns={columns} />
      <DeleteConfirmationModal
        name={selectedItem}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default StudentManage;
