import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BaseBallProductBlock = styled.div`
  margin:100px auto; 
  h2 { text-align: center; margin-bottom:30px }
`
const UlBlock = styled.ul`
  display : flex; 
  flex-wrap : wrap; 
`
const LiBlock = styled.li`
  flex:0 1 29.37%;
  margin:20px 1%;
  border:1px solid #ddd; 
  position:relative; 
  color:#fff; 
  overflow:hidden; 
  @media screen and (max-width:1024px){
    flex:0 1 31.33%;
  }
  @media screen and (max-width:767px){
    flex:0 1 48%;
  }
  .imgBox {
    overflow:hidden;
    img {
      transition:all 0.3s;
      &:hover { transform:scale(1.2) }
    }
  }
  .infoBox {
    padding:20px; 
    line-height:1.5em; 
    background:rgba(0,0,0,0.5);
    transition:all 0.5s; 
    position:absolute;
    top:100%; 
    width:100%; 
  }
  &:hover {
    .infoBox {
      top:50%; 
    }
  }
  
`
const BaseBallProduct = () => {
const products = [
    {
        image:"./assets/image/uniform01.jpg",
        title:"어센틱 유니폼(화이트)",
    },
    {
        image:"./assets/image/uniform02.jpg",
        title:"어센틱 유니폼(오렌지)",
    },
    {
        image:"./assets/image/uniform03.png",
        title:"오렌지 유니폼 짐쌕",
    },
    {
        image:"./assets/image/uniform04.png",
        title:"레플리카 유니폼(그레이)",
    },
    {
        image:"./assets/image/uniform05.jpg",
        title:"24 블랙 에어포스 유니폼",
    },
    {
        image:"./assets/image/uniform06.jpg",
        title:"키즈 한화이글스 코튼 볼캡",
    }
]
    return (
        <BaseBallProductBlock className='row'>
            <UlBlock>
        {
            products.map((item,index)=>(
            <LiBlock key={index}>
                <div className="imgBox">
                <Link to={`/product/${index}`} state={{item, index}}>
                    <img src={item.image} alt={item.title} />
                </Link>
                </div>
                <div className="infoBox">
                <p style={{ fontSize:'18px'}}>
                    <Link to={`/product/${index}`} state={{item, index}}>
                    {item.title}
                    </Link>
                </p>
                
                </div>
            </LiBlock>
            ))
        }
        </UlBlock>
        </BaseBallProductBlock>
    );
};

export default BaseBallProduct;