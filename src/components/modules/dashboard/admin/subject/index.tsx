"use client";
import { IStudent } from "@/types";
import { HRTable } from "@/components/ui/core/HRTable";
import { ColumnDef } from "@tanstack/react-table";
import SubjectCreateModal from "@/components/ui/core/HRModal/SubjectCreateModle";
type IStudentPropes = {
  data: IStudent[];
};

const SubjectManage = ({ data }: IStudentPropes) => {
  const columns: ColumnDef<IStudent>[] = [
    {
      accessorKey: "name",
      header: "Subject Name",
    },
    {
      accessorKey: "code",
      header: "Code",
    },
    {
      accessorKey: "fullMarks",
      header: "Full Marks",
    },
    {
      accessorKey: "passMarks",
      header: "Pass Marks",
    },
  ];
  return (
    <div>
      <div className="flex text-white items-center justify-between">
        <h1 className="text-xl font-bold">Manage Subject</h1>
        <SubjectCreateModal />
      </div>

      <HRTable data={data} columns={columns} />
    </div>
  );
};

export default SubjectManage;
