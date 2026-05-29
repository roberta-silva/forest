import wildbeastImg from '../assets/img/parceiros/wildbeast.svg';
import seta from '../assets/img/seta.svg';
import { random } from '../Utilities/weather';
import chuva from '../assets/videos/video_chuva.mp4';
import sol from '../assets/videos/video_sol.mp4';

const HeroSection = () => {
  return (
    <main className="container">
      <div className="relative px-4 sm:px-8 pb-8 pt-12 sm:pt-64 bg-linear-to-t from-verde-950/80 text-white rounded-2xl overflow-hidden">
        <video
          className="absolute inset-0 size-full object-cover -z-10 animate-fadeIn"
          muted
          autoPlay
          playsInline
          loop
          width="1280"
          height="720"
          src={random < 25 ? chuva : sol}
        />

        <div className="bg-verde-950/60 rounded-xl flex flex-col items-start gap-2 p-4 mb-8 sm:gap-8 sm:items-center sm:py-1 sm:pl-4 sm:pr-1 sm:bg-verde-950 sm:inline-flex sm:flex-row sm:rounded-full">
          vagas para dezembro abertas
          <a
            className="btn inline-flex items-center gap-2"
            href="/"
          >
            Reserve Hoje
            <img src={seta} alt="" />
          </a>
        </div>
        <h1 className="mb-8 font-serif text-4xl text-balance capitalize max-w-screen-sm sm:text-5xl sm:mb-20">
          Venha experimentar a vida na floresta
        </h1>
        <div className="text-sm sm:flex justify-between items-end">
          <p className="max-sm:mb-4">
            Melhores locais para visitar{' '}
            <a
              className="underline decoration-2 underline-offset-4 hover:no-underline"
              href="/"
            >
              2049
            </a>
          </p>
          <div>
            <p className="uppercase mb-2">Recomendado por</p>
            <p className="flex items-center gap-4">
              <img className="w-28" src={wildbeastImg} alt="Wildbeast" />
              <span>|</span>
              Revista Nacional
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
