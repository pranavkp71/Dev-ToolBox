import { useState } from 'react';
import { toast } from 'react-hot-toast';

export default function CssShadowGenerator() {
  const [shadow, setShadow] = useState({
    hOffset: 10,
    vOffset: 10,
    blur: 10,
    spread: 10,
    shadowColor: '#000000',
    boxColor: '#ffffff',
    inset: false,
    opacity: 1,
  });

  const { hOffset, vOffset, blur, spread, shadowColor, boxColor, inset, opacity } = shadow;

  const boxShadow = `${inset ? 'inset ' : ''}${hOffset}px ${vOffset}px ${blur}px ${spread}px ${shadowColor}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;

  const updateShadow = (key, value) => {
    setShadow((prev) => ({ ...prev, [key]: value }));
  };

  const applyPreset = (preset) => {
    setShadow((prev) => ({ ...prev, ...preset }));
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`box-shadow: ${boxShadow};`);
    toast.success('CSS copied to clipboard!');
  };

  const presets = [
    { name: 'Soft Glow', hOffset: 0, vOffset: 0, blur: 20, spread: 5, shadowColor: '#000000', opacity: 0.3 },
    { name: 'Neumorphic', hOffset: 5, vOffset: 5, blur: 10, spread: 0, shadowColor: '#000000', opacity: 0.2 },
  ];

  return (
    <div className="bg-gray-800 dark:bg-gray-900 p-6 rounded-lg shadow-lg text-white max-w-xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">CSS Shadow Generator</h2>
      <div
        className="w-64 h-64 mx-auto mb-6"
        style={{
          backgroundColor: boxColor,
          boxShadow,
          borderRadius: '1rem',
        }}
      ></div>
      <div className="flex flex-wrap gap-2 mb-4">
        {presets.map((preset) => (
          <button
            key={preset.name}
            onClick={() => applyPreset(preset)}
            className="bg-gray-700 hover:bg-gray-600 text-sm px-3 py-1 rounded"
          >
            {preset.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <label className="flex flex-col">
          Horizontal Offset ({hOffset}px)
          <input
            type="range"
            min="-100"
            max="100"
            value={hOffset}
            onChange={(e) => updateShadow('hOffset', e.target.value)}
            className="w-full accent-green-500"
            aria-label="Horizontal offset slider"
          />
        </label>
        <label className="flex flex-col">
          Vertical Offset ({vOffset}px)
          <input
            type="range"
            min="-100"
            max="100"
            value={vOffset}
            onChange={(e) => updateShadow('vOffset', e.target.value)}
            className="w-full accent-green-500"
            aria-label="Vertical offset slider"
          />
        </label>
        <label className="flex flex-col">
          Blur Radius ({blur}px)
          <input
            type="range"
            min="0"
            max="100"
            value={blur}
            onChange={(e) => updateShadow('blur', e.target.value)}
            className="w-full accent-green-500"
            aria-label="Blur radius slider"
          />
        </label>
        <label className="flex flex-col">
          Spread Radius ({spread}px)
          <input
            type="range"
            min="-50"
            max="50"
            value={spread}
            onChange={(e) => updateShadow('spread', e.target.value)}
            className="w-full accent-green-500"
            aria-label="Spread radius slider"
          />
        </label>
        <label className="flex flex-col">
          Opacity ({opacity})
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={opacity}
            onChange={(e) => updateShadow('opacity', e.target.value)}
            className="w-full accent-green-500"
            aria-label="Shadow opacity slider"
          />
        </label>
        <label className="flex items-center gap-2">
          Inset Shadow
          <input
            type="checkbox"
            checked={inset}
            onChange={(e) => updateShadow('inset', e.target.checked)}
            className="accent-green-500"
            aria-label="Inset shadow toggle"
          />
        </label>
        <label className="flex flex-col">
          Shadow Color
          <input
            type="color"
            value={shadowColor}
            onChange={(e) => updateShadow('shadowColor', e.target.value)}
            className="w-full h-10 rounded"
            aria-label="Shadow color picker"
          />
        </label>
        <label className="flex flex-col">
          Box Color
          <input
            type="color"
            value={boxColor}
            onChange={(e) => updateShadow('boxColor', e.target.value)}
            className="w-full h-10 rounded"
            aria-label="Box color picker"
          />
        </label>
      </div>
      <div className="mt-6 bg-gray-700 dark:bg-gray-800 p-3 rounded flex justify-between items-center">
        <code>box-shadow: {boxShadow};</code>
        <button
          onClick={copyToClipboard}
          className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm"
        >
          Copy
        </button>
      </div>
    </div>
  );
}