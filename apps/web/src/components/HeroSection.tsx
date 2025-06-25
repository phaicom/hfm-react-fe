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
      className="bg-cover bg-center text-white py-12 px-4 text-center md:text-left"
      style={{ backgroundImage: 'url(\'/hero-bg.jpg\')' }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-2xl mx-auto bg-white text-black p-6 rounded-md grid gap-4 md:grid-cols-2"
      >
        <input
          {...register('firstName')}
          placeholder="First Name"
          className="p-2 border rounded"
        />
        {errors.firstName && <p className="text-red-500 text-sm col-span-full">{errors.firstName.message}</p>}

        <input
          {...register('lastName')}
          placeholder="Last Name"
          className="p-2 border rounded"
        />
        {errors.lastName && <p className="text-red-500 text-sm col-span-full">{errors.lastName.message}</p>}

        <input
          {...register('country')}
          placeholder="Country"
          className="p-2 border rounded"
        />
        {errors.country && <p className="text-red-500 text-sm col-span-full">{errors.country.message}</p>}

        <input
          {...register('phone')}
          placeholder="Phone"
          className="p-2 border rounded"
        />
        {errors.phone && <p className="text-red-500 text-sm col-span-full">{errors.phone.message}</p>}

        <input
          {...register('email')}
          type="email"
          placeholder="Email"
          className="p-2 border rounded"
        />
        {errors.email && <p className="text-red-500 text-sm col-span-full">{errors.email.message}</p>}

        <select {...register('experience')} className="p-2 border rounded">
          <option value="">Experience</option>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="expert">Expert</option>
        </select>
        {errors.experience && <p className="text-red-500 text-sm col-span-full">{errors.experience.message}</p>}

        <div className="col-span-full flex items-center">
          <input type="checkbox" {...register('accept')} className="mr-2" />
          <label className="text-sm">I accept the Privacy Policy</label>
        </div>
        {errors.accept && <p className="text-red-500 text-sm col-span-full">{errors.accept.message}</p>}

        <button
          type="submit"
          className="bg-green-600 text-white p-2 rounded col-span-full"
        >
          Join Now
        </button>

        {submitted && (
          <p className="text-green-600 col-span-full text-center font-medium mt-2">
            ✅ Thank you! Your form has been submitted.
          </p>
        )}
      </form>
    </section>
  )
}

export default HeroSection
