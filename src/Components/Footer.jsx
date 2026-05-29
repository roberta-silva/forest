import Forest from '../assets/img/forest.svg';

const Footer = () => {
  const ano = new Date().getFullYear();

  return (
    <footer className="container pb-8">
      <div className="bg-verde-900 grid gap-8 lg:grid-cols-2 mb-8 rounded-2xl p-6 sm:p-12 ">
        <div className="flex gap-12 max-sm:flex-col max-sm:gap-4">
          <div>
            <h3 className="text-white font-serif text-xl mb-4">Endereço</h3>
            <p className="text-gray-400">
              Rua da Mata, 123 <br /> Floresta Nacional <br /> Rio Grande do
              Sul, RS
            </p>
          </div>

          <div>
            <h3 className="text-white font-serif text-xl mb-4">Contato</h3>
            <p className="text-gray-400">
              contato@forest.com <br /> +55 51 99999-9999{' '}
            </p>
          </div>
        </div>
        <div className="lg:justify-self-end">
          <img className="mb-4" src={Forest} alt="Forest" />
          <p className="text-gray-400">Conecte-se com a natureza</p>
        </div>
      </div>

      <div className="text-gray-400 flex items-center justify-between gap-8 text-sm max-sm:flex-col-reverse">
        <p>© {ano} Forest. Todos os direitos reservados.</p>
        <ul className="flex gap-8">
          <li>
            <a className="hover:text-verde-300" href="#">
              Instagram
            </a>
          </li>
          <li>
            <a className="hover:text-verde-300" href="#">
              Linkedin
            </a>
          </li>
          <li>
            <a className="hover:text-verde-300" href="#">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
