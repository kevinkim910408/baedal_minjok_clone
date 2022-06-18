import React, {useState} from 'react'
import { __userSignIn } from '../../Redux/modules/user'
import { useDispatch, useSelector} from 'react-redux/es/exports'
import { useNavigate } from 'react-router-dom'
import {StInput, StWrap, StFlex, StSubmitInput, StTitle, StLoginDiv, StLink, StImg} from './SigninupStyled'
import Kakao from '../../Assets/Image/kakao_login.png'
import Naver from '../../Assets/Image/naver_login.png'
import ExitHeader from '../Common/ExitHeader'

const SigninComp = () => {
  const [email, setEmail] = useState();
  const [pw, setPw] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isLogin} = useSelector(state=> state.userReducer)

  const onLoginHandler = () =>{
    dispatch(__userSignIn({email, pw}))
    if(isLogin){
      alert('로그인에 성공하였습니다.')
      navigate('/')
    }else{
      alert('이메일형식의 아이디, 혹은 비밀번호를 체크해주세요')
    }
  }

  return (
    <>
      <StWrap>
        <ExitHeader text=""/>
        <StTitle>로그인</StTitle>
        <StInput type="text" placeholder='아이디'  onChange={(e)=> setEmail(e.target.value)}/>
        <StInput type="password" placeholder='비밀번호' onChange={(e)=> setPw(e.target.value)}/>
        <StSubmitInput type="submit" value="로그인" onClick={onLoginHandler}/>
      </StWrap>

      <StFlex>
        <StLoginDiv >
          <a href='http://3.37.87.166/user/kakao'>
            <StImg src={Kakao} alt=""/>
          </a>
        </StLoginDiv>
        <StLoginDiv>
        <a href='http://3.37.87.166/user/naver'>
            <StImg src={Naver} alt=""/>
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

