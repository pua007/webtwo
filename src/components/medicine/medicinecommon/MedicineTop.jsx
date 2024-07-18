import React from 'react';
import styled from 'styled-components';
import topimg from '/assets/image/v_company.jpg';

const MedicineTopBlock = styled.div`
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

const MedicineTop = ({title}) => {
  return (
    <MedicineTopBlock>
      <div className='top'>
        <img src={topimg} alt="as" />
        <div>
          <h1>{title}</h1>
          <p>서로 믿고 서로 도우며 앞서가는 한화가족</p>
        </div>
      </div>
    </MedicineTopBlock>
  );
};

export default MedicineTop;