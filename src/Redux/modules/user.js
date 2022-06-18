import api from '../../Shared/api'
import {setCookie} from '../../Shared/Cookie'

// 액션 타입
const USER_IDCHECK = 'user/USER_IDCHECK'
const USER_EMAILCHECK = 'user/USER_EMAILCHECK'
const GET_REQUEST_LOADING = 'user/GET_REQUEST_LOADING';

// 액션 함수
const userIdCheck = (payload) => ({ type : USER_IDCHECK, payload });
const userEmailCheck = (payload) => ({ type : USER_EMAILCHECK, payload });
const getRequestLoading = (payload) => ({ type : GET_REQUEST_LOADING, payload });

// 회원가입 - 서버에 저장
export const __userSignUp = ({email, nickName, pw, pwTwo}) => async (dispatch) => {
    dispatch(getRequestLoading(true))
    try{
        await api.post(`/user/signup`,{
            email: email,
            nickname : nickName,
            password: pw,
            passwordCheck: pwTwo,
          })
    }catch(error){
       alert('Sign Up Error:' + error)
    }finally{
        dispatch(getRequestLoading(false))
    }
}

// 중복체크
export const __userIdCheck = ({id}) => async (dispatch) =>{
    dispatch(getRequestLoading(true));
    try{
        const data = await api.get(`/user/check/nickname/${id}`)
        data.data.result ? alert('사용가능한 아이디입니다') : alert('이미 있는 아이디 입니다');
        dispatch(userIdCheck(data.data.result));
    }catch(error){
        alert('이미 있는 아이디 입니다');
    }finally{
        dispatch(getRequestLoading(false))
    }
}

export const __userEmailCheck = ({email}) => async (dispatch) =>{
    dispatch(getRequestLoading(true));
    try{
        const data = await api.get(`/user/check/email/${email}`)
        data.data.result ? alert('사용가능한 이메일입니다') : alert('이미 있는 이메일 입니다');
        dispatch(userEmailCheck(data.data.result));
    }catch(error){
        alert('이미 있는 이메일 입니다');
    }finally{
        dispatch(getRequestLoading(false))
    }
}

// 로그인
export const __userSignIn = ({email, pw}) => async (dispatch) =>{
    dispatch(getRequestLoading(true));
    try{
        const data = await api.post(`/user/login`, {
            email: email,
            password: pw,
        })
        console.log(data)
        data.data.result ? alert('로그인 되었습니다') : alert('아이디 혹은 비밀번호를 체크해주세요');
        setCookie("Authorization", data.data.token)
        setCookie("username", data.data.nickname)
    }catch(error){
        alert('아이디 혹은 비밀번호를 체크해주세요');
    }finally{
        dispatch(getRequestLoading(false))
    }
}

// 카카오 로그인
export const __kakaoSignIn = (code) => async (dispatch) =>{
    dispatch(getRequestLoading(true));
    try{
        const data = await api.get(`/user/kakao/callback?code=${code}`)
        setCookie("Authorization", data.data.token)
        setCookie("username", data.data.nickname)
        data.data.result ? alert('로그인에 성공하였습니다.') : alert('아이디 혹은 비밀번호를 체크해주세요');
    }catch(error){
       alert('Kakao Login Error:' + error)
    }finally{
        dispatch(getRequestLoading(false))
    }
}

// 네이버 로그인
export const __naverSignIn = (code) => async (dispatch) =>{
    dispatch(getRequestLoading(true));
    try{
        const data = await api.get(`/user/naver/callback?code=${code}`)
        setCookie("Authorization", data.data.token)
        setCookie("username", data.data.nickname)
        data.data.result ? alert('로그인에 성공하였습니다.') : alert('아이디 혹은 비밀번호를 체크해주세요');
    }catch(error){
       alert('Naver Login Error:' + error)
    }finally{
        dispatch(getRequestLoading(false))
    }
}

// 초기값
const initialState = {
    nickName: "",
    email: "",
    loading: false,
    error: null,
    idCheck: false,
    emailCheck: false,
}

export default function userReducer(state = initialState, {payload, type}){
    switch(type){
        case USER_IDCHECK:
            return {
                ...state,
                idCheck: payload,
            };
        case USER_EMAILCHECK:
            return {
                ...state,
                emailCheck: payload,
            };
        default:
            return state; 
    }
} 