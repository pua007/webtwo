import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { changeCategory } from '../../../store/mproduct';
import { useDispatch, useSelector } from 'react-redux';

const MedicineProductsCategoryBlock = styled.div`
margin-top: 100px;
  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    margin: auto;
    li {
      flex: 1;
      border: 1px solid #ddd;
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        flex: 1;
        text-align: center;
        padding: 22px 0;
        border: 1px solid transparent;
        cursor: pointer;
        &:hover {
          border: 1px solid #104397;
          color: #104397;
        }
        &.on {
          background: #104397;
          color: #fff;
        }
      }
    }
  }
`

const MedicineProductsCategory = () => {
  const dispatch = useDispatch()
  const mpro = useSelector(state=>state.mproducts.category)

  return (
    <MedicineProductsCategoryBlock>
      <ul>
        <li><a className={mpro === 'all' ? 'on' : ''} onClick={()=>dispatch(changeCategory('all'))}>전체</a></li>
        <li><a className={mpro === 'breath' ? 'on' : ''} onClick={()=>dispatch(changeCategory('breath'))}>호흡기계용</a></li>
        <li><a className={mpro === 'cycle' ? 'on' : ''} onClick={()=>dispatch(changeCategory('cycle'))}>순환기계용</a></li>
        <li><a className={mpro === 'pain' ? 'on' : ''} onClick={()=>dispatch(changeCategory('pain'))}>진통/소염제</a></li>
        <li><a className={mpro === 'anti' ? 'on' : ''} onClick={()=>dispatch(changeCategory('anti'))}>항생제/항진균제</a></li>
      </ul>
    </MedicineProductsCategoryBlock>
  );
};

export default MedicineProductsCategory;