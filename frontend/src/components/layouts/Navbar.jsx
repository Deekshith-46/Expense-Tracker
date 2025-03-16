import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi"; // Fixed import (HiOutlineX)
import SideMenu from "./SideMenu"; // Ensure SideMenu is correctly imported

const Navbar = ({ activeMenu }) => {
  const [openSideMenu, setOpenSideMenu] = useState(false); // State for toggling SideMenu

  return (
    <div className="flex gap-5 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-30">
      {/* Toggle SideMenu */}
      <button
        className="block lg:hidden text-black"
        onClick={() => setOpenSideMenu(!openSideMenu)}
      >
        {openSideMenu ? (<HiOutlineX className="text-2xl" /> ): (<HiOutlineMenu className="text-2xl" />)}
      </button>

      {/* Navbar title */}
      <h2 className="text-lg font-medium text-black">Expense Tracker</h2>

      {/* Show SideMenu when open */}
      {openSideMenu && (
        <div className="fixed top-[61px] -ml-4 bg-white">
          <SideMenu activeMenu={activeMenu} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
