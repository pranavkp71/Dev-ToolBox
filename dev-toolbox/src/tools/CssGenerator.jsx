import { useState } from "react";

export default function CssShadowGenerator() {
    const [hOffset, setHOffset] = useState(10);
    const [vOffset, setVOffset] = useState(10);
    const [blur, setBlur] = useState(10);
    const [spread, setSpread] = useState(10);
    const [shadowColor, setShadowColor] = useState("#000000");
    const [boxColor, setBoxColor] = useState("#ffffff");
    const [copied, setCopied] = useState(false);

    const boxShadow = `${hOffset}px ${vOffset}px ${blur}px ${spread}px ${shadowColor}`;

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(`box-shadow: ${boxShadow};`);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error("failed to copy:", err);
        }
    };

    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-white max-w-xl mx-auto mt-10">
            <h2 className="text-2xl font-bold mb-4">CSS Shadow Generator</h2>

            <div
                className="w-64 h-64 mx-auto mb-6"
                style={{
                    backgroundColor:boxColor,
                    boxShadow:boxShadow,
                    borderRadius: "1rem",
                }}
            ></div>

            <div className="grid grid-cols-2 gap-4">
                <label>
                    Horizontal offset
                    <input 
                        type='range'
                        min='-100'
                        max='100'
                        value={hOffset}
                        onChange={(e) => setHOffset(e.target.value)}
                        className="w-full"
                    />
                </label>
                <label>
                    Blur Radius
                    <input 
                        type="range"
                        min="0"
                        max="100"
                        value={blur}
                        onChange={(e) => setBlur(e.target.value)}
                        className="w-full"
                    />
                </label>
                <label>
                    Spread Radius
                    <input 
                       type="range"
                        min="5"
                        max="150"
                        value={spread}
                        onChange={(e) => setSpread(e.target.value)}
                        className="w-full" 
                    />
                </label>
                <label>
                    Shadow Color
                    <input
                        type="color"
                        value={shadowColor}
                        onChange={(e) => setShadowColor(e.target.value)}
                        className="w-full"
                    />
                </label>
                <label>
                    Box Color
                    <input 
                       type="color"
                       value={boxColor}
                       onChange={(e) => setBoxColor(e.target.value)}
                       className="w-full" 
                    />
                </label>
            </div>
            
            <div className="mt-6 bg-gray-700 p-3 rounded">
                <code>box-shadow: {boxShadow};</code>
                <button
                    onClick={copyToClipboard}
                    className="ml-4 bg-green-500 hover:bg-green-800 text-white px-3 py-1 rounded text-sm"
                >
                    {copied? "Copied": "Copy"}
                </button>
            </div>
        </div>
    );
}