import type { VariantProps } from 'class-variance-authority'
import type { buttonVariants } from '@/components/ui/button'
import { Button } from '@/components/ui/button'
import { useScrollToTop } from '@/hooks/use-scroll-to-top'

export default function RegisterButton({ className, size, variant }: React.ComponentProps<'button'>
  & VariantProps<typeof buttonVariants>) {
  return (
    <Button
      onClick={useScrollToTop}
      variant={variant || 'default'}
      size={size || 'default'}
      className={`
        ${className}
        cursor-pointer rounded-sm bg-hfm-green px-7 text-white
        hover:bg-green-700
      `}
    >
      Register
    </Button>
  )
}
