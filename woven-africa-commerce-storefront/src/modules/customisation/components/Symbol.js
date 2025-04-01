import Draggable from "react-draggable";
import { useState, useRef, useEffect } from "react";

const Symbol = ({ symbol, onDelete }) => {
    const [color, setColor] = useState(symbol.color);
    const [size, setSize] = useState(symbol.size);
    const [isEditing, setIsEditing] = useState(false);

    const nodeRef = useRef(null);
    const wrapperRef = useRef(null); // For detecting outside clicks

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
            <div ref={nodeRef} className="absolute cursor-move" onClick={() => setIsEditing(true)}>
                {/* Render Symbol */}
                <img 
                    src={symbol.src} 
                    alt="Symbol" 
                    width={size} 
                    height={size} 
                    style={{ filter: `brightness(0) saturate(100%) invert(1) sepia(1) saturate(1000%) hue-rotate(${color})` }}
                />

                {/* Editing Options - Only show when selected */}
                {isEditing && (
                    <div ref={wrapperRef} className="absolute bg-white p-2 shadow-md rounded">
                        <label className="block text-sm">Color:</label>
                        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />

                        <label className="block text-sm mt-2">Size:</label>
                        <input
                            type="range"
                            min="20"
                            max="200"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                        />

                        <button onClick={onDelete} className="text-white px-2 py-1 rounded">❌</button>

                    </div>
                )}
            </div>
        </Draggable>
    );
};

export default Symbol;
