"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TStudent } from "@/types";

export interface StudentApiResponse {
  status: boolean;
  statusCode: number;
  message: string;
  data: TStudent[];
}

interface MappedStudent {
  id: string;
  name: string;
  rollNumber: string;
  contact: string;
  address: string;
}

const TeacherDashboard = ({
  assignedStudents,
}: {
  assignedStudents: StudentApiResponse;
}) => {
  const students: MappedStudent[] = Array.isArray(assignedStudents?.data)
    ? assignedStudents.data.map((student) => ({
        id: student._id,
        name: student.guardianName,
        rollNumber: student.rollNumber,
        contact: student.contactPhone,
        address: student.address,
      }))
    : [];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl text-white font-bold">Teacher Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Assigned Students</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">{students.length}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pending Results</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">5</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">2</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Assigned Students</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full table-auto border-collapse border border-gray-200">
            <thead>
              <tr>
                <th className="border px-4 py-2 text-left">Name</th>
                <th className="border px-4 py-2 text-left">Roll Number</th>
                <th className="border px-4 py-2 text-left">Contact</th>
                <th className="border px-4 py-2"> + Add Result</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td className="border px-4 py-2">{student.name}</td>
                  <td className="border px-4 py-2">{student.rollNumber}</td>
                  <td className="border px-4 py-2">{student.contact}</td>
                  <td className="border flex justify-center py-2">
                    {student.address}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default TeacherDashboard;
