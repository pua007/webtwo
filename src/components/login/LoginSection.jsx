import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { userLogin } from '../../store/user';

const LoginSectionBlock = styled.div`
padding: 90px;
  div {
    width: 400px;
    margin: 0 auto;
    text-align: center;
    h1 {
      margin: 45px 0;
      padding: 45px 0;
      border-bottom: 1px solid gray;
    }
    form {
      table {
        td {
          height: 33px;
          &:nth-child(1) {text-align: center; width: 90px;}
          padding: 10px 0;
          align-items: center;
          input {
            height: 33px;
            width: 100%;
            border: 1px solid gray;
            border-radius: 5px;          
          }
        }
      }
      button {
        height: 50px;
        width: 400px;
        font-size: 22px;
        background: rgb(248, 209, 35);
      }
    }
    .rei {
      height: 33px;
      width: 99px;
      margin-top: 15px;
      border-radius: 8px;
      font-size: 12px;
    }
  }
  
`

const LoginSection = () => {
  const [userInfo, setUserInfo] = useState({
    userId: '',
    userPw: ''
  })

  const handleChange = (e) => {
    const {value, name} = e.target
    setUserInfo(userInfo=>({...userInfo, [name]: value}))
  }

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const users = useSelector(state=>state.users.users)

  const onRegister = () => {
    navigate('/join')
  }

  const onLogin = (e) => {
    e.preventDefault()
    if (!userInfo.userId) {
      alert('아이디를 입력하세요')
      return
    }
    if (!userInfo.userPw) {
      alert('비밀번호를 입력하세요')
      return
    }
    const user = users.find(item=>item.userId == userInfo.userId && item.userPw == userInfo.userPw)
    if (user) {
      dispatch(userLogin(userInfo))
      navigate('/')
    } else {
      alert('회원이 아닙니다')
      setUserInfo({
        userId: '',
        userPw: ''
      })
      return
    }
  }

  return (
    <LoginSectionBlock>
      <div>
        <h1>로그인</h1>
        <form onSubmit={onLogin}>
          <table>
            <tbody>
              <tr>
                <td><label htmlFor='userId'>아이디</label></td>
                <td>
                  <input type="text" id='userId' name='userId' value={userInfo.userId} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td><label htmlFor='userPw'>비밀번호</label></td>
                <td>
                  <input type="password" id='userPw' name='userPw' value={userInfo.userPw} onChange={handleChange} />
                </td>
              </tr>
            </tbody>
          </table>
          <nav>
            <button type='submit'>로그인</button>
          </nav>
        </form>
        <button onClick={onRegister} className='rei'>회원가입</button>
      </div>
    </LoginSectionBlock>
  );
};

export default LoginSection;