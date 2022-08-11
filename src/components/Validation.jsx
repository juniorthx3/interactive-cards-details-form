import iconComplete from '../images/icon-complete.svg'
const Validation = () => {
  return (
      <div className="hidden">
        <img src={iconComplete} alt="" />
        <h2 className="thankMessage">Thank you</h2>
        <p>We've added your card details.</p>
        <button id="continue">Continue</button>
      </div>
  )
}

export default Validation