import React from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const NavigationDrawer: React.FC<NavigationDrawerProps> = ({
  isOpen,
  onClose,
  currentPage,
  onNavigate,
}) => {
  const handleNavigation = (page: string) => {
    onNavigate(page);
    onClose();
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-[#2c3e50] text-[#ecf0f1] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        <div className="p-5 flex justify-between items-center lg:hidden">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={onClose} className="text-[#ecf0f1]">
            <X size={24} />
          </button>
        </div>

        <nav className="p-5">
          {['Home', 'Tasks', 'About'].map((item) => (
            <button
              key={item}
              onClick={() => handleNavigation(item)}
              className={`w-full text-left py-3 px-4 text-lg transition-colors duration-300 hover:bg-[#34495e] rounded ${
                currentPage === item ? 'bg-[#34495e]' : ''
              }`}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};

export default NavigationDrawer;