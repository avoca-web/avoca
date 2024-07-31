import React from 'react';
import './style.css';
import smartImage from '../../images/smart1.png';

function SecondFeature() {
  return (
    <section className="second-feature">
      <h2 className="second-feature-title">챗봇 '아보카'</h2>
      <h3 className="second-feature-subtitle">챗봇을 이용한<br />쉽고 재미있는 영어공부</h3>
      <div className="second-feature-image-container">
        <img src={smartImage} alt="Smart Learning" className="second-feature-image" />
      </div>
      <p className="second-feature-description">
        챗봇에게 질문하세요!<br />
        쉽고 빠른 답변을 통해 궁금증을 해결하고,<br />
        대화의 즐거움을 느껴보세요.
      </p>
    </section>
  );
}

export default SecondFeature;