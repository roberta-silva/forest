import Forest from '../assets/img/forest.svg?react';

const Header = () => {
  return (
    <header className="container flex items-center justify-between gap-8 py-8">
      <a href="/">
        <Forest />
      </a>

      <nav>
        <ul className="text-white text-xl flex flex-wrap gap-8">
          <li>
            <a
              className="hover:underline hover:underline-offset-8"
              href="#acomodacoes"
            >
              Acomodações
            </a>
          </li>
          <li>
            <a
              className="hover:underline hover:underline-offset-8"
              href="#eventos"
            >
              Eventos
            </a>
          </li>
          <li>
            <a
              className="hover:underline hover:underline-offset-8"
              href="#experiencias"
            >
              Experiências
            </a>
          </li>
          <li>
            <a
              className="hover:underline hover:underline-offset-8"
              href="#contato"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
