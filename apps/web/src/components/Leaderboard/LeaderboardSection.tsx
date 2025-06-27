import JoinNowButton from '@/components/JoinNowButton'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { leaderboard, winners } from './leaderboardData'
import LeaderboardTable from './LeaderboardTable'
import WinnersList from './WinnersList'

function LeaderboardSection() {
  return (
    <section className="w-full bg-hfm-bg-gray pt-30 pb-15">
      <h2 className="mb-21 text-center font-sofia-sans text-5xl">
        SED FRINGILLA MAURIS SIT
      </h2>
      <div
        className={`
          mx-auto mb-20 grid max-w-[87rem] grid-cols-1 gap-28 px-8
          lg:grid-cols-2
        `}
      >
        <WinnersList winners={winners} />
        <LeaderboardTable leaderboard={leaderboard} />
      </div>
      <JoinNowButton onClick={useScrollToTop} />
    </section>
  )
}

export default LeaderboardSection
