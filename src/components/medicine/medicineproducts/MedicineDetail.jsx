import React from 'react';
import styled from 'styled-components';

const MedicineDetailBlock = styled.div`
width: 90%;
display: flex;
gap: 10%;
margin: 160px auto;
  .image {
    width: 40%;
    height: 500px;
    box-shadow: 0 0 5px 5px rgba(221, 221, 221, 0.5);
    border-radius: 50px;
    overflow: hidden;
    display: grid;
    justify-content: center;
    align-items: center;
    img {
      height: 100%;
    }
  }
  .detail {
    width: 50%;
    h1 {
      padding-bottom: 40px;
      font-size: 36px;
    }
    p {
      display: flex;
      flex-wrap: wrap;
      padding: 20px 0;
      gap: 20%;
      strong {
        width: 20%;
      }
      span {
        width: 60%;
      }
    }
  }
`

const MedicineDetail = ({item}) => {

  return (
    <MedicineDetailBlock>
      <div className='image'>
        <img src={item.image} alt="" />
      </div>
      <div className='detail'>
        <h1>{item.title}</h1>
        <p><strong>효능구분</strong><span>{item.effect}</span></p>
        <p><strong>유효성분</strong><span>{item.ingredient}</span></p>
        <p><strong>첨가제</strong><span>{item.additive}</span></p>
        <p><strong>유효기간</strong><span>{item.time}</span></p>
      </div>
    </MedicineDetailBlock>
  );
};

export default MedicineDetail;