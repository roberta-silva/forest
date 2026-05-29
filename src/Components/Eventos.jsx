const eventos = [
  {
    id: 1,
    titulo: 'Lua Nova',
    dia: '23',
    mes: 'Março/2049',
    descricao: 'Melhor período para observação astronômica...',
    reservaLabel: 'Reservar 23/03',
  },
  {
    id: 2,
    titulo: 'Aurora Boreal',
    dia: '15',
    mes: 'Abril/2049',
    descricao: 'Melhor período para observação da Aurora Boreal...',
    reservaLabel: 'Reservar 15/04', // ← bug: estava "14/04" mas o dia era 15
  },
  {
    id: 3,
    titulo: 'Chuva de Meteoros',
    dia: '18',
    mes: 'Agosto/2049',
    descricao: 'Melhor período para observação de Chuva de Meteoros...',
    reservaLabel: 'Reservar 18/08',
  },
];

const Eventos = () => {
  return (
    <section
      id="eventos"
      className="mb-12 sm:mb-16 py-12 sm:py-16 bg-verde-900"
    >
      <div className="container">
        <p className="mb-4 text-center uppercase text-verde-200 tracking-widest text-sm">
          Conecte-se com a natureza
        </p>
        <h2 className="mb-8 mx-auto text-balance font-serif text-white text-center max-w-3xl capitalize text-4xl sm:text-6xl">
          Cada som, cada momento, uma nova descoberta
        </h2>

        <div className="overflow-x-auto snap-x snap-mandatory pb-4 grid grid-cols-[repeat(3,minmax(300px,1fr))] gap-4 sm:gap-8">
          {eventos.map((evento) => (
            <div
              key={evento.id}
              className="grid snap-center gap-4 bg-verde-800 p-6 sm:p-8 rounded-xl"
            >
              <h3 className="text-verde-300 text-2xl font-serif">
                {evento.titulo}
              </h3>
              <div className="text-white">
                <p className="font-serif text-5xl">{evento.dia}</p>
                <p className="text-xl">{evento.mes}</p>
              </div>
              <p className="text-gray-300 text-balance">{evento.descricao}</p>
              <a href="#contato" className="justify-self-start btn">
                {evento.reservaLabel}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eventos;
