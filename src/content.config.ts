
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
      width: z.string().optional(),
    })).optional(),
    thumbnail: z.string().optional(),
    thumbnail_size: z.enum(['small', 'medium', 'large']).optional().default('medium'),
    order: z.number().optional(),
    hidden: z.boolean().optional().default(false),
  }),
});
 
const process = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/process' }),
  schema: z.object({
    image: z.string(),
    alt: z.string().optional(),
    project: z.string().optional(),
    date: z.string().optional(),
    caption: z.string().optional(),
  }),
});
 
const text = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/text' }),
  schema: z.object({
    title: z.string(),
    date: z.string(),
    link: z.string().optional(),
    image: z.string().optional(),
    image_width: z.string().optional(),
  }),
});
 
export const collections = { projects, process, text };
 
