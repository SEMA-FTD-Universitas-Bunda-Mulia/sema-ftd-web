import { cn, formatDate } from "@/lib/utils";
import { ActivitiesGetManyOutputSingle } from "@/modules/activities/types";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: ActivitiesGetManyOutputSingle;
  className?: string;
};

export default function ActivityCard({ data, className }: Props) {
  return (
    <Link prefetch href={`/activities/${data.id}`}>
      <div
        className={cn(
          "w-full overflow-hidden rounded-base border-2 border-border font-base flex mb-2 bg-amber-300",
          className
        )}
      >
        <div className="flex w-[100px] md:w-[150px]">
          <Image
            src={data.thumbnail?.url || ""}
            alt="image"
            width={500}
            height={500}
            className="rounded-base w-full h-full aspect-square object-cover object-top"
          />
        </div>
        <div className="mx-4 my-4">
          <h2 className="text-lg md:text-xl font-semibold">{data.title}</h2>
          <div className="text-main-foreground border-border text-sm md:text-base font-bold">
            {formatDate(data.date)}
          </div>
          <div className="text-main-foreground border-border text-sm md:text-base">
            {data.description}
          </div>
        </div>
      </div>
    </Link>
  );
}

export const ActivityCardSkeleton = () => {
  return (
    <div className="w-full overflow-hidden rounded-base border-2 border-border font-base flex mb-2 bg-amber-300 animate-pulse h-[100px]"></div>
  );
};
