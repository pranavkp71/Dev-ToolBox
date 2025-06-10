import { Link } from 'react-router-dom';
import { Code, Box, FileText } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0d1117] dark:bg-[#0d1117] text-white p-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 animate-fade-in">Developer's Toolbox</h1>
        <p className="text-lg text-gray-400">Supercharge your workflow with powerful, easy-to-use tools.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <ToolCard
          title="JSON Formatter"
          link="/json-formatter"
          icon={<Code className="w-8 h-8 text-green-400" />}
          description="Format and validate JSON with ease."
        />
        <ToolCard
          title="CSS Shadow Generator"
          link="/css-shadow"
          icon={<Box className="w-8 h-8 text-green-400" />}
          description="Create custom box shadows visually."
        />
        <ToolCard
          title="Base64 Encoder"
          link="/base64-encoder"
          icon={<FileText className="w-8 h-8 text-green-400" />}
          description="Encode or decode Base64 strings."
        />
      </div>
    </div>
  );
};

const ToolCard = ({ title, link, icon, description }) => {
  return (
    <div className="bg-[#161b22] dark:bg-[#1f242a] border border-white/10 rounded-xl p-6 shadow hover:shadow-lg hover:scale-105 transition duration-300">
      <div className="flex items-center gap-3 mb-2">
        {icon}
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      <Link to={link}>
        <button className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded">
          Open
        </button>
      </Link>
    </div>
  );
};

export default Home;