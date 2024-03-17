

import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/header/Header';
import Hero from './components/Hero/Hero';
import Product from './components/Product/Product';
import Slider from './components/Slider/Slider';
import Testimonial from './components/Testimonial/Testimonial';
import Virtual from './components/Virtual/Virtual';


function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Virtual/>
      <Product/>
      <Testimonial/>
      <Footer/>
      
    </div>
  );
}

export default App;
