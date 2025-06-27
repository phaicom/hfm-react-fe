import type { VariantProps } from 'class-variance-authority'
import type { buttonVariants } from '@/components/ui/button'
import { Button } from '@/components/ui/button'

type LoginButtonProps = React.ComponentPropsWithoutRef<'button'> & VariantProps<typeof buttonVariants>

function LoginButton({
  className = '',
  size = 'default',
  variant = 'outline',
  ...props
}: LoginButtonProps) {
  return (
    <Button
      variant={variant}
      size={size}
      className={`
        cursor-pointer rounded-sm border-hfm-red bg-transparent px-5
        text-hfm-white
        hover:bg-hfm-red hover:text-white
        ${className}
      `}
      {...props}
    >
      Login
    </Button>
  )
}

export default LoginButton
