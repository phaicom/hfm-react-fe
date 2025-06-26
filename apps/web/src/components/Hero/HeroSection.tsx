import heroBg from '@/assets/hero-bg.png'
import HeroForm from './HeroForm'
import HeroHeadline from './HeroHeadline'

function HeroSection() {
  return (
    <section
      aria-label="Hero section"
      className="relative -mt-1 bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className={`
        relative flex h-full w-full flex-col items-center px-4 pt-19 pb-20
        text-center
      `}
      >
        <HeroHeadline />
        <HeroForm />
      </div>
    </section>
  )
}

export default HeroSection
