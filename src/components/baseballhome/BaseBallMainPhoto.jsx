import React from 'react';
import styled from 'styled-components';


const BaseBallMainPhotoBlock = styled.div `
position: relative;
    .top {
    margin-bottom: 200px;
    position: relative;
    .text1 {
        position: absolute;
        top: 40%;
        left: 50%;
        transform:translate(-50%, -50%);
        color: #fff;
        font-size: 30px;
    }
}
`

const BaseBallMainPhoto = () => {
    return (
        <BaseBallMainPhotoBlock>
            <div className='top'>
                <img src="./assets/image/baseball01.jpg" alt="" />
                <div className='text1'>
                <h1>
                    DIFFERENT GOAL<br />
                    DIFFERENT ROSTER<br />
                    DIFFERENT WAY<br />
                </h1>
                </div>
            </div>
        </BaseBallMainPhotoBlock>
    );
};

export default BaseBallMainPhoto;