import React, { useState } from 'react';
import './header.css';
import imageHeader from '../../images/logo.png';

const Header = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={imageHeader} alt="Logo" />
      </div>
      <div className="user-info">
        <h3>اهلا وسهلا بك محمد محمد</h3>
      </div>
      <div className="avatar-container" onClick={toggleMenu}>
        <div className="avatar"></div>
        {isMenuVisible && (
          <div className="dropdown-menu">
            <ul>
              <li>تغير كلمة السر</li>
              <li>تسجيل خروج</li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
