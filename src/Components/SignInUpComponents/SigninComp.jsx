import React, {useState} from 'react'
import ExitHeader from '../Common/ExitHeader'
import {StInput, StWrap, StFlex, StSubmitInput, StTitle, StButtonLogin, StLink, StImg} from './SigninupStyled'
import Kakao from '../../Assets/Image/kakao_login.png'
import Naver from '../../Assets/Image/naver_login.png'

const SigninComp = () => {
  const [email, setEmail] = useState();
  const [pw, setPw] = useState();
  const onClickHandler= () =>{
    console.log("clicked")
  }
  return (
    <>
      <StWrap>
        <ExitHeader />
        <StTitle>로그인</StTitle>
        <StInput type="text" placeholder='아이디'  onChange={(e)=> setEmail(e.target.value)}/>
        <StInput type="password" placeholder='비밀번호' onChange={(e)=> setPw(e.target.value)}/>
        <StSubmitInput type="submit" value="로그인" />
      </StWrap>
      <StFlex>
        
        <StButtonLogin onClick={onClickHandler}>
          <StImg src={Kakao} alt="" />
        </StButtonLogin>

        <StButtonLogin>
          <StImg src={Naver} alt="" />
        </StButtonLogin>

        <span>
          혹시, 배달의민족이 처음이신가요?
        <StLink to={'/signup'}> 회원가입</StLink>
        <div class="fb-login-button" data-width="300px" data-size="large" data-button-type="login_with" data-layout="default" data-auto-logout-link="false" data-use-continue-as="false"></div>
        </span>
      </StFlex>
    </>
  )
}

export default SigninComp;

