import "./App.css";
import { Carts } from "./components/Carts";
import { Footer } from "./components/Footer";
import Footer_Carts from "./components/Footer-Carts";
import Header from "./components/Header";
import free from "./components/images/free.jpg";

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${free})` }}>
      <div className="mini">
        <Header />
        <Carts />
        <Footer_Carts />
        <Footer />
      </div>
    </div>
  );
}

export default App;
