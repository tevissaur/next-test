import { z } from "zod";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { githubApiUrl } from "~/utils/constants";

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
  getServices: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.service.findMany();
  }),
  getArticlesByTitle: publicProcedure
    .input(z.object({ title: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.prisma.article.findMany({
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
  getGithubRepoInfo: publicProcedure
    .input(z.object({ repoName: z.string(), owner: z.string() }))
    .query(async ({ input, ctx }) => {
      const response = await fetch(
        `${githubApiUrl}/repos/${input.owner}/${input.repoName}`,
        {
          headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN || ""}`,
          },
        }
      );
      return response.json();
    }),
  getGithubRepoContributorsInfo: publicProcedure
    .input(z.object({ repoName: z.string(), owner: z.string() }))
    .query(async ({ input, ctx }) => {
      const response = await fetch(
        `${githubApiUrl}/repos/${input.owner}/${input.repoName}/contributors`,
        {
          headers: {
            Authorization: `token ${process.env.GITHUB_TOKEN || ""}`,
          },
        }
      );
      const data = await response.json() as Array<{
        login: string;
        avatar_url: string;
        html_url: string;
      }>;
      return data;
    }),
  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
  addComment: publicProcedure
    .input(
      z.object({
        author: z.string(),
        content: z.string(),
      })
    )
    .mutation(({ input, ctx }) => {
      return ctx.prisma.article.create({
        data: {
          content: input.content,
          author: input.author,
          title: "review",
        },
      });
    }),
});
