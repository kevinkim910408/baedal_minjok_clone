import React, {useState} from 'react'
import ExitHeader from '../Common/ExitHeader'
import { __userSignIn, __kakaoSignIn } from '../../Redux/modules/user'
import { useDispatch } from 'react-redux/es/exports'
import {StInput, StWrap, StFlex, StSubmitInput, StTitle, StButtonLogin, StLink, StImg} from './SigninupStyled'
import Kakao from '../../Assets/Image/kakao_login.png'
import Naver from '../../Assets/Image/naver_login.png'

const SigninComp = () => {
  const [email, setEmail] = useState();
  const [pw, setPw] = useState();
  const dispatch = useDispatch();

  const onLoginHandler = () =>{
    dispatch(__userSignIn({email, pw}))
  }

  const onKakaoHandler = () => {
    dispatch(__kakaoSignIn())
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
          <StImg src={Kakao} alt="" onClick={onKakaoHandler}/>
        </StButtonLogin>
        <StButtonLogin>
          <StImg src={Naver} alt="" />
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

