import { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";

export default function Shape({ shape, onDelete }) {
  const [size, setSize] = useState(shape.size || 50);
  const [color, setColor] = useState(shape.color || "ffffff");
  const nodeRef = useRef(null); // Required for Draggable
  const [isSelected, setIsSelected] = useState(false); // Track selection

  // Handle clicks outside the shape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (nodeRef.current && !nodeRef.current.contains(event.target)) {
        setIsSelected(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  // Function to render different shapes
  const renderShape = () => {
    switch (shape.type) {
      case "rect":
        return <div style={{ width: size*2, height: size, backgroundColor: color }} className="border border-black"></div>;
      case "square":
        return <div style={{ width: size, height: size, backgroundColor: color }} className="border border-black"></div>;
      case "circle":
        return <div style={{ width: size, height: size, backgroundColor: color, borderRadius: "50%" }} className="border border-black"></div>;
      case "triangle":
        return <div style={{
          width: 0, height: 0,
          borderLeft: `${size / 2}px solid transparent`,
          borderRight: `${size / 2}px solid transparent`,
          borderBottom: `${size}px solid ${color}`,
        }}></div>;
      case "ellipse":
        return <div style={{ width: size * 1.5, height: size, backgroundColor: color, borderRadius: "50%" }} className="border border-black"></div>;
      case "pentagon":
        return (
          <svg width={size} height={size} viewBox="0 0 100 100">
            <polygon
              points="50,5 95,38 78,95 22,95 5,38"
              fill={color}
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        );
      case "hexagon":
        return <div style={{
          width: size, height: size / 1.5,
          backgroundColor: color, clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)"
        }}></div>;
      case "star":
        return (
          <svg width={size} height={size} viewBox="0 0 100 100">
            <polygon
              points="50,5 61,35 95,35 67,55 78,85 50,65 22,85 33,55 5,35 39,35"
              fill={color}
              stroke="black"
              strokeWidth="2"
            />
          </svg>
        );
      case "diamond":
        return <div style={{
          width: size, height: size,
          backgroundColor: color,
          transform: "rotate(45deg)"
        }} className="border border-black"></div>;
      case "trapezoid":
        return <div style={{
          width: size, height: 0,
          borderLeft: `${size / 4}px solid transparent`,
          borderRight: `${size / 4}px solid transparent`,
          borderBottom: `${size / 1.5}px solid ${color}`
        }}></div>;
      case "parallelogram":
        return <div style={{
          width: size * 1.2, height: size / 1.5,
          backgroundColor: color,
          transform: "skew(20deg)"
        }} className="border border-black"></div>;
      case "line":
        return (
          <div
            style={{
              width: size * 2,
              height: "2px", // Thin line
              backgroundColor: color,
              transform: "rotate(0deg)", // Allow for rotation if needed
            }}
            className=""
          ></div>);
      default:
        return null;
    }
  };
  
  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef} className="absolute z-20 cursor-move" onClick={() => setIsSelected(true)}>
        {/* Shape based on type */}
        <div className="flex justify-center">
          {renderShape()}
        </div>
        
        {/* Controls */}
        {/* Show controls ONLY when shape is clicked */}
        {isSelected && (
          <div className="flex justify-center">
            <div className="absolute top-full mt-2 flex gap-2 bg-white p-2 rounded shadow-lg">
              <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="cursor-pointer" />
              <input type="range" min="10" max="100" value={size} onChange={(e) => setSize(Number(e.target.value))} />
              <button onClick={onDelete} className="text-white px-2 py-1 rounded">❌</button>
            </div>
          </div>
        )}
      </div>
    </Draggable>
  );
}
