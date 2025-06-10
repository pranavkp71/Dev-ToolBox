import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import useLocalStorage from 'use-local-storage';
import Navbar from './Navbar';
import Home from './Home';
import CssShadowGenerator from './CssGenerator';
import JsonFormatter from './JsonFormatter';

export default function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light'); // Default to light mode

  useEffect(() => {
    console.log('Theme changed to:', theme); // Debug log
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 dark:bg-[#0d1117]">
        <Toaster position="top-right" />
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/json-formatter" element={<JsonFormatter theme={theme} />} />
          <Route path="/css-shadow" element={<CssShadowGenerator />} />
          <Route path="/base64-encoder" element={<div>Base64 Encoder (TBD)</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}