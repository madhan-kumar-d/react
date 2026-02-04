import LoginForm from './components/LoginForm.tsx'
import RegisterForm from './components/RegisterForm'
import TwoFactorAuth from './components/TwoFactorAuth'
import Dashboard from './components/Dashboard'
import SimpleLogin from './components/SimpleLogin'
import TwoFactorLogin from './components/TwoFactorLogin'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <LoginForm />
          <RegisterForm />
          <TwoFactorAuth />
          <SimpleLogin />
          <TwoFactorLogin />
          <div className="sm:col-span-2 lg:col-span-3 xl:col-span-4">
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App