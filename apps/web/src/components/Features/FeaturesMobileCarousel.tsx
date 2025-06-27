import { features } from '@/components/Features/featuresData'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

function FeaturesMobileCarousel() {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,

      }}
      orientation="vertical"
      className="w-full max-w-xs"
    >
      <CarouselContent className={`
        -mt-1 h-[200px]
        md:h-[360px]
      `}
      >
        {features.map((feature, index) => (
          <CarouselItem
            key={index}
            className={`
              pt-1
              md:basis-1/2
            `}
          >
            <div className="p-1">
              <Card className="py-4">
                <CardContent className={`
                  flex w-[120px] flex-col items-center justify-center p-2
                  md:w-[200px]
                `}
                >
                  <img
                    src={feature.icon}
                    alt={feature.alt}
                    className="mb-2 h-12"
                  />
                  <span className="text-center text-sm text-gray-500">{feature.description}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default FeaturesMobileCarousel
