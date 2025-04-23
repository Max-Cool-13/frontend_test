import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isAuthenticated = !!localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-[#c49b66]">Барбершоп N1</Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">☰</button>
        </div>
        <ul className="hidden md:flex space-x-6 items-center">
          <li><Link to="/" className="hover:text-[#c49b66]">Главная</Link></li>
          {isAuthenticated ? (
            <li><button onClick={logout} className="hover:text-[#c49b66]">Выйти</button></li>
          ) : (
            <>
              <li><Link to="/login" className="hover:text-[#c49b66]">Вход</Link></li>
              <li><Link to="/register" className="hover:text-[#c49b66]">Регистрация</Link></li>
            </>
          )}
        </ul>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-black border-t border-gray-700 px-4 pb-4 space-y-2 text-center">
          <li><Link to="/" onClick={() => setIsOpen(false)} className="block text-white hover:text-[#c49b66]">Главная</Link></li>
          {isAuthenticated ? (
            <li><button onClick={logout} className="block text-white hover:text-[#c49b66]">Выйти</button></li>
          ) : (
            <>
              <li><Link to="/login" onClick={() => setIsOpen(false)} className="block hover:text-[#c49b66]">Вход</Link></li>
              <li><Link to="/register" onClick={() => setIsOpen(false)} className="block hover:text-[#c49b66]">Регистрация</Link></li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
