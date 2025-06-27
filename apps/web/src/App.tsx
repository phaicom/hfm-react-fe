import FaqsSection from '@/components/Faqs'
import FeaturesSection from '@/components/Features'
import Header from '@/components/Header'
import HeroSection from '@/components/Hero'
import LeaderboardSection from '@/components/Leaderboard'
import PrizesSection from '@/components/Prizes'
import { Toaster } from '@/components/ui/sonner'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PrizesSection />
      <LeaderboardSection />
      <FaqsSection />
      <Toaster position="top-right" richColors />
    </>
  )
}

export default App
