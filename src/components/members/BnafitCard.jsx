import React from 'react';
import styled from 'styled-components';

const BnafitCardBlock = styled.div`
    border-bottom: 1px solid #c0c0c0;
    padding-top: 48px;
    padding-bottom: 40px;
    width: 45%;
    margin: 0 auto;
    margin-top: 50px;
    .title_wrap {
        .img {
            width: 60px;
            height: 56px;
            margin-left: 10px;
        }
        .title {
            margin-left: 10px;
            margin-top: 25px;
            font-size: 30px;
        }
    }
    .text {
        display: block;
        margin-top: 34px;
        margin-right: 55px;
    }
`;

const BnafitCard = ({ title, img, text }) => {
    return (
        <BnafitCardBlock>
            <strong className="title_wrap">
                <img src={img} alt="명절선물" className="img" />
                <p className="title">{title}</p>
            </strong>
            <p className="text">{text}</p>
        </BnafitCardBlock>
    );
};

export default BnafitCard;
