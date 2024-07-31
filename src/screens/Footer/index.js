import React from 'react';
import './style.css';
import avocadoImage from '../../images/avocado.png';
import downloadIcon from '../../images/footerdownload.png';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-title">지금, A VOCA DO!</h2>
        <p className="footer-description">
          지금, 아보카도를 사용해보세요!<br />
          버튼을 누르면<br />
          다운로드 화면으로 이동합니다!
        </p>
        <div className="footer-image-button-container">
          <div className="footer-image-container">
            <img src={avocadoImage} alt="Avocado" className="footer-image" />
          </div>
          <div className="footer-button-container">
            <a href="https://drive.google.com/file/d/1caabK4iQFN8i5GRuLbs_5IDJMQX5XtH1/view?usp=sharing" className="footer-button">
              <img src={downloadIcon} alt="Download" className="footer-download-icon" />
              다운로드
            </a>
          </div>
        </div>
      </div>
      <div className="footer-team-container">
        <p className="footer-team">Team. A VOCA DO</p>
        <p className="footer-members">강지수, 장민권, 김성민, 김우현, 박지원, 박종범, 송효재, 이종범, 전세원</p>
      </div>
    </footer>
  );
}

export default Footer;