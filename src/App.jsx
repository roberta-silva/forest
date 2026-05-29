import './App.css';
import Acomodacoes from './Components/Acomodacoes';
import Ciclo from './Components/Ciclo';
import Contato from './Components/Contato';
import Eventos from './Components/Eventos';
import Experiencias from './Components/Experiencias';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Parceiros from './Components/Parceiros';
import WeatherBar from './Components/WeatherBar';

function App() {
  return (
    <>
      <WeatherBar />
      <Header />
      <HeroSection />
      <Acomodacoes />
      <Eventos />
      <Experiencias />
      <Ciclo />
      <Contato />
      <Parceiros />
      <Footer />
    </>
  );
}

export default App;
