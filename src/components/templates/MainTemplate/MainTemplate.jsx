import React from 'react'
import Footer from '../../organisms/Footer/Footer';
import Navbar from '../../organisms/Navbar/Navbar';
import "./MainTemplate.css"

const MainTemplate = ({ children }) => {
    return (
      <div className="main-template">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    );
  };
export default MainTemplate
