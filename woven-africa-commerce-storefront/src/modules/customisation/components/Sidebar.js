import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image"
import LocalizedClientLink from "@modules/common/components/localized-client-link"


const Sidebar = ({ setActivePanel, setSelectedImage }) => {

  const handleSelect = (option) => {
    setActivePanel(option);  
  };
  
  return (
    <div className="w-64 bg-gray-900 text-white h-screen flex flex-col justify-between">
      {/* Logo */}
      <div className="p-6 flex flex-col items-center">
      <div className="flex items-center h-full">
          <LocalizedClientLink
            href="/"
            className="txt-compact-xlarge-plus hover:text-ui-fg-base uppercase"
            data-testid="nav-store-link"
          >
            <Image src="/logo-white.png" alt="logo" width={70} height={70} />
          </LocalizedClientLink>
        </div>
      </div>
      
      
      {/* Sidebar Options */}
      <div className="flex flex-col space-y-4 mx-4 flex-1">
        {/* <h2 className="text-xl font-bold mb-4"></h2> */}
        <button 
          className="bg-blue-500 text-white p-2 mb-2 rounded"
          onClick={() => handleSelect("custom")}
        >
          Customize from Scratch
        </button>
        <button 
          className="bg-green-500 text-white p-2 rounded"
          onClick={() => handleSelect("preset")}
        >
          Edit Preset Design
        </button>
      </div>
      
      {/* Checkout Button */}
      <div className="bg-blue-600 text-white p-4 text-center cursor-pointer h-32">
        <div className="flex justify-center items-center space-x-2">
          <FaShoppingCart />
          <span>CHECKOUT</span>
        </div>
        <p className="text-sm mt-1">PRICE PER STOLE: $35</p>
      </div>
    </div>
  );
};

export default Sidebar;
