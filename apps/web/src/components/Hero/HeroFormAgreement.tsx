import { Checkbox } from '@/components/ui/checkbox'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

export function HeroFormAgreement({ form }: { form: any }) {
  return (
    <FormField
      control={form.control}
      name="accepted"
      render={({ field }) => (
        <FormItem className="flex flex-col items-start text-xs">
          <div className="flex items-start">
            <FormControl>
              <Checkbox
                className="border-hfm-gray"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormControl>
            <FormLabel className={`
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
  )
}
