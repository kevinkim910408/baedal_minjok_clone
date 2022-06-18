import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __kakaoSignIn } from '../Redux/modules/user';

const Kakao = () => {
    // 인가코드 받는 부분
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code"); 
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(()=>{
      dispatch(__kakaoSignIn(code))
      navigate('/');
    },[dispatch, code, navigate])
  return (
    <>
        로딩중입니다..
    </>
  )
}

export default Kakao

