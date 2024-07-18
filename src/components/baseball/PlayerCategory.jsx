import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { onChangeCategory } from '@/store/player';

const PlayerCategoryBlock = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    
    button {
        width: 100px;
        height: 40px;
        margin: 0 20px;
        background: orange;
        color: #fff;
        &.hover {
            border-bottom: 1px solid orange;
        }
        &.on {
            background:black; 
        }
    }
    
`

const PlayerCategory = ({title}) => {
    const dispatch = useDispatch()
    const category = ['투수','포수','외야수']
    return (
        <PlayerCategoryBlock>
            {
                category.map((value, index)=><button type='button' key={index} className={ title==value ? "on" : ""} onClick={()=>dispatch(onChangeCategory(value))}>{value}</button>)
            }
        </PlayerCategoryBlock>
    );
};

export default PlayerCategory;