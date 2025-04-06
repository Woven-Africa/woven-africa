import Draggable from "react-draggable";
import { useState, useRef, useEffect } from "react";
import { FaEye} from  "react-icons/fa";

const Preset = ({ svg }) => {
    // Generate an array of default colors based on each component in the svg
    // console.log("Outer length:", svg?.length);
    
    
    // setting up the colors
    const [colors, setColors] = useState([]);

      useEffect(() => {
        if (svg){       
            const extractedColors = svg.map(inner => inner[0]);
            setColors(extractedColors);
        }
      }, [svg]);
      
    const [isEditing, setIsEditing] = useState(false);
    const nodeRef = useRef(null);
    const wrapperRef = useRef(null);
    
    const handleColorChange = (index, newColor) => {
        setColors(prevColors =>
            prevColors.map((color, i) => (i === index ? newColor : color))
        );
    };
    
    const handleHide = (groupIndex) => {
        if (colors[groupIndex] == colors[1]){
            handleColorChange(groupIndex, svg[groupIndex][0])  
        } else{
            handleColorChange(groupIndex, colors[1]) 
        }
    }

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
        <>  
            {/* Show editing toolbar */}
            {isEditing && (
                <div ref={wrapperRef} className="absolute top-[100px] left-[800px] bg-white p-2 shadow-md rounded z-10">
                    {/* Generate color pickers for each path */}
                    {colors.map((color, index) => (
                        <div className="flex gap-3 ">
                            <div key={index} className="mt-2 inline ">
                                <label className="block text-sm ">Color {index + 1}</label>
                                <input
                                    type="color"
                                    value={color}
                                    onChange={(e) => handleColorChange(index, e.target.value)}
                                    className="cursor-pointer"
                                />
                            </div>
                            
                            <div className="mt-2 inline">
                                <label className="block text-sm">Hide</label>
                                <div onClick={() => handleHide(index)} className=" flex justify-center mt-1 cursor-pointer">
                                    <FaEye />
                                </div> 
                            </div>
                        </div>
                    ))}
                </div>
            )}
        
            {Array.isArray(svg) &&             
                svg.map((paths, groupIndex) => 
                    // <Draggable nodeRef={nodeRef}>
                        <div ref={nodeRef} className="absolute cursor-pointer" onClick={() => setIsEditing(true)}>
                            <svg
                                width="150%"
                                height="150%"
                                viewBox="30 0 382.08 562.32"
                                xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="xMidYMid meet"
                            >  
                                <g>
                                    {
                                        Array.isArray(paths)
                                        ? paths.slice(1).map((path, pathIndex) => (
                                            <path
                                              key={`${groupIndex}-${pathIndex}`}
                                              fill={colors[groupIndex] || paths[0]}
                                              d={path}
                                            />
                                          ))
                                        : null
                                    }
                                </g>                          
                            </svg> 
                        </div>
                    // </Draggable>
                )        
            }   

        </>
    );
};

export default Preset;
