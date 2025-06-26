import { z } from 'zod'

export const heroFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  country: z.string().min(1, 'Country is required'),
  code: z.string().min(1, 'Code is required'),
  phone: z.string().min(6, 'Phone is too short'),
  email: z.string().email('Invalid email'),
  experience: z.string().min(1, 'Experience is required'),
  accepted: z.boolean().refine((val) => val === true, {
    message: 'You must accept the terms',
  }),
})

export type HeroFormData = z.infer<typeof heroFormSchema>
