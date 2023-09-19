import "./style/App.css";
import Navbar from "./components/Nav";
import Header from "./components/Header";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Tecnologies from "./components/Tecnologies";
import Abouta from "./components/Abouta";
import Practice from "./components/Practice";
import ChatComponent from "./components/ChatIA";

import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  return (
    <div>
      <div
        id="page-top"
        className="index App"
        data-pinterest-extension-installed="cr1.3.4"
      >
        <ChatComponent />
        <Navbar />
        <Header />
        <Abouta />
        <Tecnologies />
        <Portfolio />
        <Practice />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
