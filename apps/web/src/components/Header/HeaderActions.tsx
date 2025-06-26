import LoginButton from './Bottom/LoginButton'
import RegisterButton from './Bottom/RegisterButton'

function HeaderActions() {
  return (
    <div className={`
      hidden items-center gap-5
      lg:flex
    `}
    >
      <LoginButton />
      <RegisterButton />
    </div>
  )
}

export default HeaderActions
