"use client";

import { TabsContent } from "@/components/ui/tabs";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useMembersFilters } from "../../hooks/use-members-filters";
import ImageCard from "@/components/ui/image-card";

export const MembersList = () => {
  const [filters] = useMembersFilters();
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(
    trpc.members.getMany.queryOptions({ year: filters.year })
  );

  return (
    <div className="w-full">
      <TabsContent
        className="w-full h-full flex flex-col items-center justify-center gap-4"
        value="bph"
      >
        <div className="grid grid-cols-1 gap-4 pt-10">
          {data.docs
            .filter(
              (member) =>
                member.division === "BPH" && member.position === "Ketua"
            )
            .map((member) => (
              <ImageCard
                key={member.id}
                imageUrl={member.image?.url || ""}
                caption={member.name}
                description={`${member.position} Sema FTD ${member.year}`}
              />
            ))}
        </div>

        <div className="grid grid-cols-2 gap-4 pt-10">
          {data.docs
            .filter(
              (member) =>
                member.division === "BPH" && member.position === "Wakil Ketua"
            )
            .map((member) => (
              <ImageCard
                key={member.id}
                imageUrl={member.image?.url || ""}
                caption={member.name}
                description={`${member.position} Sema FTD ${member.year}`}
              />
            ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
          {data.docs
            .filter(
              (member) =>
                member.division === "BPH" &&
                (member.position === "Bendahara" ||
                  member.position === "Sekretaris")
            )
            .map((member) => (
              <ImageCard
                key={member.id}
                imageUrl={member.image?.url || ""}
                caption={member.name}
                description={`${member.position} Sema FTD ${member.year}`}
              />
            ))}
        </div>
      </TabsContent>

      <TabsContent
        className="w-full flex flex-col items-center justify-center gap-4"
        value="medkom"
      >
        <div className="grid grid-cols-2 gap-4 pt-10">
          {data.docs
            .filter(
              (member) =>
                member.division === "Medkom" &&
                (member.position === "Koordinator" ||
                  member.position === "Wakil Koordinator")
            )
            .map((member) => (
              <ImageCard
                key={member.id}
                imageUrl={member.image?.url || ""}
                caption={member.name}
                description={`${member.position} Media Komunikasi Sema FTD ${member.year}`}
              />
            ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-10">
          {data.docs
            .filter(
              (member) =>
                member.division === "Medkom" && member.position === "Anggota"
            )
            .map((member) => (
              <ImageCard
                key={member.id}
                imageUrl={member.image?.url || ""}
                caption={member.name}
                description={`${member.position} Media Komunikasi Sema FTD ${member.year}`}
              />
            ))}
        </div>
      </TabsContent>
    </div>
  );
};
