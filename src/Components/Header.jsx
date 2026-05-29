import React from 'react';
import Forest from '../assets/img/forest.svg?react';

const navLinks = [
  { href: '#acomodacoes', label: 'Acomodações' },
  { href: '#eventos', label: 'Eventos' },
  { href: '#experiencias', label: 'Experiências' },
  { href: '#contato', label: 'Contato' },
];

const Header = () => {
  const [menuMobile, setMenuMobile] = React.useState(false);

  const handleClick = React.useCallback(
    () => setMenuMobile((prev) => !prev),
    [],
  );

  const closeMenu = React.useCallback(() => setMenuMobile(false), []);

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
          className={`inset-0 bg-verde-950/40 backdrop-blur-md ${menuMobile ? 'fixed' : 'hidden'}`}
        ></div>

        <ul className="text-white text-2xl max-lg:divide-y-2 max-lg:divide-white/10 max-lg:z-50 max-lg:absolute max-lg:p-8 max-lg:w-full lg:flex lg:flex-wrap lg:gap-8 lg:text-xl animate-slide-in opacity-0">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                onClick={closeMenu}
                className="p-4 lg:px-0 lg:py-2 block max-lg:hover:bg-white/10 lg:hover:underline lg:hover:underline-offset-8"
                href={href}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={handleClick}
        className="btn flex py-1 items-center gap-3 lg:hidden "
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
