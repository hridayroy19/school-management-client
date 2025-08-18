"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

interface StudentProfileProps {
  student: {
    id: string;
    name: string;
    email: string;
    role: string;
    profile?: string;
  };
}

export default function StudentProfile({
  student,
}: {
  student: StudentProfileProps["student"];
}) {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <Card className="p-6 bg-white">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Image
            src={student.profile || "https://i.ibb.co.com/5XTsnxB3/images.jpg"}
            alt={student.name}
            width={100}
            height={100}
            className="rounded-full border object-cover"
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-semibold">{student.name}</h1>
            <p className="text-sm text-muted-foreground">{student.role}</p>
          </div>
        </div>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">📘 General Information</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <InfoBox  label="System ID"  value={student.id} />
            <InfoBox label="Role" value={student.role} />
            <InfoBox label="Email" value={student.email} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Reusable InfoBox
function InfoBox({ label, value }: { label: string; value: string }) {
  return (
    <div className="border rounded-lg p-3 bg-muted/30">
      <p className="text-xs text-gray-400">{label}</p>
      <p className="font-medium">{value || "-"}</p>
    </div>
  );
}
