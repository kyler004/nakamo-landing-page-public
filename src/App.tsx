import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import BestSeller from './components/BestSeller';
import Services from './components/Services';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BestSeller />
        <Services />
        <About />
        <Testimonials />
        <Subscribe />
      </main>
      <Footer />
    </>
  );
}

export default App;
