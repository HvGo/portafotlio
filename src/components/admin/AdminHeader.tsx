import React, { useState } from 'react';
import { Menu, X, LogOut, User, BarChart3, Folder, Settings } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const AdminHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    {
      name: 'Projects',
      path: '/admin',
      icon: <Folder className="w-5 h-5" />
    },
    {
      name: 'Profile',
      path: '/admin/profile',
      icon: <User className="w-5 h-5" />
    },
    {
      name: 'Settings',
      path: '/admin/settings',
      icon: <Settings className="w-5 h-5" />
    }
  ];

  return (
    <header className="bg-white shadow-sm z-10">
      <div className="flex justify-between items-center px-4 py-4">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Logo - Mobile Only */}
        <div className="md:hidden flex items-center">
          <BarChart3 className="h-6 w-6 text-teal-600 mr-2" />
          <span className="text-lg font-semibold text-gray-900">DataViz</span>
        </div>

        {/* Admin Info */}
        <div className="hidden md:flex items-center ml-auto">
          <Link to="/admin/profile" className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center mr-2">
              <User className="h-4 w-4 text-teal-600" />
            </div>
            <div>
              <span className="text-sm font-medium text-gray-700">{user?.name || 'Admin'}</span>
            </div>
          </Link>
          
          <div className="ml-4 pl-4 border-l border-gray-200">
            <button
              onClick={handleLogout}
              className="flex items-center text-sm text-gray-600 hover:text-gray-900"
            >
              <LogOut className="h-4 w-4 mr-1" />
              Logout
            </button>
          </div>
        </div>

        {/* View Site Button */}
        <Link
          to="/"
          target="_blank"
          className="px-4 py-1 text-sm text-teal-600 border border-teal-600 rounded-md hover:bg-teal-50 transition-colors"
        >
          View Site
        </Link>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <nav className="py-2">
            <ul>
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="flex items-center px-4 py-3 hover:bg-gray-700"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    <span className="ml-3">{item.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center px-4 py-3 w-full text-left hover:bg-gray-700"
                >
                  <LogOut className="w-5 h-5" />
                  <span className="ml-3">Logout</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default AdminHeader;