import { useEffect, useState } from "react";
import { SketchPicker } from "react-color";


const ThirdSidebar = ({ content, setSelectedImage, setSelectedBGColor, selectedBGColor, setSelectedStoleColor, selectedStoleColor, setSelectedShape, setSelectedSymFlag, setUpload, setText }) => {
  const [imageList, setImageList] = useState([]);
  const [shapesData, setShapeData] = useState([]);
  const [textInput, setTextInput] = useState(""); 
  
  useEffect(() => {
      // Get available shapes
      if (content.type === "shapes"){
        fetch("/images/shapes.json")
        .then((res) => res.json())
        .then((data) => {
          setShapeData(data || []);
        })
        .catch((err) => console.error("Error loading images:", err));
      }
      else if (content.type === "images") {
       // Get available images
          fetch("/images/images.json")
            .then((res) => res.json())
            .then((data) => {
              setImageList(data[content.option] || []);
            })
            .catch((err) => console.error("Error loading images:", err));
        }
    }, [content.type, content.option]);    
    
    // Upload new image
    const handleImageUpload = (e) => {
      const file = e.target.files[0]; // Get the first selected file
      if (file) {
        const fileURL = URL.createObjectURL(file); // Create a temporary URL for the uploaded file
        setUpload(fileURL); // Set the uploaded image URL
      }
    };
  
    return (
      <div className="w-64 bg-gray-800 text-white p-4 overflow-y-auto">

        <h2 className="text-lg font-bold mb-4">{content.title}</h2>
        
        {content.type === "colorPicker" ? (
            content.option === "bg_color" ? (
              <SketchPicker
                color={selectedBGColor}
                onChange={(color) => setSelectedBGColor(color.hex)}
                className="text-black"
              />
            ) : (
              <SketchPicker
                color={selectedStoleColor}
                onChange={(color) => setSelectedStoleColor(color.hex)}
                className="text-black"
              />
            )
          ) : content.type === "images" ? (
            content.option === "background" ? (
              // Background Images Grid
              <div className="grid grid-cols-2 gap-2">
                {imageList.length > 0 && (
                    imageList.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Option ${index}`}
                        className="cursor-pointer w-full h-auto"
                        onClick={() => setSelectedImage(img)}
                      />
                    ))
                  )
                }
              </div>
            ) : (
              // General Images Grid
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 p-2 overflow-auto">
                {imageList.length > 0 ? (
                  imageList.map((img, index) => {
                    // Extract filename from URL
                    const imageName = img.split("/").pop().split(".")[0];
          
                    return (
                      <div>
                        <div key={index} className="bg-white shadow-md rounded-md p-3 overflow-hidden">
                          <img
                            key={index}
                            src={img}
                            alt={imageName}
                            onClick={() => setSelectedSymFlag(img)}
                            className="w-full h-auto object-cover aspect-[3/3] cursor-pointer transition-transform duration-300 hover:scale-105"
                          />
                          <p className="text-center text-gray-600 text-[10px] mt-2"></p>
                        </div>
                        <p className="text-center text-white text-[10px] mt-2">{imageName}</p>
                      </div>
                    );
                  })
                ) : (
                  <p className="col-span-full text-gray-500">No images available.</p>
                )}
              </div>
            )
          ) : content.type === "shapes" ? ( // display alll shapes in the shapes json
            <div className="bg-gray-800 text-white">
              <div className="flex flex-col gap-2">
                {shapesData.map((shape) => (
                  <button
                    key={shape.id}
                    onClick={() => setSelectedShape(shape)}
                    className="bg-gray-600 hover:bg-gray-700 p-2 rounded"
                  >
                    {shape.label}
                  </button>
                ))}
              </div>
            </div>
          ) : content.type === "upload" ? (
            <div className="upload-container">    
              {/* File input to select image */}
              <input
                type="file"
                accept="image/*" // Accepts all image types
                onChange={handleImageUpload} // Handle the file selection
                style={{ display: "none" }} // Hide the file input
                id="imageUploadInput"
              />
              
              {/* Trigger the file input when the button is clicked */}
              <label
                htmlFor="imageUploadInput"
                className="cursor-pointer block !text-[14px] py-2 px-4 bg-blue-500 text-white rounded-md text-center hover:bg-blue-600 transition-all duration-300"
              >
                Click to select an image
              </label>
            </div>
          ) : content.type === "text" ? (
            <div>
              <input
                  type="text"
                  placeholder="Enter text"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  className="border text-black p-2 rounded w-full"
              />
              <button
                onClick={() => setText(textInput)}
                className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white px-4 py-2 rounded mt-2"
              >
                Add to Canvas
              </button>
            </div>
          ) : null}
      </div>
    );
  };
  
  export default ThirdSidebar;
  