import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // Ícones de menu e fechar
import psiLogo from '../assets/logo.png'; // Importe a logo

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo com Importação de Imagem */}
        <div className="text-xl font-bold">
          <img src={psiLogo} alt="logotipo da psi" className="h-10" />
        </div>

        {/* Menu Hamburguer (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl text-gray-700">
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Navegação no desktop */}
        <nav className="hidden space-x-6 md:flex">
          <Link to="/" className="text-gray-700 hover:text-red-600">
            Início
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-red-600">
            Serviços
          </Link>
          <Link to="/who-we-are" className="text-gray-700 hover:text-red-600">
            Quem Somos
          </Link>
          <Link to="/clients" className="text-gray-700 hover:text-red-600">
            Clientes
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-red-600">
            Contato
          </Link>
        </nav>

        {/* Botão no desktop e mobile */}
        <div className="ml-4 hidden md:block">
          <button className="rounded-full bg-red-600 px-4 py-2 text-white">
            Entrar em contato
          </button>
        </div>
      </div>

      {/* Menu Hamburguer expandido para Mobile */}
      {isMenuOpen && (
        <div className="w-full bg-white shadow-lg md:hidden">
          <nav className="flex flex-col space-y-4 p-4">
            <Link to="/" className="text-gray-700 hover:text-red-600">
              Início
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-red-600">
              Serviços
            </Link>
            <Link to="/who-we-are" className="text-gray-700 hover:text-red-600">
              Quem Somos
            </Link>
            <Link to="/clients" className="text-gray-700 hover:text-red-600">
              Clientes
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-600">
              Contato
            </Link>
            <div className="mt-4">
              <button className="w-full rounded-full bg-red-600 px-4 py-2 text-white">
                Entrar em contato
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
