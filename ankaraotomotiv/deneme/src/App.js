import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Anasayfa from './components/Anasayfa';
import Mercedes from "./components/Mercedes";
import Bmw from './components/Bmw';
import Toyota from './components/Toyota';
import Opel from './components/Opel';
import Hakkımızda from './components/Hakkımızda';
import Araclarimiz from './components/Araclarimiz';
import İletisim from './components/İletisim';
import Sigorta from './components/Sigorta';

function App() {
  return (

<Router>   
  <Route path="/" exact component= {Anasayfa}/>
  <Route path="/mercedes" component= {Mercedes}/>
  <Route path="/Bmw" component= {Bmw}/>
  <Route path="/Toyota" component= {Toyota}/>
  <Route path="/Opel" component= {Opel}/>
  <Route path="/Hakkımızda" component= {Hakkımızda}/>
  <Route path="/Araclarimiz" component= {Araclarimiz}/>
  <Route path="/iletisim" component= {İletisim}/>
  <Route path="/Sigorta" component= {Sigorta}/>
</Router>     

  );
}

export default App;
