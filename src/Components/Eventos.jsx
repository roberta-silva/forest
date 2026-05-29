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
          <div className="grid snap-center gap-4 bg-verde-800 p-6 sm:p-8 rounded-xl">
            <h3 className="text-verde-300 text-2xl font-serif">Lua Nova</h3>
            <div className="text-white">
              <p className="font-serif text-5xl">23</p>
              <p className="text-xl">Março/2049</p>
            </div>
            <p className="text-gray-300 text-balance">
              Melhor período para observação astronômica. O céu estará claro e
              as estrelas visíveis.
            </p>
            <a
              href="#contato"
              className="justify-self-start btn"
            >
              Reservar 23/03
            </a>
          </div>

          <div className="grid snap-center gap-4 bg-verde-800 p-6 sm:p-8 rounded-xl">
            <h3 className="text-verde-300 text-2xl font-serif">
              Aurora Boreal
            </h3>
            <div className="text-white">
              <p className="font-serif text-5xl">15</p>
              <p className="text-xl">Abril/2049</p>
            </div>
            <p className="text-gray-300 text-balance">
              Melhor período para observação da Aurora Boreal. O céu estará
              iluminado pelas estrelas.
            </p>
            <a
              href="#contato"
              className="justify-self-start btn"
            >
              Reservar 14/04
            </a>
          </div>

          <div className="grid snap-center gap-4 bg-verde-800 p-6 sm:p-8 rounded-xl">
            <h3 className="text-verde-300 text-2xl font-serif">
              Chuva de Meteoros
            </h3>
            <div className="text-white">
              <p className="font-serif text-5xl">18</p>
              <p className="text-xl">Agosto/2049</p>
            </div>
            <p className="text-gray-300 text-balance">
              Melhor período para observação de Chuva de Meteoros. O céu estará
              iluminado pelas estrelas.
            </p>
            <a
              href="#contato"
              className="justify-self-start btn"
            >
              Reservar 18/08
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eventos;
