import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    thumbnail: z.string().optional(),
    hero: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().optional(),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/books" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    thumbnail: z.string().optional(),
    hero: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().optional(),
    author: z.string().optional(),
  }),
});

const games = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/games" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    thumbnail: z.string().optional(),
    hero: z.string().optional(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().optional(),
  }),
});

export const collections = { blog, books, games };