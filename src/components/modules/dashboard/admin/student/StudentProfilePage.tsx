"use client";

import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { IUser } from "@/types";

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="h-4 w-4 text-yellow-400"
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

interface Result {
  subjectId: { name: string };
  marksObtained: number;
  grade: string;
  term: string;
  classId: { name: string };
  gradePoint: number;
  maxMarks: number;
}

interface StudentData {
  name: string;
  rollNumber: string;
  guardianName: string;
  classId: { name: string };
  contactPhone: string;
  guardianPhone: string;
  address: string;
}

interface StudentProfileProps {
  student: IUser;
  results: Result[];
  studentData: StudentData;
}

const StudentProfilePage = ({
  student,
  results,
  studentData,
}: StudentProfileProps) => {
  console.log(results);
  return (
    <div className="min-h-screen p-4 sm:p-8 font-sans flex justify-center">
      <div className="w-full max-w-6xl rounded-xl shadow-lg overflow-hidden border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 lg:p-10">
          {/* Left Section */}
          <div className="col-span-1 space-y-6">
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4">
                <Image
                  width={100}
                  height={100}
                  src="https://i.ibb.co.com/5XTsnxB3/images.jpg"
                  alt="Student Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Subjects */}
            <div className="space-y-4 text-white">
              <h2 className="text-lg font-semibold">Subjects</h2>
              <ul className="space-y-2 text-gray-900">
                {results.map((subject, index) => (
                  <li
                    key={index}
                    className="flex flex-col p-3 bg-gray-50 rounded-lg shadow-sm"
                  >
                    <span className="flex justify-between">
                      <span className="font-medium">
                        {subject.subjectId.name}
                        <br />
                        <span className=" text-sm"> Exam : {subject.term}</span>
                      </span>
                      <span className="px-1 text-sm">
                        {" "}
                        total_marks : {subject.maxMarks}{" "}
                      </span>
                    </span>
                    <span className="text-xs mt-2">
                      Marks: {subject.marksObtained} | Grade: {subject.grade}
                      <span className="text-xs ml-4">
                        Point : {subject.gradePoint}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills */}
            <div className="space-y-4 text-white">
              <h2 className="text-lg font-semibold">Subject</h2>
              <div className="flex flex-wrap gap-2">
                {results.map((subject, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {subject.subjectId.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="space-y-1 text-white">
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">{student.name}</h1>
                <div className="text-sm flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span>Dhaka, Bangladesh</span>
                </div>
              </div>
              <p className="text-lg">Student | {studentData.classId?.name}</p>
            </div>

            <div className="space-y-1 text-white">
              <span className="text-sm uppercase">Rankings</span>
              <div className="flex items-center space-x-2">
                <span className="text-2xl font-bold">8.6</span>
                <div className="flex space-x-0.5">
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                  <StarIcon />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap text-white gap-2 sm:gap-4">
              <Button variant="outline" className="rounded-full shadow-sm">
                Send message
              </Button>
              <Button
                variant="outline"
                className="bg-white text-black rounded-full shadow-sm"
              >
                Contacts
              </Button>
              <Button
                variant="ghost"
                className="rounded-full hover:bg-gray-100"
              >
                Report user
              </Button>
            </div>

            <div className="flex border-b border-gray-200">
              <button className="px-6 py-3 font-medium transition-colors">
                Timeline
              </button>
              <button className="px-6 py-3 font-medium text-blue-600 border-b-2 border-blue-600">
                About
              </button>
            </div>

            <div className="space-y-6 text-white">
              {/* Contact Info */}
              <Card className="rounded-lg shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="font-medium">Phone:</span>{" "}
                      {studentData.contactPhone}
                    </div>
                    <div>
                      <span className="font-medium">Address:</span>{" "}
                      {studentData?.address}
                    </div>
                    <div>
                      <span className="font-medium">Email:</span>{" "}
                      {student?.email || "N/A"}
                    </div>
                    <div>
                      <span className="font-medium">Id:</span> {student?.id}
                    </div>
                    <div>
                      <span className="font-medium">Guardian Name:</span>{" "}
                      {studentData?.guardianName}
                    </div>
                    <div>
                      <span className="font-medium">Guardian Phone:</span>{" "}
                      {studentData?.guardianPhone}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Basic Info */}
              <Card className="rounded-lg shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg">Basic Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <span className="font-medium">Roll Number:</span>{" "}
                      {studentData.rollNumber}
                    </div>
                    <div>
                      <span className="font-medium">Class:</span>{" "}
                      {studentData.classId?.name}
                    </div>
                    <div>
                      <span className="font-medium">System ID:</span> None
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfilePage;
