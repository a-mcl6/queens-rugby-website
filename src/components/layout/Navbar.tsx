import React from "react";
import logo from '../../assets/images/logo.webp';
import {Link} from "react-router-dom";
import { primaryNavigation } from "../../data/navigation";

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

          {/* Navigation */}
          <nav className="flex-1 flex justify-center" aria-label="Primary Navigation">
            <ul className="hidden md:flex space-x-10">

              {primaryNavigation.map((item) => (
                <li key={item.label} className="relative group">

                  {item.children ? (
                    <>
                      <button
                        aria-haspopup="true"
                        className="flex items-center gap-2 text-white uppercase tracking-widest text-sm font-medium"
                      >
                        {item.label}
                        <svg className="w-3 h-3 transition-transform group-hover:rotate-180" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                        </svg>
                      </button>

                      <ul className="absolute left-0 mt-2 w-56 bg-white text-gray-800 rounded shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity z-50">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              to={child.to!}
                              className="block px-4 py-2 hover:bg-gray-100"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      to={item.to!}
                      className="text-white uppercase tracking-widest text-sm font-medium"
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;