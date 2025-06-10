import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white p-8">
      <h1 className="text-3xl font-bold mb-6">Developer's Toolbox</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ToolCard title="JSON Formatter" link="/json-formatter" />
        <ToolCard title="CSS Shadow Generator" link="/css-shadow" />
        <ToolCard title="Base64 Encoder" link="/base64-encoder" />
      </div>
    </div>
  );
};

const ToolCard = ({ title, link }) => {
  return (
    <div className="bg-[#161b22] border border-white/10 rounded-xl p-6 shadow hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-400 text-sm mb-4">Open this tool to start using it.</p>
      <Link to={link}>
        <button className="bg-green-500 hover:bg-green-800 text-white text-l px-2 py-1 rounded">
          Open
        </button>
      </Link>
    </div>
  );
};

export default Home;
