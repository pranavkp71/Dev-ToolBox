import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CssShadowGenerator from "./tools/CssGenerator";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/css-shadow" element={<CssShadowGenerator />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)