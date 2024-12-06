import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`fixed md:static overflow-y-auto mt-0 left-0 bg-gray-800 text-white w-64 p-3 transition-all 
          duration-500 
          ease-in-out transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 h-full`}
      >
        <ul className="space-y-4 top-15">
          {/* Home Link */}
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link
              to="/home"
              className="block w-full h-full"
              onClick={closeSidebar}
            >
              Home
            </Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link
              to="/users"
              className="block w-full h-full"
              onClick={closeSidebar}
            >
              User Management
            </Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link
              to="/roles"
              className="block w-full h-full"
              onClick={closeSidebar}
            >
              Role Management
            </Link>
          </li>
          <li className="hover:bg-gray-700 p-2 rounded">
            <Link
              to="/permissions"
              className="block w-full h-full"
              onClick={closeSidebar}
            >
              Permission Management
            </Link>
          </li>
        </ul>
      </div>

      {/* Toggle Button for Mobile */}
      <button
        className="md:hidden text-black p-1 mt-2 top-15 rounded fixed bg-white right-2 border border-gray-300"
        onClick={toggleSidebar}
      >
        {isOpen ? "Close" : "Menu"}
      </button>
    </div>
  );
};

export default Sidebar;
