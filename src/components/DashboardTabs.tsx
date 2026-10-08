import { useState } from "react";
import { OverviewCards } from "./OverviewCards";
import { CategoryCards } from "./CategoryCards"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function DashboardTabs() {
  const [mode, setMode] = useState<"overview" | "category">("overview");

  return (
    <Tabs value={mode} onValueChange={(v) => setMode(v as "overview" | "category")}>
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="category">By Category</TabsTrigger>
      </TabsList>
      {/* กรณีเลือกแท็บ "ค้นหาตามวิชา" (value="course") */}
      <TabsContent value="overview" className="pt-2">
        <OverviewCards />
      </TabsContent>
      <TabsContent value="category" className="pt-2">
        <CategoryCards />
      </TabsContent>
    </Tabs>
  );
}
