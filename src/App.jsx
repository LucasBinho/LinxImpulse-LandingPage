import Header from "./components/Header/Header";
import "../reset.css";
import Form from "./components/Form/Form";
import CardContainer from "./components/CardContainer/CardContainer";
import ShareTheNews from "./components/ShareTheNews/ShareTheNews";



function App() {
 
  
  return (
    <div className="App">
      <Header />
      <main>
        <Form />
        <CardContainer/>
        <ShareTheNews/>
      </main>
    </div>
  );
}

export default App;
