import type { VariantProps } from 'class-variance-authority'
import type { buttonVariants } from '@/components/ui/button'
import { Button } from '@/components/ui/button'

export default function LoginButton({ className, size, variant }: React.ComponentProps<'button'>
  & VariantProps<typeof buttonVariants>) {
  return (
    <Button
      variant={variant || 'outline'}
      size={size || 'default'}
      className={`
        ${className}
        cursor-pointer rounded-sm border-[#CD0511] bg-transparent px-5
        text-white
        hover:bg-[#CD0511] hover:text-white
      `}
    >
      Login
    </Button>
  )
}
