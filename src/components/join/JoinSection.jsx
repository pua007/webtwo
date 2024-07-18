import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { addUsers } from '../../store/user';

const JoinSectionBlock = styled.div`
padding: 90px;
  div {
    width: 400px;
    margin: 0 auto;
    h1 {
      margin: 45px 0;
      padding: 45px 0;
      text-align: center;
      border-bottom: 1px solid gray;
    }
    table {
      .co1 {width:120px;}
      .co2 {width:auto;}
      td {
        height: 33px;
        &:nth-child(1) {text-align: right; padding-right: 15px;}
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
    nav {
      text-align: center;
      margin-left: 120px;
      margin-right: auto;
      button {
        height: 40px;
        width: 80px;
        margin: 30px 10px 0;
        border-radius: 15px;
      }
    }
  }
`

const JoinSection = () => {
  const userNameRef = useRef()
  const userIdRef = useRef()
  const userPwRef = useRef()
  const userPwOkRef = useRef()
  const userPhoneRef = useRef()
  const userAddr2Ref = useRef()
  const users = useSelector(state=>state.users.users)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [userInfo, setUserInfo] = useState({
    userName: '',
    userId: '',
    userPw: '',
    userPwOk: '',
    userPhone: '',
    zipCode: '',
    addr1: '',
    addr2: ''
  })

  const handleChange = (e) => {
    const {value, name} = e.target
    setUserInfo(userInfo=>({...userInfo, [name]: value}))
  }

  const onReset = () => {
    setUserInfo({
      userName: '',
      userId: '',
      userPw: '',
      userPwOk: '',
      userPhone: '',
      zipCode: '',
      addr1: '',
      addr2: ''
    })
  }

  const onRegister = (e) => {
    e.preventDefault()
    if (!userInfo.userName) {
      alert('이름을 입력해주세요')
      userNameRef.current.focus()
      return
    }
    if (!userInfo.userId) {
      alert('아이디를 입력해주세요')
      userIdRef.current.focus()
      return
    }
    if (users.find(item=>item.userId == userInfo.userId)) {
      alert('중복된 아이디입니다')
      userIdRef.current.focus()
      return
    }
    if (!userInfo.userPw) {
      alert('비밀번호를 입력해주세요')
      userPwRef.current.focus()
      return
    }
    if (!userInfo.userPwOk) {
      alert('비밀번호 확인을 입력해주세요')
      userPwOkRef.current.focus()
      return
    }
    if (userInfo.userPw !== userInfo.userPwOk) {
      alert('비밀번호가 다릅니다')
      setUserInfo({...userInfo, userPwOk: ''})
      userPwOkRef.current.focus()
      return
    }
    dispatch(addUsers(userInfo))
    navigate('/login')
  }

  useEffect(() => {
    window.openDaumPostcode = () => {
      new window.daum.Postcode({
        oncomplete: (data) => {
          let fullAddr = '';
          let extraAddr = '';
          if (data.userSelectedType === 'R') {
            fullAddr = data.roadAddress;
          } else {
            fullAddr = data.jibunAddress;
          }
          if (data.userSelectedType === 'R') {
            if (data.bname !== '') {
              extraAddr += data.bname;
            }
            if (data.buildingName !== '') {
              extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
            }
            fullAddr += (extraAddr !== '' ? ' (' + extraAddr + ')' : '');
          }
          setUserInfo(prevState => ({
              ...prevState,
              zipCode: data.zonecode,
              addr1: fullAddr
          }));
          userAddr2Ref.current.focus();
        },
      }).open();
    };
  }, [])
  

  return (
    <JoinSectionBlock>
      <div>
        <h1>회원가입</h1>
        <form onSubmit={onRegister}>
          <table border='0'>
            <colgroup>
              <col className='co1' />
              <col className='co2' />
            </colgroup>
            <tbody>
              <tr>
                <td>이름</td>
                <td>
                  <input type="text" ref={userNameRef} id='userName' name='userName' value={userInfo.userName} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>아이디</td>
                <td>
                  <input type="text" ref={userIdRef} id='userId' name='userId' value={userInfo.userId} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>비밀번호</td>
                <td>
                  <input type="password" ref={userPwRef} id='userPw' name='userPw' value={userInfo.userPw} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>비밀번호 확인</td>
                <td>
                  <input type="password" ref={userPwOkRef} id='userPwOk' name='userPwOk' value={userInfo.userPwOk} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>연락처</td>
                <td>
                  <input type="text" ref={userPhoneRef} id='userPhone' name='userPhone' value={userInfo.userPhone} onChange={handleChange} />
                </td>
              </tr>
              <tr>
                <td>
                  <button type='button' onClick={window.openDaumPostcode} style={{height: '33px', width: '66px', marginTop: '20px', borderRadius: '5px'}}>우편번호</button>
                </td>
                <td>
                  <input type="text" id='zipCode' name='zipCode' value={userInfo.zipCode} style={{margin: '20px 0 0 0', width: '70px', textAlign: 'center', fontSize: '16px'}} onChange={handleChange} readOnly />
                </td>
              </tr>
              <tr>
                <td>주소</td>
                <td>
                  <input type="text" id='addr1' name='addr1' value={userInfo.addr1} onChange={handleChange} readOnly />
                </td>
              </tr>
              <tr>
                <td>상세주소</td>
                <td>
                  <input type="text" ref={userAddr2Ref} id='addr2' name='addr2' value={userInfo.addr2} onChange={handleChange} />
                </td>
              </tr>
            </tbody>
          </table>
          <nav>
            <button type='submit'>회원가입</button>
            <button type='button' onClick={onReset}>초기화</button>
          </nav>
        </form>
      </div>
    </JoinSectionBlock>
  );
};

export default JoinSection;