import type { FC } from 'react'
import { memo } from 'react'
import { Card, CardContent } from '@/components/ui/card'

interface Winner {
  date: string
  name: string
  id: string
  gain: string
  position: number
}

interface WinnersListProps {
  winners: Winner[]
}

const WinnersList: FC<WinnersListProps> = memo(({ winners }) => (
  <div className="flex flex-col gap-5">
    {winners.map((winner, index) => (
      <Card key={winner.position} className="relative overflow-hidden">
        <CardContent className="px-9 pb-3">
          <div className="flex items-center gap-7">
            <div className="mt-2">
              <img
                loading="lazy"
                src={`/trophy-0${index + 1}.svg`}
                alt={`trophy ${index + 1}`}
                className="h-25 w-25"
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className={`
                hfm-gradient clip-text text-sm font-bold
                md:text-lg
              `}
              >
                {winner.date}
              </div>
              <div>
                <div className={`
                  text-sm text-black
                  md:text-lg
                `}
                >
                  {winner.name}
                </div>
                <div className={`
                  text-sm text-hfm-gray-light
                  md:text-lg
                `}
                >
                  {winner.id}
                </div>
              </div>
              <div className={`
                flex flex-col items-start gap-1 text-sm leading-4 font-bold
                text-black
                md:text-lg
              `}
              >
                <span>
                  TOTAL GAIN OF
                  {' '}
                  <span className="text-hfm-red">{winner.gain}</span>
                </span>
              </div>
            </div>
          </div>
          <div
            className={`
              hfm-gradient absolute top-0 right-0 translate-x-16 translate-y-1
              scale-50 rotate-45 px-14 py-1 text-2xl font-bold text-white
              md:translate-x-12 md:translate-y-6 md:scale-100
            `}
          >
            $1000
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
))

export default WinnersList
