import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getQueryClient, trpc } from "@/trpc/server";
import { ActivityView } from "@/modules/activities/ui/views/activity-view";

interface Props {
  params: Promise<{ activityId: string }>;
}

const Page = async ({ params }: Props) => {
  const { activityId } = await params;

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.activities.getOne.queryOptions({ activityId })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ActivityView activityId={activityId} />
    </HydrationBoundary>
  );
};

export default Page;
