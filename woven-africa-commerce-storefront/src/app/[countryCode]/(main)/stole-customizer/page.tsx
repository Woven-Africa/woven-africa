"use client"
import { SetStateAction, useState, useEffect } from "react";
import { SketchPicker } from "react-color";
import Draggable from "react-draggable";
import Image from "next/image";
import Link from "next/link";

  
const StoleCustomizer = () => {
  const [activePanel, setActivePanel] = useState("BG COLOR");
  const [text, setText] = useState("Graduation");
  const [textColor, setTextColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#FBFBFB");
  const [stoleColor, setStoleColor] = useState("#FFFFFF"); 
  const [selectedImage, setSelectedImage] = useState(null);
  
  const sampleStoles = [
    "/images/stoles/transparent/1.png",
    "/images/stoles/transparent/2.png",
    "/images/stoles/transparent/3.png",
    "/images/stoles/transparent/4.png",
    "/images/stoles/transparent/5.png",
    "/images/stoles/transparent/6.png",
    "/images/stoles/transparent/7.png",
    "/images/stoles/transparent/8.png",
    "/images/stoles/transparent/9.png", "/images/stoles/transparent/9.png",  "/images/stoles/transparent/9.png", "/images/stoles/transparent/9.png", "/images/stoles/transparent/9.png", "/images/stoles/transparent/9.png"
  ];

  return (
      <div className="content-container py-12 mx-auto">
        <p className="text-center font-semibold text-lg mb-2">EDIT YOUR STOLE</p>
        <div className="flex gap-16 py-12 w-full justify-between ">
          {/* Left Section: Customization Area */}  
          <div className="flex-1 flex rounded-md justify-center items-center p-4 h-[600px]" style={{ backgroundColor: bgColor, border:"2px solid #E3DFDF" }}>            
            <div className="relative w-[500px] h-[600px]">
                {/* Conditionally Render Stole */}
                {selectedImage ? (
                  <Image src={selectedImage} alt="Selected Stole" layout="fill" objectFit="contain" />
                ) : (
                  <div className="block text-center m-auto w-full h-full">
                      <svg
                        width="450"
                        height="550"
                        viewBox="-90 -90 300 400"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <defs>
                          <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                            <feDropShadow dx="4" dy="4" stdDeviation="4" floodOpacity="0.5"/>
                          </filter>
                        </defs>
                        {/* Stole Shape */}
                        <path
                          d="M11.75 29C11.75 29 25.5802 16.72 34.75 11.5001C43.2905 6.6385 56.25 0 56.25 0L82.5 1.5L109.25 0C109.25 0 126.019 4.84164 136.25 11.5001C145.965 17.823 156.25 29 156.25 29L163.75 253H105.25L112.75 30H54.25L62.25 253H4L11.75 29Z"
                          fill={stoleColor} 
                          stroke="black"
                          strokeWidth="0.2"
                          filter="url(#shadow)"
                        />
                      </svg>
                    </div>
                )}

              {/* <Draggable> */}
                {/* <p className="absolute text-xl" style={{ color: textColor }}>{text}</p> */}
              {/* </Draggable> */}
            </div>
            
          </div>
    
          {/* Middle Section: Buttons */}
          <div className="flex flex-col space-y-4">
            {["BG COLOR", "STOLE COLOR", "SYMBOL", "TEXT", "SHAPE", "FLAG", "SAMPLES"].map((btn) => (
              <button
                key={btn}
                className={`border p-2 rounded-md text-sm ${activePanel === btn ? "bg-gray-300" : ""}`}
                onClick={() => setActivePanel(btn)}
              >
                {btn}
              </button>
            ))}
            {selectedImage && (
                <button
                  className="border p-2 rounded-md text-sm bg-red-500 text-white"
                  onClick={() => setSelectedImage(null)}
                >
                  Reset to SVG
                </button>
            )}
            {/* CLEAR BUTTON */}
          <button
            className="border p-2 rounded-md text-sm bg-red-500 text-white hover:bg-red-600 transition"
            onClick={() => {
              setBgColor("#FBFBFB");
              setStoleColor("#FFFFFF");
              setSelectedImage(null);
              setText("Graduation");
              setTextColor("#000000");
            }}
          >
            CLEAR
          </button>
          </div>
    
          {/* Right Section: Dynamic Panel */}
          <div className="flex-1 border-l h-[600px]">
            {activePanel === "BG COLOR" && (
              <SketchPicker color={bgColor} onChange={(color: { hex: SetStateAction<string>; }) => setBgColor(color.hex)} styles={{ default: { picker: { width: "100%" } } }}/>
            )}
            {activePanel === "STOLE COLOR" && (
                <SketchPicker color={stoleColor} onChange={(color: { hex: SetStateAction<string>; }) => setStoleColor(color.hex)} styles={{ default: { picker: { width: "100%" } } }}/>
            )}
            {activePanel === "TEXT" && (
              <div className="space-y-2">
                <input
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="border p-2 w-full"
                  placeholder="Enter text"
                />
                <SketchPicker color={textColor} onChange={(color: { hex: SetStateAction<string>; }) => setTextColor(color.hex)} styles={{ default: { picker: { width: "100%" } } }} />
              </div>
            )}
             {activePanel === "SAMPLES" && (
                <div className="grid grid-cols-3 gap-4 px-10 max-h-full overflow-y-auto">
                  {sampleStoles.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={`Sample Stole ${index + 1}`}
                      width={200}
                      height={200}

                      className="cursor-pointer shadow-md transition-transform transform hover:scale-105"
                      onClick={() => setSelectedImage(image)}
                    />
                  ))}
                </div>
              )}
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <Link legacyBehavior href="/" passHref>
              <a className="px-6 py-2 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100 transition flex justify-center items-center">
                CANCEL
              </a>
          </Link>
          <button className="ml-4 px-6 py-2 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition">
            PURCHASE
          </button>
        </div>
    </div>
  );
};

export default StoleCustomizer;
