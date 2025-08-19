import React from "react";
import PDFDownloadButton from "./DawnlodeButton";
import { IStudent, ResultStudent } from "@/types";
import StudentProfileCard from "./StudentProfile";
import ResultsTable from "./StudentResultTabil";

export type IStudentuser = {
  name: string;
  email: string;
};

interface Props {
  results: ResultStudent[];
  student: IStudent;
  user: IStudentuser;
}

const DashboardManegement: React.FC<Props> = ({ results, student, user }) => {
  console.log(student)
  return (
    <div className="p-4">
      <div className=" text-white min-h-screen font-sans ">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header Section */}
          <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
            <h1 className="text-2xl font-semibold  mb-4 sm:mb-0">
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

          <StudentProfileCard student={student} user={user} />
        </div>
        <h2 className="text-xl font-bold mt-10 mb-4">Results</h2>
        <ResultsTable results={results} />
      </div>
    </div>
  );
};

export default DashboardManegement;
