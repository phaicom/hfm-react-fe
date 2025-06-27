interface LeaderboardEntry {
  name: string
  gain: string
}

interface LeaderboardTableProps {
  leaderboard: LeaderboardEntry[]
}

function LeaderboardTable({ leaderboard }: LeaderboardTableProps) {
  return (
    <div className="lg:-ml-10">
      <h3 className="mb-14 text-2xl font-bold text-black uppercase">Aliquam Lorem Ant</h3>
      <div className="overflow-x-auto rounded-md border-b">
        <table className="min-w-full text-left leading-12">
          <thead>
            <tr>
              <th className="w-[82%] px-3 font-bold text-hfm-red">NAME</th>
              <th className="px-3 font-bold text-hfm-red">GAIN</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map((entry, idx) => (
              <tr key={idx} className="border-t">
                <td className="px-3">{entry.name}</td>
                <td className="px-3">{entry.gain}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-6 text-sm text-hfm-gray-light">
        Nam quam nunc, blandit vel, luctus pulvinar
      </p>
    </div>
  )
}

export default LeaderboardTable
