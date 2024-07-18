import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const HistorySectionBlock = styled.div`
margin: 100px 0;
  .history {
    position: relative;
    background: url('/assets/image/history_img.jpg');
    background-size: cover;
    background-attachment: fixed;
    padding: 3em 3em;
    background-position: 50% 50%;
    border-radius: 3em;
    height: 300px;
    width: 80%;
    margin: auto;
    h1 {
      text-align: center;
      margin-top: 10px;
      font-size: 50px;
      font-weight: 400;
      line-height: 1.2;
      color: #fff;
      span {
        font-weight: 700;
      }
    }
    p {
      margin-top: 50px;
      font-size: 22px;
      font-weight: 400;
      text-align: center;
      color: #fff;
    }
    .yearlist {
      display: flex;
      margin: auto;
      margin-top: 70px;
      box-shadow: 0 10px 10px rgba(0, 0, 0, .1);
      border-radius: 5em;
      overflow: hidden;
      .year {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #fff;
        transition: .35s;
        border-right: 1px solid #ddd;
        cursor: pointer;
        a {
          font-size: 1.75em;
          font-weight: 600;
          color: #777;
          position: relative;
          transition: .35s;
          padding: .5em 1em;
          transition: .35s;
          width: 100%;
          text-align: center;
          &:hover {
            background: #012350;
            color: #fff;
          }
          &.on {
            background: #012350;
            color: #fff;
          }
        }
      }
    }
  }
`

const DetailWrapper = styled.div`
  .box {
    position: relative;
    margin: auto;
    width: 80%;
    &:after {
      content: "";
      position: absolute;
      left: 50%;
      top: 0;
      width: 2px;
      height: 100%;
      background: #ddd;
      transform: translateX(-50%);
    }
    .listbox {
      display: flex;
      margin-top: 200px;
      .detailyear {
        width: 50%;
        display: flex;
        position: relative;
        padding: 0 .5em;
        font-size: 3.5em;
        color: #012350;
        font-weight: 700;
        align-items: center;
        justify-content: center;
      }
      ul {
        width: 50%;
        padding: 0 2em;
        line-height: 1.2;
        display: grid;
        align-items: center;
        li {
          position: relative;
          padding: 0 1.5em;
          margin: 10px;
          color: #333;
          font-size: 18px;
          line-height: 1.5;
          font-weight: 500;
          &:before {
            content: "";
            position: absolute;
            left: 0;
            top: 6px;
            width: .5em;
            height: .5em;
            background: #2b9cbb;
            border-radius: 50%;
          }
        }
      }
    }
  }
`

const HistorySection = () => {

  const [on, setOn] = useState(null)
  const scrollRefs = {
    '2020': useRef(null),
    '2010': useRef(null),
    '2000': useRef(null),
    '1990': useRef(null),
    '1980': useRef(null),
  };

  const ScrollToElement = (year) => {
    if (scrollRefs[year] && scrollRefs[year].current) {
      scrollRefs[year].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setOn(year);
  };

  return (
    <HistorySectionBlock>
      <div className='history'>
        <h1><span>한화제약</span>의 끊임없는 노력</h1>
        <p>건강한 미래를 위해 계속 나아가겠습니다.</p>
        <ul className='yearlist'>
          <li className='year'><a className={on === '2020' ? 'on' : ''} onClick={() => ScrollToElement('2020')}>2020's</a></li>
          <li className='year'><a className={on === '2010' ? 'on' : ''} onClick={() => ScrollToElement('2010')}>2010's</a></li>
          <li className='year'><a className={on === '2000' ? 'on' : ''} onClick={() => ScrollToElement('2000')}>2000's</a></li>
          <li className='year'><a className={on === '1990' ? 'on' : ''} onClick={() => ScrollToElement('1990')}>1990's</a></li>
          <li className='year'><a className={on === '1980' ? 'on' : ''} onClick={() => ScrollToElement('1980')}>1980's</a></li>
        </ul>
      </div>
      <DetailWrapper>
        <ul className='box'>
          <li className='listbox'>
            <div className='detailyear'>2023</div>
            <ul>
              <li>암환자 구내염 예방&치료 "에피실"(사이넥스) 국내 독점 판매 계약 체결</li>
              <li>경구 편두통 치료제 "한화수마트립탄(정)" 발매</li>
              <li>골다공증 치료제 "한화졸레드론산(주)" 발매</li>
              <li>당뇨병 치료 복합제 "포실로진에스(정)" 발매</li>
              <li>이상지질혈증, 고혈압 치료 복합제 "한화로칸(정)" 발매</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">2022</div>
            <ul>
              <li>'2022년 가족친화 최고기업' 지정 & 3회 연속 연장</li>
              <li>람노스산1g의 복용편의성을 높인 "람노스산2g" 발매</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">2021</div>
            <ul>
              <li>더욱 강력해진 이상지질혈증 치료제 "아토산 40mg" 발매</li>
              <li>만성신부전 관련 부갑상샘기능항진증 치료 및 예방제 "젬시톨(주)" 발매</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear" ref={scrollRefs['2020']}>2020</div>
            <ul>
              <li>자궁내막증 치료제 "디에노(정)" 발매</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">2019</div>
            <ul>
              <li>남녀 고용평등 및 일·가정 양립 실현 우수기업 선정 (고용노동부)</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">2018</div>
            <ul>
              <li>최고일자리기업 선정 (신용보증기금)</li>
              <li>청년친화 강소기업 선정 (고용노동부)</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">2017</div>
            <ul>
              <li>비전 2026 "PRIDE 123" 선포</li>
              <li>일·생활 균형 우수기업 선정</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">2014</div>
            <ul>
              <li>환경의 날 원주지방환경청장상 수상</li>
              <li>한국MSD와 IVF 제품군 및 피임제의 국내유통 협약 체결</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">2013</div>
            <ul>
              <li>그린스타트 전국경연대회 우수기업 선정 (환경부)</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">2012</div>
            <ul>
              <li>세계 최초 당뇨병성 혈관내피세포 기능이상 치료 천연물신약 임상2상 시험 승인 (식품의약품안전청)</li>
              <li>한국세르비에와 의원시장 공동판촉협약 체결</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">2011</div>
            <ul>
              <li>약국판매용 일반의약품 사업 본격 진출</li>
              <li>일하기 좋은 기업 선정 (지식경제부)</li>
              <li>가족친화 인증 우수기업 선정 (여성가족부)</li>
              <li>알러지성 비염예방제 "알러골" 발매</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear" ref={scrollRefs['2010']}>2010</div>
            <ul>
              <li>천연감기치료제 "에키나포스" 등 천연의약품 허가 및 발매</li>
              <li>소화불량 및 과민성대장증후군 등, 광범위 위장질환 치료제 "이베로가스트" 발매</li>
              <li>유럽과 일본에서도 성공한 명품 화장품 "트랜스더마" 발매</li>
              <li>꿈의 천연감미료 "스위티지오" 발매</li>
              <li>건강기능식품 생산동 준공</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">2009</div>
            <ul>
              <li>연말 Refresh 휴가 실시</li>
              <li>박테리아 단백을 최소화한 차세대보툴리눔톡신 "제오민" 발매</li>
              <li>이상적인 3중작용의 진해거담제 "움카민시럽" 발매</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">2008</div>
            <ul>
              <li>Atorvastain 제네릭 "아토산(정)" 발매</li>
              <li>춘천 GMP 공장 준공</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">2007</div>
            <ul>
              <li>환경보전활동 우수기업 표창 (환경청)</li>
              <li>호흡기 감염치료 1차 선택제 "카로아(액)" 발매</li>
              <li>한국의 경영대상 생산성혁신대상 최우수기업 선정 (한국능률협회)</li>
              <li>디지털지식경영대상 정보화 우수기업 2년 연속 선정 (정보통신부)</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">2006</div>
            <ul>
              <li>디지털지식경영대상 정보화 우수기업 선정 (정보통신부)</li>
              <li>경영혁신 형 중소기업 선정 (중소기업청)</li>
              <li>차세대 정장제 "람노스" 발매</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">2005</div>
            <ul>
              <li>Groupware, ERP 구축</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">2003</div>
            <ul>
              <li>자회사 건강식품 수출기업 "NaturaLife Asia" 설립</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear" ref={scrollRefs['2000']}>2002</div>
            <ul>
              <li>자회사 건강식품 전문기업 "NaturaLife" 설립</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">1998</div>
            <ul>
              <li>기업부설연구소 설립 (제981710호)</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">1997</div>
            <ul>
              <li>최첨단 친환경 폐수처리시설 구축</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">1995</div>
            <ul>
              <li>오가논사와 합작관계 정리, '한화제약' 독자경영체제 출범</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">1994</div>
            <ul>
              <li>프랑스 신약 연구법인 "s.a.r.l." 설립</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">1993</div>
            <ul>
              <li>석관동 사옥 이전</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">1992</div>
            <ul>
              <li>자회사 물류기업 "(주) 양지기획" 설립</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear" ref={scrollRefs['1990']}>1991</div>
            <ul>
              <li>Akzo Group의 Organon사로부터 경영금상 수상</li>
              <li>"한화제약(주)" 상호변경</li>
              <li>우량중소기업 선정 (중소기업은행)</li>
              <li>무역의 날 1백만불 수출 탑 수상</li>
              <li>Antibio 동남아 첫 수출 (Vietnam)</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">1987</div>
            <ul>
              <li>연구 전담기업 "양지화학(주)" 설립</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">1985</div>
            <ul>
              <li>경영전산화(Network) 구축</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">1983</div>
            <ul>
              <li>선진 제약설비 도입 및 1차 KGMP시설공사 완료</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear" ref={scrollRefs['1980']}>1982</div>
            <ul>
              <li>네덜란드 다국적 기업인 Akzo Nobel Group의 N.V. Organon사와 합작, 한화제약 출범</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">1978</div>
            <ul>
              <li>용인공장 준공</li>
            </ul>
          </li>
          <li className='listbox'>
            <div className="detailyear">1976</div>
            <ul>
              <li>(주)양지약품 창업</li>
            </ul>
          </li>
        </ul>
      </DetailWrapper>

    </HistorySectionBlock>
  );
};

export default HistorySection;