import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50 shadow-lg">
      <div className="flex justify-between items-center px-6 py-4 text-white">
        <Link to="/" className="text-2xl font-bold">
          Барбершоп N1
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
          <Link to="/services">Услуги</Link>
          <Link to="/marketplace">Магазин</Link>
          <Link to="/contact">Контакты</Link>
          <Link to="/login">Вход</Link>
        </nav>
      </div>
    </header>
  );
}