import React from 'react';
import styled from 'styled-components';

const HomeTopBlock = styled.div`
margin-top: 90px;
position: relative;
  .top {
    img {
      filter: brightness(70%);
    }
    h1 {
      position: absolute;
      top: 30%;
      left: 15%;
      font-size: 45px;
      color: #fff;
    }
    p {
      position: absolute;
      top: 60%;
      left: 15%;
      font-size: 20px;
      color: #fff;
    }
  }
`

const HomeTop = () => {
  return (
    <HomeTopBlock>
      <div className='top'>
        <img src="./assets/image/v_company.jpg" alt="" />
        <div>
          <h1>회사개요</h1>
          <p>서로 믿고 서로 도우며 앞서가는 한화가족</p>
        </div>
      </div>
    </HomeTopBlock>
  );
};

export default HomeTop;