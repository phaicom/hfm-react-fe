import FeaturesSection from '@/components/Features'
import Header from '@/components/Header'
import HeroSection from '@/components/Hero'
import PrizesSection from '@/components/Prizes'
import { Toaster } from '@/components/ui/sonner'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PrizesSection />
      {/* <PrizesSection />
      <WinnersSection />
      <FAQSection />
      <Footer /> */}
      <Toaster position="top-right" richColors />
    </>
  )
}

export default App
