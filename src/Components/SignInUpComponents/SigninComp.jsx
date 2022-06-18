import React, {useState} from 'react'
import { __userSignIn } from '../../Redux/modules/user'
import { useDispatch} from 'react-redux/es/exports'
import { useNavigate } from 'react-router-dom'
import {StInput, StWrap, StFlex, StSubmitInput, StTitle, StButtonLogin, StLink, StImg} from './SigninupStyled'
import Kakao from '../../Assets/Image/kakao_login.png'
import Naver from '../../Assets/Image/naver_login.png'
import ExitHeader from '../Common/ExitHeader'

const SigninComp = () => {
  const [email, setEmail] = useState();
  const [pw, setPw] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const onLoginHandler = () =>{
    dispatch(__userSignIn({email, pw}))
    alert('로그인에 성공하였습니다.')
    navigate('/')
  }

  return (
    <>
      <StWrap>
        <ExitHeader />
        <StTitle>로그인</StTitle>
        <StInput type="text" placeholder='아이디'  onChange={(e)=> setEmail(e.target.value)}/>
        <StInput type="password" placeholder='비밀번호' onChange={(e)=> setPw(e.target.value)}/>
        <StSubmitInput type="submit" value="로그인" onClick={onLoginHandler}/>
      </StWrap>

      <StFlex>
        <StButtonLogin >
          <a href='http://3.37.87.166/user/kakao'>
            <StImg src={Kakao} alt=""/>
          </a>
        </StButtonLogin>
        <StButtonLogin>
        <a href='http://3.37.87.166/user/naver'>
            <StImg src={Naver} alt=""/>
          </a>
        </StButtonLogin>
        <span>
          혹시, 배달의민족이 처음이신가요?
        <StLink to={'/signup'}> 회원가입</StLink>
        </span>
      </StFlex>
    </>
  )
}

export default SigninComp;

