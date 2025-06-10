import { useState } from "react";

export default function JsonFormatter() {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");
    const [error, setError] = useState("");

    const formatJson = () => {
        try {
            const parsed = JSON.parse(input);
            const formatted = JSON.stringify(parsed, null, 2);
            setOutput(formatted);
            setError("");
        } catch (err) {
            setError("Invalid JSON");
            setOutput("");
        }
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(output);
    };

    return (
        <div className="max-w-4xl mx-auto mt-10 text-white">
            <h2 className="text-2xl font-bold mb-4">JSON Formatter</h2>

            <textarea
                rows={10}
                className="w-full p-4 bg-gray-700 text-white rounded mb-4"
                placeholder="Paste your JSON here"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            ></textarea>

            <button
                onClick={formatJson}
                className="bg-green-500 hover:bg-green-800 px-4 py-2 rounded mb-4"
            >
                Format
            </button>

            {error && <p className="text-red-400 mb-4">{error}</p>}

            {output && (
                <>
                    <pre className="bg-gray-900 p-4 rounded overflow-x-auto">
                        {output}
                    </pre>
                    <button
                        onClick={copyToClipboard}
                        className="mt-2 bg-green-600 hover:bg-green-800 px-4 py-2 rounded"
                    >
                        Copy
                    </button>
                </>
            )}
        </div>
    );
}