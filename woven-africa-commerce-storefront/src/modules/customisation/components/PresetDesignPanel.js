import { useState } from "react";
import { FaPencilAlt, FaStar, FaUpload, FaPalette, FaGraduationCap, FaShapes, FaFlag } from "react-icons/fa";


const PresetDesignPanel = ({ setThirdSidebarContent, setClear }) => {
    const [selected, setSelected] = useState(null);

    const handleSelect = (option) => {
      setSelected(option);
      
      if (option === "stole") {
        setThirdSidebarContent({
          title: "Choose a STOLE",
          type: "images",
          data: "/images/stoles/bare",
          option: option,
        });
      } else if (option === "bg_color" || option === "stole_color") {
        setThirdSidebarContent({
          type: "colorPicker",
          title: `Pick a ${option === "bg_color" ? "Background" : "Stole"} Color`,
          option: option,
        });
      } else if (option === "symbol" || option === "flag") {
        setThirdSidebarContent({
          type: "images",
          title: `Choose a ${option.toUpperCase()}`,
          data: `/images/${option}s`, // Path to your images folder
          option: option,
        });
      } else if (option === "shape") {
        setThirdSidebarContent({
          type: "shapes",
          title: `Choose a ${option.toUpperCase()}`,
          option: option,
        });
      } else if (option === "upload") {
        setThirdSidebarContent({
          type: "upload",
          title: `Upload an IMAGE`,
          option: option,
        });
      } else if (option === "text") {
        setThirdSidebarContent({
          type: "text",
          title: `Add a TEXT`,
          option: option,
        });
      }
      
    };
    
    return (
      <div className="w-64 bg-white border-l p-4">
        
        {/* PreSet Designs Options */}
        <h3 className="font-bold text-lg mb-3">Preset Design Options</h3>
        <PresetItem icon={<FaGraduationCap />} text="STOLE" isSelected={selected === "stole"} onClick={() => handleSelect("stole")} />
        <PresetItem icon={<FaPalette />} text="BG COLOR" isSelected={selected === "bg_color"} onClick={() => handleSelect("bg_color")} />
        {/* <PresetItem icon={<FaPalette />} text="STOLE COLOR" isSelected={selected === "stole_color"} onClick={() => handleSelect("stole_color")} /> */}
        <PresetItem icon={<FaStar />} text="SYMBOL"  isSelected={selected === "symbol"} onClick={() => handleSelect("symbol")} />
        <PresetItem icon={<FaPencilAlt />} text="TEXT"  isSelected={selected === "text"} onClick={() => handleSelect("text")} />
        <PresetItem icon={<FaShapes />} text="SHAPE"  isSelected={selected === "shape"} onClick={() => handleSelect("shape")} />
        <PresetItem icon={<FaFlag />} text="FLAG"  isSelected={selected === "flag"} onClick={() => handleSelect("flag")} />
        <PresetItem icon={<FaUpload />} text="UPLOAD IMAGE"  isSelected={selected === "upload"} onClick={() => handleSelect("upload")} />
        <button className="w-full mt-4 p-2 bg-red-400 text-white rounded hover:bg-red-500" onClick={() => setClear(true)}>
          Clear Design
        </button>
      </div>
    );
  };
  
  const PresetItem = ({ icon, text, isSelected, onClick }) => {
    return (
        <div
        className={`flex items-center text-sm space-x-2 rounded px-6 py-4 cursor-pointer transition-all ${
          isSelected
            ? "bg-blue-100 border-l-4 border-blue-500 font-bold"
            : "hover:bg-gray-100"
        }`}
        onClick={onClick}
      >
        {icon}
        <span className="uppercase">{text}</span>
      </div>
    );
  };
  
  export default PresetDesignPanel;
  