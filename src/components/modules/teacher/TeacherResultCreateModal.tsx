"use client";

import { useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { IClass, ISubject, IStudent, IUser } from "@/types";
import { toast } from "sonner";
import { CreateResult } from "@/services/result";

type Props = {
  classes: IClass[];
  subjects: ISubject[];
  students: IStudent[]; // <- fixed: array of students
  user: IUser;
};

const TeacherResultCreateModal = ({
  classes,
  subjects,
  students,
  user,
}: Props) => {
  const [open, setOpen] = useState(false);

  console.log(students,"id")
  const form = useForm({
    defaultValues: {
      maxMarks: 100,
      marksObtained: "",
      classId: "",
      subjectId: "",
      studentId: "",
      term: "Midterm",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const payload = { ...data, createdBy: user.id };
    console.log(payload);

    try {
      const res = await CreateResult(payload);
      if (res?.status) {
        toast.success(res?.message);
        setOpen(false);
        form.reset();
      } else {
        toast.error(res?.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button onClick={() => setOpen(true)}>+ Add Result</Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-green-600">Create Result</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-3 text-white"
          >
            {/* Select Class */}
            <FormField
              control={form.control}
              name="classId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Class</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full p-2 rounded bg-gray-800 text-white"
                    >
                      <option value="">Select Class</option>
                      {classes.map((cls) => (
                        <option key={cls._id} value={cls._id}>
                          {cls.name}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Select Subject */}
            <FormField
              control={form.control}
              name="subjectId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full p-2 rounded bg-gray-800 text-white"
                    >
                      <option value="">Select Subject</option>
                      {subjects.map((sub) => (
                        <option key={sub._id} value={sub._id}>
                          {sub.name}
                        </option>
                      ))}
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Select Student */}
            <FormField
              control={form.control}
              name="studentId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Student</FormLabel>
                  <FormControl>
                    <select {...field}>
  {students.map(student => (
    <option key={student._id} value={student._id}>
      {student.name}
    </option>
  ))}
</select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Exam Term */}
            <FormField
              control={form.control}
              name="term"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Exam Term</FormLabel>
                  <FormControl>
                    <select
                      {...field}
                      className="w-full p-2 rounded bg-gray-800 text-white"
                      defaultValue="Midterm"
                    >
                      <option value="Midterm">Midterm</option>
                      <option value="Final">Final</option>
                    </select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Max Marks */}
            <FormField
              control={form.control}
              name="maxMarks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject Marks</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter marks"
                      className="text-white"
                      {...field}
                      value={field.value || 100}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Marks Obtained */}
            <FormField
              control={form.control}
              name="marksObtained"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Marks Obtained</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter marks"
                      className="text-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="submit" className="w-full">
                {isSubmitting ? "Saving..." : "Save Result"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default TeacherResultCreateModal;
