"use client";

import { useState, useEffect } from "react";
import GradientControls from "@/components/GradientControls";
import CodeDisplay from "@/components/CodeDisplay";
import { getRandomColor, getCssColor, gradientTypes } from "@/utils/functions";

export default function Home() {
  const [color1, setColor1] = useState("#ff0000");
  const [color2, setColor2] = useState("#0000ff");
  const [angle, setAngle] = useState(45);
  const [opacity1, setOpacity1] = useState(100);
  const [opacity2, setOpacity2] = useState(100);
  const [gradientType, setGradientType] = useState("linear");
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    setIsCopied(false);
  }, [color1, color2, angle, opacity1, opacity2, gradientType]);

  const getGradientCode = () => {
    const c1 = getCssColor(color1, opacity1);
    const c2 = getCssColor(color2, opacity2);
    let code = "";

    switch (gradientType) {
      case "linear":
        code = `linear-gradient(${angle}deg, ${c1}, ${c2})`;
        break;
      case "radial":
        code = `radial-gradient(circle, ${c1}, ${c2})`;
        break;
      case "conic":
        code = `conic-gradient(from ${angle}deg, ${c1}, ${c2})`;
        break;
      default:
        code = `linear-gradient(${angle}deg, ${c1}, ${c2})`;
    }
    return code;
  };

  const gradientStyle = {
    background: getGradientCode(),
  };

  const cssCode = `background: ${getGradientCode()};`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssCode).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    });
  };

  const generateRandomGradient = () => {
    setColor1(getRandomColor());
    setColor2(getRandomColor());
    setAngle(Math.floor(Math.random() * 361));
    setOpacity1(Math.floor(Math.random() * 101));
    setOpacity2(Math.floor(Math.random() * 101));
    setGradientType(
      gradientTypes[Math.floor(Math.random() * gradientTypes.length)]
    );
  };

  return (
    <div
      className="flex flex-col items-center justify-center flex-1 p-8 text-white transition-all duration-500"
      style={gradientStyle}
    >
      <h1 className="text-5xl font-extrabold mb-4 text-shadow-lg">
        Gradient Background Generator
      </h1>
      <p className="mb-8 text-lg text-white text-opacity-80 text-center max-w-xl">
        Generate stunning CSS gradients with ease and copy the code instantly.
      </p>

      <GradientControls
        color1={color1}
        setColor1={setColor1}
        color2={color2}
        setColor2={setColor2}
        opacity1={opacity1}
        setOpacity1={setOpacity1}
        opacity2={opacity2}
        setOpacity2={setOpacity2}
        angle={angle}
        setAngle={setAngle}
        gradientType={gradientType}
        setGradientType={setGradientType}
        generateRandomGradient={generateRandomGradient}
      />

      <CodeDisplay
        cssCode={cssCode}
        isCopied={isCopied}
        copyToClipboard={copyToClipboard}
      />
    </div>
  );
}
