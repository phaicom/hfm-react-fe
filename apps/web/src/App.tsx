import FeaturesSection from '@/components/Features'
import Header from '@/components/Header'
import HeroSection from '@/components/Hero'
import { Toaster } from '@/components/ui/sonner'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HeroSection />
      {/* <PrizesSection />
      <WinnersSection />
      <FAQSection />
      <Footer /> */}
      <Toaster position="top-right" richColors />
    </>
  )
}

export default App
