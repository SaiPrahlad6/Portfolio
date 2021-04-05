
import './App.css';
import Banner from './components/Banner'
import Nav from './components/Nav'
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Prices from "./components/Prices";

function App() {
  return (
    <div >
      <Banner />
      <Nav />
      <Services />
      <About />
      <Prices/>
      <Contact />
    </div>
  );
}

export default App;
