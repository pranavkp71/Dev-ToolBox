import Navbar from "./components/Navbar";
import CssShadowGenerator from "./tools/CssGenerator";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="p-6">
        <CssShadowGenerator />
      </div>
    </div>
  );
}

export default App;
