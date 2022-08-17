import Header from "./components/Header/Header";
import "../reset.css";
import Form from "./components/Form/Form";
import CardContainer from "./components/CardContainer/CardContainer";



function App() {
 
  
  return (
    <div className="App">
      <Header />
      <main>
        <Form />
        <CardContainer/>
      </main>
    </div>
  );
}

export default App;
