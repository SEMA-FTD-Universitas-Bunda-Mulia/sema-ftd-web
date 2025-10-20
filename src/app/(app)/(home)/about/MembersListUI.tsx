"use client";

import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs";

const dummyData = [
  { name: "Alice", role: "BPH" },
  { name: "Bob", role: "BPH" },
  { name: "Charlie", role: "Litbang" },
];

export const MembersListUI = () => {
  const bphMembers = dummyData.filter((m) => m.role === "BPH");
  const litbangMembers = dummyData.filter((m) => m.role === "Litbang");

  return (
    <Tabs defaultValue="bph" className="w-full">
      <TabsList>
        <TabsTrigger value="bph">BPH</TabsTrigger>
        <TabsTrigger value="litbang">Litbang</TabsTrigger>
      </TabsList>

      <TabsContent value="bph">
        <h1 className="text-6xl font-extrabold">BPH</h1>
        <div>
          {bphMembers.map((m) => (
            <div key={m.name} className="text-lg">{m.name}</div>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="litbang">
        <h1 className="text-6xl font-extrabold">Litbang</h1>
        <div>
          {litbangMembers.map((m) => (
            <div key={m.name} className="text-lg">{m.name}</div>
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};
