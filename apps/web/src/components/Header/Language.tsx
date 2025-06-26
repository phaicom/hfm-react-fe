import en from '@/assets/en.svg'

function Language() {
  return (
    <img
      src={en}
      className="w-[17px] rounded-xs"
      alt="English"
      height={17}
      width={17}
      loading="lazy"
    />
  )
}

export default Language
