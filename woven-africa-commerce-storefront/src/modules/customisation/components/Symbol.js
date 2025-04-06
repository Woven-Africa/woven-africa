import Draggable from "react-draggable";
import { useState, useRef, useEffect } from "react";

const Symbol = ({ symbol, onDelete }) => {
    const [size, setSize] = useState(symbol.size);
    
    // Generate an array of default colors based on symbol.path.colors count
    const [colors, setColors] = useState(
        Array.from({ length: symbol.path.colors }, () => "#ffffff")
    );
    
    const [isEditing, setIsEditing] = useState(false);

    const nodeRef = useRef(null);
    const wrapperRef = useRef(null);
    
    const handleColorChange = (index, newColor) => {
        setColors(prevColors =>
            prevColors.map((color, i) => (i === index ? newColor : color))
        );
    };

    // Close editing tools when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsEditing(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef} className="absolute z-20 cursor-move" onClick={() => setIsEditing(true)}>
                {/* Render SVG */}
                <svg
                  width={size}
                  height={size}
                  viewBox={symbol.path.type === "polygon" ? `0 0 24 ${symbol.path.h}` : "0 0 24 24"}
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <filter id="shadow" x="-10%" y="-10%" width="140%" height="140%">
                      <feDropShadow dx="4" dy="4" stdDeviation="4" floodOpacity="0.5"/>
                    </filter>
                  </defs>
                  
                  {/* Stole Symbol om Canvas */}
                  <g xmlns="http://www.w3.org/2000/svg" id="ad58f192-b126-4df7-82c2-5689d2a711a8" data-name="Layer 1">
                     
                    {symbol.path.type === "path"
                        ? symbol.path.d.map((d, index) => (
                              <path key={index} fillRule="evenodd" clipRule="evenodd" d={d} fill={colors[0]} stroke="black" strokeWidth="0.03" />
                          ))
                        : symbol.path.d.map((point, index) => (
                              <path key={index} d={point[0]} fill={colors[point[1]-1] || "#ffffff"} stroke="black" strokeWidth="0.01" />
                          ))
                    }
                  </g>
                </svg>

                {/* Editing Options - Only show when selected */}
                {isEditing && (
                    <div ref={wrapperRef} className="absolute bg-white p-2 shadow-md rounded">
                        <label className="block text-sm mt-2">Size:</label>
                        <input
                            type="range"
                            min="20"
                            max="1000"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                        />

                        {/* Generate color pickers for each path */}
                        {colors.map((color, index) => (
                            <div key={index} className="mt-2">
                                <label className="block text-sm">Color {index + 1}:</label>
                                <input
                                    type="color"
                                    value={color}
                                    onChange={(e) => handleColorChange(index, e.target.value)}
                                />
                            </div>
                        ))}
                        <button onClick={onDelete} className="block text-center m-auto text-white px-2 py-1 rounded">
                            ❌
                        </button>
                    </div>
                )}
            </div>
        </Draggable>
    );
};

export default Symbol;
