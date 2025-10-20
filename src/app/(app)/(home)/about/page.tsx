import { loadMemberFilters } from "@/modules/members/search-params";
import { MemberListView } from "@/modules/members/ui/views/member-list-view";
import { getQueryClient, trpc } from "@/trpc/server";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { SearchParams } from "nuqs/server";

export const metadata = {
  title: "About",
  description: "About",
};

interface Props {
  params: Promise<{
    category: string;
  }>;
  searchParams: Promise<SearchParams>;
}

const Page = async ({ searchParams }: Props) => {
  const filters = await loadMemberFilters(searchParams);
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.members.getMany.queryOptions({
      year: filters.year,
    })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MemberListView />
    </HydrationBoundary>
  );
};

export default Page;
