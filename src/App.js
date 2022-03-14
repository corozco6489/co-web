
import About from "./components/about/About";
import Clients from "./components/clients/Clients";
import Contact from "./components/contact/Contact";
import Counts from "./components/counts/Counts";
import Cta from "./components/cta/Cta";
import Features from "./components/features/Features";
import Footer from "./components/footer/Footer";
import Footer1 from "./components/footer1/Footer1";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Tabs from "./components/tabs/Tabs";
import Team from "./components/team/Team";
import Topbar from "./components/topbar/Topbar";
import Hero1 from "./components/hero1/Hero1";
import Info from "./components/info/Info";
import Slider from "./components/slider/Slider";
function App() {
  return (
    <>
    {/* <Topbar/> */}
 <Header/> 
 <Hero1/> 
 {/* <Hero/>   */}
    <About/>

    <Services/>
    <Cta/>
    <Clients/>
    {/* <Counts/> */}
    <Portfolio/>
    <Team/>
    <Tabs/> 
    {/* <Slider/> */}
    <Contact/>
    <Footer/>
    <Footer1/>
   
    </>
  );
}

export default App;
