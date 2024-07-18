import React from 'react';
import styled from 'styled-components';

const ToTopBlock = styled.button`
position: fixed;
bottom: 60px;
right: 30px;
z-index: 1000;
padding: 10px;
background-color: rgb(108, 9, 201);
color: #ffffff;
border: none;
border-radius: 20px;
cursor: pointer;
transition: 1s;

&:hover {
  background-color: #0056b3;
}
`

const ToTop = () => {

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <ToTopBlock onClick={toTop}>top</ToTopBlock>
  );
};

export default ToTop;