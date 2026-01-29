import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    console.log(mobileMenuOpen)
    return <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-slate-800/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-10 sm:h-15 lg:h-20">
                <div className="flex items-center space-x-1 group cursor-pointer">
                    <div>
                        <img src="https://res.cloudinary.com/vistaprint/images/f_auto,q_auto/v1719942400/ideas-and-advice-prod/blogadmin/mercedes-logo/mercedes-logo.png" alt="Sample Website" className="w-6 h-6 sm:w-10 sm:h-10" />
                    </div>
                    <span className="text-lg sm:text-xl lg:text-2xl font-medium">
                        <span className="text-blue-500">Sample</span>
                        <span> Website</span>
                    </span>
                </div>
                {/* Nav Links */}
                <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
                    <a href="#featuresSection" className="text-white-500 hover:text-blue-500 text-sm lg:text-xl">Features</a>
                    <a href="#pricingSection" className="text-white-500 hover:text-blue-500 text-sm lg:text-xl">Pricing</a>
                    <a href="#testimonialsSection" className="text-white-500 hover:text-blue-500 text-sm lg:text-xl">Testimonials</a>
                </div>
                <button className="md:hidden p-2 text-white hover:text-blue-500 cursor-pointer" onClick={() => { setMobileMenuOpen((prev) => !prev) }}>
                    {(!mobileMenuOpen && <Menu className="w-5 h-5 sm:w-6 sm:h-6" />) || <X className="w-5 h-5 sm:w-6 sm:h-6" />}
                </button>
            </div>
        </div>
        {mobileMenuOpen &&
            <div className="md:hidden flex bg-slate-900/95 backdrop-blur-lg border-t border-slate-100 slide-in-from-top animate-in duration-300">
                <div className="p-4 sm:py-6 space-y-3 sm:space-y-3">
                    <a href="#featuresSection" className="block text-white-500 hover:text-blue-500 text-sm lg:text-xl" onClick={() => { setMobileMenuOpen(false) }}>Features</a>
                    <a href="#pricingSection" className="block text-white-500 hover:text-blue-500 text-sm lg:text-xl" onClick={() => { setMobileMenuOpen(false) }}>Pricing</a>
                    <a href="#testimonialsSection" className="block text-white-500 hover:text-blue-500 text-sm lg:text-xl" onClick={() => { setMobileMenuOpen(false) }}>Testimonials</a>
                </div>
            </div>
        }
    </nav>
}

export default Navbar;