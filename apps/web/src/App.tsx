import { Toaster } from '@/components/ui/sonner'
import Header from './components/Header'
import HeroSection from './components/Hero'

function App() {
  return (
    <>
      <Header />
      <HeroSection />
      <HeroSection />
      <HeroSection />
      <HeroSection />
      {/* <FeaturesSection />
      <PrizesSection />
      <WinnersSection />
      <FAQSection />
      <Footer /> */}
      <Toaster position="top-right" richColors />
    </>
  )
}

export default App
