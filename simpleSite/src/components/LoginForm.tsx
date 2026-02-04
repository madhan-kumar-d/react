const LoginForm = () => {
  return (
    <div className="bg-gray-800 rounded-2xl p-4 md:p-6 shadow-2xl border border-gray-700 w-full max-w-sm mx-auto">
      <div className="text-center mb-4 md:mb-6">
        <h2 className="text-blue-400 text-base md:text-lg font-semibold mb-2">Logo</h2>
        <h3 className="text-white text-lg md:text-xl font-bold">Login</h3>
        <p className="text-gray-400 text-xs md:text-sm mt-2">Username or email address</p>
      </div>
      
      <div className="space-y-3 md:space-y-4">
        <div>
          <label className="text-gray-300 text-xs md:text-sm block mb-2">Password</label>
          <input 
            type="password"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Enter password"
          />
        </div>
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 md:py-3 text-sm md:text-base rounded-lg transition-colors">
          Log in
        </button>
        
        <div className="text-center">
          <a href="#" className="text-blue-400 text-xs md:text-sm hover:underline">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  )
}

export default LoginForm