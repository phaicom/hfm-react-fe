import { useHeroForm } from '@/components/Hero/useHeroForm'
import JoinNowButton from '@/components/JoinNowButton'
import { Form } from '@/components/ui/form'
import HeroFormAgreement from './HeroFormAgreement'
import HeroFormFields from './HeroFormFields'

function HeroForm() {
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
            <JoinNowButton type="submit" showTerms={false} loading={loading} />
          </div>
        </form>
      </Form>
    </div>
  )
}

export default HeroForm
