import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './components/layout/Sidebar';
import { TopNav } from './components/layout/TopNav';
import { useState } from 'react';
import { useDarkMode } from './context/DarkModeContext';

export const MainLayout: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const activeItem = location.pathname;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <TopNav 
        onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
        isDarkMode={isDarkMode} 
        toggleDarkMode={toggleDarkMode} 
      />
      
      <div className="flex h-[calc(100vh-4rem)]">
        <Sidebar 
          isOpen={isSidebarOpen} 
          onToggle={() => setIsSidebarOpen(!isSidebarOpen)} 
          activeItem={activeItem} 
        />
        
        <main className={`flex-1 overflow-y-auto p-6 ${isSidebarOpen ? 'ml-64' : 'ml-16'} transition-all duration-300`}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};