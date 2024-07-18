import React from 'react';
import styled from 'styled-components';

const TopbannerTwoBlock =styled.div`
position: relative;
    p{
        position: absolute;
        top: 50%;
        left: 15%;
        transform:translateY(-50%);
        color: #fff;
        font-size:25px;
        strong{
            font-size: 40px;
            
        }
    }
`

const TopbannerTwo = () => {
    return (
        <TopbannerTwoBlock>
            <img src="/assets/image/board02.jpg" alt="" />
                <p>
                    <strong>소중한 의견 감사합니다!</strong> <br />
                    
                </p>
        </TopbannerTwoBlock>
    );
};

export default TopbannerTwo;