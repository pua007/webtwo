import React from 'react';
import styled from 'styled-components';

const TopbannerBlock = styled.div`
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


const Topbanner = () => {
    return (
        <TopbannerBlock>
            <img src="/assets/image/board02.jpg" alt="" />
            <p>
                <strong>한화계열사에 많은 관심과 의견</strong> <br />
                늘 귀담아 듣고 정진해 나가겠습니다!
                </p>
        </TopbannerBlock>
    );
};


export default Topbanner;