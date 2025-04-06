import Draggable from "react-draggable";
import { useState, useRef, useEffect } from "react";

const Flag = ({ flag, onDelete }) => {
    const [size, setSize] = useState(flag.size);
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
            <div ref={nodeRef} className="absolute cursor-move z-20" onClick={() => setIsEditing(true)}>
                {/* Render Flag */}
                <img 
                    src={flag.src} 
                    alt="Flag" 
                    width={size} 
                    height={size} 
                />

                {/* Editing Options - Only show when selected */}
                {isEditing && (
                    <div ref={wrapperRef} className="absolute bg-white p-2 shadow-md rounded">
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

export default Flag;
