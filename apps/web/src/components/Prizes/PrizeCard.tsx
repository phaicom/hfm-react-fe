import type { FC } from 'react'
import { memo } from 'react'
import { Card, CardContent } from '@/components/ui/card'

interface PrizeCardProps {
  amount: string
  description: string
  image: string
}

const PrizeCard: FC<PrizeCardProps> = memo(({ amount, description, image }) => (
  <Card
    className="border-none bg-hfm-bg-gray py-10 shadow-none"
  >
    <CardContent
      className={`
        mx-auto flex flex-col items-center gap-7
        lg:max-w-[50%]
      `}
    >
      <img
        src={`/${image}.svg`}
        alt={image}
        className="h-25 w-25"
        loading="lazy"
      />
      <h3 className={`
        text-3xl font-bold text-black
        md:text-4xl
        lg:text-5xl
      `}
      >
        {amount}
      </h3>
      <p className="pt-4 text-xl text-black">{description}</p>
    </CardContent>
  </Card>
))

export default PrizeCard
