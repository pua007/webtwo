import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import memberJson from '../../assets/data/memberdata.json';
import LoremIpsum from 'react-lorem-ipsum';

const MembersBlock = styled.div`
    background-color: #ffffff;
    width: 85%;
    height: 800px;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow-y: scroll;
    .namebox {
        text-align: center;
        width: 920px;
        gap: 40px;
        display: flex;
        h3 {
            width: 152px;
        }
    }

    .category {
        display: flex;
        margin: 50px;
        margin-bottom: 5px;
        gap: 40px;

        .ctegory_img {
            width: 152px;
            height: 152px;
            border-radius: 50%;
            cursor: pointer;
            &:hover {
                transform: scale(1.05);
                filter: none;
            }
            filter: grayscale(100%);
            &.공유,
            &.강동원,
            &.카리나,
            &.소지섭,
            &.안유진 {
                filter: none;
            }
        }
    }
`;

const Card = styled.div`
    width: 70%;
    height: 55%;
    min-height: 312px;
    display: flex;
    margin: 40px 20px;
    background-color: #f5f0f0;
    justify-content: center;
    align-items: center;

    .photo {
        width: 35%;
        height: 85%;
        object-fit: cover;
        border-radius: 0 50% 50% 0;
        object-position: 0cm 0.5cm;
        &:nth-child(1) {
            object-position: 0cm -1.5cm;
        }
    }
    .info-box {
        padding: 16px;
        height: 80%;
        width: 50%;
        overflow-y: scroll;

        p {
            margin-bottom: 5px;
            font-size: 18px;
        }
    }
`;

const Members = () => {
    const allData = memberJson;
    const [name, setName] = useState('공유');
    const [eindex, setEindex] = useState('0');

    console.log(allData);

    const grayEffect = (item, eindex) => {
        setName(item.Name);
        setEindex(eindex);
    };

    return (
        <MembersBlock>
            <div className="category">
                {allData.map((item, index) => (
                    <>
                        <img
                            src={item.Photo}
                            alt=""
                            className={
                                index == eindex
                                    ? `ctegory_img ${item.Name}`
                                    : 'ctegory_img'
                            }
                            onClick={() => grayEffect(item, index)}
                        />
                    </>
                ))}
            </div>
            <div className="namebox">
                {allData.map((item) => (
                    <h3>{item.Name}</h3>
                ))}
            </div>
            {name && (
                <Card>
                    <img
                        src={allData.find((item) => item.Name === name).Photo}
                        alt="image"
                        className="photo"
                    />
                    <div className="info-box">
                        <p style={{ marginBottom: '15px', color: '#a59f9f' }}>
                            개발팀
                        </p>
                        <p style={{ marginBottom: '15px' }}>
                            <h2>{name}</h2>
                        </p>
                        <p style={{ marginBottom: '10px' }}>
                            <strong>직위:</strong>{' '}
                            {
                                allData.find((item) => item.Name === name)
                                    .Position
                            }
                        </p>
                        <p style={{ marginBottom: '10px' }}>
                            <strong>부서:</strong>{' '}
                            {
                                allData.find((item) => item.Name === name)
                                    .Department
                            }
                        </p>
                        <p style={{ marginBottom: '10px' }}>
                            <strong>기술:</strong>{' '}
                            {allData
                                .find((item) => item.Name === name)
                                .Skills.join(', ')}
                        </p>
                        <p style={{ marginBottom: '10px' }}>
                            <strong>평가:</strong>{' '}
                            {allData.find((item) => item.Name === name).Notes}
                        </p>
                        <p>
                            <strong>특이사항:</strong> <LoremIpsum p={1} />{' '}
                            {/* 2개의 단락 생성 */}
                        </p>
                    </div>
                </Card>
            )}
        </MembersBlock>
    );
};

export default Members;
