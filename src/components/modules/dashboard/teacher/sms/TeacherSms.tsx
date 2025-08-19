"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Student {
  id: string;
  name: string;
  contact: string;
}

// Static data
const students: Student[] = [
  { id: "1", name: "Alice Johnson", contact: "017xxxxxxxx" },
  { id: "2", name: "Bob Smith", contact: "018xxxxxxxx" },
  { id: "3", name: "Charlie Brown", contact: "019xxxxxxxx" },
];

interface SMS {
  id: string;
  recipient: string;
  message: string;
  date: string;
}

const smsHistory: SMS[] = [
  { id: "1", recipient: "Alice Johnson", message: "Your math result is updated.", date: "2025-08-20" },
  { id: "2", recipient: "Bob Smith", message: "Please submit your assignment.", date: "2025-08-19" },
];

export default function SmsNotificationPage() {
  const [selectedStudent, setSelectedStudent] = useState<string | "all">("all");
  const [message, setMessage] = useState("");

  const handleSendSMS = () => {
    if (!message.trim()) return alert("Please enter a message.");
    alert(`SMS sent to ${selectedStudent === "all" ? "all students" : selectedStudent}`);
    setMessage("");
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl text-white font-bold">SMS Notification</h1>

      <Card>
        <CardHeader>
          <CardTitle>Send SMS</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label>Recipient</Label>
            <Select value={selectedStudent} onValueChange={(val) => setSelectedStudent(val)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Student or Bulk SMS" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Assigned Students</SelectItem>
                {students.map((s) => (
                  <SelectItem key={s.id} value={s.name}>{s.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Message</Label>
            <Input
              type="text"
              placeholder="Type your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <Button onClick={handleSendSMS}>Send SMS</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>SMS History</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full table-auto border-collapse border ">
            <thead>
              <tr className="">
                <th className="border px-4 py-2">Recipient</th>
                <th className="border px-4 py-2">Message</th>
                <th className="border px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {smsHistory.map((sms) => (
                <tr key={sms.id}>
                  <td className="border px-4 py-2">{sms.recipient}</td>
                  <td className="border px-4 py-2">{sms.message}</td>
                  <td className="border px-4 py-2">{sms.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
