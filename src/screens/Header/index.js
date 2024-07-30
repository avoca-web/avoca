import React from 'react';
import './style.css';
import logo from '../../images/logo.png';
import phone1 from '../../images/phone1.png';
import phone2 from '../../images/phone2.png';
import downloadIcon from '../../images/download.png';

function Header() {
  return (
    <header className="he-mainpage">
      <div className="he-logo-container">
        <img src={logo} alt="A VOCA DO" className="he-logo" />
      </div>
      <div className="he-content">
        <img src={phone1} alt="Phone 1" className="he-phone1" />
        <div className="he-text-container">
          <h1 className="he-title">어원 기반의</h1>
          <h1 className="he-title">쉽고 정확한 영어공부</h1>
          <p className="he-description">어원을 통한 쉽고 정확한 공부 아보카도와 함께하세요!</p>
        </div>
        <img src={phone2} alt="Phone 2" className="he-phone2" />
      </div>
      <a href="#" className="he-download-link">
        <img src={downloadIcon} alt="Download" className="he-download-icon" />
        앱 다운로드
      </a>
    </header>
  );
}

export default Header;