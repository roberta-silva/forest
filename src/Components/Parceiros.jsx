import caravan from '../assets/img/parceiros/caravan.svg';
import dogs from '../assets/img/parceiros/dogs.svg';
import wildbeast from '../assets/img/parceiros/wildbeast.svg';
import lescone from '../assets/img/parceiros/lescone.svg';
import surfbot from '../assets/img/parceiros/surfbot.svg';

const Parceiros = () => {
  return (
    <section className="container mb-12 sm:mb-16">
      <ul className="flex flex-col items-center justify-center py-4 max-sm:divide-y-2 divide-verde-900 *:p-4 sm:flex-row sm:gap-8 sm:border-b-2 sm:border-t-2 sm:border-verde-900 sm:py-8 *:*:max-h-8">
        <li>
          <img src={caravan} alt="Caravan" />
        </li>
        <li>
          <img src={dogs} alt="Dogs" />
        </li>
        <li>
          <img src={wildbeast} alt="Wildbeast" />
        </li>
        <li>
          <img src={lescone} alt="Lescone" />
        </li>
        <li>
          <img src={surfbot} alt="Surfbot" />
        </li>
      </ul>
    </section>
  );
};

export default Parceiros;
