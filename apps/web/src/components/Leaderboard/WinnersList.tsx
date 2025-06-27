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

function WinnersList({ winners }: WinnersListProps) {
  return (
    <div className="flex flex-col gap-5">
      {winners.map((winner, index) => (
        <Card key={winner.position} className="relative overflow-hidden">
          <CardContent className="px-9 pb-4">
            <div className="flex items-center gap-7">
              <div className="mt-2">
                <img
                  src={`/trophy-0${index + 1}.svg`}
                  alt={`trophy ${index + 1}`}
                  className="h-25 w-25"
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="hfm-gradient clip-text text-lg font-bold">{winner.date}</div>
                <div>
                  <div className="text-lg text-black">{winner.name}</div>
                  <div className="text-lg text-hfm-gray-light">{winner.id}</div>
                </div>
                <div className="font-lg mt-2 font-bold text-black">
                  TOTAL GAIN OF
                  {' '}
                  <span className="text-hfm-red">{winner.gain}</span>
                </div>
              </div>
            </div>
            <div
              className={`
                hfm-gradient absolute top-0 right-0 translate-x-12 translate-y-6
                rotate-45 px-14 py-1 text-2xl font-bold text-white
              `}
            >
              $1000
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export default WinnersList
