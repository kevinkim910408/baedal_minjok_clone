import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { __kakaoSignIn } from '../Redux/modules/user';
import { getCookie } from '../Shared/Cookie';
import Loading from './Status/Loading';

const Kakao = () => {
    // 인가코드 받는 부분
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code"); 
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = getCookie("Authorization")

    useEffect(()=>{
      dispatch(__kakaoSignIn(code))
      if(token){
        navigate('/');
      }
    },[token])
  return (
    <>
        <Loading />
    </>
  )
}

export default Kakao

