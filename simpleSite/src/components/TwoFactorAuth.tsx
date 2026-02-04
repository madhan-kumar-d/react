const TwoFactorAuth = () => {
  return (
    <div className="bg-gray-800 rounded-2xl p-4 md:p-6 shadow-2xl border border-gray-700 w-full max-w-sm mx-auto">
      <div className="text-center mb-4 md:mb-6">
        <h2 className="text-blue-400 text-base md:text-lg font-semibold mb-2">Logo</h2>
        <h3 className="text-white text-lg md:text-xl font-bold">Register</h3>
        <p className="text-gray-400 text-xs md:text-sm mt-2">Enter the 6-digit code sent to your email address</p>
      </div>
      
      <div className="space-y-4 md:space-y-6">
        <div className="flex justify-center space-x-1 md:space-x-2">
          {[...Array(6)].map((_, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              className="w-8 h-8 md:w-10 md:h-10 bg-gray-700 border border-gray-600 rounded-lg text-center text-white font-semibold focus:outline-none focus:border-blue-500 text-sm md:text-base"
            />
          ))}
        </div>
        
        <div className="text-center">
          <a href="#" className="text-blue-400 text-xs md:text-sm hover:underline">
            Resend code
          </a>
        </div>
        
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 md:py-3 text-sm md:text-base rounded-lg transition-colors">
          Submit
        </button>
      </div>
    </div>
  )
}

export default TwoFactorAuth