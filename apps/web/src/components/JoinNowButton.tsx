import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface JoinNowButtonProps {
  loading?: boolean
  onClick?: () => void
  className?: string
  showTerms?: boolean
}

function JoinNowButton({ loading = false, onClick, className, showTerms = true }: JoinNowButtonProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-1">
      <Button
        type="submit"
        disabled={loading}
        onClick={onClick}
        className={`
          h-13 w-1/2 max-w-[19rem] rounded-sm bg-hfm-green text-lg font-bold
          text-white
          hover:bg-green-700
          ${className ?? ''}
        `}
      >
        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {loading ? 'Submitting...' : 'Join Now'}
      </Button>
      {showTerms && (
        <span className="text-xs text-hfm-gray-light">
          Terms and Conditions apply
        </span>
      )}
    </div>
  )
}

export default JoinNowButton
