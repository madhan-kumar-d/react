const RegisterForm = () => {
  return (
    <div className="bg-gray-800 rounded-2xl p-4 md:p-6 shadow-2xl border border-gray-700 w-full max-w-sm mx-auto">
      <div className="text-center mb-4 md:mb-6">
        <h2 className="text-blue-400 text-base md:text-lg font-semibold mb-2">Logo</h2>
        <h3 className="text-white text-lg md:text-xl font-bold">Register</h3>
        <p className="text-gray-400 text-xs md:text-sm mt-2">First name</p>
      </div>
      
      <div className="space-y-3 md:space-y-4">
        <div>
          <input 
            type="text"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Username"
          />
        </div>
        
        <div>
          <input 
            type="email"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Email address"
          />
        </div>
        
        <div>
          <input 
            type="password"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Password"
          />
        </div>
        
        <div>
          <input 
            type="password"
            className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 md:px-4 py-2 md:py-3 text-sm md:text-base text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
            placeholder="Confirm password"
          />
        </div>
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 md:py-3 text-sm md:text-base rounded-lg transition-colors">
          Sign up
        </button>
        
        <div className="text-center">
          <a href="#" className="text-blue-400 text-xs md:text-sm hover:underline">
            Log in
          </a>
        </div>
      </div>
    </div>
  )
}

export default RegisterForm