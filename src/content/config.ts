import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    thumbnail: z.string().optional(),
    hero: z.string().optional(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().optional(),
  }),
});

const books = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    thumbnail: z.string().optional(),
    hero: z.string().optional(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().optional(),
    author: z.string().optional(),
  }),
});

const games = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    thumbnail: z.string().optional(),
    hero: z.string().optional(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string().optional(),
  }),
});

export const collections = { blog, books, games };
