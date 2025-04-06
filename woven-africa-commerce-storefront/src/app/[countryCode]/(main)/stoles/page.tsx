"use client";

import { useState } from "react";
import Sidebar from "@modules/customisation/components/Sidebar";
import CustomizationPanel from "@modules/customisation/components/CustomizationPanel";
import PresetDesignPanel from "@modules/customisation/components/PresetDesignPanel";
import DraggableCanvas from "@modules/customisation/components/DraggableCanvas";
import ThirdSidebar from "@modules/customisation/components/ThirdSidebar";


export default function Home() {
  const [activePanel, setActivePanel] = useState(null);
  const [thirdSidebarContent, setThirdSidebarContent] = useState(null); 
  const [selectedImage, setSelectedImage] = useState(null); 
  const [selectedStoleColor, setSelectedStoleColor] = useState("#ffffff");
  const [selectedBGColor, setSelectedBGColor] = useState("#e5e7eb");
  const [selectedShape, setSelectedShape] = useState(null);
  const [selectedFlag, setSelectedFlag] = useState(null);
  const [selectedSym, setSelectedSym] = useState(null);
  const [upload, setUpload] = useState(null);
  const [text, setText] = useState("");
  const [clear, setClear] = useState(false);
  
  return (
    <div className="flex h-screen">
      {/* First Sidebar */}
      <Sidebar setActivePanel={setActivePanel} setSelectedImage={setSelectedImage}/>
      
      {/* Second Sidebar */}
      {activePanel === "custom" && <CustomizationPanel setThirdSidebarContent={setThirdSidebarContent} setClear={setClear}/>}
      {activePanel === "preset" && <PresetDesignPanel setThirdSidebarContent={setThirdSidebarContent} setClear={setClear}/>}
      
      {/* Third Sidebar */}
      {thirdSidebarContent && (
        <ThirdSidebar 
            content={thirdSidebarContent} 
            setSelectedImage={setSelectedImage} 
            setSelectedBGColor={setSelectedBGColor} 
            selectedBGColor={selectedBGColor} 
            selectedStoleColor={selectedStoleColor} 
            setSelectedStoleColor={setSelectedStoleColor} 
            setSelectedShape={setSelectedShape} 
            setSelectedFlag={setSelectedFlag} 
            setSelectedSym={setSelectedSym} 
            setUpload={setUpload}
            setText={setText}
        />
      )}

      {/* Canvas */}
      <div className="flex-grow p-4">
        {/* <h1 className="text-xl font-bold mb-4">Stole Customization Tool</h1> */}
        <DraggableCanvas 
            selectedImage={selectedImage} 
            selectedBGColor={selectedBGColor} 
            activePanel={activePanel} 
            selectedStoleColor={selectedStoleColor} 
            selectedShape={selectedShape}
            selectedSym={selectedSym} 
            selectedFlag={selectedFlag} 
            upload={upload}
            submittedText ={text}
            clear={clear}
            
            setSelectedShape={setSelectedShape} 
            setSelectedFlag={setSelectedFlag} 
            setSelectedSym={setSelectedSym} 
            setClear={setClear}
        />
      </div>
    </div>
  );
}
