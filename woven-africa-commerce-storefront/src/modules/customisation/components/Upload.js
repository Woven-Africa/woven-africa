import Draggable from "react-draggable";
import { useState, useRef, useEffect } from "react";

const Upload = ({ upload, onDelete }) => {
    const [size, setSize] = useState(upload.size);
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
            <div ref={nodeRef} className="absolute z-20 cursor-move" onClick={() => setIsEditing(true)}>
                {/* Render Symbol */}
                <img 
                    src={upload.src} 
                    alt="Symbol" 
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

export default Upload;
