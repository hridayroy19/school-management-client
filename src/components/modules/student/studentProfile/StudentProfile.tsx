// components/modules/student/StudentProfileCard.tsx
import { Card } from "@/components/ui/card";
import { IStudent } from "@/types";
import Image from "next/image";
import React from "react";

interface Props {
  student: {
    name: string;
    rollNumber: string;
    guardianName: string;
    guardianPhone: string;
    contactPhone: string;
    address: string;
    enrollmentYear: string;
  };
  user: IStudent;
}

const StudentProfileCard: React.FC<Props> = ({ student, user }) => {
  return (
    <Card>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-4 md:p-6">
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
          {/* Roll Number */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">Roll Number</p>
            <p className="font-semibold ">{student.rollNumber} </p>
          </div>
          {/* Email */}
          <div className="space-y-1">
            <p className="text-sm font-medium text-gray-500">Email</p>
            <p className="font-semibold ">{user?.email} </p>
          </div>
          {/* Phone Number */}
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
  );
};

export default StudentProfileCard;