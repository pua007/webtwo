import React from 'react';
import styled from 'styled-components';

const HomeMiddleBlock = styled.div`
margin-top: 200px;
  .middle {
    h1 {
      padding-left: 15%;
      font-size: 50px;
      color: #012350;
      font-weight: 300;
      margin-bottom: 60px;
      strong {
        font-weight: bold;
      }
    }
    img {
      border-radius: 20em 0 0 20em;
    }
  }
`

const HomeMiddle = () => {
  return (
    <HomeMiddleBlock>
      <div className='middle'>
        <h1>서로 <strong>믿고</strong> 서로 <strong>도우며</strong> 앞서가는 <strong>한화가족</strong></h1>
        <img src="./assets/image/overview_img.jpg" alt="" />
      </div>
    </HomeMiddleBlock>
  );
};

export default HomeMiddle;