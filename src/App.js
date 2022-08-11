import Form from "./components/Form";
import Card from './components/Card'
import BackgroundImage from "./components/BackgroundImage";
import { useState } from "react";


function App() {
  const [cardInfo, setCardInfo] = useState({
    cardHolder:"",
    idCard:"",
    month:"",
    expiryYear:"",
    cvc:""
  })
  return (
    <section>
      <BackgroundImage />
      <div className="box">
        <Card cardInfo={cardInfo} />
        <Form cardInfo={cardInfo} setCardInfo={setCardInfo}/>
      </div>
    </section>
  );
}

export default App;
