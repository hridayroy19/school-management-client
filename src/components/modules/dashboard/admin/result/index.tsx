"use client";

import { IClass, IResult, IStudent, ISubject, IUser } from "@/types";
import { HRTable } from "@/components/ui/core/HRTable";
import { ColumnDef } from "@tanstack/react-table";

import CreateResultModal from "../ResultCreateModal";

type IResultProps = {
  data: IResult[];
  classes: IClass[];
  subjects: ISubject[];
  students: IStudent[];
  user:IUser[]
};

const ResultManage = ({ data, classes, subjects, students,user }: IResultProps) => {
  const columns: ColumnDef<IResult>[] = [
    {
      accessorKey: "classId.name",
      header: "Class_ID",
    },
    {
      accessorKey: "subjectId.name",
      header: "Subject_Name",
    },
    {
      accessorKey: "term",
      header: "Exam",
    },
    {
      accessorKey: "marksObtained",
      header: "Marks",
    },
    {
      accessorKey: "grade",
      header: "Grade",
    },
    {
      accessorKey: "gradePoint",
      header: "Grade Point",
    },
    {
      accessorKey: "studentId.rollNumber",
      header: "Student ID",
    },
  ];

  return (
    <div>
      <div className="flex text-white items-center justify-between">
        <h1 className="text-xl font-bold">Manage Results</h1>
        <CreateResultModal
          classes={classes}
          subjects={subjects}
          students={students}
          user={user}
        />
      </div>
      <HRTable data={data} columns={columns} />
    </div>
  );
};

export default ResultManage;
