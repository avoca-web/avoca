import React from 'react';
import './style.css';
import characterImage from '../../images/character.png';

function Emoticon() {
  return (
    <section className="emoticon">
      <h2 className="emoticon-title">캐릭터</h2>
      <h3 className="emoticon-subtitle">출석 횟수에 따라 증정되는<br />귀여운 캐릭터</h3>
      <div className="emoticon-image-container">
        <img src={characterImage} alt="Characters" className="emoticon-image" />
      </div>
      <p className="emoticon-description">
        출석 횟수에 따라 캐릭터가 성장합니다.<br />
        매일매일 열심히 공부하고<br />
        캐릭터를 성장시켜보세요!<br />
        캐릭터와 함께 성장할 수 있습니다!
      </p>
    </section>
  );
}

export default Emoticon;