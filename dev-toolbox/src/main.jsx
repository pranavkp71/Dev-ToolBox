import React from "react";
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CssShadowGenerator from "./tools/CssGenerator";
import JsonFormatter from "./tools/JsonFormatter";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/css-shadow" element={<CssShadowGenerator />} />
        <Route path="/json-formatter" element={<JsonFormatter />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)