import type { HeroFormData } from '@/schemas/heroFormSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { heroFormSchema } from '@/schemas/heroFormSchema'
import { countries } from '@/utils/countries'

export function useHeroForm() {
  const form = useForm<HeroFormData>({
    resolver: zodResolver(heroFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      country: '',
      code: '',
      phone: '',
      email: '',
      experience: '',
      accepted: false,
    },
  })

  const { watch, setValue } = form
  const selectedCountry = watch('country')

  useEffect(() => {
    const selected = countries.find((c) => c.code === selectedCountry)
    if (selected) {
      setValue('code', selected.dial)
      form.clearErrors('code')
    }
  }, [selectedCountry, setValue])

  const [loading, setLoading] = useState(false)

  const onSubmit = async (data: HeroFormData) => {
    setLoading(true)
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Network error')
      }

      await response.json()
      toast.success('🎉 Form submitted successfully!')
    }
    catch (error) {
      console.error('Submission failed:', error)
      toast.error('❌ Something went wrong. Try again.')
    }
    finally {
      setLoading(false)
    }
  }

  return { form, loading, onSubmit }
}
