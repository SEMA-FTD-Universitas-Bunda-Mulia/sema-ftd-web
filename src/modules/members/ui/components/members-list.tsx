"use client";

import { TabsContent } from "@/components/ui/tabs";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useMembersFilters } from "../../hooks/use-members-filters";

export const MembersList = () => {
  const [filters] = useMembersFilters();
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.members.getMany.queryOptions({ year: filters.year })
  );

  return (
    <div>
      <TabsContent className="w-full" value="bph">
        <div className="flex flex-col lg:flex-row lg:items-center gap-y-2 lg:gap-y-0 py-5 justify-between">
          {data.docs.map((member) => (
            <div key={member.id}>
              <h1 className="text-6xl font-extrabold">{member.name}</h1>
            </div>
          ))}
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
