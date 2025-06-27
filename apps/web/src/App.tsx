import { lazy, Suspense } from 'react'
import ErrorBoundary from '@/components/ErrorBoundary'
import { FeaturesSection } from '@/components/Features'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { HeroSection } from '@/components/Hero'
import { Toaster } from '@/components/ui/sonner'

const PrizesSection = lazy(() => import('@/components/Prizes/PrizesSection'))
const LeaderboardSection = lazy(() => import('@/components/Leaderboard/LeaderboardSection'))
const FaqsSection = lazy(() => import('@/components/Faqs/FaqsSection'))

function App() {
  return (
    <>
      <Header />
      <ErrorBoundary>
        <HeroSection />
        <FeaturesSection />
        <Suspense fallback={<div>Loading...</div>}>
          <PrizesSection />
          <LeaderboardSection />
          <FaqsSection />
        </Suspense>
      </ErrorBoundary>
      <Footer />
      <Toaster position="top-right" richColors />
    </>
  )
}

export default App
