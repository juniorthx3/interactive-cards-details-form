import bgCardFront from '../images/bg-card-front.png'
import bgCardBack from '../images/bg-card-back.png'
import cardLogo from '../images/card-logo.svg'

const Card = () => {
  return (
    <div className='container'>
        <section className="flex-1 relative text-whiteOfficial">
          <div className='Front'>
              <img src={bgCardFront} alt="" className='imgFront'/>
              <img src={cardLogo} alt="" className='logo'/>
              <div className="idCard">0000 0000 0000 0000</div>
              <div className="cardHolder">Jane Appleseed</div>
              <div className="month"></div>
              <div className="expiryYear">0000</div>
          </div>
          <div className="Back">
              <img src={bgCardBack} alt="" className='imgBack' />
              <div className="cvc">000</div>
          </div>
        </section>
    </div>
  )
}

export default Card