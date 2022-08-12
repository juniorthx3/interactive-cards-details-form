import Validation from "./Validation"

const Form = ({cardInfo, setCardInfo}) => {
  const {cardHolder, idCard, month, expiryYear, cvc} = cardInfo
  return (
    <section className="con-card">
       <form className="h-96">
            <div className="card-field">
                    <label htmlFor="cardHolderName">Cardholder name</label>
                    <input type="text" 
                           name="cardholdername" 
                           placeholder="e.g. Jane Appleseed" 
                           value={cardHolder}
                           onChange={e=>setCardInfo({...cardInfo, cardHolder: e.target.value})}
                           required 
                    />
                    <div className="error"></div>
            </div>
            <div className="card-field">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" 
                           name="cardholdername" 
                           maxLength={19}
                           placeholder="e.g. 1234 5678 9123 0000"
                           value={idCard} 
                           onChange={e=>setCardInfo({...cardInfo, idCard: e.target.value})}
                           required 
                    />
            </div>
            <div className="card-field">
                    <div className="space-x-11">
                        <label htmlFor="date">Exp. Date (MM/YY)</label>
                        <label htmlFor="date">CVC</label>
                    </div>
                    <div>
                        <input type="text" 
                               name="date" 
                               placeholder="MM" 
                               className="mr-2 w-20" 
                               maxLength={2}
                               value={month} 
                               onChange={e=>setCardInfo({...cardInfo, month: e.target.value})}
                               required 
                        />
                        <input type="text" 
                               name="year" 
                               placeholder="YY" 
                               className="w-20 mr-2" 
                               value={expiryYear}
                               maxLength={2}
                               onChange={e=>setCardInfo({...cardInfo, expiryYear: e.target.value})}
                               required
                        />
                        <input type="text" 
                               name="cvc" 
                               placeholder="e.g. 123" 
                               className="w-48 md:w-36" 
                               maxLength={3}
                               value={cvc}
                               onChange={e=>setCardInfo({...cardInfo, cvc: e.target.value})}
                               required
                        />
                    </div>
                    <div className="error"></div>
            </div>
            <div className="card-field">
                <button type="submit" className="btn"> Confirm </button>
            </div>
        </form>
        <Validation />
    </section>
  )
}

export default Form