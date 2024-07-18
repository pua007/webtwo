import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import dayjs from 'dayjs';

const BoardListBlock = styled.div`
    margin: 0 0 50px;
    table {
        col:nth-child(1) {width:50px}
        col:nth-child(2) {width:130px}
        col:nth-child(3) {width:auto}
        col:nth-child(4) {width:200px}
        col:nth-child(5) {width:100px}
        col:nth-child(6) {width:100px}
    th { padding: 5px }
    td {
            padding: 5px; text-align:center;
            &:nth-child(3) { text-align:left }
        }
    }
    .btn {
        text-align:center;  margin:20px 0;
        a { padding: 10px 20px; background:#f37321; color:#fff }
    }
`

const BoardListSection = () => {
    const user = useSelector(state=>state.users.user)
    const list = useSelector(state=>state.boards.board)
    const [board, setBoard] = useState(list)

    useEffect(()=>{
        setBoard(list)
    }, [list])

    return (
        <BoardListBlock>
            <table border="1">
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>분야</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>날짜</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                    { board.length>0 && board.map((item, index)=>(
                        <tr key={index}>
                            <td>{board.length-index}</td>
                            <td>{item.category}</td>
                            <td><Link to={`/boardDetail/${item.subject}`} state={{ item }}>{item.subject}</Link></td>
                            <td>{item.writer}</td>
                            <td>{dayjs(item.date).format('YYYY-MM-DD')}</td>
                            <td>{item.hit}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            {   (user && user.userId=="jingi745@naver.com") &&
                <div className='btn'>
                    <Link to="/boardwrite">글쓰기</Link>
                </div>
            }
        </BoardListBlock>
    );
};

export default BoardListSection;