import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { teacherFormSchema } from "./updateTeacherSchema";
import { creteTeacher } from "@/services/teacher";

type userId = {
  id: string;
};

const UpdateTeacherForm = ({ id }: userId) => {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(teacherFormSchema),
    defaultValues: {
      subjects: [],
      assignedClasses: [],
      contactPhone: "",
      address: "",
      joinDate: "",
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    const payload = { ...data, userId: id };
    console.log(payload);
    try {
      const res = await creteTeacher(payload);
      if (res?.status) {
        toast.success(res?.message);
        router.push("/dashboard/admin/teacher");
      } else {
        toast.error(res?.message);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className=" w-full flex justify-center h-screen items-center ">
      <Card className="w-[700px] text-white  bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">Creat Teacher ...</CardTitle>
          <p className="text-sm text-muted-foreground">
            update user to Teacher
          </p>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-2 gap-5 w-full justify-between">
                {/* Subjects */}
                <FormField
                  control={form.control}
                  name="subjects"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subjects</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter subjects (comma separated)"
                          {...field}
                          value={field.value || ""}
                          onChange={(e) =>
                            field.onChange(
                              e.target.value.split(",").map((s) => s.trim())
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Assigned Classes */}
                <FormField
                  control={form.control}
                  name="assignedClasses"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Assigned Classes</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Class IDs (comma separated)"
                          {...field}
                          value={field.value || ""}
                          onChange={(e) =>
                            field.onChange(
                              e.target.value.split(",").map((c) => c.trim())
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Contact Phone */}
                <FormField
                  control={form.control}
                  name="contactPhone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Phone</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="01785986325"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Address */}
                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="123, Green Road, Setabgonj"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Join Date */}
                <FormField
                  control={form.control}
                  name="joinDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Join Date</FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          {...field}
                          value={field.value || ""}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <Button type="submit" className="w-full mt-4">
                {isSubmitting ? "Saving..." : "Save Teacher"}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpdateTeacherForm;
