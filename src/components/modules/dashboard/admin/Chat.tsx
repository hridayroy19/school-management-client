"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs,  TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

// Data for the School Performance Area Chart
const performanceData = [
  { name: "Week 01", thisWeek: 180000, lastWeek: 480000 },
  { name: "Week 02", thisWeek: 400000, lastWeek: 280000 },
  { name: "Week 03", thisWeek: 300000, lastWeek: 400000 },
  { name: "Week 04", thisWeek: 400000, lastWeek: 180000 },
  { name: "Week 05", thisWeek: 250000, lastWeek: 500000 },
  { name: "Week 06", thisWeek: 400000, lastWeek: 200000 },
];

// Data for the School Overview Bar and Line Chart
const overviewData = [
  { name: "Jan", projects: 75, revenue: 58, active: 25 },
  { name: "Feb", projects: 80, revenue: 65, active: 30 },
  { name: "Mar", projects: 95, revenue: 45, active: 35 },
  { name: "Apr", projects: 88, revenue: 70, active: 40 },
  { name: "May", projects: 50, revenue: 50, active: 20 },
  { name: "Jun", projects: 98, revenue: 55, active: 45 },
  { name: "Jul", projects: 78, revenue: 52, active: 28 },
  { name: "Aug", projects: 90, revenue: 70, active: 32 },
  { name: "Sep", projects: 85, revenue: 75, active: 25 },
  { name: "Oct", projects: 40, revenue: 45, active: 15 },
  { name: "Nov", projects: 50, revenue: 48, active: 20 },
  { name: "Dec", projects: 98, revenue: 50, active: 25 },
];

const PerformanceChart = () => (
  <Card className=' bg-gray-900 text-white'>
    <CardHeader>
      <CardTitle>School Performance</CardTitle>
      <CardDescription>
        <div className="flex justify-between items-center mt-2">
          <div className="flex items-center">
            <span className="h-2 w-2 rounded-full  mr-2" />
            <span className="text-xs ">This Week: 1,245</span>
          </div>
          <div className="flex items-center">
            <span className="h-2 w-2 rounded-full bg-orange-500 mr-2" />
            <span className="text-xs ">Last Week: 1,356</span>
          </div>
        </div>
      </CardDescription>
    </CardHeader>
    <CardContent className="h-[200px] bg-gray-900 text-white">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={performanceData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis
            tickFormatter={(value) => `${(value / 1000).toLocaleString()}k`}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="thisWeek"
            stroke="#6366f1"
            fillOpacity={1}
            fill="url(#colorThisWeek)"
            name="This Week"
          />
          <Area
            type="monotone"
            dataKey="lastWeek"
            stroke="#f97316"
            fillOpacity={1}
            fill="url(#colorLastWeek)"
            name="Last Week"
          />
          <defs>
            <linearGradient id="colorThisWeek" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffff" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorLastWeek" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </CardContent>
  </Card>
);

const OverviewChart = () => {
  const [selectedTab, setSelectedTab] = useState("week");

  // This state would be updated with different data based on the selected tab
  // For this example, we'll use the same data for all tabs.
  const chartData = overviewData;

  return (
    <Card className='bg-gray-900 text-white'>
      <CardHeader className="flex  flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-2xl">School Overview</CardTitle>
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
            <TabsTrigger value="year">Year</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </TabsList>
        </Tabs>
      </CardHeader>
      <CardContent className="h-[200px]  bg-gray-900">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Bar dataKey="projects" fill="#6366f1" name="Number of Projects" />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="#22c55e"
              name="Revenue"
            />
            <Line
              type="monotone"
              dataKey="active"
              stroke="#e2e8f0"
              strokeDasharray="5 5"
              name="Active Projects"
            />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default function DashboardCharts() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PerformanceChart />
        <OverviewChart />
      </div>
    </div>
  );
}
