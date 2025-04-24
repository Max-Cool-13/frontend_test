import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-900 p-8 rounded shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-center drop-shadow">Вход</h2>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <input
            type="password"
            placeholder="Пароль"
            className="w-full px-4 py-2 rounded bg-gray-800 text-white border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="submit"
            className="w-full py-2 rounded bg-red-600 hover:bg-red-700 transition shadow"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
