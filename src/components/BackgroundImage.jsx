import mainDesktop from '../images/bg-main-desktop.png'
import mainMobile from '../images/bg-main-mobile.png'

const BackgroundImage = () => {
  return (
    <>
        {/* Insertion of images for both desktop and mobile */}
        <img src={mainDesktop} alt="" className="sm:hidden md:block fixed top-0 left-0 bg-cover"/>
        <img src={mainMobile} alt="" className="sm:block fixed top-0 left-0 bg-cover w-full md:hidden"/>
    </>
  )
}

export default BackgroundImage