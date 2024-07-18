import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LocationBlock = styled.div`
    margin-top: 100px;
    display: flex;
    margin-bottom: 120px;
    justify-content: center;
    gap: 40px;
    font-family: 'ONE-Mobile-POP', sans-serif;
    .location {
        width: 25%;
        border-radius: 5%;
        box-shadow: 4px 12px 40px 6px #00000017;
        overflow: hidden;
        cursor: pointer;
        &:hover {
            box-shadow: 4px 12px 30px 6px #0000002e;
            transform: translateY(-5px);
        }

        .img {
            height: 240px;
            width: 100%;
            overflow: hidden;
        }
        h4 {
            padding: 20px;
            font-size: 30px;
            font-family: inherit;
            font-weight: 800;
        }
        p {
            padding: 0 20px 20px 20px;
            font-size: 20;
        }
    }
`;

const Location = () => {
    const lo = [
        {
            wi: 33.450642176828985,
            gyung: 126.57066687837191,
        },
        {
            wi: 37.395384586305525,
            gyung: 127.11048160689693,
        },
        {
            wi: 37.29322110261501,
            gyung: 126.8318798691389,
        },
    ];
    return (
        <LocationBlock>
            <Link to="/member/detail/a" className="location" state={lo[0]}>
                <div className="img">
                    <img src="/assets/image/bonsa1.jpg" alt="" />
                </div>
                <h4>본사</h4>
                <p>제주특별자치도 제주시 첨단로 242</p>
            </Link>
            <Link to="/member/detail/b" className="location" state={lo[1]}>
                <div className="img">
                    <img src="/assets/image/bonsa2.jpeg" alt="" />
                </div>
                <h4>아지트</h4>
                <p>카카오판교아지트</p>
            </Link>
            <Link to="/member/detail/c" className="location" state={lo[2]}>
                <div className="img">
                    <img src="/assets/image/bonsa3.jpg" alt="" />
                </div>
                <h4>데이터센터</h4>
                <p>카카오안산데이터센터</p>
            </Link>
        </LocationBlock>
    );
};

export default Location;
