"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, Users } from "lucide-react";
import Link from "next/link";
import { TStudent } from "@/types";

interface ClassData {
  _id: string;
  name: string;
  section?: string;
  session?: string;
  schedule?: string;
}

interface AssignedStudent {
  data: {
    assignedClasses: ClassData[];
    subjects: string[];
    [key: string]: any;
  };
}

interface StudentApiResponse {
  status: boolean;
  statusCode: number;
  message: string;
  data: TStudent[];
}

interface MyClassManagementProps {
  asignStudent: AssignedStudent;
  getClassStudent: StudentApiResponse;
}

const MyClassManagement: React.FC<MyClassManagementProps> = ({
  asignStudent,
  getClassStudent,
}) => {
  console.log(getClassStudent, "data");

  const classes = asignStudent?.data?.assignedClasses || [];
  const subjects = asignStudent?.data?.subjects || [];

  const studentCount = Array.isArray(getClassStudent?.data)
    ? getClassStudent.data.length
    : 0;

  return (
    <div>
      <div className="p-6 space-y-6">
        <h1 className="text-2xl text-white font-bold">📘 My Classes</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {classes.map((cls) => (
            <Card
              key={cls._id}
              className="shadow-md hover:shadow-lg transition rounded-2xl"
            >
              <CardHeader>
                <CardTitle className="text-lg font-semibold">
                  {subjects[0] || "Subject"} - {cls.name}
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Section: {cls.section || "-"} , Session: {cls.session || "-"}
                </p>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-white" />
                  <span>{studentCount} Students</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <CalendarDays className="w-4 h-4 text-white" />
                  <span>{cls.schedule || "No Schedule"}</span>
                </div>
                <Button asChild className="w-full mt-3">
                  <Link href={`/dashboard/teacher/myClasses/${cls._id}`}>
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyClassManagement;
