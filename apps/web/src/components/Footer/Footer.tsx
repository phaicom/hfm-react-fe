import appstore from '@/assets/appstore.svg'
import googleplay from '@/assets/googleplay.svg'
import socials from '@/assets/socials.png'

function Footer() {
  return (
    <footer className="bg-hfm-bg-black px-8 pt-14 pb-29 text-white">
      <div className={`
        mx-auto grid max-w-[75%] grid-cols-1 gap-10
        xl:grid-cols-9
      `}
      >
        {/* Social and App Links */}
        <div className={`
          flex flex-col gap-7
          xl:col-span-3
          2xl:col-span-2
        `}
        >
          <div className="space-y-5">
            <h4 className="font-bold">Find us on</h4>
            <img src={socials} alt="Social media links" className="-ml-6" />
          </div>
          <div className="space-y-5">
            <h4 className="font-bold">Download HFM App</h4>
            <div className="flex space-x-2">
              <img src={appstore} alt="App Store" className="cursor-pointer" />
              <img src={googleplay} alt="Google Play" className="cursor-pointer" />
            </div>
          </div>
        </div>
        {/* Risk Warning */}
        <div className={`
          space-y-8
          xl:col-span-6 xl:space-y-16
          2xl:col-span-7
        `}
        >
          <h4 className="mt-3 font-bold">Risk Warning</h4>
          <p className="text-[11px] leading-[14px] text-hfm-gray">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pLorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu p
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
