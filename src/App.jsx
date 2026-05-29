import './App.css';
import Acomodacoes from './Components/Acomodacoes';
import Eventos from './Components/Eventos';
import Experiencias from './Components/Experiencias';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
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
    </>
  );
}

export default App;
