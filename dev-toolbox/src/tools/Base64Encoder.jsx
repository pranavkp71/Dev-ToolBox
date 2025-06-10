import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Copy, X, Code } from 'lucide-react';

export default function Base64Encoder() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isEncoding, setIsEncoding] = useState(true);

  const processText = () => {
    try {
      if (isEncoding) {
        const encoded = btoa(input);
        setOutput(encoded);
        toast.success('Text encoded to Base64!');
      } else {
        const decoded = atob(input);
        setOutput(decoded);
        toast.success('Base64 decoded to text!');
      }
    } catch (err) {
      setOutput('');
      toast.error(isEncoding ? 'Invalid text for encoding!' : 'Invalid Base64 string!');
    }
  };

  const clearInput = () => {
    setInput('');
    setOutput('');
    toast.success('Input and output cleared!');
  };

  const copyToClipboard = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      toast.success('Output copied to clipboard!');
    } else {
      toast.error('No output to copy!');
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 text-white">
      <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
        <Code className="w-6 h-6 text-blue-400" />
        Base64 Encoder/Decoder
      </h2>
      <div className="flex flex-col gap-4 mb-4">
        <textarea
          rows={6}
          className="w-full p-4 bg-gray-800 text-white rounded-lg resize-y focus:ring-2 focus:ring-blue-500 font-mono text-sm"
          placeholder={isEncoding ? 'Enter text to encode (e.g., Hello World)' : 'Enter Base64 to decode (e.g., SGVsbG8gV29ybGQ=)'}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label={isEncoding ? 'Text input for Base64 encoding' : 'Base64 input for decoding'}
        ></textarea>
        {output && (
          <div className="p-4 bg-gray-800 rounded-lg font-mono text-sm">
            <code className="text-white break-all">{output}</code>
          </div>
        )}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        <button
          onClick={processText}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          aria-label={isEncoding ? 'Encode text to Base64' : 'Decode Base64 to text'}
        >
          {isEncoding ? 'Encode' : 'Decode'}
        </button>
        <button
          onClick={() => setIsEncoding(!isEncoding)}
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
          aria-label={`Switch to ${isEncoding ? 'decode' : 'encode'} mode`}
        >
          Switch to {isEncoding ? 'Decode' : 'Encode'}
        </button>
        <button
          onClick={clearInput}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
          aria-label="Clear input and output"
        >
          Clear
        </button>
        {output && (
          <button
            onClick={copyToClipboard}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            aria-label="Copy output to clipboard"
          >
            Copy
          </button>
        )}
      </div>
    </div>
  );
}