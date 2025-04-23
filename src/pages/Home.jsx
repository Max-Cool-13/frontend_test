import React from 'react';
import background1 from '../assets/bg1.jpg';
import background2 from '../assets/bg2.jpg';
import background3 from '../assets/bg3.jpg';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Фон с изображениями */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="w-full h-full grid grid-cols-3 gap-1">
          {[background1, background2, background3].map((img, i) => (
            <img
              key={i}
              src={img}
              alt="bg"
              className="w-full h-full object-cover blur-sm grayscale brightness-75"
            />
          ))}
        </div>
      </div>

      {/* Навигация */}
      <header className="z-10 relative w-full flex justify-between items-center px-6 py-4 bg-black/70 backdrop-blur-md shadow-md">
        <h1 className="text-2xl font-bold text-white">Барбершоп N1</h1>
        <nav className="hidden md:flex gap-6">
          <a href="/" className="hover:text-gray-300">Главная</a>
          <a href="/services" className="hover:text-gray-300">Услуги</a>
          <a href="/about" className="hover:text-gray-300">О нас</a>
          <a href="/contact" className="hover:text-gray-300">Контакты</a>
        </nav>
        <button className="md:hidden text-white">☰</button>
      </header>

      {/* Контент */}
      <main className="z-10 relative flex flex-col items-center justify-center text-center px-4 mt-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-4">
          Красота начинается здесь
        </h2>
        <p className="text-lg md:text-xl max-w-xl">
          Добро пожаловать в барбершоп N1 — уютное место, где профессионализм
          и стиль идут рука об руку.
        </p>
        <a
          href="/signup"
          className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
        >
          Записаться
        </a>
      </main>

      {/* Футер */}
      <footer className="z-10 relative mt-20 text-center py-4 text-gray-400">
        © 2025 Барбершоп N1. Все права защищены.
      </footer>
    </div>
  );
}
