import React from 'react';
import { Menu, X } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../store/uiSlice';
import type { RootState } from '../store/store';

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state: RootState) => state.ui.isMenuOpen);

  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">CompanyName</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-gray-900">Testimonials</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                Get Started
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => dispatch(toggleMenu())}
              className="text-gray-600 hover:text-gray-900"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Features</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Testimonials</a>
            <a href="#pricing" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Pricing</a>
            <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;