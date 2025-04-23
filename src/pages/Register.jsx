const Register = () => {
  return (
    <div className="pt-20 max-w-sm mx-auto">
      <h2 className="text-2xl font-bold mb-4">Регистрация</h2>
      <form className="flex flex-col gap-4">
        <input className="p-2 rounded bg-gray-800 border border-gray-700" placeholder="Имя" type="text" />
        <input className="p-2 rounded bg-gray-800 border border-gray-700" placeholder="Email" type="email" />
        <input className="p-2 rounded bg-gray-800 border border-gray-700" placeholder="Пароль" type="password" />
        <button className="bg-green-600 p-2 rounded hover:bg-green-700 transition">Зарегистрироваться</button>
      </form>
    </div>
  )
}

export default Register
