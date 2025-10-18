"use client";

import { TabsContent } from "@/components/ui/tabs";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const MembersList = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.members.getMany.queryOptions({ year: "2025" })
  );

  return (
    <div>
      <TabsContent className="w-full" value="bph">
        <div className="flex flex-col lg:flex-row lg:items-center gap-y-2 lg:gap-y-0 py-5 justify-between">
          <h1 className="text-6xl font-extrabold">BPH</h1>
          <div>{JSON.stringify(data, null, 2)}</div>
        </div>
      </TabsContent>
      <TabsContent className="w-full" value="litbang">
        <div className="flex flex-col lg:flex-row lg:items-center gap-y-2 lg:gap-y-0 py-5 justify-between">
          <h1 className="text-6xl font-extrabold">Litbang</h1>
        </div>
      </TabsContent>
    </div>
  );
};
