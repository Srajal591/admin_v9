// import React from 'react';
// import { 
//   FaHome, 
//   FaBox, 
//   FaShoppingCart, 
//   FaCog, 
//   FaMoon, 
//   FaSun 
// } from 'react-icons/fa';

// function Sidebar({ activeSection, setActiveSection, darkMode, toggleDarkMode }) {
//   return (
//     <div className="sidebar">
//       <div className="logo">
//         <h2>𝓥𝟡 Web Controller</h2>
//       </div>
//       <nav className="nav-menu">
//         <ul>
//           <li 
//             className={activeSection === 'dashboard' ? 'active' : ''}
//             onClick={() => setActiveSection('dashboard')}
//           >
//             <FaHome /> Dashboard
//           </li>
//           <li 
//             className={activeSection === 'products' ? 'active' : ''}
//             onClick={() => setActiveSection('products')}
//           >
//             <FaBox /> Product Management
//           </li>
//           <li 
//             className={activeSection === 'orders' ? 'active' : ''}
//             onClick={() => setActiveSection('orders')}
//           >
//             <FaShoppingCart /> Order Section
//           </li>
//           <li 
//             className={activeSection === 'settings' ? 'active' : ''}
//             onClick={() => setActiveSection('settings')}
//           >
//             <FaCog /> Settings
//           </li>
//         </ul>
//       </nav>
//       <div className="dark-mode-toggle" onClick={toggleDarkMode}>
//         {darkMode ? <FaSun /> : <FaMoon />}
//         <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;



//Sidebar.jsx
"use client";

import React, { useState, useEffect } from 'react';
import { 
  FaHome, 
  FaBox, 
  FaShoppingCart, 
  FaCog, 
  FaMoon, 
  FaSun, 
  FaBars, 
  FaTimes 
} from 'react-icons/fa';

function Sidebar({ activeSection, setActiveSection, darkMode, toggleDarkMode }) {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Responsive listener
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Check once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderMenu = () => (
    <ul className="nav-menu-items">
      <li className={activeSection === 'dashboard' ? 'active' : ''} onClick={() => setActiveSection('dashboard')}>
        <FaHome /> Dashboard
      </li>
      <li className={activeSection === 'products' ? 'active' : ''} onClick={() => setActiveSection('products')}>
        <FaBox /> Product Management
      </li>
      <li className={activeSection === 'orders' ? 'active' : ''} onClick={() => setActiveSection('orders')}>
        <FaShoppingCart /> Order Section
      </li>
      <li className={activeSection === 'settings' ? 'active' : ''} onClick={() => setActiveSection('settings')}>
        <FaCog /> Settings
      </li>
      <li className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? <FaSun /> : <FaMoon />}
        <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
      </li>
    </ul>
  );

  return (
    <>
      {/* Mobile Top Nav */}
      {isMobile ? (
        <div className="mobile-navbar">
          <h2 className="mobile-logo">𝓥𝟡 Admin Panel</h2>
          <button className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          {menuOpen && <div className="mobile-menu">{renderMenu()}</div>}
        </div>
      ) : (
        // Desktop Sidebar
        <div className="sidebar">
          <div className="logo">
            <h2>𝓥𝟡 Admin Panel</h2>
          </div>
          <nav className="nav-menu">
            {renderMenu()}
          </nav>
        </div>
      )}
    </>
  );
}

export default Sidebar;
