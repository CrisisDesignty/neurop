import { defineCollection, z } from 'astro:content';

const especialistasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    especialistas: z.array(z.object({
      id: z.string(),
      name: z.string(),
      title: z.string(),
      areas: z.array(z.string()),
      cedula: z.string(),
      certificaciones: z.array(z.string()),
      photo: z.string(),
    })),
  }),
});

export const collections = {
  'especialistas': especialistasCollection,
};