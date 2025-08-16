"use client";
import { IUser } from "@/types";
import { HRTable } from "@/components/ui/core/HRTable";
import { ColumnDef } from "@tanstack/react-table";
import CreateClassModal from "./CreateClassModle";

type IUserPropes = {
  data: IUser[];
};

const ClassManage = ({ data }: IUserPropes) => {

  const columns: ColumnDef<IUser>[] = [
    {
      accessorKey: "name",
      header: "UserName",
    },
    {
      accessorKey: "section",
      header: "Section",
    },
    {
      accessorKey: "session",
      header: "session",
    },
    {
      accessorKey: "_id",
      header: "Id",
    },
  ];
  return (
    <div>
      <div className="flex text-white items-center justify-between">
        <h1 className="text-xl font-bold">Manage Class</h1>
        <CreateClassModal />
      </div>
      <HRTable data={data} columns={columns} />
    </div>
  );
};

export default ClassManage;
