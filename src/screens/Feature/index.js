import React from 'react';
import './style.css';
import smartImage from '../../images/smart.png';

function Feature() {
  return (
    <section className="feature">
      <div className="feature-text-container">
        <p className="feature-text">
          외워지지 않는 단어도<br />
          외울 수 있습니다!
        </p>
        <p className="feature-description">
          AI를 이용해서 영어 단어의<br />
          어원, 접두사, 접미사를 분석해드립니다.<br />
          어원을 통해 쉽고 정확한 암기를 도와드릴게요.
        </p>
      </div>
      <div className="feature-image-container">
        <img src={smartImage} alt="Smart Learning" className="feature-image" />
      </div>
    </section>
  );
}

export default Feature;