"use client"

import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"

import { cn } from "@/lib/utils"

const Progress = React.forwardRef(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-4 w-full overflow-hidden rounded-full bg-secondary", className)}
    {...props}>
    <ProgressPrimitive.Indicator
      className={`h-full w-full flex-1 ${value <= 20 ? "bg-[#5a588196]" : value <= 40 ? "bg-[#5A5881]" : value <= 60 ? "bg-[#563BFF]" : value <= 70 ? "bg-[#FF7049]" : value <= 80 ? "bg-[#FA00FF]" : value >= 90 ? "bg-[#d523d8]" : "bg-yellow-500"} bg-primary transition-all`}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }} />
  </ProgressPrimitive.Root>
))
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
