import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Welcome to the Toolbox</h2>
      </div>
    </div>
  );
}

export default App;
