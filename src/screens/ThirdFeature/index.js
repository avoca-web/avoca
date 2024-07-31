import React from 'react';
import './style.css';
import questImage from '../../images/quest.png';
import downloadIcon from '../../images/thirddownload.png';

function ThirdFeature() {
  return (
    <section className="third-feature">
      <div className="third-feature-image-container">
        <img src={questImage} alt="Quest" className="third-feature-image" />
      </div>
      <div className="third-feature-text-container">
        <p className="third-feature-text">
          당신의 공부를 돕는 챗봇 '아보카'는<br />
          언제나 질문을 기다리고 있습니다!<br />
          아보카를 만나고 싶다면 <br />
          버튼을 눌러주세요!
        </p>
        <a href="https://drive.google.com/file/d/1caabK4iQFN8i5GRuLbs_5IDJMQX5XtH1/view?usp=sharing" className="third-feature-download-link">
          <img src={downloadIcon} alt="Download" className="third-feature-download-icon" />
          <p className= "icon-text">다운로드</p>
        </a>
      </div>
    </section>
  );
}

export default ThirdFeature;