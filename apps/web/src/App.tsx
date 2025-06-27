import { FaqsSection } from '@/components/Faqs'
import { FeaturesSection } from '@/components/Features'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/Hero'
import { LeaderboardSection } from '@/components/Leaderboard'
import { PrizesSection } from '@/components/Prizes'
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
      <Footer />
      <Toaster position="top-right" richColors />
    </>
  )
}

export default App
