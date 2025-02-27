import React, { useState } from 'react';
import './App.css'; 
import HomePage from './components/HomePage';
import OverviewPage from './components/OverviewPage';
import StatsPage from './components/StatsPage';
import ArchivedProjectsPage from './components/ArchivedProjectsPage';
import SettingsPage from './components/SettingsPage';
import ActiveProjectsPage from './components/ActiveProjectsPage';
import Sidebar from './components/side-bar/SideNavbar';


const App = () => {
  const [currentPage, setCurrentPage] = useState('Home');

  const handleMenuSelect = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage />;
      case 'Overview':
        return <OverviewPage />;
      case 'Stats':
        return <StatsPage />;
      case 'Active':
        return <ActiveProjectsPage />;
      case 'Archived':
        return <ArchivedProjectsPage />;
      case 'Settings':
        return <SettingsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="flex w-screen">
      <Sidebar onMenuSelect={handleMenuSelect} />
      <div className="flex-1 bg-gray-100 h-screen overflow-auto">
        {renderPage()}
      </div>
    </div>
  );
};

export default App;