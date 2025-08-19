"use client";

// components/modules/student/PDFDownloadButton.tsx
import React from "react";
import dynamic from "next/dynamic";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import StudentReportPDF from "./StudentResultPDF";
import { IStudent, ResultStudent } from "@/types";

interface User {
  name: string;
  email: string;
}

interface Props {
  results: ResultStudent[];
  student: IStudent;
  user: User;
}

const DynamicDownloadButton = dynamic(
  () =>
    import("@react-pdf/renderer").then(({ PDFDownloadLink }) => {
      // Return a component that uses PDFDownloadLink
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
              <Download name="download" />
              {loading ? "Generating PDF..." : "Download"}
            </Button>
          )}
        </PDFDownloadLink>
      );
    }),
  {
    ssr: false, // This is crucial for fixing the error
    loading: () => <Button disabled>Loading...</Button>,
  }
);

const PDFDownloadButton: React.FC<Props> = (props) => {
  return <DynamicDownloadButton {...props} />;
};

export default PDFDownloadButton;
