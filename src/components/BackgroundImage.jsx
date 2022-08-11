import mainDesktop from '../images/bg-main-desktop.png'
import mainMobile from '../images/bg-main-mobile.png'

const BackgroundImage = () => {
  return (
    <>
        {/* Insertion of images for both desktop and mobile */}
        <img src={mainDesktop} alt="" className="bg-image-desktop"/>
        <img src={mainMobile} alt="" className="bg-image-mobile"/>
    </>
  )
}

export default BackgroundImage