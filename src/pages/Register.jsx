export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-black px-4">
      <form className="bg-gray-100 p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Регистрация</h1>
        <input type="text" placeholder="Имя" className="w-full mb-4 px-4 py-2 rounded border" />
        <input type="email" placeholder="Email" className="w-full mb-4 px-4 py-2 rounded border" />
        <input type="password" placeholder="Пароль" className="w-full mb-6 px-4 py-2 rounded border" />
        <button className="w-full bg-black hover:bg-gray-900 text-white py-2 rounded">Зарегистрироваться</button>
      </form>
    </div>
  );
}
