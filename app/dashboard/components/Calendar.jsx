"use client"

import * as React from "react"

import { Calendar } from "@/components/ui/calendar"

export function Calender() {
  const [date, setDate] = React.useState(new Date())

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border  flex justify-center items-center w-[280px] max-xl:w-full mx-auto mt-5"
    />
  )
}
