import { z } from "zod";

export const ProjectSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(1),
  images: z.array(z.string().url()),
  tech: z.array(z.string()),
  liveUrl: z.string().url(),
  repoUrl: z.string().url(),
  category: z.string(),
  featured: z.boolean(),
  publishedAt: z.date(),
});
export type ProjectType = z.infer<typeof ProjectSchema>;