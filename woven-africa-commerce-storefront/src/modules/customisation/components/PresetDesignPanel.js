import { useState } from "react";
import { FaPencilAlt, FaStar, FaUpload, FaPalette } from "react-icons/fa";


const PresetDesignPanel = ({ setThirdSidebarContent }) => {
    const [selected, setSelected] = useState(null);

    const handleSelect = (option) => {
      setSelected(option);
      
      if (option === "background") {
        setThirdSidebarContent({
          title: "Choose a Background",
          type: "images",
          data: "/images/stoles/bare",
          option: option,
        });
      }
    };
    
    return (
      <div className="w-64 bg-white border-l p-4">
        
        {/* PreSet Designs Options */}
        <h3 className="font-bold text-lg mb-3">Preset Design Options</h3>
        <PresetItem icon={<FaPalette />} text="BACKGROUND" isSelected={selected === "background"} onClick={() => handleSelect("background")} />
        <PresetItem icon={<FaPalette />} text="STRIPE COLOR" isSelected={selected === "stripe"} onClick={() => handleSelect("stripe")} />
        <PresetItem icon={<FaStar />} text="SYMBOL"  isSelected={selected === "symbol"} onClick={() => handleSelect("symbol")} />
        <PresetItem icon={<FaPencilAlt />} text="TEXT"  isSelected={selected === "text"} onClick={() => handleSelect("text")} />
        <PresetItem icon={<FaUpload />} text="UPLOAD LOGO"  isSelected={selected === "upload"} onClick={() => handleSelect("upload")} />
      </div>
    );
  };
  
  const PresetItem = ({ icon, text, isSelected, onClick }) => {
    return (
        <div
        className={`flex items-center space-x-2 px-6 py-4 cursor-pointer transition-all ${
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
  