import bg from '../assets/img/padrao.svg';
import casa1 from '../assets/img/casa1.jpg';
import casa2 from '../assets/img/casa2.jpg';
import casa3 from '../assets/img/casa3.jpg';

const Acomodacoes = () => {
  return (
    <section
      id="acomodacoes"
      className="radial-gradient container grid lg:grid-cols-[2fr_3fr] gap-8 pt-16 mb-12 sm:mb-16"
    >
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className=" content-end bg-no-repeat bg-contain bg-bottom-left"
      >
        <h2 className="text-white mb-8 text-4xl font-serif lg:text-5xl">
          Refúgio Natural
        </h2>
        <ul className="text-gray-200 *:flex *:items-center *:gap-4 space-y-4 sm:text-xl">
          <li className="">
            <span className="h-0.5 w-6 neon inline-block"></span>
            Experimente a natureza de perto
          </li>
          <li>
            <span className="h-0.5 w-6 neon inline-block"></span>
            Conecte-se com a natureza
          </li>
          <li>
            <span className="h-0.5 w-6 neon inline-block"></span>
            Desconecte-se do digital
          </li>
          <li>
            <span className="h-0.5 w-6 neon inline-block"></span>Observe
            a vida selvagem
          </li>
          <li>
            <span className="h-0.5 w-6 neon inline-block"></span>Escola
            a sua cabine preferida
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-[2fr_1fr] gap-4 sm:gap-8">
        <div className="col-span-full grid *:col-start-1 *:row-start-1">
          <img
            src={casa1}
            alt="Casa 1"
            className="h-52 w-full object-cover rounded-xl"
          />
          <span className="m-2 self-start justify-self-end uppercase text-white rounded-full bg-verde-950/60 px-4 py-2 text-sm/none">
            Ruby
          </span>
        </div>

        <div className="grid *:col-start-1 *:row-start-1">
          <img
            src={casa2}
            alt="Casa 2"
            className="size-full object-cover rounded-xl"
          />
          <span className="m-2 self-start justify-self-end uppercase text-white rounded-full bg-verde-950/60 px-4 py-2 text-sm/none">
            Emerald
          </span>
        </div>

        <div className="grid *:col-start-1 *:row-start-1">
          <img
            src={casa3}
            alt="Casa 3"
            className="size-full object-cover rounded-xl"
          />
          <span className="m-2 self-start justify-self-end uppercase text-white rounded-full bg-verde-950/60 px-4 py-2 text-sm/none">
            Saphire
          </span>
        </div>
      </div>
    </section>
  );
};

export default Acomodacoes;
