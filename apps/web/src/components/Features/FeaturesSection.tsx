import mobile from '@/assets/mobile.png'
import { features } from '@/data/features'

import FeaturesMobileCarousel from './FeaturesMobileCarousel'

function FeaturesSection() {
  const leftFeatures = features.slice(0, 2)
  const rightFeatures = features.slice(2, 4)

  return (
    <section className="bg-white pt-30">
      <div className="container mx-auto px-8 text-center">
        <h2 className="mb-20 font-sofia-sans text-5xl uppercase">
          Quisque Rutrum
        </h2>
        <div className={`
          flex flex-col items-center justify-center gap-12
          lg:flex-row
        `}
        >
          {/* Left features */}
          <div className={`
            mb-auto hidden max-w-50 flex-col items-center gap-34 text-left
            text-sm text-gray-600
            lg:flex
          `}
          >
            {leftFeatures.map((feature, idx) => (
              <div className="flex flex-col items-start" key={idx}>
                <img
                  src={feature.icon}
                  alt={feature.alt}
                  className="mb-2 text-red-500"
                />
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Center phones */}
          <div className="relative w-auto">
            <img
              src={mobile}
              alt="Phones"
              className={`
                max-w-sm object-contain
                md:max-w-xl
                lg:max-w-2xl
              `}
            />
            <div className={`
              absolute top-[55%] left-[75%] -translate-x-1/2 -translate-y-1/2
              lg:hidden
            `}
            >
              <FeaturesMobileCarousel />
            </div>
          </div>

          {/* Right features */}
          <div className={`
            mb-auto hidden max-w-50 flex-col items-center gap-34 text-left
            text-sm text-gray-600
            lg:flex
          `}
          >
            {rightFeatures.map((feature, idx) => (
              <div className="flex flex-col items-start" key={idx}>
                <img
                  src={feature.icon}
                  alt={feature.alt}
                  className="mb-2 text-red-500"
                />
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
