import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

// Zod schema
const formSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  country: z.string().min(1, 'Country is required'),
  phone: z.string().min(1, 'Phone is required'),
  email: z.string().email('Invalid email'),
  experience: z.string().min(1, 'Experience is required'),
  accept: z.literal(true, {
    errorMap: () => ({ message: 'You must accept the Privacy Policy' }),
  }),
})

type FormValues = z.infer<typeof formSchema>

function HeroSection() {
  const [submitted, setSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = (_: FormValues) => {
    // console.log('Form submitted:', data)
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000) // Hide message after 5s
  }

  return (
    <section
      className={`
        bg-cover bg-center px-4 py-12 text-center text-white
        md:text-left
      `}
      style={{ backgroundImage: 'url(\'/hero-bg.jpg\')' }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`
          mx-auto grid max-w-2xl gap-4 rounded-md bg-white p-6 text-black
          md:grid-cols-2
        `}
      >
        <input
          {...register('firstName')}
          placeholder="First Name"
          className="rounded border p-2"
        />
        {errors.firstName && <p className="col-span-full text-sm text-red-500">{errors.firstName.message}</p>}

        <input
          {...register('lastName')}
          placeholder="Last Name"
          className="rounded border p-2"
        />
        {errors.lastName && <p className="col-span-full text-sm text-red-500">{errors.lastName.message}</p>}

        <input
          {...register('country')}
          placeholder="Country"
          className="rounded border p-2"
        />
        {errors.country && <p className="col-span-full text-sm text-red-500">{errors.country.message}</p>}

        <input
          {...register('phone')}
          placeholder="Phone"
          className="rounded border p-2"
        />
        {errors.phone && <p className="col-span-full text-sm text-red-500">{errors.phone.message}</p>}

        <input
          {...register('email')}
          type="email"
          placeholder="Email"
          className="rounded border p-2"
        />
        {errors.email && <p className="col-span-full text-sm text-red-500">{errors.email.message}</p>}

        <select {...register('experience')} className="rounded border p-2">
          <option value="">Experience</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
        {errors.experience && <p className="col-span-full text-sm text-red-500">{errors.experience.message}</p>}

        <div className="col-span-full flex items-center">
          <input type="checkbox" {...register('accept')} className="mr-2" />
          <label className="text-sm">I accept the Privacy Policy</label>
        </div>
        {errors.accept && <p className="col-span-full text-sm text-red-500">{errors.accept.message}</p>}

        <button
          type="submit"
          className="col-span-full rounded bg-green-600 p-2 text-white"
        >
          Join Now
        </button>

        {submitted && (
          <p className={`
            col-span-full mt-2 text-center font-medium text-green-600
          `}
          >
            ✅ Thank you! Your form has been submitted.
          </p>
        )}
      </form>
    </section>
  )
}

export default HeroSection
