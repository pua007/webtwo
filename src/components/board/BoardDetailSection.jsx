import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { removeBoard } from '../../store/board';
import { Link, useNavigate } from 'react-router-dom'


const BoardDetailBlock = styled.div`
    max-width:600px; margin:0 auto 50px;
    table{
        col:nth-child(1) {width:100px;}
        col:nth-child(2) {width:auto;}
        td { padding: 5px;
            input {width:100%; border:1px solid #ddd; heught:30px; padding:5px;}
            textarea {width:100%; border:1px solid #ddd; padding:5px; height:200px }    
        }
    }
    .btn { text-align:center; margin-top:20px;
        button, a { margin:0 10px; padding:10px 20px; background:#ddd;
            font-size:14px }
    }
`

const BoardDetailSection = ({item}) => {
    const navigate = useNavigate()
    const dispatch =useDispatch()
    const user = useSelector(state=>state.users.user)
    const onRemove = (e)=>{
        e.preventDefault()
        dispatch(removeBoard(item))
        navigate("/board")
    }
    return (
        <BoardDetailBlock>
                <table border="1">
                    <colgroup>
                        <col />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td>작성자</td>
                            <td>
                                <input type="text" name="writer" value={item.writer} disabled />
                            </td>
                        </tr>
                        <tr>
                            <td>분야</td>
                            <td>
                                <select name="category" value={item.category} disabled>
                                    <option value="분야">분야</option>
                                    <option value="한화이글스">한화이글스</option>
                                    <option value="한화제약">한화제약</option>
                                    <option value="한화의인재">한화의인재</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td>제목</td>
                            <td>
                                <input type="text" name="subject" value={item.subject} disabled />
                            </td>
                        </tr>
                        <tr>
                            <td>내용</td>
                            <td>
                                <textarea name="content" value={item.content} disabled ></textarea>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
                <div className='btn'>
                {  (user && user.userId==item.writer) &&
                <>
                    <Link to={`/boardModify/${item.subject}`} state={{item:item}}>수정</Link>
                    <a href='#none' onClick={onRemove}>삭제</a>
                </>
                }

                <Link to="/board">목록</Link>
                </div>
        </BoardDetailBlock>
    );
};

export default BoardDetailSection;