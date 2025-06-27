import { useMemo } from 'react'
import { countries } from '@/components/Hero/countries'
import {
  FormControl,
  FormField,
  FormItem,
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

import { experiences } from './heroData'

function HeroFormFields({ form }: { form: any }) {
  const countriesItems = useMemo(
    () =>
      countries.map((c) => (
        <SelectItem className="cursor-pointer" key={c.code} value={c.code}>
          {c.name}
        </SelectItem>
      )),
    [countries],
  )
  return (
    <>
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
                  aria-label="First Name"
                  autoComplete="given-name"
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
                  aria-label="Last Name"
                  autoComplete="family-name"
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
                  <SelectTrigger
                    aria-label="Country"
                    className={`
                      !h-11 w-full cursor-pointer border-hfm-gray
                      data-[placeholder]:text-hfm-gray
                    `}
                  >
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {countriesItems}
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
                    aria-label="Country Code"
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
                    aria-label="Phone Number"
                    autoComplete="tel"
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
                  aria-label="Email"
                  autoComplete="email"
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
                  <SelectTrigger
                    aria-label="Experience"
                    className={`
                      !h-11 w-full cursor-pointer border-hfm-gray
                      data-[placeholder]:text-hfm-gray
                    `}
                  >
                    <SelectValue placeholder="Experience" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {experiences.map((experience) => (
                    <SelectItem
                      key={experience.value}
                      className="cursor-pointer"
                      value={experience.value}
                    >
                      {experience.text}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </>
  )
}

export default HeroFormFields
