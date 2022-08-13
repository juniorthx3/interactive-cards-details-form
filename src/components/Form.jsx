
const Form = ({cardInfo, cardError, handleSubmit, handleChange}) => {
  const {cardHolder, idCard, month, expiryYear, cvc} = cardInfo
  return (
       <form onSubmit={handleSubmit}>
            <div className="card-field">
                    <label htmlFor="cardHolderName">Cardholder name</label>
                    <input type="text" 
                           name="cardHolder" 
                           placeholder="e.g. Jane Appleseed" 
                           value={cardHolder}
                           onChange={handleChange}
                           className={cardError.cardHolder && 'border-inputErrors'}
                    />
                    <div className="errorMsg">{cardError.cardHolder}</div>
            </div>
            <div className="card-field">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" 
                           name="idCard" 
                           maxLength={19}
                           placeholder="e.g. 1234 5678 9123 0000"
                           value={idCard} 
                           onChange={handleChange}
                           className={cardError.idCard && 'border-inputErrors'}
                    />
                    <div className="errorMsg">{cardError.idCard}</div>
            </div>
            <div className="card-field">
                    <div className="space-x-11">
                        <label htmlFor="date">Exp. Date (MM/YY)</label>
                        <label htmlFor="date">CVC</label>
                    </div>
                    <div>
                        <input type="text" 
                               name="month" 
                               max={12}
                               placeholder="MM" 
                               className={cardError.month ? 'border-inputErrors mr-2 w-20' : 'mr-2 w-20'}
                               maxLength={2}
                               value={month} 
                               onChange={handleChange}
                        />
                        <input type="text" 
                               name="expiryYear" 
                               placeholder="YY" 
                               className={cardError.expiryYear ? 'border-inputErrors w-20 mr-2' : 'w-20 mr-2'}
                               value={expiryYear}
                               maxLength={2}
                               onChange={handleChange}
                        />
                        <input type="text" 
                               name="cvc" 
                               placeholder="e.g. 123" 
                               className={cardError.cvc ? 'border-inputErrors  sm:w-60 md:w-20 lg:w-36' : 'w-28 sm:w-60 md:w-20 lg:w-36'}
                               maxLength={3}
                               value={cvc}
                               onChange={handleChange}
                        />
                    </div>
                    <div className="flex justify-between">
                        <div className="errorMsg">{cardError.month || cardError.expiryYear}</div>
                        <div className="errorMsg">{cardError.cvc}</div>
                    </div>
            </div>
            <div className="card-field">
                <button type="submit" className="btn"> Confirm </button>
            </div>
        </form>
  )
}

export default Form