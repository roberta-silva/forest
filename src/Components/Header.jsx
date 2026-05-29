import React from 'react';
import Forest from '../assets/img/forest.svg?react';

const Header = () => {
  const [menuMobile, setMenuMobile] = React.useState(false);

  function handleClick() {
    setMenuMobile((prev) => !prev);
  }
  function closeMenu() {
    setMenuMobile(false);
  }

  return (
    <header className="container flex items-center justify-between gap-8 py-8">
      <a href="/">
        <Forest />
      </a>

      <nav
        className={`
    lg:block items-center z-40
    max-lg:fixed max-lg:w-full max-lg:inset-0
    ${menuMobile ? 'block' : 'hidden'}
  `}
      >
        <div
          onClick={closeMenu}
          className={`inset-0 bg-verde-950/40 backdrop:blur-md ${menuMobile ? 'fixed' : 'hidden'}`}
        ></div>

        <ul className="text-white text-2xl max-lg:divide-y-2 max-lg:divide-white/10 max-lg:z-50 max-lg:absolute max-lg:p-8 max-lg:w-full lg:flex lg:flex-wrap lg:gap-8 lg:text-xl">
          <li>
            <a
              onClick={closeMenu}
              className="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-white/10 lg:hover:underline lg:hover:underline-offset-8"
              href="#acomodacoes"
            >
              Acomodações
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              className="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-white/10 lg:hover:underline lg:hover:underline-offset-8"
              href="#eventos"
            >
              Eventos
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              className="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-white/10 lg:hover:underline lg:hover:underline-offset-8"
              href="#experiencias"
            >
              Experiências
            </a>
          </li>
          <li>
            <a
              onClick={closeMenu}
              className="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-white/10 lg:hover:underline lg:hover:underline-offset-8"
              href="#contato"
            >
              Contato
            </a>
          </li>
        </ul>
      </nav>

      <button
        onClick={handleClick}
        className="flex items-center gap-3 bg-verde-400 text-verde-900 py-2 px-4 rounded-full lg:hidden cursor-pointer"
      >
        Menu
        <span
          className="h-3 w-4 flex flex-col justify-between
        *:h-0.5 *:rounded-md *:bg-verde-800"
        >
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </header>
  );
};

export default Header;
