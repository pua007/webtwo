import React from 'react';
import styled from 'styled-components';

const BenefitTileBlock = styled.div`
    width: 80%;
    margin: 100px auto 0px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .img {
        width: 100px;
        height: 100px;
        flex: 0 0 auto;
        margin-right: 20px;
    }
    h1 {
        font-family: 'ONE-Mobile-POP';
        font-size: 60px;
        margin-right: 20px;
    }
    h2 {
        display: block;
        margin-top: 30px;
        width: 100%;
        font-size: 50px;
        padding-left: 20px;
    }
`;

const BenefitTile = () => {
    return (
        <BenefitTileBlock>
            <img src="/assets/image/tongtongship.gif" alt="" className="img" />
            <h1>한화 생활</h1>
            <h2>크루 혜택</h2>
        </BenefitTileBlock>
    );
};

export default BenefitTile;
