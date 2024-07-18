import React from 'react';
import styled from 'styled-components';

const JumpBlock = styled.section`
  position: fixed; top: 40%; right: 15px;
    display: flex; flex-direction: column;
    button {
      margin: 10px 0; 
      padding: 10px 20px;
      background: none;
      border: none;
      z-index: 1000;
    }
    img {
      display: block;
      z-index: 1000;
    }
`

const Jump = ({scrollToSection, MainPhotoRef, SubPhotoRef, MiddlePhotoRef}) => {
  return (
    <JumpBlock>
      <button onClick={() => scrollToSection(MainPhotoRef)}>
          <img src='./assets/image/side_icon1.png' alt='icon1' />
        </button>
        <button onClick={() => scrollToSection(SubPhotoRef)}>
          <img src='./assets/image/side_icon4.png' alt='icon4' />
        </button>
        <button onClick={() => scrollToSection(MiddlePhotoRef)}>
          <img src='./assets/image/side_icon3.png' alt='icon3' />
        </button>
    </JumpBlock>
  );
};

export default Jump;