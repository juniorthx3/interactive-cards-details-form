import Form from "./components/Form";
import Card from './components/Card'
import BackgroundImage from "./components/BackgroundImage";


function App() {
  return (
    <section>
      <BackgroundImage />
      <div className="container relative mx-auto flex">
        <Card />
        <Form />
      </div>
    </section>
  );
}

export default App;
