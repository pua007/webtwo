import React from 'react';
import styled from 'styled-components';

const BaseBallSubPhotoBlock = styled.div`
    margin-top: 150px;
    display: flex;
    justify-content: center;
    .row {
        display: flex;
        margin: 20px 40px;
        .middle {
            margin: 0 30px;
        }
        div {
            .imagebox {
                border: 1px solid #ddd;
                overflow: hidden;
                margin-bottom: 20px;
                cursor:pointer;
                border: 0px solid rgb(0, 0, 0);
                height: 272px;
                width: 392px;
                img {
                    transition: 0.5s;
                    &:hover {
                        transform: scale(1.2);
                    }
                }
            }
        }
        p {
            font-size: 18px;
            font-weight: bold;
            padding: 5px;
            cursor:pointer;
        }
    }
`;

const BaseBallSubPhoto = () => {
    return (
        <BaseBallSubPhotoBlock>
            <div className="row">
                <div>
                    <div className="imagebox">
                        <img src="./assets/image/basephoto01.jpg" alt="" />
                    </div>
                    <div>
                        <p>2023-11-23</p>
                        <p>
                        25년부터 25년간…한화이글스, 대전시와 신축구장 사용 · 수익계약 체결
                        </p>
                    </div>
                </div>
                <div className="middle">
                    <div className="imagebox">
                        <img src="./assets/image/basephoto02.jpg" alt="" />
                    </div>
                    <div>
                        <p>2024-07-05</p>
                        <p>한화이글스, 코칭스태프 보직 변경</p>
                    </div>
                </div>
                <div>
                    <div className="imagebox">
                        <img src="./assets/image/basephoto03.jpg" alt="" />
                    </div>
                    <div>
                        <p>2024-07-04</p>
                        <p>김승연 회장, 한화이글스 선수단 격려 위해 ‘이동식 스마트TV’ 지급</p>
                    </div>
                </div>
            </div>
        </BaseBallSubPhotoBlock>
    );
};

export default BaseBallSubPhoto;