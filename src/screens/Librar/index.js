import React from 'react';
import './style.css';
import stateImage from '../../images/state.png';

function Library() {
  return (
    <section className="library">
      <h2 className="library-title">라이브러리</h2>
      <h3 className="library-subtitle">나만의 단어장 만들기</h3>
      <div className="library-image-container">
        <img src={stateImage} alt="Library" className="library-image" />
      </div>
      <p className="library-description">
        단어를 검색하고 라이브러리에 저장하세요!<br />
        중요한 단어, 외우기 어려운 단어를<br />
        모아볼 수 있습니다.<br />
        오직 나만을 위한 단어장을 만들어보세요!
      </p>
    </section>
  );
}

export default Library;