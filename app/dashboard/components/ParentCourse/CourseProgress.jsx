"use client";
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";

export function CourseProgress({ perc }) {
  const percentage = (perc / 100) * 360;
  const chartData = [
    { browser: "safari", visitors: `${perc}`, fill: "var(--color-safari)" }, // Changed visitors to 67
  ];
  const chartConfig = {
    safari: {
      label: "Safari",
      color: "hsl(var(--chart-2))",
    },
  };
  return (
    <Card className="">
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className=" h-[200px] w-[200px]">
          <RadialBarChart
            data={chartData}
            endAngle={percentage}
            innerRadius={50} // Smaller inner radius
            outerRadius={80} // Larger outer radius
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[58 , 45]}
            />
            <RadialBar dataKey="visitors" background />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-xl font-bold"
                        >
                          {`${chartData[0].visitors.toLocaleString()}%`}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                        ></tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
