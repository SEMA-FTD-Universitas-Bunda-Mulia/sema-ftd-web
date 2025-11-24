import { MemberListView } from "@/modules/members/ui/views/member-list-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export const metadata = {
  title: "About Sema FTD",
  description: "About Sema FTD",
};

const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.members.getMany.queryOptions({}));

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MemberListView />
    </HydrationBoundary>
  );
};

export default Page;
