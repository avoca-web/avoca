import React from 'react';
import './style.css';
import phone from '../../images/phone.png';

function Hero() {
  return (
    <section className="hero">
      <h2 className="hero-title">영어 사전</h2>
      <h3 className="hero-subtitle">어려운 단어도<br />쉽고 정확하게</h3>
      <div className="hero-image-container">
        <img src={phone} alt="Dictionary" className="hero-image" />
      </div>
      <p className="hero-description">
        어렵거나 외우기 힘든 영어 단어를<br />
        검색하세요! 단어의 뜻, 어원, 그리고 <br />
        쉽게 외우는 방법을 알려드립니다.
      </p>
    </section>
  );
}

export default Hero;