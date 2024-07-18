import React from 'react';
import styled from 'styled-components';

const PlayerDetailBlock = styled.div`
    background: #808080;
    div{
        .backnumber{
            display: flex;
            position: relative;
            right: 180px;
            justify-content: center;
            font-size:50px;
            margin-top: 150px;
            color: #000;
            .name {
                display: flex;
                position: relative;
                left: 50px;
                justify-content: center;
                color: black;
                font-size:30px;
                left: 30px;
                .p{
                    margin: 20px;
                }
            }
        
        }
            .text {
            p {
                white-space: pre;
                color: #fff;
                span{
                    color: #000
                }
            }
        }
    }
`
const PlayerContent = styled.div`
    display: flex;
`
const Photo = styled.div`
    flex: 1;
`
const Info = styled.div`
    flex:1; 
    font-size:20px; 
    line-height:1.5em; 
    


`

const PlayerDetail = ({item, index}) => {
    return (
        <PlayerDetailBlock>
            <PlayerContent>
                <Photo>
                    <img src={`/${item.image}`} alt={item.title} />
                </Photo>
                <Info>
                    <div className='backnumber'>
                        <p>{item.number}</p>
                        <div className='name'>
                            <p>{item.title}</p>
                            <p>{item.Ename}</p>
                        </div>
                    </div>

                    
                    <img src={`/${item.positionImage}`} alt="" />
                    <div className='text'>
                        <p>{item.category}</p>
                        <p>생년월일 : <span>{item.birthDay}</span></p>
                        <p>키, 체중 : <span>{item.body}</span></p>
                        <p>최종 학력 : <span>{item.school}</span></p>
                        <p>커리어, 입단 해 : <span>{item.career}</span></p>
                    </div>
                </Info>
            </PlayerContent>
        </PlayerDetailBlock>
    );
};

export default PlayerDetail;