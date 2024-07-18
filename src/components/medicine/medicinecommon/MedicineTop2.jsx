import React from 'react';
import styled from 'styled-components';
import topimg2 from '/assets/image/v_product-742.jpg';

const MedicineTop2Block = styled.div`
position: relative;
  .top {
    img {
      filter: brightness(70%);
    }
    h1 {
      position: absolute;
      top: 30%;
      left: 15%;
      font-size: 60px;
      color: #fff;
    }
    p {
      position: absolute;
      top: 60%;
      left: 15%;
      font-size: 24px;
      color: #fff;
    }
  }
`

const MedicineTop2 = ({title}) => {
  return (
    <MedicineTop2Block>
      <div className='top'>
        <img src={topimg2} alt="" />
        <div>
            <h1>{title}</h1>
            <p>서로 믿고 서로 도우며 앞서가는 한화가족</p>
          </div>
      </div>
    </MedicineTop2Block>
  );
};

export default MedicineTop2;