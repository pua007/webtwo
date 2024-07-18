import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fetchMedicineProducts } from '../../../store/mproduct';

const MedicineProductsSectionBlock = styled.div`
  margin-top: 100px;

  .box {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-items: center;
    padding: 0 192px;
    gap: 20px;

    .detail {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      border-radius: 32px;

      &:hover {
        box-shadow: 0 0 5px 5px rgba(221, 221, 221, 0.5);
        img {
          transform: scale(1.2);
          transition: 0.3s;
        }
      }

      .name {
        padding: 32px 0;
        font-size: 20px;
        font-weight: 500;
      }
    }
  }
`;

const MedicineProductsSection = () => {
  const mproducts = useSelector((state) => state.mproducts.mproducts);
  const mcategory = useSelector((state) => state.mproducts.category);
  const dispatch = useDispatch();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    dispatch(fetchMedicineProducts());
  }, [dispatch]);

  useEffect(() => {
    if (mcategory === 'all') {
      setProduct(mproducts);
    } else {
      setProduct(mproducts.filter((item) => item.category === mcategory));
    }
  }, [mproducts, mcategory]);

  return (
    <MedicineProductsSectionBlock>
      <div className="box">
        {product.length > 0 &&
          product.map((item, index) => (
            <Link to={item.title} state={{item}} key={index} className="detail">
              <img src={item.image} alt={item.title} />
              <span className="name">{item.title}</span>
            </Link>
          ))}
      </div>
    </MedicineProductsSectionBlock>
  );
};

export default MedicineProductsSection;
