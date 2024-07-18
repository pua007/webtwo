import React from 'react';
import styled from 'styled-components';

const MedicineFamilyBlock = styled.div`
width: 90%;
margin: 120px 0 0 auto;
display: flex;
align-items: flex-start;
gap: 10%;
  .left {
    flex: 1 0 30%;
    text-align: center;
    height: 900px;
    h1 {
      font-size: 52px;
      font-weight: 300;
      color: #012350;
    }
    h3 {
      margin-top: 20px;
      color: #555;
    }
    .image {
      width: 60%;
      margin: 20px auto 0;
    }
    h4 {
      margin: 40px 0 8px;
      color: #012350;
      font-size: 24px;
    }
    p {
      padding-bottom: 4px;
    }
    
    .no2 {
      width: 80%;
      margin: auto;
      margin-top: 16px;
      border-radius: 24px;
    }
  }
  .right {
    flex: 1 0 60%;
    max-height: 900px;
    border-radius: 100px 0 0 0;
    background: #F3F5F8;
    overflow-y: auto;
    li {
      margin-bottom: 44px;
      h2 {
        font-size: 24px;
        color: #012350;
        padding: 0 0 12px 8px;
        margin-bottom: 28px;
        border-bottom: 3px solid #ddd;
      }
      .text {
        margin-left: 40%;
        p {
          font-size: 20px;
          margin-bottom: 8px;
          position: relative;
          &:before {
            content: '';
            position: absolute;
            left: -1em;
            top: 7px;
            background: #2b9cbb;
            width: 7px;
            height: 7px;
            border-radius: 50%;
          }
        }
      }
    }
  }
  .right::-webkit-scrollbar {display:none}
`

const MedicineFamilySection = () => {
  return (
    <MedicineFamilyBlock>
      <div className='left'>
        <h1>한화가족의<br /><b>가족친화경영</b></h1>
        <h3>가족친화경영 프로그램 안내</h3>
        <div className='image'>
          <img src="/assets/image/welfare_img01.png" alt="" />
        </div>
        <h4>Since 2011</h4>
        <p>중견 제약 최초 '가족친화 최고기업' 선정</p>
        <p>'가족친화 우수기업' 3회 연속 인증</p>
        <img className='no2' src="/assets/image/family_img01.jpg" alt="" />
      </div>
      <ul className='right'>
        <li style={{marginTop: '120px'}}>
          <h2>본인 및 배우자 출산</h2>
          <div className='text'>
            <p>출산전 휴가제도</p>
            <p>배우자 출산휴가</p>
            <p>임신기 근로시간 단축</p>
          </div>
        </li>
        <li>
          <h2>자녀양육지원</h2>
          <div className='text'>
            <p>유아휴직제도</p>
            <p>육아기 근로시간 단축</p>
            <p>자녀 양육수당 지원 (5세~고등학교)</p>
          </div>
        </li>
        <li>
          <h2>근로자 건강관리</h2>
          <div className='text'>
            <p>직원 종합검진 지원</p>
            <p>단체 상해보험(사망, 상해, 골절, 입원 등)</p>
            <p>서울사무소 헬스장, 춘천공장 체육시설 운영</p>
            <p>직원 휴게실 운영(안마기)</p>
          </div>
        </li>
        <li>
          <h2>유연근로제</h2>
          <div className='text'>
            <p>시차출퇴근제</p>
            <p>춘천공장 주4일제 운영</p>
          </div>
        </li>
        <li>
          <h2>가족관계 증진 및 여가지원</h2>
          <div className='text'>
            <p>회사 캠핑장 운영 및 리조트 지원</p>
            <p>동호회 활동지원</p>
            <p>연말 셧다운 휴가(연차휴가 활용)</p>
            <p>징검다리 연휴 공동연차</p>
            <p>하계휴가 지원</p>
            <p>근속 5년 리프레시 휴가</p>
            <p>해피프라이데이 (월 1회, 금요일 오후)</p>
            <p>야구 관람권 지원</p>
          </div>
        </li>
      </ul>
    </MedicineFamilyBlock>
  );
};

export default MedicineFamilySection;