const Login = () => {
    return (
      <div className="pt-20 max-w-sm mx-auto">
        <h2 className="text-2xl font-bold mb-4">Вход</h2>
        <form className="flex flex-col gap-4">
          <input className="p-2 rounded bg-gray-800 border border-gray-700" placeholder="Email" type="email" />
          <input className="p-2 rounded bg-gray-800 border border-gray-700" placeholder="Пароль" type="password" />
          <button className="bg-blue-600 p-2 rounded hover:bg-blue-700 transition">Войти</button>
        </form>
      </div>
    )
  }
  
  export default Login
  