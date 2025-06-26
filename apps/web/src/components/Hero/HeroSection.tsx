import heroBg from '@/assets/hero-bg.png'
import HeroForm from './HeroForm'
import HeroHeadline from './HeroHeadline'

export default function HeroSection() {
  return (
    <section className="relative -mt-1 bg-cover bg-center text-white" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className={`
        bg-opacity-70 flex h-full w-full flex-col items-center px-4 pt-19 pb-20
        text-center
      `}
      >
        <HeroHeadline />
        <HeroForm />
      </div>
    </section>
  )
}
