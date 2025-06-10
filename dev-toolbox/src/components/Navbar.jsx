import { Settings } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Settings className="w-6 h-6" />
        <h1 className="text-xl font-semibold">ToolMate</h1>
      </div>
    </nav>
  );
}
