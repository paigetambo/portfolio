import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    year: z.string().optional(),
    description: z.string().optional(),
    images: z.array(z.object({
      src: z.string(),
      alt: z.string().optional(),
      caption: z.string().optional(),
    })).optional(),
    order: z.number().optional(),
    hidden: z.boolean().optional().default(false),
  }),
});

export const collections = { projects };
