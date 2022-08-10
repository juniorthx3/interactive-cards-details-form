
const Form = () => {
  return (
    <section className="relative flex-1">
       <form>
            <div className="card-field">
                    <label htmlFor="cardHolderName">Cardholder name</label>
                    <input type="text" name="cardholdername" placeholder="e.g. Jane Appleseed" required />
                    <div className="error"></div>
            </div>
            <div className="card-field">
                    <label htmlFor="cardNumber">Card Number</label>
                    <input type="text" name="cardholdername" placeholder="e.g. 1234 5678 9123 0000" required />
            </div>
            <div className="card-field">
                    <div className="space-x-11">
                        <label htmlFor="date">Exp. Date (MM/YY)</label>
                        <label htmlFor="date">CVC</label>
                    </div>
                    <div>
                        <input type="text" name="date" placeholder="MM" className="mr-2 w-20" required />
                        <input type="text" name="year" placeholder="YY" className="w-20 mr-2" required/>
                        <input type="text" name="cvc" placeholder="e.g. 123" className="w-36" required/>
                    </div>
                    <div className="error"></div>
            </div>
            <div className="card-field">
                <button type="submit" className="btn"> Confirm </button>
            </div>
        </form>
    </section>
  )
}

export default Form