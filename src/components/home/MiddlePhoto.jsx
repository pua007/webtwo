import React from 'react';
import styled from 'styled-components';

const MiddlePhotoBlock = styled.div`
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

const MiddlePhoto = () => {
    return (
        <MiddlePhotoBlock>
            <div className="row">
                <div>
                    <div className="imagebox">
                        <img src="./assets/image/01.jpg" alt="" />
                    </div>
                    <div>
                        
                        <p>
                            ‘글로벌 스탠다드’로 우뚝 선 한국 파이브가이즈
                            에프지코리아 파이브가이즈와 일본 진출 MOU 체결
                        </p>
                    </div>
                </div>
                <div className="middle">
                    <div className="imagebox">
                        <img src="./assets/image/02.jpg" alt="" />
                    </div>
                    <div>
                        
                        <p>한화생명 ‘2024 지속가능경영보고서’ 발간</p>
                    </div>
                </div>
                <div>
                    <div className="imagebox">
                        <img src="./assets/image/03.jpg" alt="" />
                    </div>
                    <div>
                        
                        <p>한화, 책임경영 실천 및 주주가치 제고 나선다</p>
                    </div>
                </div>
            </div>
        </MiddlePhotoBlock>
    );
};

export default MiddlePhoto;
