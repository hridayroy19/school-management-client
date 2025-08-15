/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Calendar } from "@/components/ui/calendar";
import React from "react";

export function Calendar13() {
  const [dropdown, setDropdown] =
    React.useState<React.ComponentProps<typeof Calendar>["captionLayout"]>(
      "dropdown"
    );
  const [date, setDate] = React.useState<Date | undefined>();

  return (
    <div className="p-7 text-black gap-4">
      <Calendar
        mode="single"
        defaultMonth={date}
        selected={date}
        onSelect={setDate}
        captionLayout={dropdown}
        className="rounded-lg border bg-gray-900 text-white shadow-sm"
      />
    </div>
  );
}
