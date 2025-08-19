"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import StudentReportPDF from "./StudentResultPDF";
import { IStudent, ResultStudent } from "@/types";
import { IStudentuser } from ".";

interface Props {
  results: ResultStudent[];
  student: IStudent;
  user: IStudentuser;
}

const DynamicDownloadButton = dynamic(
  () =>
    import("@react-pdf/renderer").then(({ PDFDownloadLink }) => {
      // eslint-disable-next-line react/display-name
      return ({ results, student, user }: Props) => (
        <PDFDownloadLink
          document={
            <StudentReportPDF results={results} student={student} user={user} />
          }
          fileName={`Exam_Result-${user.name}.pdf`}
        >
          {({ loading }) => (
            <Button
              className="w-full sm:w-auto flex items-center gap-2"
              disabled={loading}
            >
              <Download className="w-4 h-4" /> 
              {loading ? "Generating PDF..." : "Download Result"}
            </Button>
          )}
        </PDFDownloadLink>
      );
    }),
  {
    ssr: false,
    loading: () => <Button disabled>Loading...</Button>,
  }
);

const PDFDownloadButton: React.FC<Props> = (props) => {
  return <DynamicDownloadButton {...props} />;
};

export default PDFDownloadButton;
