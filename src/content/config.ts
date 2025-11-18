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
      cedula: z.array(z.string()),
      certificaciones: z.array(z.string()),
      photo: z.string(),
    })),
  }),
});

const homepageCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hero: z.object({
      title: z.string(),
      subtitle: z.string(),
      cta_primary: z.string(),
      cta_secondary: z.string(),
      images: z.array(z.string()),
    }),
    about: z.object({
      title: z.string(),
      subtitle: z.string(),
      description: z.string(),
      stats: z.array(z.object({
        title: z.string(),
        description: z.string(),
      })),
      callout: z.object({
        text: z.string(),
        button_text: z.string(),
      }),
    }),
    services: z.array(z.object({
      title: z.string(),
      description: z.string(),
      color: z.string(),
      filter: z.string(),
    })),
    faq: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })),
  }),
});

export const collections = {
  'especialistas': especialistasCollection,
  'homepage': homepageCollection,
};