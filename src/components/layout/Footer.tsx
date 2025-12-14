import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Club info */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide">
              QUB Rugby Football Club
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Queen’s University Belfast RFC
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="space-y-2 text-sm">
              <li><Link to="/membership">Membership</Link></li>
              <li><Link to="/club-news">Club News</Link></li>
              <li><Link to="/ourhistory">Our History</Link></li>
              <li><Link to="/joinus">Join Us</Link></li>
            </ul>
          </nav>

          {/* Legal */}
          <div className="text-sm text-slate-400">
            <p>&copy; {new Date().getFullYear()} QUB RFC</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
