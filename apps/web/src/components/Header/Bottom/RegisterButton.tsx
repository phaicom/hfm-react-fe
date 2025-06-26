import type { VariantProps } from 'class-variance-authority'
import type { buttonVariants } from '@/components/ui/button'
import React from 'react'
import { Button } from '@/components/ui/button'
import { useScrollToTop } from '@/hooks/useScrollToTop'

type RegisterButtonProps = React.ComponentPropsWithoutRef<'button'> & VariantProps<typeof buttonVariants>

function RegisterButton({
  className = '',
  size = 'default',
  variant = 'default',
  ...props
}: RegisterButtonProps) {
  return (
    <Button
      onClick={useScrollToTop}
      variant={variant}
      size={size}
      className={`
        cursor-pointer rounded-sm bg-hfm-green px-7 text-white
        hover:bg-green-700
        ${className}
      `}
      {...props}
    >
      Register
    </Button>
  )
}

export default RegisterButton
