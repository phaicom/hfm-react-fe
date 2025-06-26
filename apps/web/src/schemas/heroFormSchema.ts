import type { CountryCode } from 'libphonenumber-js'
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { z } from 'zod'

export const heroFormSchema = z
  .object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    country: z.string().min(1, 'Country is required'),
    code: z.string().min(1, 'Code is required'),
    phone: z.string().min(1, 'Phone number is required'),
    email: z.string().email('Invalid email'),
    experience: z.string().min(1, 'Experience is required'),
    accepted: z.boolean().refine((val) => val === true, {
      message: 'You must accept the terms',
    }),
  })
  .superRefine((data, ctx) => {
    const { phone, country } = data
    const phoneNumber = parsePhoneNumberFromString(phone, country as CountryCode)

    if (!phoneNumber?.isValid()) {
      ctx.addIssue({
        path: ['phone'],
        code: z.ZodIssueCode.custom,
        message: 'Invalid phone number for selected country',
      })
    }
  })

export type HeroFormData = z.infer<typeof heroFormSchema>
