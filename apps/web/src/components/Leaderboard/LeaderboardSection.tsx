import JoinNowButton from '@/components/JoinNowButton'
import { Card, CardContent } from '@/components/ui/card'
import { useScrollToTop } from '@/hooks/useScrollToTop'

const winners = [
  {
    date: 'JANUARY 1ᵗʰ WINNER',
    name: 'JOHN SMITH',
    id: '5678997654',
    gain: '1634.4%',
    position: 1,
  },
  {
    date: 'JANUARY 2ⁿᵈ WINNER',
    name: 'JOHN SMITH',
    id: '5678997654',
    gain: '1634.4%',
    position: 2,
  },
  {
    date: 'JANUARY 3ʳᵈ WINNER',
    name: 'JOHN SMITH',
    id: '5678997654',
    gain: '1634.4%',
    position: 3,
  },
]

const leaderboard = [
  '1624.19%',
  '1083.63%',
  '635.47%',
  '169.20%',
  '158.62%',
  '124.50%',
  '71.47%',
  '67.65%',
  '62.30%',
  '61.74%',
]

export default function LeaderboardSection() {
  return (
    <section className="w-full bg-hfm-bg-gray pt-30 pb-15">
      <h2 className="mb-21 text-center font-sofia-sans text-5xl">
        SED FRINGILLA MAURIS SIT
      </h2>

      <div className={`
        mx-auto mb-20 grid max-w-[87rem] grid-cols-1 gap-28 px-8
        lg:grid-cols-2
      `}
      >
        {/* Winners List */}
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
                      <span className="text-hfm-red">
                        {winner.gain}
                      </span>
                    </div>
                  </div>
                </div>
                <div className={`
                  hfm-gradient absolute top-0 right-0 translate-x-12
                  translate-y-6 rotate-45 px-14 py-1 text-2xl font-bold
                  text-white
                `}
                >
                  $1000
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Leaderboard Table */}
        <div className="lg:-ml-10">
          <h3 className="mb-14 text-2xl font-bold text-black uppercase">Aliquam Lorem Ant</h3>
          <div className="overflow-x-auto rounded-md border-b">
            <table className="min-w-full text-left leading-12">
              <thead className="">
                <tr>
                  <th className="w-[82%] px-3 font-bold text-hfm-red">NAME</th>
                  <th className="px-3 font-bold text-hfm-red">GAIN</th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((gain, idx) => (
                  <tr key={idx} className="border-t">
                    <td className="px-3">John Smith</td>
                    <td className="px-3">{gain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-hfm-gray-light">Nam quam nunc, blandit vel, luctus pulvinar</p>
        </div>
      </div>

      <JoinNowButton onClick={useScrollToTop} />
    </section>
  )
}
