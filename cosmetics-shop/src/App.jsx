import "./App.scss";
import Header from "./components/header/Header";
import Description from "./components/main/sections/Description"
import HeroSection from "./components/heroSection/HeroSection";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="page__body">
        <Header />
        <Description/>
        <HeroSection />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
