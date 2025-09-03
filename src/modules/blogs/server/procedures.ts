import { baseProcedure, createTRPCRouter } from "@/trpc/init";

export const blogRouter = createTRPCRouter({
  getMany: baseProcedure.query(async () => {
    return [{ hello: "world" }];
  }),
});
