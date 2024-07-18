import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const MedicineIngredientSectionBlock = styled.div`
width: 80%;
margin: 120px auto;
  h1 {
    text-align: center;
    margin-bottom: 80px;
    font-size: 60px;
    color: #472e8b;
  }
  .box {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    .sbox {
      flex: 0 1 30%;
      background: #2c3e50;
      h2 {
        text-align: center;
        padding: 20px;
        color: #fff;
        font-size: 28px;
      }
      p {
        padding: 8px;
        color: #fff;
      }
    }
  }
  .btn {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    gap: 6px;
    button {
      font-size: 24px;
      background: #fff;
      &.edge {
        padding: 8px;
      }
      &:hover, &.on {
        color: #ccc;
      }
    }
  }
`

const MedicineIngredientSection = () => {
  const key = 'uFGHv4zsT8%2BYf%2B2j%2B%2BQ%2FLvQ6CfEI0ZEYII%2FaYSuefT6hpLXb5jFX4npRGHDB82tMPcS9%2BhtKXcchcm4wH1mE5A%3D%3D'
  const [med, setMed] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const totalItems = useRef(0)
  const perPage = 9
  
  
  useEffect(()=>{
    axios.get(`http://apis.data.go.kr/1471000/DURIrdntInfoService03/getEfcyDplctInfoList02?serviceKey=${key}&pageNo=${currentPage}&numOfRows=9&type=json&typeName=효능군중복`)
    .then(res=>{
      console.log(res)
      if (res.data.body && res.data.body.totalCount) {
        totalItems.current = res.data.body.totalCount;
        if (res.data.body.items) {
          const items = res.data.body.items.map(i => i.item);
          setMed(items);
          console.log(items);
        }
      }
      })
      .catch(err => {
        console.error('Failed to fetch data:', err);
      });
  }, [key, currentPage]);

  const totalPages = Math.ceil(totalItems.current / perPage);
  const startPage = Math.max(1, currentPage - 5)
  const endPage = Math.min(totalPages, startPage + 9)
  const pageList = []

  for (let i=startPage; i<=endPage; i++) {
    pageList.push(i);
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <MedicineIngredientSectionBlock>
      <h1>의약품효능</h1>
      <div className='box'>
        {
          med.length > 0 && med.map((item, index)=>(
            <div key={index} className='sbox'>
              <h2>{item.INGR_NAME}</h2>
              <p>학술명 : {item.INGR_ENG_NAME}</p>
              <p>제품번호 : {item.DUR_SEQ}</p>
              <p>제품코드 : {item.INGR_CODE}</p>
              <p>분류 : {item.SERS_NAME}</p>
              <p>효능 : {item.EFFECT_CODE}</p>
            </div>
          ))
        }
      </div>
      <div className='btn'>
      <button className='edge' onClick={() => handlePageChange(1)} disabled={currentPage === 1}>&lt;&lt;</button>
        <button className='edge' onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>&lt;</button>
        {
          pageList.map((page)=>(
            <button key={page} className={currentPage == page ? 'on' : ''} onClick={()=>handlePageChange(page)}>{page}</button>
          ))
        }
        <button className='edge' onClick={() => handlePageChange(currentPage + 1)} disabled={Math.ceil(currentPage) >= Math.ceil(totalPages)}>&gt;</button>
        <button className='edge' onClick={() => handlePageChange(Math.ceil(totalPages))} disabled={Math.ceil(currentPage) >= Math.ceil(totalPages)}>&gt;&gt;</button>
      </div>
    </MedicineIngredientSectionBlock>
  );
};

export default MedicineIngredientSection;