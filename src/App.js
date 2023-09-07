import './style/App.css';
import Navbar from './components/Nav';
import Header from './components/Header'
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Tecnologies from './components/Tecnologies';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';




function App() {
  return (
    <div>
      
    <div id="page-top" className="index App" data-pinterest-extension-installed="cr1.3.4">
      <Navbar />
      <header className="App-header">
        <Header />
      </header>
      <About />
      <Tecnologies />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
    </div>
  );
}

export default App;
