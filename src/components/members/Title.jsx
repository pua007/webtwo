import React from "react";
import styled from "styled-components";

const TitleBlock = styled.div`
  margin-bottom: 20px;
  font-size: 30px;
`;

const Title = ({ title }) => {
  return (
    <TitleBlock>
      <h3>{title}</h3>
    </TitleBlock>
  );
};

export default Title;
