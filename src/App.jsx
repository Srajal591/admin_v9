import React, { useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';
import ProductManagement from './Components/ProductManagement';
import OrderSection from './Components/OrderSection';
import Settings from './Components/Settings';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Sidebar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <main className="main-content">
        {activeSection === 'dashboard' && <Dashboard />}
        {activeSection === 'products' && <ProductManagement />}
        {activeSection === 'orders' && <OrderSection />}
        {activeSection === 'settings' && <Settings />}
      </main>
    </div>
  );
}

export default App;