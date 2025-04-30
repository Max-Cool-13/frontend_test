export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <form className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Вход</h1>
        <input type="email" placeholder="Email" className="w-full mb-4 px-4 py-2 rounded bg-gray-700 text-white" />
        <input type="password" placeholder="Пароль" className="w-full mb-6 px-4 py-2 rounded bg-gray-700 text-white" />
        <button className="w-full bg-red-600 hover:bg-red-700 py-2 rounded">Войти</button>
      </form>
    </div>
  );
}
