"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Loading from "@/app/loading";

// Student interface
interface StudentClass {
  _id: string;
  name: string;
  rollNumber?: string;
  systemId?: string;
  enrollmentYear?: string;
  contactPhone?: string;
  guardianName?: string;
}

// Class interface
interface ClassData {
  _id: string;
  name: string;
  session?: string;
  section?: string;
  room?: string;
}

const ViewDetalPage = () => {
  const params = useParams();
  const classId = params.id;
  console.log(classId);

  const [classInfo, setClassInfo] = useState<ClassData | null>(null);
  const [students, setStudents] = useState<StudentClass[]>([]);
  console.log(classInfo);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchClass() {
      try {
        setLoading(true);

        const classRes = await fetch(
          `http://localhost:5000/api/class/${classId}`
        );
        const classData = await classRes.json();
        setClassInfo(classData.data);

        const studentRes = await fetch(
          `http://localhost:5000/api/student/classId/${classId}`
        );
        const studentData = await studentRes.json();
        setStudents(studentData.data);
      } catch (error) {
        console.error("Error fetching class data:", error);
      } finally {
        setLoading(false);
      }
    }

    if (classId) fetchClass();
  }, [classId]);

  if (loading) return <Loading/>;
  return (
    <div className="p-6 space-y-6">
      {/* Class Info */}
      {classInfo && (
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Class Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <p>
              <span className="font-semibold">Class ID:</span> {classInfo._id}
            </p>
            <p>
              <span className="font-semibold">Class Name:</span>{" "}
              {classInfo.name}
            </p>
            <p>
              <span className="font-semibold">section:</span>{" "}
              {classInfo.section || "-"}
            </p>
            <p>
              <span className="font-semibold">session:</span>{" "}
              {classInfo.session || "-"}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Students Table */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">
            Enrolled Students
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr>
                  <th className="border p-2 text-left">#</th>
                  <th className="border p-2 text-left">Student Name</th>
                  <th className="border p-2 text-left">Roll</th>
                  <th className="border p-2 text-left">Enrollment</th>
                  <th className="border p-2 text-left">Contact Number</th>
                  <th className="border p-2 text-left">Guardian Name</th>
                </tr>
              </thead>
              <tbody>
                {students.length > 0 ? (
                  students.map((student, idx) => (
                    <tr key={student._id} className="hover:bg-gray-50">
                      <td className="border p-2">{idx + 1}</td>
                      <td className="border p-2">{student.name}</td>
                      <td className="border p-2">
                        {student.rollNumber || "-"}
                      </td>
                      <td className="border p-2">
                        {student.enrollmentYear
                          ? new Date(
                              student.enrollmentYear
                            ).toLocaleDateString()
                          : "-"}
                      </td>
                      <td className="border p-2">
                        {student.contactPhone || "-"}
                      </td>
                      <td className="border p-2">
                        {student.guardianName || "-"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="border p-2 text-center" colSpan={6}>
                      No students found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Back Button */}
      <div className="flex justify-between">
        <Link href="/dashboard/teacher/myClasses">
          <Button variant="outline">⬅ Back to My Classes</Button>
        </Link>
      </div>
    </div>
  );
};

export default ViewDetalPage;
