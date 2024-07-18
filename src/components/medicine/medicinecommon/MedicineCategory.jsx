import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const MedicineCategoryBlock = styled.div`
margin-top: 100px;
.category {
  ul {
    position: relative;
    display: flex;
    height: 70px;
    margin: 0 10%;
    gap: 3%;
    border-bottom: 1px solid #ddd;
    li {
      flex: 1;
      text-align: center;
      display: flex;
      height: 100%;
      a {
        flex: 1;
        font-size: 20px;
        color: #888888;
        font-weight: 500;
        height: 100%;
        &:hover {
        color: #104397;
        font-weight: 900;
        border-bottom: 1px solid #104397;
        }
        &.active {
          color: #104397;
          font-weight: 900;
          border-bottom: 2px solid #104397;
        }
      }
    }
    .page {
      a {
        border-bottom: 1px solid #104397;
        color: #104397; font-weight: 900;
      }
    }
  }
}
`

const MedicineCategory = () => {
  return (
    <MedicineCategoryBlock>
      <div className='category'>
        <ul>
          <li><NavLink to='/medicine/history'>연혁</NavLink></li>
          <li><NavLink to='/medicine/family'>가족친화경영</NavLink></li>
          <li><NavLink to='/medicine/products'>제품소개</NavLink></li>
          <li><NavLink to='/medicine/location'>찾아오시는 길</NavLink></li>
          <li><NavLink to='/medicine/ingredients'>의약품효능군</NavLink></li>
        </ul>
      </div>
    </MedicineCategoryBlock>
  );
};

export default MedicineCategory;