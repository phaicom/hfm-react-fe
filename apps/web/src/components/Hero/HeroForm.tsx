import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Form } from '@/components/ui/form'
import { useHeroForm } from '@/hooks/useHeroForm'
import { HeroFormAgreement } from './HeroFormAgreement'
import { HeroFormFields } from './HeroFormFields'

export default function HeroForm() {
  const { form, loading, onSubmit } = useHeroForm()

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
          <HeroFormFields form={form} />
          <div className="pt-1">
            <HeroFormAgreement form={form} />
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
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              {loading ? 'Submitting...' : 'Join Now'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
