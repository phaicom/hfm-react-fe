import JoinNowButton from '@/components/JoinNowButton'
import { Card, CardContent } from '@/components/ui/card'
import { useScrollToTop } from '@/hooks/useScrollToTop'

function PrizesSection() {
  const prizes = [
    { place: '1', amount: '$1000', description: 'CRAS DAPIBUS & CRAS DAPIBUS' },
    { place: '2', amount: '$1000', description: 'CRAS DAPIBUS' },
    { place: '3', amount: '$1000', description: 'CRAS DAPIBUS' },
  ]

  return (
    <section className="bg-white pt-30 pb-20 text-center">
      <h2 className="mb-20 font-sofia-sans text-5xl">PRIZES</h2>

      <div className={`
        mx-auto mb-19 grid max-w-[87rem] grid-cols-1 gap-5 px-8
        md:grid-cols-3
      `}
      >
        {prizes.map((prize, index) => (
          <Card
            key={index}
            className="border-none bg-[#F4F4F4] py-10 shadow-none"
          >
            <CardContent className={`
              mx-auto flex flex-col items-center gap-7
              lg:max-w-[50%]
            `}
            >
              <div className="relative text-yellow-500">
                <img
                  src={`/medal-0${index + 1}.svg`}
                  alt={`medal ${index + 1}`}
                  className="h-25 w-25"
                />
              </div>
              <h3 className={`
                font-bold text-black
                md:text-5xl
              `}
              >
                {prize.amount}
              </h3>
              <p className="pt-4 text-xl text-black">{prize.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <JoinNowButton onClick={useScrollToTop} />
    </section>
  )
}

export default PrizesSection
