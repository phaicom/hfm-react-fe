import JoinNowButton from '@/components/JoinNowButton'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import PrizeCard from './PrizeCard'
import { prizes } from './prizesData'

function PrizesSection() {
  return (
    <section className="bg-white pt-30 pb-20 text-center">
      <h2 className="mb-20 font-sofia-sans text-5xl">PRIZES</h2>
      <div
        className={`
          mx-auto mb-19 grid max-w-[87rem] grid-cols-1 gap-5 px-8
          md:grid-cols-3
        `}
      >
        {prizes.map((prize, index) => (
          <PrizeCard key={index} amount={prize.amount} description={prize.description} image={prize.image} />
        ))}
      </div>
      <JoinNowButton onClick={useScrollToTop} />
    </section>
  )
}

export default PrizesSection
