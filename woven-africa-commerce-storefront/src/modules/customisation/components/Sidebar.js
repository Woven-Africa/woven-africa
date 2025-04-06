import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { FaPaintBrush } from "react-icons/fa";


const Sidebar = ({ setActivePanel, setSelectedImage }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    setActivePanel(option);  
  };
  
  return (
    <div className="w-64 bg-white text-white h-screen flex flex-col justify-between shadow-3xl border-2">
      {/* Logo */}
      <div className="p-6 flex flex-col items-center">
        <div className="flex items-center h-full">
          <LocalizedClientLink
            href="/"
            className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
            data-testid="nav-store-link"
          >
            <Image src="/logo.png" alt="logo" width={40} height={40} />
          </LocalizedClientLink>
        </div>
      </div>
      
      
      {/* Sidebar Options */}
      <div className="flex flex-col space-y-4 mx-4 flex-1">
        {/* <h2 className="text-xl font-bold mb-4"></h2> */}
        <CustomItem text="Customize from Scratch" isSelected={selected === "custom"} onClick={() => handleSelect("custom")} />
        <CustomItem text="Edit Preset Design" isSelected={selected === "preset"} onClick={() => handleSelect("preset")} />
      </div>
      
      {/* Checkout Button */}
      <div className="bg-gray-200 text-black p-4 text-center font-bold cursor-pointer h-32 hover:bg-gray-300">
        <div className="flex justify-center items-center space-x-2">
          <FaShoppingCart />
          <span>CHECKOUT</span>
        </div>
        <p className="text-sm mt-1">PRICE PER STOLE: $35</p>
      </div>
    </div>
  );
};

const CustomItem = ({ icon, text, isSelected, onClick }) => {
  return (
    <div
      className={`px-2 py-4 border-l-4 text-sm text-black border-gray-400 rounded hover:bg-gray-100 cursor-pointer transition-all ${
        isSelected
          ? "!bg-blue-100 border-l-4 !border-blue-500"
          : "hover:bg-gray-100"
      }`}
      onClick={onClick}
    >
      <span className="uppercase">{text}</span>
    </div>
  );
};

export default Sidebar;
