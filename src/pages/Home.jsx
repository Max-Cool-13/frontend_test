import React from "react";
import background1 from "../assets/bg1.jpg";
import background2 from "../assets/bg2.jpg";
import background3 from "../assets/bg3.jpg";

const Home = () => {
  return (
    <div className="text-white bg-black min-h-screen">
      <div className="relative h-screen overflow-hidden">
        <img src={background1} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover opacity-30" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg">Барбершоп N1</h1>
          <p className="mt-4 text-xl md:text-2xl drop-shadow">Стиль начинается с тебя</p>
          <a href="/booking" className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition shadow-lg">Записаться</a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 p-6">
        <img src={background2} alt="cut" className="rounded-lg shadow-lg object-cover w-full h-64" />
        <div>
          <h2 className="text-3xl font-semibold mb-4">Наши мастера</h2>
          <p className="text-lg text-gray-300">Профессионалы своего дела. Доверь свою стрижку лучшим из лучших. Барбершоп N1 — это качество, стиль и атмосфера.</p>
        </div>
      </div>

      <div className="relative h-96 my-12">
        <img src={background3} alt="bg" className="absolute top-0 left-0 w-full h-full object-cover opacity-20" />
        <div className="relative z-10 text-center text-white flex flex-col items-center justify-center h-full px-4">
          <h2 className="text-3xl font-bold drop-shadow">Скидка 20% новым клиентам</h2>
          <p className="mt-2 text-lg drop-shadow">Только в этом месяце</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
