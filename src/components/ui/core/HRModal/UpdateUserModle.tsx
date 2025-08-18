import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";


interface UpdateUserModalProps {
  id: string | null;      
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const UpdateUserModal: React.FC<UpdateUserModalProps> = ({
  id,
  isOpen,
  onOpenChange,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="bg-[#1f1f33f6]">
        <DialogHeader>
          <DialogTitle className="text-green-600 font-bold text-2xl">
            Update User
          </DialogTitle>
          <DialogDescription className="text-white">
            Are you sure you want to update user with ID:{" "}
            <span className="font-semibold text-red-500">{id}</span>?
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-2">
          <Button variant="outline" className="bg-white">
            <Link href={`/dashboard/admin/user/student/${id}`}>Create_Student</Link>
          </Button>
          <Button variant="destructive" className="bg-green-700 hover:bg-green-900">
            <Link href={`/dashboard/admin/user/teacher/${id}`}>Create_Teacher</Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateUserModal;
