import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

function FaqsSection() {
  const faqs = [
    { question: 'Question A', answer: 'Answer A' },
    { question: 'Question B', answer: 'Answer B' },
    { question: 'Question C', answer: 'Answer C' },
    { question: 'Question D', answer: 'Answer D' },
  ]
  return (
    <section className="w-full bg-hfm-bg-gray px-4 pt-15 pb-39">
      <h2 className="mb-20 text-center font-sofia-sans text-5xl">FAQs</h2>
      <div className="mx-auto max-w-[85rem] px-8">
        <Accordion
          type="single"
          collapsible
          className={`
            w-full border-[#E4E4E4]
            last:border-b-1
          `}
          defaultValue="item-1"
        >
          {faqs.map((faq, idx) => (
            <AccordionItem key={faq.question} value={`item-${idx + 1}`}>
              <AccordionTrigger className="py-5 pl-14 text-xl">{faq.question}</AccordionTrigger>
              <AccordionContent className={`
                border-t-2 border-[#B9B7B7] py-5.5 pl-15 text-[1rem]
              `}
              >
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default FaqsSection
