const Dashboard = () => {
  return (
    <div className="bg-gray-800 rounded-2xl p-4 md:p-6 shadow-2xl border border-gray-700 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 md:mb-6 gap-4">
        <h2 className="text-blue-400 text-base md:text-lg font-semibold">Logo</h2>
        <nav className="flex flex-wrap gap-3 md:gap-6">
          <a href="#" className="text-gray-300 hover:text-white text-xs md:text-sm">Home</a>
          <a href="#" className="text-gray-300 hover:text-white text-xs md:text-sm">Profile</a>
          <a href="#" className="text-gray-300 hover:text-white text-xs md:text-sm">Settings</a>
          <a href="#" className="text-gray-300 hover:text-white text-xs md:text-sm">Logout</a>
        </nav>
      </div>
      
      <div className="mb-4 md:mb-6">
        <h3 className="text-white text-xl md:text-2xl font-bold mb-3 md:mb-4">Dashboard</h3>
        
        <div className="bg-gray-700 rounded-lg p-4 md:p-6">
          <h4 className="text-white text-base md:text-lg font-semibold mb-2">Content</h4>
          <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard