import './App.css';
import Header from './components/headerSection/Header';
import Hero from './components/heroSection/Hero';
import About from './components/aboutSection/About';
import Event from './components/eventSection/Event';
import Footer from './components/footerSection/Footer';
import Contact from './components/contactSection/Contact';
import Services from './components/servicesSection/Services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
          <Header/>
          <Hero />
          <About />
          <Services />
          <Event/>
          <Contact/>
          <Footer />
        {/* <Routes>
          <Route path="/" element={[<Hero />, <About />,<Event/>]}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/event" element={<Event />}></Route>
          <Route path="/header" element={<Header />}></Route>
        </Routes> */}
      </BrowserRouter>
      
    </div>
  );
}

export default App;
