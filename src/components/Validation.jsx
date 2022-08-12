import iconComplete from '../images/icon-complete.svg'

const Validation = ({handleClick}) => {
  return (
      <section className="con-val">
        <img src={iconComplete} alt="" className='w-16'/>
        <h2 className="msg">Thank you!</h2>
        <p className="txt">We've added your card details.</p>
        <button className="btn w-80" onClick={handleClick}>Continue</button>
      </section>
  )
}

export default Validation