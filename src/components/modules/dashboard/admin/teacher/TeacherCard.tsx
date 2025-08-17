/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ITeacher } from "@/types";
import { toast } from "sonner";
import { deleteTeacher } from "@/services/teacher";
import { useState } from "react";
import StudentUpdateModle from "@/components/ui/core/HRModal/StudentUpdateModle";
import TeacherUpdateModle from "@/components/ui/core/HRModal/TeacherUpdateModle";

type TeacherCardProps = {
  data: ITeacher[];
};

const TeacherCard = ({ data }: TeacherCardProps) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  //Update Button Handler
  const handleUpdate = (teacher: ITeacher) => {
    setSelectedId(teacher._id);
    setModalOpen(true); 
  };

  //  Delete Button Handler
  const handleDeleteConfirm = async (id: string) => {
    try {
      if (id) {
        const res = await deleteTeacher(id);
        console.log(res, "dta");
        if (res.status) {
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
      }
    } catch (err: any) {
      console.error(err?.message);
      toast.error("Failed to delete teacher");
    }
  };

  return (
    <>
      <TeacherUpdateModle
        id={selectedId}
        isOpen={isModalOpen}
        onOpenChange={setModalOpen}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
        {data.map((teacher) => (
          <Card
            key={teacher._id}
            className="w-full bg-[#2f3a4a] rounded-2xl shadow-lg"
          >
            <CardContent className="text-center text-white">
              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="w-28 h-28 rounded-full border-4 border-white overflow-hidden shadow-md">
                  <Image
                    src={
                      "https://i.ibb.co.com/39k8qSc2/Chat-GPT-Image-Aug-15-2025-03-32-50-PM.png"
                    }
                    width={120}
                    height={100}
                    alt="image"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-5 space-y-2 text-left">
                <div className="flex gap-2">
                  <span className="font-semibold w-28">Name:</span>
                  <span>{teacher.userId?.name}</span>
                </div>

                <div className="flex gap-2">
                  <span className="font-semibold w-28">Employee ID:</span>
                  <span>{teacher.employeeId}</span>
                </div>

                <div className="flex gap-2">
                  <span className="font-semibold w-28">Phone:</span>
                  <span>{teacher.contactPhone}</span>
                </div>
              </div>

              <div className="flex justify-between text-center mt-4 mb-4">
                <div>
                  <p className="text-lg font-bold">{teacher.subjects.length}</p>
                  <p className="text-xs text-gray-300">Subjects</p>
                </div>
                <div>
                  <p className="text-lg font-bold">
                    {teacher.assignedClasses.length || 0}
                  </p>
                  <p className="text-xs text-gray-300">Classes</p>
                </div>
              </div>
            </CardContent>

            <CardFooter className="flex justify-between px-6">
              <Button
                onClick={() => handleUpdate(teacher)}
                className="w-[48%] bg-blue-600 hover:bg-blue-700 rounded-full"
              >
                Update
              </Button>
              <Button
                onClick={() => handleDeleteConfirm(teacher._id)}
                variant="outline"
                className="w-[48%] bg-red-500 hover:bg-red-600 rounded-full"
              >
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default TeacherCard;
