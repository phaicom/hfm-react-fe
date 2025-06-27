import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface JoinNowButtonProps extends React.ComponentProps<'button'> {
  loading?: boolean
  showTerms?: boolean
}

function JoinNowButton({
  loading = false,
  showTerms = true,
  className = '',
  children,
  type = 'button',
  ...props
}: JoinNowButtonProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-1">
      <Button
        type={type}
        disabled={loading || props.disabled}
        className={`
          h-13 w-1/2 max-w-[19rem] rounded-sm bg-hfm-green text-lg font-bold
          text-white
          hover:bg-green-700
          ${className}
        `}
        {...props}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {loading ? 'Submitting...' : children ?? 'Join Now'}
      </Button>
      {showTerms && (
        <span className="mt-1 text-xs text-hfm-gray-light">
          Terms and Conditions apply
        </span>
      )}
    </div>
  )
}

export default JoinNowButton
