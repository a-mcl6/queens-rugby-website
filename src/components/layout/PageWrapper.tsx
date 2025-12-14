import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
//import useScrollToTop from '../../hooks/useScrollToTop';

interface PageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<PageWrapperProps> = ({ children }) => {
  //useScrollToTop();

  return (
    <>
      <Navbar />
      <main className="pmt-0">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default PageWrapper;
