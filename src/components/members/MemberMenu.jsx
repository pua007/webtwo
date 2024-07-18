import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const MemberMenuBlock = styled.div`
    text-align: center;
    width: 15%;
    display: block;
    border: 2px solid black;
    border-bottom: 0px;
    border-top: 0px;
    padding-top: 80px;
    a {
        display: block;
        padding: 30px 0;
        flex-direction: column;
        font-size: 24px;
        font-weight: bold;
        &:hover {
            color: red;
        }
    }
`;

const MemberMenu = () => {
    return (
        <MemberMenuBlock>
            <Link to="/member/benefit">복지혜택</Link>
            <Link to="/member/members">사원</Link>
            <Link to="/member/question">자주묻는 질문</Link>
        </MemberMenuBlock>
    );
};

export default MemberMenu;
