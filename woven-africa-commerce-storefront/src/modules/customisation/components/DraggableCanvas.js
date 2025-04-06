import Draggable from "react-draggable";
import { useRef, useState, useEffect, forwardRef } from "react";
import Shape from "./Shape"; 
import Flag from "./Flag"; 
import Upload from "./Upload"; 
import Text from "./Text"; 
import Symbol from "./Symbol"; 
import Preset from "./Preset"; 


const DraggableCanvas = ({setSelectedSym, setSelectedFlag, setSelectedShape, setClear, selectedImage, selectedBGColor, activePanel, selectedStoleColor, selectedShape, selectedFlag, selectedSym, upload, submittedText, clear  }) => {
    const [shapes, setShapes] = useState([]); // Store added shapes
    const [flags, setFlags] = useState([]); // Store added flags
    const [uploadedImage, setUploadedImage] = useState([]); 
    const [texts, setTexts] = useState([]);
    const [symbols, setSymbols] = useState([]);
    const [image, setImage] = useState(null);
    
    // Add selected shape directly to canvas
    useEffect(() => {
      if (selectedShape) {
        setShapes((prevShapes) => [
          ...prevShapes,
          { ...selectedShape, id: Date.now(), color: "#ffffff", size: 50 },
        ]);
        
        setSelectedShape(null);
      }
    }, [selectedShape]); // Runs when selectedShape changes
    
     // Add selected flag to canvas
     useEffect(() => {
      if (selectedFlag) {
        setFlags((prevFlag) => [
          ...prevFlag,
          { src: selectedFlag, id: Date.now(), size: 50 },
        ]);
        
        setSelectedFlag(null);
      }
    }, [selectedFlag]);
    
    // Handle image upload
    useEffect(() => {
      if (upload) {
        setUploadedImage((prevUpload) => [
          ...prevUpload,
        {
          src: upload, // The uploaded image URL
          id: Date.now(),
          size: 100,
        }
        ]);
      }
    }, [upload]); // Runs when `upload` changes
    
    // Add text when submitted
    useEffect(() => {
      if (submittedText) {
        setTexts((prevTexts) => [
          ...prevTexts,
          { id: Date.now(), content: submittedText },
        ]);
      }
    }, [submittedText]);
    
    
    // Add selected symbol directly to canvas
    useEffect(() => {    
      if (selectedSym) {
        // Get symbol path
        fetch("/images/symbols.json")
        .then((res) => res.json())
        .then((data) => {
          
          // Add to symbol list
          setSymbols((prevSym) => [
            ...prevSym,
            { path: data[selectedSym], id: Date.now(), size: data[selectedSym].type === "polygon" ? 500 : 80,},
          ]);
        
        })
        .catch((err) => console.error("Error loading images:", err));
        
        setSelectedSym(null);
      }
    }, [selectedSym]);
    
    
     // Add stole properties to canvas
     useEffect(() => {    
      if (selectedImage) {
        // Get stole properties
        fetch("/images/preset.json")
        .then((res) => res.json())
        .then((data) => {
          
          // Add to symbol list
          setImage(data[selectedImage]);
        })
        .catch((err) => console.error("Error loading images:", err));
  
      }
    }, [selectedImage]);
    
    
    // Clear canvas
    useEffect(() => {
      if (clear) {
        setFlags([]);
        setSymbols([]);
        setTexts([]);
        setUploadedImage([]);
        setShapes([]);
        
        setClear(false);
      }
    }, [clear]);    
    
    return (
        <div className="w-full h-full bg-gray-200 flex justify-center items-center" style={{ backgroundColor: selectedBGColor }}>
          
          {/* For both */}
          <div className="text-center">
            {/* Render Selected Shapes */}
            {shapes.map((shape) => (
              <Shape key={shape.id} shape={shape} onDelete={() => setShapes(shapes.filter((s) => s.id !== shape.id))} />
            ))}
            
            {/* Render Selected Symbol */}
            {symbols.map((sym) => (
              <Symbol key={sym.id} symbol={sym} onDelete={() => setSymbols(symbols.filter((s) => s.id !== sym.id))} />
            ))}
            
            {/* Render Selected Flags */}
            {flags.map((flag) => (
              <Flag key={flag.id} flag={flag} onDelete={() => setFlags(flags.filter((s) => s.id !== flag.id))} />
            ))}
            
            {/* Render Uploaded Image */}
            {uploadedImage.map((upload_new) => (
              <Upload key={upload_new.id} upload={upload_new} onDelete={() => setUploadedImage(uploadedImage.filter((s) => s.id !== upload_new.id))} />
            ))}
            
            {/* Render Texts */}
            {texts.map((text) => (
              <Text
                key={text.id}
                text={text.content}
                onDelete={() => setTexts(texts.filter((t) => t.id !== text.id))}
              />
            ))}
          </div>

           
          {activePanel === "preset" && selectedImage ? 
            (
              // For Preset Tools only
              // <img src={selectedImage} alt="Selected Stole" className="max-w-screen max-h-screen p-16" />
              
              <Preset
                svg={image}
              />
            
            
            ) : activePanel === "custom" ? (  
            
              // For Customiszation Tools only              
              <div className="block text-center m-auto">      
                
                {/* render stole without design */}
                <svg
                  width="150%"
                  height="150%"
                  viewBox="30 0 382.08 562.32"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <defs>
                    <filter id="shadow" x="-10%" y="-10%" width="140%" height="140%">
                      <feDropShadow dx="4" dy="4" stdDeviation="4" floodOpacity="0.5"/>
                    </filter>
                  </defs>
                  {/* Stole Shape */}
                  <g xmlns="http://www.w3.org/2000/svg" id="ad58f192-b126-4df7-82c2-5689d2a711a8" data-name="Layer 1">
                     <path 
                      fill={selectedStoleColor}  
                      stroke="black"
                      strokeWidth="0.2"
                      filter="url(#shadow)"
                      className="base-stole ecf11356-f0ef-42db-badf-3e4db2eb2c80" d="M345.71,518.27H233.35C238.6,384.62,244,250.28,249,116.61c.38-10.3-1.12-38.12-1.63-42.65-1.63-14.38-6.19-28.5-4.54-43.23,9.28-.1,86.83,43.19,87.28,57.68C334.06,211.86,346.33,516.33,345.71,518.27Z"
                      />
                    
                     <path 
                      fill={selectedStoleColor}  
                      stroke="black"
                      strokeWidth="0.2"
                      filter="url(#shadow)"
                      className="base-stole ecf11356-f0ef-42db-badf-3e4db2eb2c80" d="M36,518.27H148.34c-5.26-133.65-10.68-268-15.65-401.66-.39-10.3,1.11-38.12,1.63-42.65,1.63-14.38,6.18-28.5,4.54-43.23-9.29-.1-86.83,43.19-87.29,57.68C47.63,211.86,35.36,516.33,36,518.27Z"
                      />
            
                     <path 
                      d="M193.71,85.54c22.1,0,54.79,0,54.79,0s-3.37-35.14-5.67-54.77c-.17-5-38.6-.94-52-.3-13.38-.64-51.81-4.67-52,.3-2.3,19.63-5.67,54.77-5.67,54.77s32.88,0,54.79,0h5.73Z"
                     />   
                     
                  </g>
                </svg>
              </div>
            ) : (
              <p>Start Customizing</p>
            )
          }
        </div>
    );
};

export default DraggableCanvas;
