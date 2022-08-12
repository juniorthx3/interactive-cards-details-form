import { useState, useEffect} from "react";
import Form from "./components/Form";
import Card from './components/Card'
import BackgroundImage from "./components/BackgroundImage";
import Validation from "./components/Validation";

function App() {
  const [cardInfo, setCardInfo] = useState({
    cardHolder:"",
    idCard:"",
    month:"",
    expiryYear:"",
    cvc:""
  })
  const [showForm, setShowForm] = useState(true)
  const [cardError, setCardError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)

  // Handlechange function (Component FORM.JSX) 
  const handleChange = e=>{
    const {name, value} = e.target
    setCardInfo({...cardInfo, [name]: value})
  }
 
  // Form Submission (Component FORM.JSX)
  const handleSubmit = e=>{
    e.preventDefault()
    setCardError(validation(cardInfo))
    setIsSubmit(true)
  }
  
  useEffect(()=>{
    console.log(cardError)
    if(Object.keys(cardError).length === 0 && isSubmit){
      setShowForm(false)
    }
  },[cardError, cardInfo, isSubmit])

   // Data validation check before submitting
   const validation = (val)=>{
    const errors = {}
    const regexNumbers = /^[0-9]*$/
    const regexIdCard = /^([0-9]{4}[\s]?){3}([0-9]{4})$/

    if(!val.cardHolder){
      errors.cardHolder = "Can't be blank"
    }

    if(!val.idCard){
      errors.idCard = "Can't be blank"
    }else if(!regexIdCard.test(val.idCard)){
      errors.idCard = "Wrong format, numbers only"
    }

    if(!val.month){
      errors.month = "Can't be blank"
    }else if(!regexNumbers.test(val.month)){
      errors.month = "Wrong format, numbers only"
    }

    if(!val.expiryYear){
      errors.expiryYear = "Can't be blank"
    }else if(!regexNumbers.test(val.expiryYear)){
      errors.expiryYear = "Wrong format, numbers only"
    }

    if(!val.cvc){
      errors.cvc = "Can't be blank"
    }else if(!regexNumbers.test(val.cvc)){
      errors.cvc = "Wrong format, numbers only"
    }

    return errors
  }

  // Event for button continue (Component VALIDATION.JSX) 
  const handleClick = e=>{
    setShowForm(true)
    setCardInfo({cardHolder:"", idCard:"", month:"", expiryYear:"", cvc:""})
    setIsSubmit(false)
    setCardError({})
  } 

  return (
    <section>
      <BackgroundImage />
      <div className="box">
        <Card cardInfo={cardInfo} />
        { showForm ? <Form cardInfo={cardInfo} handleChange={handleChange} handleSubmit={handleSubmit} cardError={cardError} /> 
                   : <Validation handleClick={handleClick}/> 
        }
      </div>
    </section>
  );
}

export default App;
