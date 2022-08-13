import bgCardFront from '../images/bg-card-front.png'
import bgCardBack from '../images/bg-card-back.png'
import cardLogo from '../images/card-logo.svg'

const Card = ({ cardInfo }) => {
  const {cardHolder, idCard, month, expiryYear, cvc} = cardInfo
  return (
    <section>
          <div className='Front'>
              <img src={bgCardFront} alt="" className='imgFront'/>
              <img src={cardLogo} alt="" className='logo'/>
              <div className="idCard">{idCard !== "" ? idCard : "0000 0000 0000 0000"}</div>
              <div className="cardHolder">{cardHolder !== "" ? cardHolder :"Jane Appleseed"}</div>
              <div className="month">{month !== "" ? month : "00"}/{expiryYear !== "" ? expiryYear : "00"}</div>
          </div>
          <div className="Back">
              <img src={bgCardBack} alt="" className='imgBack' />
              <div className="cvc">{cvc !== "" ? cvc : "000"}</div>
          </div>
    </section>
  )
}

export default Card