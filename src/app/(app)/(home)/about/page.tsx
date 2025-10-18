import { MemberListView } from "@/modules/members/ui/views/member-list-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export const metadata = {
  title: "About",
  description: "About",
};

const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.members.getMany.queryOptions({
      year: "2025",
    })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MemberListView />
    </HydrationBoundary>
  );
};

export default Page;
