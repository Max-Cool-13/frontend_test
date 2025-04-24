import React from "react";

const products = [
  { id: 1, name: "Шампунь премиум", price: "790₽", img: "https://via.placeholder.com/300" },
  { id: 2, name: "Масло для бороды", price: "590₽", img: "https://via.placeholder.com/300" },
  { id: 3, name: "Гель для укладки", price: "690₽", img: "https://via.placeholder.com/300" },
];

const Marketplace = () => {
  return (
    <div className="bg-black text-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center mb-8 drop-shadow">Магазин</h2>
      <div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-gray-900 p-4 rounded-lg shadow-lg text-center"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-400 mt-2">{product.price}</p>
            <button className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 rounded transition">
              Купить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
