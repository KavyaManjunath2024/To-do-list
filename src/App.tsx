import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import NavigationDrawer from './components/NavigationDrawer';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import About from './pages/About';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Tasks':
        return <Tasks />;
      case 'About':
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-[#ecf0f1]">
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="fixed left-5 top-5 z-30 rounded-md bg-white p-2 text-[#2c3e50] shadow-md lg:hidden"
      >
        <Menu size={30} />
      </button>

      {/* Navigation Drawer */}
      <NavigationDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        currentPage={currentPage}
        onNavigate={setCurrentPage}
      />

      {/* Main Content */}
      <div className="lg:ml-[250px]">
        <main className="min-h-screen p-4">{renderPage()}</main>
      </div>
    </div>
  );
}

export default App;