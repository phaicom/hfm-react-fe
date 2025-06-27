import mobileApp from '@/assets/mobile_app.svg'
import { Button } from '@/components/ui/button'
import Language from './Language'

function TopBar() {
  return (
    <nav className="flex bg-hfm-bg-black text-hfm-white">
      <div className={`
        mx-8 hidden w-full max-w-[82.5rem] items-center justify-between pt-4
        lg:flex
        xl:mx-auto
      `}
      >
        <small className="text-[10px] text-hfm-gray-light">
          Member of HF Markets Group
        </small>
        <div className="flex items-center gap-7 text-sm">
          {/* Download app bottom */}
          <Button
            variant="outline"
            size="sm"
            className="dark rounded-sm border-hfm-border-gray px-2"
            asChild
          >
            <a href="#" target="_blank">
              <img src={mobileApp} alt="Mobile App" className="h-5 w-5" />
              {' '}
              Download App
            </a>
          </Button>
          {/* Others link */}
          <div className={`
            flex items-center justify-center gap-3.5
            [&>a:not(:last-child)]:after:ml-2
            [&>a:not(:last-child)]:after:text-[#404040]
            [&>a:not(:last-child)]:after:content-['|']
          `}
          >
            <a href="#" className="hover:opacity-80">Contact us</a>
            <a href="#" className="hover:opacity-80">Partner with us</a>
            <a href="#">
              <Language />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default TopBar
