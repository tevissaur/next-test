import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
  getArticles: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.article.findMany();
  }),
  getProjects: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.project.findMany();
  }),
  getArticleByTitle: publicProcedure
    .input(z.object({ title: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.article.findFirst({
        select: {
          id: true,
          title: true,
          content: true,
          author: true,
        },
        where: {
          title: input.title,
        },
      });
    }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
