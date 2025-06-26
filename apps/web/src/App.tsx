import { Toaster } from '@/components/ui/sonner'
import Header from './components/Header'
import HeroSection from './components/Hero/HeroSection'

function App() {
  return (
    <>
      <Header />
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
