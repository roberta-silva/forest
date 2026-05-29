import bg from '../assets/img/padrao.svg';
import manha from '../assets/img/manha.svg';
import dia from '../assets/img/dia.svg';
import noite from '../assets/img/noite.svg';

const ciclos = [
  {
    img: manha,
    titulo: 'Amanhecer',
    descricao:
      'Desperte com o canto dos pássaros e participe das nossas caminhadas ao ar livre.',
    horario: '05:30 - 07:00',
    cardClass: 'sm:hover:-translate-y-2',
  },
  {
    img: dia,
    titulo: 'Meio-dia',
    descricao:
      'Explore nossas trilhas sombreadas e desfrute de um piquenique gourmet na natureza.',
    horario: '12:00 - 14:00',
    cardClass: 'sm:translate-y-12 sm:hover:translate-y-10',
  },
  {
    img: noite,
    titulo: 'Anoitecer',
    descricao: 'Termine o seu dia com nossa sessão de observação de estrelas.',
    horario: '19:00 - 21:00',
    cardClass: 'sm:hover:-translate-y-2',
  },
];

const Ciclo = () => (
  <section
    className="container bg-contain bg-center bg-no-repeat mb-12 sm:mb-16 sm:py-16"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <p className="mb-4 text-verde-200 uppercase tracking-widest text-sm">
      Ciclo Natural
    </p>
    <h2 className="mb-8 font-serif text-balance capitalize text-white text-3xl md:text-4xl lg:text-5xl">
      Ritmo da Floresta
    </h2>

    <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
      {ciclos.map(({ img, titulo, descricao, horario, cardClass }) => (
        <div
          key={titulo}
          className={`flex-1 grid gap-4 bg-verde-900 p-6 sm:p-8 rounded-xl transition-transform ${cardClass}`}
        >
          <img className="neon p-1 size-10" src={img} alt="" />
          <h3 className="font-serif text-2xl text-white">{titulo}</h3>
          <p className="text-gray-400">{descricao}</p>
          <span className="text-verde-300">{horario}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Ciclo;
