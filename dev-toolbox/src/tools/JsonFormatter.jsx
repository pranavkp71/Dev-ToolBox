import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function JsonFormatter() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [isMinified, setIsMinified] = useState(false);

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      const formatted = isMinified ? JSON.stringify(parsed) : JSON.stringify(parsed, null, 2);
      setOutput(formatted);
      setError('');
      toast.success('JSON formatted successfully!');
    } catch (err) {
      setError('Invalid JSON');
      setOutput('');
      toast.error('Invalid JSON');
    }
  };

  const clearInput = () => {
    setInput('');
    setOutput('');
    setError('');
    toast.success('Input cleared!');
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    toast.success('JSON copied to clipboard!');
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 text-white">
      <h2 className="text-2xl font-bold mb-4">JSON Formatter</h2>
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <textarea
          rows={10}
          className="w-full p-4 bg-gray-700 dark:bg-gray-800 text-white rounded resize-y focus:ring-2 focus:ring-green-500"
          placeholder="Paste your JSON here"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="JSON input"
        ></textarea>
        {output && (
          <div className="w-full">
            <SyntaxHighlighter language="json" style={oneDark} className="rounded">
              {output}
            </SyntaxHighlighter>
          </div>
        )}
      </div>
      <div className="flex gap-2 mb-4">
        <button
          onClick={formatJson}
          className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
        >
          {isMinified ? 'Minify' : 'Format'}
        </button>
        <button
          onClick={() => setIsMinified(!isMinified)}
          className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded"
        >
          {isMinified ? 'Switch to Format' : 'Switch to Minify'}
        </button>
        <button
          onClick={clearInput}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded"
        >
          Clear
        </button>
        {output && (
          <button
            onClick={copyToClipboard}
            className="bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
          >
            Copy
          </button>
        )}
      </div>
      {error && (
        <p className="text-red-400 bg-red-900/50 p-2 rounded">{error}</p>
      )}
    </div>
  );
}