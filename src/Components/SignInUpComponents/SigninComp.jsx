import React, {useState, useRef} from 'react'
import { __userSignIn } from '../../Redux/modules/user'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { useNavigate } from 'react-router-dom'
import {StInput, StWrap, StFlex, StSubmitInput, StTitle, StLoginDiv, StLink, StSubmit} from './SigninupStyled'
import styled from 'styled-components'
import ExitHeader from '../Common/ExitHeader'
import { useEffect } from 'react'

const SigninComp = () => {
  const [email, setEmail] = useState();
  const [pw, setPw] = useState();
  const {isLogin} = useSelector(state=>state.userReducer)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pwRef = useRef();
  
  const onLoginHandler = () =>{
    dispatch(__userSignIn({email, pw}));
    pwRef.current.value = "";
  }

  useEffect(()=>{
    if(isLogin){
      alert('환영합니다')
      navigate('/')
    }
  },[navigate, isLogin])

  return (
    <>
      <StWrap>
        <ExitHeader text=""/>
        <StTitle>로그인</StTitle>
        <StInput type="text" placeholder='아이디'  onChange={(e)=> setEmail(e.target.value)}/>
        <StInput type="password" placeholder='비밀번호' onChange={(e)=> setPw(e.target.value)} ref={pwRef}/>
        <StSubmitInput type="submit" value="로그인" onClick={onLoginHandler}/>
      </StWrap>

      <StFlex>
        <StLoginDiv >
          <a href='http://3.37.87.166/user/kakao'>
            <StSubmit kakao>카카오 로그인</StSubmit>
          </a>
        </StLoginDiv>
        <StLoginDiv>
          <a href='http://3.37.87.166/user/naver'>
            <StSubmit>네이버 로그인</StSubmit>
          </a>
        </StLoginDiv>
        <span>
          혹시, 배달의민족이 처음이신가요?
        <StLink to={'/signup'}> 회원가입</StLink>
        </span>
      </StFlex>
    </>
  )
}

export default SigninComp;

