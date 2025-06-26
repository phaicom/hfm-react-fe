import type { HeroFormData } from './schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

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
import { heroFormSchema } from './schema'

export default function HeroForm() {
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

  const onSubmit = (_: HeroFormData) => {
    // console.log('Submitted data:', data)
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
          className="space-y-4"
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
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="in">India</SelectItem>
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
                <FormItem className="flex items-start text-xs">
                  <FormControl>
                    <Checkbox className="border-hfm-gray" checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                  <FormLabel className={`
                    gap-1 text-xs font-normal text-[#999999]
                  `}
                  >
                    I have read and accepted the
                    {' '}
                    <a href="#" className="text-hfm-red">Privacy Policy</a>
                    {' '}
                    and
                    {' '}
                    <a href="#" className="text-hfm-red">Terms and Conditions</a>
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="pt-6">
            <Button
              type="submit"
              className={`
                h-13 w-1/2 rounded-sm bg-hfm-green text-lg font-bold text-white
                hover:bg-green-700
              `}
            >
              JOIN NOW
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
