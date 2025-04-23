import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  const isLoggedIn = false // Поменяешь на логику авторизации позже

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen)

  return (
    <header className="bg-gray-800 text-white px-4 py-3 fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between max-w-6xl mx-auto">
        <Link to="/" className="text-2xl font-bold">Барбершоп N1</Link>
        <button className="md:hidden" onClick={toggleMenu}>
          ☰
        </button>
        <nav className="hidden md:flex gap-6">
          {isLoggedIn ? (
            <>
              <Link to="/">Главная</Link>
              <Link to="/profile">Профиль</Link>
            </>
          ) : (
            <>
              <Link to="/login">Вход</Link>
              <Link to="/register">Регистрация</Link>
            </>
          )}
        </nav>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-700 p-4 absolute w-full top-full left-0 z-40">
          <nav className="flex flex-col gap-4">
            {isLoggedIn ? (
              <>
                <Link to="/" onClick={toggleMenu}>Главная</Link>
                <Link to="/profile" onClick={toggleMenu}>Профиль</Link>
              </>
            ) : (
              <>
                <Link to="/login" onClick={toggleMenu}>Вход</Link>
                <Link to="/register" onClick={toggleMenu}>Регистрация</Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header
