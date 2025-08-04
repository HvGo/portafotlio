import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BarChart3, Folder, LogOut, User, Settings } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const AdminSidebar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/admin/login');
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
    <div className="bg-gray-900 text-white w-64 hidden md:flex flex-col h-screen sticky top-0">
      <div className="p-5 flex items-center">
        <BarChart3 className="h-7 w-7 text-teal-500 mr-2" />
        <span className="text-xl font-semibold">DataViz Admin</span>
      </div>
      
      <nav className="flex-1 overflow-y-auto">
        <ul className="px-2 py-4">
          {menuItems.map((item) => (
            <li key={item.path} className="mb-2">
              <Link
                to={item.path}
                className={`flex items-center px-4 py-2 rounded-md transition-colors ${
                  location.pathname === item.path
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                {item.icon}
                <span className="ml-3">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-800">
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white rounded-md transition-colors"
        >
          <LogOut className="w-5 h-5" />
          <span className="ml-3">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;