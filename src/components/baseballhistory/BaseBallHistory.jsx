import React from 'react';
import styled from 'styled-components';

const BaseBallHistoryBlock = styled.div`
position: relative;
background: #000;
    .top {
    margin-bottom: 200px;
    position: relative;
}
    .eagles{
        position: relative;
        width: 1240px;
        padding-top: 160px;
        argin: -230px auto 0;
        .eagles_title {
            display: block;
            margin-block-start: 1.33em;
            margin-block-end: 1.33em;
            color: #fff;
            font-size: 60px;
            line-height: 1.13;
        }
        .eagles_content{
        display:block;
        padding-left: 320px;
        margin-top: 120px;
        .left_tab_fixed{
            position: fixed;
            top: 120px;
            left: calc(50% - 620px);
            color: #fff;
        }
    }
    .right_conts{
        display: block;
        unicode-bidi: isolate;
        .his_wrap {
            .history_81-89 {
                vertical-align: top;
                border: 0;
                outline-color: orange;
                box-sizing: border-box;
                -webkit-tap-highlight-color: transparent;
                .tit_area {
                    display: list-item;
                    text-align: -webkit-match-parent;
                    unicode-bidi: isolate;
                        strong {
                            top: 0;
                            left: 105px;
                            width: auto;
                            font-size: 92px;
                            text-align: left;
                            color: #fff;
                        }
                        em {
                            
                            left: 105px;
                            letter-spacing: -0.03em;
                            z-index: 1;
                            color: #fff;
                            top: -24px;
                            font-size: 48px;
                        }
                        span {
                            top: 38px;
                            font-family: 'MyriadPro-Regular', sans-serif;
                            font-size: 14px;
                            line-height: 22px;
                            opacity: 0.7;
                            color: #fff;
                        }
                    
                }
                .point {
                    position: relative;
                    padding: 30px 0 30px 240px;
                        strong {
                                font-size: 74px;
                                font-weight: 900;
                                color: #f37321;
                            }
                    .his_group_point {
                        display: block;
                        unicode-bidi: isolate;
                            
                            span {
                                font-size: 16px;
                                line-height: 30px;
                                color: #fff;
                            }
                            em {
                                color: #f37321;
                                font-size: 20px;
                                line-height: 32px;
                            }
                        }
                        strong {
                                display: block;
                                position: absolute;
                                top: 38px;
                                left: 0;
                                width: 205px;
                                font-size: 56px;
                                text-align: right;
                                line-height: 56px;
                                color: #fff;
                            }
                        }
                    }
                }
            }
        }
    
`

const BaseBallHistory = () => {
    return (
        <BaseBallHistoryBlock>
            <div className='top'>
                <img src='./assets/image/History01.jpg' alt='' />
            </div>
            <section className='eagles'>
                <h4 className='eagles_title'>
                    <span>한화이글스의 </span><br />
                    추억과 영광의 <br />
                    순간들을 함께하세요!
                </h4>
                <div className='eagles_content'>
                    
                    <div className='right_conts'>
                        <div className='his_wrap'>
                            <ol className='history_81-89'>
                                <li className='tit_area'>
                                    <strong>1980</strong>
                                    <div className='his_group'>
                                        <em>프로야구 출범</em>
                                        <span>
                                            <br/>
                                            KBO 이사회에서 한화그룹의 창단신청 승인이 결정되었고, 대국민 공모를 통한
                                            <br />
                                            구단 이름은 ‘빙그레 이글스’로 결정되었다.
                                        </span>
                                        <img src='./assets/image/History02.jpg' alt='' />
                                    </div>
                                </li>
                                <li className='point'>
                                    <strong>1985</strong>
                                    <div className='his_group_point'>
                                        <span>
                                            1985년 한화그룹이 대전을 연고지로 삼은
                                            제7구단으로 창단 준비 시작 <br />
                                        </span>
                                        <em>팀 명칭 공모 결과 "빙그레이글스"로 결정</em>
                                        <img src='./assets/image/History03.jpg' alt='' />
                                    </div>
                                </li>
                                <li className='tit_area'>
                                    <strong>1990</strong>
                                    <div className='his_group'>
                                        <em>돌풍의 신생팀</em>
                                        <span>
                                            <br/>
                                            20세기 최후의 승자! 한국시리즈 우승
                                            <br />
                                            돌풍의 신생팀에서 20세기 최후의 승자가 되기까지.
                                        </span>
                                        <img src='./assets/image/History04.jpg' alt='' />
                                    </div>
                                </li>
                                <li className='point'>
                                    <strong>1991</strong>
                                    <div className='his_group_point'>
                                        <span>
                                            장종훈 타격 4관왕(홈런, 타점, 장타율, 최다안타)<br />
                                            송진우는 1990년 구원왕에 이어 1992년 19승과 17세이브로 다승과 <br />
                                            구원왕 타이틀 동시 석권
                                        </span>
                                        <img src='./assets/image/History05.jpg' alt='' />
                                    </div>
                                </li>
                                <li className='tit_area'>
                                    <strong>2000</strong>
                                    <div className='his_group'>
                                        <em>레전드의 세대교체</em>
                                        <span>
                                            <br/>
                                            한국 프로야구를 상징하던 레전드들과의 아름다운 이별
                                            <br />
                                            그리고 혜성처럼 등장한 새로운 레전드
                                        </span>
                                        <img src='./assets/image/History06.jpg' alt='' />
                                    </div>
                                </li>
                                <li className='point'>
                                    <strong>2001</strong>
                                    <div className='his_group_point'>
                                        <span>
                                            김태균 2001년 신인왕 수상
                                        </span>
                                        <img src='./assets/image/History07.jpg' alt='' />
                                    </div>
                                </li>
                                <li className='tit_area'>
                                    <strong>2010</strong>
                                    <div className='his_group'>
                                        <em>새로운 도약을 위한 바닥 다지기</em>
                                        <span>
                                            <br/>
                                            바닥이 탄탄해야 더 높이 날아오를 수 있는 법
                                            <br />
                                            팬과 함께 새로운 이글스로 도약하기 위한 시간들
                                        </span>
                                        <img src='./assets/image/History08.jpg' alt='' />
                                    </div>
                                </li>
                                <li className='point'>
                                    <strong>2011</strong>
                                    <div className='his_group_point'>
                                        <span>
                                            김태균 입단(연봉 15억), 박찬호 입단(연봉 2,400만원)
                                        </span>
                                        <img src='./assets/image/History09.jpg' alt='' />
                                    </div>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </BaseBallHistoryBlock>
    );
};

export default BaseBallHistory;