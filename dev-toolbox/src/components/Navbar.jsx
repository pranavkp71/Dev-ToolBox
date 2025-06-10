import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Settings, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 sticky top-0 z-10 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Settings className="w-6 h-6" />
        <h1 className="text-xl font-semibold">ToolMate</h1>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <NavLink to="/" className={({ isActive }) => `hover:text-green-400 ${isActive ? 'text-green-400' : ''}`}>
          Home
        </NavLink>
        <NavLink to="/json-formatter" className={({ isActive }) => `hover:text-green-400 ${isActive ? 'text-green-400' : ''}`}>
          JSON Formatter
        </NavLink>
        <NavLink to="/css-shadow" className={({ isActive }) => `hover:text-green-400 ${isActive ? 'text-green-400' : ''}`}>
          CSS Shadow
        </NavLink>
        <NavLink to="/base64-encoder" className={({ isActive }) => `hover:text-green-400 ${isActive ? 'text-green-400' : ''}`}>
          Base64 Encoder
        </NavLink>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center gap-4 py-4 md:hidden">
          <NavLink to="/" onClick={toggleMenu} className={({ isActive }) => `hover:text-green-400 ${isActive ? 'text-green-400' : ''}`}>
            Home
          </NavLink>
          <NavLink to="/json-formatter" onClick={toggleMenu} className={({ isActive }) => `hover:text-green-400 ${isActive ? 'text-green-400' : ''}`}>
            JSON Formatter
          </NavLink>
          <NavLink to="/css-shadow" onClick={toggleMenu} className={({ isActive }) => `hover:text-green-400 ${isActive ? 'text-green-400' : ''}`}>
            CSS Shadow
          </NavLink>
          <NavLink to="/base64-encoder" onClick={toggleMenu} className={({ isActive }) => `hover:text-green-400 ${isActive ? 'text-green-400' : ''}`}>
            Base64 Encoder
          </NavLink>
        </div>
      )}
    </nav>
  );
}