// components/modules/student/studentProfile.tsx
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import PDFDownloadButton from "./DawnlodeButton";
import { IStudent, ResultStudent } from "@/types";

type Iuser = {
  name: string;
  email: string;
};

interface Props {
  results: ResultStudent[];
  student: IStudent;
  user: Iuser;
}

const DashboardManegement: React.FC<Props> = ({ results, student, user }) => {
  return (
    <div className="p-4">
      <div className=" text-white min-h-screen font-sans ">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header Section */}
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h1 className="text-3xl font-semibold text-gray-800 mb-4 sm:mb-0">
              Student Details
            </h1>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              <PDFDownloadButton
                results={results}
                student={student}
                user={user}
              />
            </div>
          </header>

          {/* Student Info and Attendance Section */}
          <div>
            <Card>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <Image
                  src="https://i.ibb.co.com/QvD5BXzJ/download.jpg"
                  alt="photo"
                  width={130}
                  height={70}
                  className="rounded-full px-4"
                />
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
                  {/* Name */}
                  <div className="col-span-1 sm:col-span-2 md:col-span-4">
                    <h2 className="text-2xl font-bold "> {user?.name} </h2>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">
                      Roll Number
                    </p>
                    <p className="font-semibold ">{student.rollNumber} </p>
                  </div>
                  {/* ID */}
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">Email</p>
                    <p className="font-semibold ">{user?.email} </p>
                  </div>
                  {/* Number */}
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">Number</p>
                    <p className="font-semibold ">{student.contactPhone}</p>
                  </div>
                  {/* Address */}
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-500">Address</p>
                    <p className="font-semibold ">{student.address}</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <h2 className="text-xl font-bold mt-10  mb-4">Results</h2>
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead>
            <tr className="">
              <th className="border px-2 py-1">Exam_Name</th>
              <th className="border px-2 py-1">Class</th>
              <th className="border px-2 py-1">Subject</th>
              <th className="border px-2 py-1">Greet</th>
              <th className="border px-2 py-1">Marks</th>
              <th className="border px-2 py-1">Point</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r) => (
              <tr key={r._id}>
                <td className="border px-2 py-1">{r.term}</td>
                <td className="border px-2 py-1">{r.classId?.name}</td>
                <td className="border px-2 py-1">{r.subjectId?.name}</td>
                <td className="border px-2 py-1">{r.grade}</td>
                <td className="border px-2 py-1">{r.marksObtained}</td>
                <td className="border px-2 py-1">{r.gradePoint}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardManegement;
