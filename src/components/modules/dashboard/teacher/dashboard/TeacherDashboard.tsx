"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Student {
  id: string;
  name: string;
  rollNumber: string;
  contact: string;
}

export default function TeacherDashboard() {
  // Static data for demo
  const assignedStudents: Student[] = [
    {
      id: "1",
      name: "Alice Johnson",
      rollNumber: "S101",
      contact: "017xxxxxxxx",
    },
    { id: "2", name: "Bob Smith", rollNumber: "S102", contact: "018xxxxxxxx" },
    {
      id: "3",
      name: "Charlie Brown",
      rollNumber: "S103",
      contact: "019xxxxxxxx",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl text-white font-bold">Teacher Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Assigned Students</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-semibold">{assignedStudents.length}</p>
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
              <tr className="">
                <th className="border px-4 py-2 text-left">Name</th>
                <th className="border px-4 py-2 text-left">Roll Number</th>
                <th className="border px-4 py-2 text-left">Contact</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {assignedStudents.map((student) => (
                <tr key={student.id}>
                  <td className="border px-4 py-2">{student.name}</td>
                  <td className="border px-4 py-2">{student.rollNumber}</td>
                  <td className="border px-4 py-2">{student.contact}</td>
                  <td className="border px-4 py-2 space-x-2">
                    <Button size="sm" variant="outline">
                      View
                    </Button>
                    <Button size="sm">Update Result</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
