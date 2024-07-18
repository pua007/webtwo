import React, { useState } from 'react';
import styled from 'styled-components';


const MainBottomBlock = styled.div`
    display: flex;
  justify-content: center;
  margin: 150px 0;

  

  @media screen and (max-width: 767px){
				display: none;
			}

  div{
  @media screen and (max-width: 1024px){
        flex-wrap: wrap;
			}
  max-width 1700px;
  overflow:hidden;
  display: flex;
  justify-content: center;
  gap: 50px;
  margin: 0 30px;
  }
  .imagebox{
    object-fit: cover;
    border-radius: 10px;
  }
`

const MainBottom = () => {
  const [image, setImg] = useState(false)
  const [image2, setImg2] = useState(false)

  return (
    <MainBottomBlock>
      <div>
        <div className='imagebox'>
          <img src={image ? "src/assets/image/banner_2_n.png" : "src/assets/image/banner_1_n.png"} alt="" onMouseOver={()=>setImg(true)} onMouseOut={()=>setImg(false)}/>
        </div>
        <div className='imagebox'>
          <img src={image2 ? "src/assets/image/banner_1_n.png" : "src/assets/image/banner_2_n.png"} alt="" onMouseOver={()=>setImg2(true)} onMouseOut={()=>setImg2(false)}/>
        </div>
      </div>
    </MainBottomBlock>
  );
};

export default MainBottom;