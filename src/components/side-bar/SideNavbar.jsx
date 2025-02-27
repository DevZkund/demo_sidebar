import React, { useState } from 'react';
import { FiChevronRight, FiChevronLeft, FiHome, FiSettings, FiGrid, FiFolder } from 'react-icons/fi';

const menuItems = [
  { id: 1, title: 'Home', icon: <FiHome /> },
  { id: 2, title: 'Dashboard', icon: <FiGrid />, submenu: ['Overview', 'Stats'] },
  { id: 3, title: 'Projects', icon: <FiFolder />, submenu: ['Active', 'Archived'] },
  { id: 4, title: 'Settings', icon: <FiSettings /> }
];

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const toggleSidebar = () => setIsExpanded(!isExpanded);

  const handleMenuClick = (item) => {
    if (item.submenu) {
      setActiveSubmenu(activeSubmenu === item.id ? null : item.id);
    } else {
      setActiveSubmenu(null);
    }
  };

  const handleSubmenuClick = () => setActiveSubmenu(null);

  return (
    <div className="flex">
      <div className={`bg-gray-800 text-white ${isExpanded ? 'w-60' : 'w-16'} h-screen transition-all duration-300 relative`}>
        <button
          className="absolute top-1/2  right-[-10px] bg-gray-800 py-6 rounded-full"
          onClick={toggleSidebar}
        >
          {isExpanded ? <FiChevronLeft /> : <FiChevronRight />}
        </button>
        <ul className="mt-10">
          {menuItems.map((item) => (
            <li key={item.id} className="flex items-center p-2 hover:bg-gray-700 cursor-pointer" onClick={() => handleMenuClick(item)}>
              {item.icon}
              {isExpanded && <span className="ml-4">{item.title}</span>}
            </li>
          ))}
        </ul>
      </div>

      {activeSubmenu && (
        <div className="bg-gray-700 text-white w-40 h-screen">
          <ul>
            {menuItems.find((item) => item.id === activeSubmenu)?.submenu.map((subItem) => (
              <li key={subItem} className="p-2 hover:bg-gray-600 cursor-pointer" onClick={handleSubmenuClick}>
                {subItem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
