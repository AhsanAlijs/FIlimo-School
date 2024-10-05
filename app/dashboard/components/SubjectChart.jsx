"use client"

import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { cardDatas } from "@/utils/arrays/PreSchool"
const chartData = [
  { day: "Monday", desktop: 30 },
  { day: "Tuesday", desktop: 55 },
  { day: "Wednesday", desktop: 80 },
  { day: "Thursday", desktop: 40 },
  { day: "Friday", desktop: 65 },
  { day: "Saturday", desktop: 82 },
  { day: "Sunday", desktop: 50 },
]

const chartConfig = {
  desktop: {
    label: "Performance ",
    color: "hsl(var(--chart-1))",
  },
}

export function SubjectChart() {
  return (
    <Card>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[400px] w-full max-md:h-[80%]">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} barSize={80}>
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
