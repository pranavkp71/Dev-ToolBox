import { useState, useRef, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Settings, Menu, X, Search, Wrench } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const toolsRef = useRef(null);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  const tools = [
    { name: 'JSON Formatter', path: '/json-formatter' },
    { name: 'CSS Shadow Generator', path: '/css-shadow' },
    { name: 'Base64 Encoder', path: '/base64-encoder' },
  ];

  const filteredTools = tools.filter((tool) =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTools = () => setIsToolsOpen(!isToolsOpen);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (toolsRef.current && !toolsRef.current.contains(event.target)) {
        setIsToolsOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchQuery('');
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (filteredTools.length > 0) {
      navigate(filteredTools[0].path);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 sticky top-0 z-10 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Settings className="w-6 h-6" />
        <h1 className="text-xl font-semibold">ToolMate</h1>
      </div>
      <div className="hidden md:flex items-center gap-6">
        <NavLink to="/" className={({ isActive }) => `hover:text-blue-400 ${isActive ? 'text-blue-400' : ''}`}>
          Home
        </NavLink>
        <div className="relative" ref={toolsRef}>
          <button
            onClick={toggleTools}
            className="flex items-center gap-1 hover:text-blue-400"
            aria-label="Toggle tools menu"
          >
            <Wrench className="w-5 h-5" />
            Tools
          </button>
          {isToolsOpen && (
            <div className="absolute top-8 left-0 bg-gray-900 border border-white/10 rounded-lg shadow-lg w-48">
              {tools.map((tool) => (
                <NavLink
                  key={tool.path}
                  to={tool.path}
                  onClick={() => setIsToolsOpen(false)}
                  className="block px-4 py-2 hover:bg-gray-800"
                >
                  {tool.name}
                </NavLink>
              ))}
            </div>
          )}
        </div>
        <form onSubmit={handleSearchSubmit} className="relative" ref={searchRef}>
          <div className="flex items-center bg-gray-800 rounded-lg px-2 py-1">
            <Search className="w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tools..."
              className="bg-transparent text-white placeholder-gray-400 text-sm w-32 focus:outline-none pl-2"
              aria-label="Search tools"
            />
          </div>
          {searchQuery && filteredTools.length > 0 && (
            <div className="absolute top-10 left-0 bg-gray-900 border border-white/10 rounded-lg shadow-lg w-48 max-h-60 overflow-y-auto">
              {filteredTools.map((tool) => (
                <NavLink
                  key={tool.path}
                  to={tool.path}
                  onClick={() => setSearchQuery('')}
                  className="block px-4 py-2 hover:bg-gray-800"
                >
                  {tool.name}
                </NavLink>
              ))}
            </div>
          )}
          {searchQuery && filteredTools.length === 0 && (
            <div className="absolute top-10 left-0 bg-gray-900 border border-white/10 rounded-lg shadow-lg w-48 p-4 text-gray-400">
              No tools found
            </div>
          )}
        </form>
      </div>
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-900 text-white flex flex-col items-center gap-4 py-4 md:hidden">
          <NavLink to="/" onClick={toggleMenu} className={({ isActive }) => `hover:text-blue-400 ${isActive ? 'text-blue-400' : ''}`}>
            Home
          </NavLink>
          <button
            onClick={toggleTools}
            className="flex items-center gap-1 hover:text-blue-400"
            aria-label="Toggle tools menu"
          >
            <Wrench className="w-5 h-5" />
            Tools
          </button>
          {isToolsOpen && (
            <div className="flex flex-col w-full items-center bg-gray-800 border border-white/10 rounded-lg mx-4">
              {tools.map((tool) => (
                <NavLink
                  key={tool.path}
                  to={tool.path}
                  onClick={() => {
                    setIsToolsOpen(false);
                    setIsMenuOpen(false);
                  }}
                  className="block px-4 py-2 hover:bg-gray-700 w-full text-center"
                >
                  {tool.name}
                </NavLink>
              ))}
            </div>
          )}
          <form onSubmit={handleSearchSubmit} className="relative w-3/4" ref={searchRef}>
            <div className="flex items-center bg-gray-800 rounded-lg px-2 py-1">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools..."
                className="bg-transparent text-white placeholder-gray-400 text-sm w-full focus:outline-none pl-2"
                aria-label="Search tools"
              />
            </div>
            {searchQuery && filteredTools.length > 0 && (
              <div className="absolute top-10 left-0 bg-gray-900 border border-white/10 rounded-lg shadow-lg w-full max-h-60 overflow-y-auto">
                {filteredTools.map((tool) => (
                  <NavLink
                    key={tool.path}
                    to={tool.path}
                    onClick={() => {
                      setSearchQuery('');
                      setIsMenuOpen(false);
                    }}
                    className="block px-4 py-2 hover:bg-gray-800"
                  >
                    {tool.name}
                  </NavLink>
                ))}
              </div>
            )}
            {searchQuery && filteredTools.length === 0 && (
              <div className="absolute top-10 left-0 bg-gray-900 border border-white/10 rounded-lg shadow-lg w-full p-4 text-gray-400">
                No tools found
              </div>
            )}
          </form>
        </div>
      )}
    </nav>
  );
}