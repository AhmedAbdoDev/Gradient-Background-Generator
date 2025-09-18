import { gradientTypes } from "@/utils/functions";
export default function GradientControls({
  color1,
  setColor1,
  color2,
  setColor2,
  opacity1,
  setOpacity1,
  opacity2,
  setOpacity2,
  angle,
  setAngle,
  gradientType,
  setGradientType,
  generateRandomGradient,
}) {
  return (
    <div className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-lg border border-gray-700 p-8 rounded-2xl shadow-xl w-full max-w-2xl">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-6">
        <div className="flex flex-col items-center gap-4 text-white">
          <div className="flex items-center gap-4">
            <input
              type="color"
              value={color1}
              onChange={(e) => setColor1(e.target.value)}
              className="w-16 h-16 rounded-full border-2 border-gray-400 transform hover:scale-110 transition-transform cursor-pointer color-input"
            />
            <input
              type="color"
              value={color2}
              onChange={(e) => setColor2(e.target.value)}
              className="w-16 h-16 rounded-full border-2 border-gray-400 transform hover:scale-110 transition-transform cursor-pointer color-input"
            />
          </div>

          <div className="flex items-center gap-2 w-full">
            <label className="text-sm font-semibold whitespace-nowrap">
              Opacity 1:
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={opacity1}
              onChange={(e) => setOpacity1(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-600"
            />
            <span className="text-sm font-semibold w-8">{opacity1}%</span>
          </div>
          <div className="flex items-center gap-2 w-full">
            <label className="text-sm font-semibold whitespace-nowrap">
              Opacity 2:
            </label>
            <input
              type="range"
              min="0"
              max="100"
              value={opacity2}
              onChange={(e) => setOpacity2(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-600"
            />
            <span className="text-sm font-semibold w-8">{opacity2}%</span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 w-full sm:w-auto text-white">
          <div className="flex items-center gap-4 mb-2">
            {gradientTypes.map((type) => (
              <button
                key={type}
                onClick={() => setGradientType(type)}
                className={`px-4 py-2 rounded-full font-bold transition-colors ${
                  gradientType === type
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-gray-700 hover:bg-gray-600 text-white"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="w-full">
            <label className="block text-sm font-semibold mb-2">
              Angle: {angle}°
            </label>
            <input
              type="range"
              min="0"
              max="360"
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-600"
            />
          </div>
          <button
            onClick={generateRandomGradient}
            className="mt-4 px-6 py-3 w-full bg-purple-600 hover:bg-purple-700 transition-colors rounded-full font-bold text-lg shadow-lg"
          >
            Generate Random
          </button>
        </div>
      </div>
    </div>
  );
}
