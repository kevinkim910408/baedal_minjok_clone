import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { __kakaoSignIn } from '../Redux/modules/user';

const Kakao = () => {
    // 인가코드 받는 부분
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code"); 
    const {kakaoStatus} = useSelector(state=>state.userReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    console.log("kakaoStatus", kakaoStatus);

    useEffect(()=>{
      dispatch(__kakaoSignIn(code))
      
      if(kakaoStatus){
        alert('로그인에 성공하였습니다.')
        navigate('/');
      }
    },[dispatch, code, navigate, kakaoStatus])
  return (
    <>
        로딩중입니다..
    </>
  )
}

export default Kakao