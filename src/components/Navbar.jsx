import React, { useState } from 'react'; 
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Read search query directly from URL (No extra state/effects needed)
  const queryParams = new URLSearchParams(location.search);
  const searchValue = queryParams.get('q') || "";

  const handleSearch = (e) => {
    const query = e.target.value;
    if (query) {
      navigate(`/shop?q=${query}`);
    } else {
      queryParams.delete('q');
      const newSearch = queryParams.toString();
      navigate(`/shop${newSearch ? `?${newSearch}` : ''}`);
    }
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-tighter text-black">
            TECHSPIRE
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-baseline space-x-8">
            <Link to="/shop" className="text-sm font-medium text-gray-700 hover:text-black">Shop</Link>
            
            {/* Categories Dropdown */}
            <div className="group relative">
              <button className="flex items-center text-sm font-medium text-gray-700 hover:text-black focus:outline-none">
                Categories <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {/* Dropdown Menu */}
              <div className="absolute left-0 hidden w-48 pt-4 group-hover:block">
                <div className="rounded-xl border border-gray-100 bg-white shadow-xl py-2">
                  <Link to="/shop?category=Workstations" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Workstations</Link>
                  <Link to="/shop?category=Accessories" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Accessories</Link>
                  <Link to="/shop?category=Displays" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Displays</Link>
                  <Link to="/shop?category=Tools" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Tools</Link>
                </div>
              </div>
            </div>
            
            <Link to="/support" className="text-sm font-medium text-gray-700 hover:text-black">Support</Link>
          </div>

          {/* Icons & Search */}
          <div className="flex items-center gap-x-4">
            {/* Desktop Search */}
            <div className="relative hidden lg:block">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchValue}
                onChange={handleSearch}
                className="h-9 w-64 rounded-full border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black"
              />
            </div>

            <Link to="/auth" className="p-2 text-gray-600 hover:text-black">
              <User className="h-5 w-5" />
            </Link>

            <button className="relative p-2 text-gray-600 hover:text-black">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
                0
              </span>
            </button>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 md:hidden text-gray-600 hover:text-black">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Content */}
      {isOpen && (
        <div className="md:hidden border-t bg-white px-4 pb-6 pt-2 space-y-1">
          <Link to="/shop" onClick={closeMenu} className="block rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50">Shop</Link>
          <div className="pl-4 space-y-1 border-l-2 border-gray-100 ml-3">
             <Link to="/shop?category=Workstations" onClick={closeMenu} className="block px-3 py-2 text-sm text-gray-500 hover:text-black">Workstations</Link>
             <Link to="/shop?category=Accessories" onClick={closeMenu} className="block px-3 py-2 text-sm text-gray-500 hover:text-black">Accessories</Link>
             <Link to="/shop?category=Displays" onClick={closeMenu} className="block px-3 py-2 text-sm text-gray-500 hover:text-black">Displays</Link>
          </div>
          <Link to="/support" onClick={closeMenu} className="block rounded-md px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50">Support</Link>
          
          <div className="relative mt-4 px-3">
            <Search className="absolute left-6 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={handleSearch}
              className="h-10 w-full rounded-xl border border-gray-200 bg-gray-50 pl-10 pr-4 text-sm focus:outline-none"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;