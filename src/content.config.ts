import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const portfolio = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/portfolio" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    context: z.string(),
    challenge: z.string(),
    approach: z.string(),
    value: z.string(),
    methods: z.array(z.string()),
    image: z.string(),
    imageAlt: z.string(),
    status: z.enum(["representative-capability", "confirmed-project"]),
    order: z.number(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    minutes: z.number(),
    heroImage: z.string(),
    heroAlt: z.string(),
  }),
});

export const collections = { portfolio, blog };
