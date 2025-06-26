import type { VariantProps } from 'class-variance-authority'
import type { buttonVariants } from '@/components/ui/button'
import { Button } from '@/components/ui/button'

export default function RegisterButton({ className, size, variant }: React.ComponentProps<'button'>
  & VariantProps<typeof buttonVariants>) {
  return (
    <Button
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
