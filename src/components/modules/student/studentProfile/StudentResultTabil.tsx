// components/modules/student/ResultsTable.tsx
import React from "react";

interface Result {
  _id: string;
  term: string;
  classId: { name: string };
  subjectId: { name: string };
  grade: string;
  marksObtained: number;
  gradePoint: number;
}

interface Props {
  results: Result[];
}

const ResultsTable: React.FC<Props> = ({ results }) => {
  return (
    <table className="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="">
          <th className="border px-2 py-1">Exam_Name</th>
          <th className="border px-2 py-1">Class</th>
          <th className="border px-2 py-1">Subject</th>
          <th className="border px-2 py-1">Grade</th>
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
  );
};

export default ResultsTable;