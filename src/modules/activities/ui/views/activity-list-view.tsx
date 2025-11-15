// import { Suspense } from "react";

import { ScrollArea } from "@/components/ui/scroll-area";
import { ActivityList, ProductListSkeleton } from "../components/activity-list";
import { Suspense } from "react";
import { ActivitiesSort } from "../components/activity-sort";
import { ActivityListUpcoming } from "../components/activity-list-upcoming";

interface Props {
  category?: string;
  tenantSlug?: string;
  narrowView?: boolean;
}

export const ActivityListView = ({}: Props) => {
  return (
    <div className="px-4 lg:px-20 py-14 md:py-20 flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:items-start gap-y-2 lg:gap-y-0 justify-between gap-x-10">
        {/* <CalendarComponents /> */}
        <div className="w-[40%]">
          <div className="flex flex-col lg:flex-row lg:items-center gap-y-2 lg:gap-y-0 py-5 justify-between">
            <h1 className="text-6xl font-extrabold">Our Activities</h1>
          </div>
          <div className="flex flex-col mt-5 md:mt-0">
            <div className="text-justify leading-6">
              <ActivitiesSort />
            </div>
          </div>
        </div>

        <div className="flex flex-col w-full md:w-[60%] gap-5">
          <ScrollArea className="rounded-base h-[500px]  mt-5 md:mt-0 text-main-foreground border-2 border-border bg-main p-4 shadow-shadow">
            <Suspense fallback={<ProductListSkeleton />}>
              <ActivityListUpcoming />
            </Suspense>
          </ScrollArea>
          <ScrollArea className="rounded-base h-[500px] mt-5 md:mt-0 text-main-foreground border-2 border-border bg-main p-4 shadow-shadow">
            <Suspense fallback={<ProductListSkeleton />}>
              <ActivityList />
            </Suspense>
          </ScrollArea>
        </div>
      </div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-6 xl:grid-cols-8 gap-y-6 gap-x-12">
        <div className="lg:col-span-2 xl:col-span-2">Test 2</div>
        <div className="lg:col-span-4 xl:col-span-6">Test 3</div>
      </div> */}
    </div>
  );
};
