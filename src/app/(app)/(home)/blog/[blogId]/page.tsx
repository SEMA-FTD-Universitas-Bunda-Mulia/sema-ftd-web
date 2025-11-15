import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

import { getQueryClient, trpc } from "@/trpc/server";
import { BlogView } from "@/modules/blogs/ui/views/blog-view";

interface Props {
  params: Promise<{ blogId: string }>;
}

const Page = async ({ params }: Props) => {
  const { blogId } = await params;

  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(
    trpc.blogs.getOne.queryOptions({ blogId })
  );

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BlogView blogId={blogId} />
    </HydrationBoundary>
  );
};

export default Page;
