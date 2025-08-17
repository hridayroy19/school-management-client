import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ITeacher } from "@/types";

type TeacherCardProps = {
  data: ITeacher[];
};

const TeacherCard = ({ data }: TeacherCardProps) => {
  //   console.log(data, "data");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {data.map((teacher) => (
        <Card
          key={teacher._id}
          className="w-[300px] bg-[#2f3a4a] rounded-2xl shadow-lg"
        >
          <CardContent className="text-center text-white">
            {/* Profile Image */}
            <div className="flex justify-center ">
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

            {/* Info */}
            <div>
              <p className="text-sm mt-5 mb-2">
                <span className="font-semibold">Name:</span> {teacher.userId}
              </p>
              <p>
                <span className="font-semibold">Employee ID: </span>
                {teacher.employeeId}
              </p>
              <p>
                <span className="font-semibold">Phone: </span>
                {teacher.contactPhone}
              </p>
            </div>

            {/* Stats */}
            <div className="flex justify-between text-center mt-6 mb-4">
              <div>
                <p className="text-lg font-bold">{teacher.subjects.length}</p>
                <p className="text-xs text-gray-300">Students</p>
              </div>
              <div>
                <p className="text-lg font-bold">
                  {teacher.assignedClasses.length || 0}
                </p>
                <p className="text-xs text-gray-300">assignedClasses</p>
              </div>
            </div>
          </CardContent>

          {/* Footer Buttons */}
          <CardFooter className="flex justify-between px-6 ">
            <Button className="w-[48%] bg-blue-600 hover:bg-blue-700 rounded-full">
              Update
            </Button>
            <Button
              variant="outline"
              className="w-[48%] bg-red-500 rounded-full"
            >
              Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default TeacherCard;
 