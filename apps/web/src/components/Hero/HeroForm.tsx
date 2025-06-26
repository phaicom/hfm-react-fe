import type { HeroFormData } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'

import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { countries } from './countries'
import { heroFormSchema } from './schema'

export default function HeroForm() {
  const Icons = {
    spinner: Loader2,
  }

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

  // Prefill phone code when country changes
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

  return (
    <div className={`
      mt-8 w-full max-w-[730px] rounded-lg bg-white p-6 text-black shadow-lg
      md:p-10
    `}
    >
      <h2 className="mb-8 text-center text-2xl font-bold">Lorem ipsum dolor sit amet</h2>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-4 text-left"
        >
          <div className={`
            flex flex-col gap-4
            md:flex-row
          `}
          >
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="h-11 border-hfm-gray !placeholder-hfm-gray"
                      placeholder="First Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="h-11 border-hfm-gray !placeholder-hfm-gray"
                      placeholder="Last Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className={`
            flex flex-col gap-4
            md:flex-row
          `}
          >
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className={`
                        !h-11 w-full border-hfm-gray
                        data-[placeholder]:text-hfm-gray
                      `}
                      >
                        <SelectValue placeholder="Country" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {countries.map((c) => (
                        <SelectItem key={c.code} value={c.code}>
                          {c.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex w-full gap-2">
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem className="w-1/5">
                    <FormControl>
                      <Input
                        className="h-11 border-hfm-gray !placeholder-hfm-gray"
                        placeholder="Code"
                        readOnly
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="w-4/5">
                    <FormControl>
                      <Input
                        className="h-11 border-hfm-gray !placeholder-hfm-gray"
                        placeholder="Phone"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className={`
            flex flex-col gap-4
            md:flex-row
          `}
          >

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      className="h-11 border-hfm-gray !placeholder-hfm-gray"
                      placeholder="Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="experience"
              render={({ field }) => (
                <FormItem className="w-full">
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className={`
                        !h-11 w-full border-hfm-gray
                        data-[placeholder]:text-hfm-gray
                      `}
                      >
                        <SelectValue placeholder="Experience" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="pt-1">
            <FormField
              control={form.control}
              name="accepted"
              render={({ field }) => (
                <FormItem className="flex flex-col items-start text-xs">
                  <div className="flex items-start">
                    <FormControl>
                      <Checkbox className="border-hfm-gray" checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel
                      className={`
                        ml-2 flex flex-col items-start gap-1 text-xs font-normal
                        !text-hfm-gray
                      `}
                    >
                      <span>
                        I have read and accepted the
                        {' '}
                        <a href="#" className="text-hfm-red">Privacy Policy</a>
                        {' '}
                        and
                        {' '}
                        <a href="#" className="text-hfm-red">Terms and Conditions</a>
                      </span>
                    </FormLabel>
                  </div>
                  <FormMessage className="ml-6" />
                </FormItem>
              )}
            />
          </div>

          <div className="flex w-full items-center justify-center pt-6">
            <Button
              type="submit"
              disabled={loading}
              className={`
                h-13 w-1/2 rounded-sm bg-hfm-green text-lg font-bold text-white
                hover:bg-green-700
              `}
            >
              {loading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              {loading ? 'Submitting...' : 'Join Now'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
