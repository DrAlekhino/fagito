import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* Desktop Navigation */}
      <nav className="max-md:hidden lg:block bg-transparent ">
        <ul className="flex flex-row justify-around items-center py-6 px-4 font-medium text-white!"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              gap: "clamp(0.5rem, 1.5vw, 2rem)"
            }}>
          <li>
            <Link 
              to="/" 
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/menu" 
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link 
              to="/private-events" 
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Private Events
            </Link>
          </li>
          <li>
            <Link to="/">
              <img
                src="images/Nav-logo.avif" 
                alt="Fagito Restaurant Logo" 
                width={291}
                height={186}
                className="w-28 md:w-36 lg:w-48 xl:w-60 h-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </li>
          <li>
            <Link 
              to="/gallery" 
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link 
              to="/our-story" 
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Our Story
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="hover:text-gray-300 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link 
              to="/reservations" 
              className="border-2 border-white rounded-full px-6 py-2 hover:bg-indigo-800 hover:text-gray-900 transition-all duration-300 font-semibold"
            >
              Book A Table
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden">
        {/* Mobile Header */}
        <div className={`flex items-center justify-between px-6 py-4 ${
          isOpen ? 'bg-gray-900' : 'bg-transparent'
        } transition-colors duration-300`}>
          <Link to="/" onClick={() => setIsOpen(false)}>
            <img 
              src="../../images/Nav-logo.avif"
              width={128}
              height={83}
              alt="Fagito Restaurant Logo" 
              className="w-32 h-auto" 
              loading="eager"
            />
          </Link>
          
          {/* Hamburger Menu Button */}
          <button
            className="relative w-10 h-10 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6">
              <span className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                isOpen ? 'rotate-45' : '-translate-y-2'
              }`}></span>
              <span className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                isOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                isOpen ? '-rotate-45' : 'translate-y-2'
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-gray-900 bg-opacity-95 z-40 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}>
          <div className="flex flex-col items-center justify-center h-full pt-20 pb-10 px-6">
            <ul className="w-full max-w-md space-y-8 text-center">
              {[
                { path: "/", label: "Home" },
                { path: "/menu", label: "Menu" },
                { path: "/private-events", label: "Private Events" },
                { path: "/gallery", label: "Gallery" },
                { path: "/our-story", label: "Our Story" },
                { path: "/contact", label: "Contact Us" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block text-2xl text-white font-medium py-3 hover:text-gray-300 transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link
                  to="/reservations"
                  className="inline-block border-2 border-white rounded-full px-8 py-3 text-xl text-white font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Book A Table
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}