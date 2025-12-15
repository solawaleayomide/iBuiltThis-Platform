import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters long"),
  slug: z
    .string()
    .min(3, "Slug must be at least 3 characters long")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  tagline: z.string().min(3, "Tagline must be at least 3 characters long"),
  description: z.string().optional(),
  websiteUrl: z.string().url("Invalid URL"),
  tags: z
    .string()
    .min(1, "Tags must be at least 1 character long")
    .transform((val) => val.split(",").map((tag) => tag.trim().toLowerCase())),
});
