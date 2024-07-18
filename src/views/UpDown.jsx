import React, { useState } from 'react';
import styled from 'styled-components';

const UpDownBlock = styled.div`
padding: 120px;
display: grid;
justify-content: center;
background: blue;
  h1 {
    margin-bottom: 80px;
    text-align: center;
    font-size: 66px;
  }
  form {
    width: 600px;
    height: 500px;
    text-align: center;
    background: #f55c5c;
    h3 {
      margin-top: 160px;
      font-size: 44px;
    }
    input {
      margin: 100px 0;
    }
    button {
      margin: 4px;
      padding-bottom: 2px;
    }
    .reset {
      display: none;
      border-radius: 50%;
      height: 44px;
      width: 44px;
      background: yellow;
      color: purple;
      &.on {
        display: inline-block;
      }
    }
  }
`

const UpDown = () => {
  const [state, setState] = useState('1~1000')
  const [answer, setAnswer] = useState(0)
  const [right, setRight] = useState(Math.ceil(Math.random()*1000))
  const [on, setOn] = useState(false)

  const sendSubmit = (e) => {
    e.preventDefault()
    if (answer == right) {
      setState('이걸 맞추네')
      setTimeout(()=>{
      setState('한번더?')
      setOn(true)
      }, 3000)
    } else if (right > answer) {
      setState('up')
    } else {
      setState('down')
    }
  }

  const onReset = () => {
    setRight(Math.ceil(Math.random()*1000))
    setState('1~1000')
    setAnswer(0)
    setOn(false)
  }

  const changeAnswer = (e) => {
    setAnswer(e.target.value)
  }
  return (
    <UpDownBlock>
      <h1>UP DOWN</h1>
      <form onSubmit={sendSubmit}>
        <h3>{state}</h3>
        <input type="number" max='1000' min='1' value={answer} onChange={changeAnswer} />
        <button type='submit'>확인</button>
        <button type='button' onClick={onReset} className={on ? 'reset on' : 'reset'}>한번더</button>
      </form>
    </UpDownBlock>
  );
};

export default UpDown;