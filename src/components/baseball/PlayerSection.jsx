import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { fetchPlayers } from '../../store/player';
import { Link } from 'react-router-dom';

const PlayerSectionBlock = styled.div``

const UlBlock = styled.ul`
    display:flex; 
    flex-wrap: wrap;
`

const ListBlock = styled.li`
    flex:0 0 29.33%;
    margin:20px 2%;
    text-align:center; 
    border:1px solid #000;
    .photo{
        background: #808080;
    }
    .info {
        justify-content: space-between;
        display: inline-block;
        display: flex;
        p:nth-child(1) { 
            display: flex;
            justify-content: center;
            font-size:30px;
            
        }
        p:nth-child(2) { 
            display: flex;
            justify-content: center;
            font-size:30px;
        }
    }
`

const PlayerSection = ({title}) => {
    const dispatch = useDispatch();
    const allData = useSelector(state=>state.players.players)
    const [players, setPlayers] = useState(allData)

    useEffect(()=>{
        dispatch(fetchPlayers())
    }, [])

    useEffect(()=>{
        if(allData.length>0) {
            if (title=='all') {
                setPlayers(allData)
            } else {
                setPlayers(allData.filter(item=>item.category==title))
            }
        }
    }, [allData, title])

    return (
        <PlayerSectionBlock>
            <UlBlock>
            {   players &&
                players.map((item, index)=>(
                    <ListBlock key={index}>
                        <div className='photo'>
                            <Link to={`/player/${item.id}`} state={{item, index}}><img src={item.image} alt={item.title} /></Link>
                        </div>
                        <div className='info'>
                            <p>{item.number}</p>
                            <ul>
                                <li><Link to={`/player/${item.id}`} state={{item, index}}>{item.title}</Link> </li>
                                <li>{item.Ename}</li>
                            </ul>
                        
                        </div>
                    </ListBlock>
                ))
            }
            </UlBlock>
        </PlayerSectionBlock>
    );
};

export default PlayerSection;