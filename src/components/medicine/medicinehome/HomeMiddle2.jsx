import React from 'react';
import styled from 'styled-components';

const HomeMiddle2Block = styled.div`
margin-top: 200px;
  .middle {
    .title {
      position: relative;
      h1 {
        font-size: 90px;
        font-weight: bold;
      }
      .one {
        position: absolute;
        left: 35%;
        top: -150px;
        color: #fff;
        text-shadow: -1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333, 1px 1px 0 #333;
      }
      .two {
        position: absolute;
        left: 42%;
        top: -65px;
        color: #012350;
      }
    }
    .box {
      width: 100%;
      padding: 10em 0;
      border-radius: 15em 15em 0 0;
      background: #f3f5f8;
      display: flex;
      .depth {
        display: flex;
        gap: 10em;
        margin: 0 auto;
        justify-content: center;
        font-weight: 900;
        position: relative;
        ul {
          flex: 0 1 30%;
          max-width: 30%;
          overflow: hidden;
          counter-reset: titNum 0;
          .svg {
            position: relative;
            transition: 0.5s;
            margin: auto;
            text-align: center;
            max-width: 200px;
            &:hover { transform:scale(1.2) }
            }
          .text {
            margin-top: 50px;
            font-size: 1.25em;
            line-height: 1.5em;
            font-weight: 500;
            color: #333;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
            span {
              font-size: 24px;
              color: #104397;
              font-weight: 900;
            }
          }
        }
      }
    }
  }
`

const HomeMiddle2 = () => {
  return (
    <HomeMiddle2Block>
      <div className="middle">
        <div className="title">
            <h1 className='one'>Our</h1>
            <h1 className='two'>Vision</h1>
        </div>
        <div className="box">
          <ul className='depth'>
            <ul>
              <li className='svg'>
                <img src="./assets/image/vision_icon01.svg" alt="" />
              </li>
              <li className='text'>
                <span>1등</span> 품질의 제품 맞춤형 서비스,<br />
                최고의 고객가치를 제공하여<br /> 
                신뢰받는 기업이된다.
              </li>
            </ul>
            <ul>
              <li className='svg'>
                <img src="./assets/image/vision_icon02.svg" alt="" />
              </li>
              <li className='text'>
                <span>2자릿수</span> 영억이익률 실현으로,<br />
                1000억 매출 달성과 기업 브랜드 가치를 높여<br />
                인재 중심, R&D 중심 기업이 된다.
              </li>
            </ul>
            <ul>
              <li className='svg'>
                <img src="./assets/image/vision_icon03.svg" alt="" />
              </li>
              <li className='text'>
                <span>30년</span> 이후에도 지속 가능한 기업이 되기 위해<br />
                비즈니스 모델을 혁신하고, 가족친화 기업의<br />
                문화유산을 발전시킨다.
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </HomeMiddle2Block>
  );
};

export default HomeMiddle2;