import Input from './Form/Input';
import Textarea from './Form/Textarea';

const Contato = () => {
  function handleClick(event) {
    event.preventDefault();
  }

  return (
    <section
      id="contato"
      className="container mb-12 sm:mb-16 grid lg:grid-cols-2 gap-8"
    >
      <div>
        <h1 className="font-serif text-4xl text-verde-300 mb-4">
          Nossos Contatos
        </h1>
        <p className="text-gray-200 text-balance mb-8">
          Tem interesse em passar uma temporada na Forest? Entre em contato com
          a gente por telefone ou email.
        </p>
        <div className="grid gap-4">
          <div>
            <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>
            <h2 className="mb-2 text-2xl text-verde-300 font-serif">Base</h2>
            <p className="text-gray-300">
              Rua da Mata, 123 - Floresta Nacional - RS
            </p>
          </div>

          <div>
            <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>
            <h2 className="mb-2 text-2xl text-verde-300 font-serif">Email</h2>
            <p className="text-gray-300">contato@forest.com</p>
          </div>

          <div>
            <span className="h-0.5 w-6 bg-verde-400 inline-block"></span>
            <h2 className="mb-2 text-2xl text-verde-300 font-serif">
              Telefone
            </h2>
            <p className="text-gray-300">51 99999-9999</p>
          </div>
        </div>
      </div>

      <form
        className="grid gap-4 rounded-xl bg-verde-900 shadow-2xl p-4 lg:p-8"
        action=""
      >
        <Input label="Nome" id="nome" type="text" />

        <div className="grid gap-4 sm:grid-cols-2">
          <Input label="Email" id="email" type="email" />
          <Input
            label="Telefone"
            id="text"
            type="telefone"
            placeholder="(51) 99999-9999"
          />
        </div>

        <Textarea label="Mensagem" id="mensagem" name="mensagem" rows="5" />

        <button
          onClick={handleClick}
          className="place-self-start bg-verde-400 text-verde-900 py-2 px-4 inline-block rounded-full cursor-pointer"
        >
          Enviar Email
        </button>
      </form>
    </section>
  );
};

export default Contato;
