import { useState, useRef, useEffect } from "react";
import Draggable from "react-draggable";

const Text = ({ text, onDelete }) => {
  const [fontSize, setFontSize] = useState(20);
  const [fontType, setFontType] = useState("Arial");
  const [color, setColor] = useState("#000000");
  const [isVertical, setIsVertical] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const nodeRef = useRef(null);
  const wrapperRef = useRef(null);

  // Close editing when clicking outside
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
      <div
        ref={nodeRef}
        className="absolute cursor-move"
        onClick={() => setIsEditing(true)}
        style={{
          fontSize: `${fontSize}px`,
          fontFamily: fontType,
          color: color,
          whiteSpace: isVertical ? "pre-wrap" : "nowrap",
          writingMode: isVertical ? "vertical-rl" : "horizontal-tb",
        }}
      >
        {text}

        {isEditing && (
          <div ref={wrapperRef} className="absolute bg-white p-2 shadow-md rounded mt-2">
            {/* Font Size */}
            <label className="block text-sm">Size:</label>
            <input
              type="range"
              min="10"
              max="100"
              value={fontSize}
              onChange={(e) => setFontSize(e.target.value)}
              className="w-full"
            />

            {/* Font Type */}
            <label className="block text-sm mt-2">Font:</label>
            <select value={fontType} onChange={(e) => setFontType(e.target.value)} className="w-full border p-1">
              <option value="Arial">Arial</option>
              <option value="Times New Roman">Times New Roman</option>
              <option value="Courier New">Courier New</option>
              <option value="Verdana">Verdana</option>
            </select>

            {/* Color Picker */}
            <label className="block text-sm mt-2">Color:</label>
            <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className="w-full" />

            {/* Toggle Vertical Text */}
            <button
              onClick={() => setIsVertical(!isVertical)}
              className="bg-gray-300 px-2 block py-1 rounded mt-2 w-full"
            >
              {isVertical ? "Horizontal" : "Vertical"}
            </button>

            {/* Delete Button */}
            <button onClick={onDelete} className="text-white block text-center m-auto px-2 py-1 rounded">❌</button>
          </div>
        )}
      </div>
    </Draggable>
  );
};

export default Text;
