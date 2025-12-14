import React from "react";
import logo from '../../assets/images/logo.webp';
import {Link} from "react-router-dom";

// Navbar component: a full-width navigation bar at the top of the page
// Full-width div, fixed to top, with transparent background so it sits over hero
// Layout split: left area = links (takes remaining space), right area = logo (fixed %)
const Navbar: React.FC = () => {
  return (
    <header role="banner" className="w-full fixed top-0 z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-36 flex items-center">
            
            {/* LOGO: occupies the last X% of the navbar.
              Change `w-[15%]` to your desired percentage (e.g. w-[20%], md:w-[12%], etc.)
              Keeps image height the same as before via existing class. */}
          <div className="flex-shrink-0 w-[15%] flex items-center justify-left">
            <img className="h-24 w-auto" src={logo} alt="QUBRFC Logo" />
          </div>

          {/* LINKS: take remaining space and center their content */}
          <div className="flex-1 flex items-center justify-center">
            <nav aria-label="Primary Navigation">
              <ul className="hidden md:flex space-x-10">
                {/* Our Club dropdown */}
                <li className="relative group">
                  <button
                    aria-haspopup="true"
                    className="flex items-center text-white uppercase tracking-widest text-sm font-medium gap-2"
                  >
                    Our Club
                    <svg
                      className="w-3 h-3 transform transition-transform duration-200 group-hover:rotate-180"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </button>
                  
                  {/* dropdown panel - appears on hover or focus */}
                  <ul
                    className="absolute left-0 mt-2 w-56 bg-white text-gray-800 rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:pointer-events-auto transition-opacity z-50"
                    role="menu"
                    aria-label="Our Club submenu"
                  >
                    <li role="none">
                      <Link to="/membership" role="menuitem" className="block px-4 py-2 hover:bg-gray-100">Membership</Link>
                    </li>
                    <li role="none">
                      <Link to="/coaching-team" role="menuitem" className="block px-4 py-2 hover:bg-gray-100">Coaching Team</Link>
                    </li>
                    <li role="none">
                      <Link to="/your-wellbeing" role="menuitem" className="block px-4 py-2 hover:bg-gray-100">Club Wellbeing and Support</Link>
                    </li>
                  </ul>
                </li>
                 <li><Link to="/teams" className="text-white uppercase tracking-widest text-sm font-medium">Teams</Link></li>
                 <li><Link to="/club-news" className="text-white uppercase tracking-widest text-sm font-medium">Club News</Link></li>
                 <li><Link to="/our-history" className="text-white uppercase tracking-widest text-sm font-medium">Our History</Link></li>
                 <li><Link to="/jack-kyle-foundation" className="text-white uppercase tracking-widest text-sm font-medium">Jack Kyle Foundation</Link></li>
                 <li><Link to="/join-us" className="text-white uppercase tracking-widest text-sm font-medium">Join Us</Link></li>
                 <li><Link to="/scholarship-support" className="text-white uppercase tracking-widest text-sm font-medium">Scholarship Support</Link></li>
              </ul>
            </nav>
          </div>

          {/* Mobile hamburger (kept outside split so it overlays appropriately) */}
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 md:hidden">
            <button className="p-2 text-white" aria-label="Open menu">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;