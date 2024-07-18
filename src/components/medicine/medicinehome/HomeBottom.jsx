import React from 'react';
import styled from 'styled-components';

const HomeBottomBlock = styled.div`
background: #f3f5f8;
  .title {
    padding: 0 4% 4%;
    font-size: 50px;
    color: #012350;
  }
  .box {
    display: flex;
    width: 100%;
    .depth {
      display: flex;
      flex: 1;
      justify-content: space-around;
      position: relative;
      ul {
        background: #fff;
        box-shadow: rgba(136, 165, 191, 0.2) 10px 15px 16px 0px, rgba(255, 255, 255, 0.5) 0 15px 16px 0px;
        border-radius: 30px;
        margin-bottom: 60px;
        padding-bottom: 120px;
        h1 {
          margin-bottom: 30px;
          font-size: 40px;
          color: #333333;
          padding: 20px 0 0 20px;
        }
        .svg {
          width: 50%;
          margin: auto;
          margin-bottom: 60px;
        }
        p {
          font-size: 18px;
          color: #555;
          line-height: 2em;
          padding: 0 30px;
          font-weight: 500;
        }
      }
    }
  }
`

const HomeBottom = () => {
  return (
    <HomeBottomBlock>
      <div className="bottom">
        <h1 className='title'>핵심가치</h1>
        <div className='box'>
          <ul className='depth'>
            <ul>
              <li>
                <h1>서로 믿고</h1>
              </li>
              <li className='svg'>
                <img src="./assets/image/overview_icon01.svg" alt="" />
              </li>
              <li>
                <p>나는 객관적 사실을 기반으로 보고/업무한다.</p>
                <p>나는 역량향상을 통해, 업무의 전문가가 된다.</p>
                <p>나는 규정을 준수하며,투명하게 업무를 처리한다.</p>
              </li>
            </ul>
            <ul>
              <li>
                <h1>서로 도우며</h1>
              </li>
              <li className='svg'>
                <img src="./assets/image/overview_icon02.svg" alt="" />
              </li>
              <li>
                <p>나는 상대방이 이해하기 쉬운 단어로 설명한다.</p>
                <p>나는 먼저 행동한다.</p>
                <p>나는 공동의 목표달성을 우선한다.</p>
              </li>
            </ul>
            <ul>
              <li>
                <h1>앞서가는</h1>
              </li>
              <li className='svg'>
                <img src="./assets/image/overview_icon03.svg" alt="" />
              </li>
              <li>
                <p>나는 효율적인 업무를 위해 끊임없이 질문한다.</p>
                <p>나는 문제 제기만 하는 것이 아니라,</p>
                <p>해결 방식을 찾아 제안한다.</p>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </HomeBottomBlock>
  );
};

export default HomeBottom;