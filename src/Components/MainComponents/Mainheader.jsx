import React, { useState } from 'react';
import styled from "styled-components";
import flex from '../Common/flex';

import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import mainLogo from "../../image/mainlogo2.png"
import { __logOut } from '../../Redux/modules/user';

const Mainheader = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getNickname = localStorage.getItem("username");
    const cookie = localStorage.getItem("Authorization");
    const [cookies, setCookies] = useState(cookie);

    const onHomeHandler = () => {
        navigate('/')
    }

    const onLoginHandler = () => {
        navigate('/Signin')
    }
    const onMyPageHandler = () => {
        navigate('/Mypage')
    }

    // 로그아웃
    const onLogoutHandler = () => {
        dispatch(__logOut());
        setCookies(null)
    };


    return (
        <>
            {(() => {
                // 로그인 전 헤더
                if (cookies === null || cookies === undefined || cookies === false) {
                    return (
                        <HeaderFlex>
                            <HeaderWrap>
                                <Imagebox onClick={onHomeHandler}>
                                    <img src={mainLogo} style={{ width: '150px' }} alt="" />
                                </Imagebox>
                                <Mainicon>
                                    <HeaderBtn onClick={onLoginHandler}>
                                        😍
                                    </HeaderBtn>
                                </Mainicon>
                            </HeaderWrap>
                        </HeaderFlex>
                    );
                }
                // 로그인 후 헤더
                else {
                    return (
                        <HeaderFlex>
                            <HeaderWrap>
                                <Imagebox>
                                    <img src={mainLogo} style={{ width: '150px' }} alt="" />
                                </Imagebox>
                                <Mainicon>
                                    <HeaderNickName>
                                        안녕하세요 {getNickname}님
                                    </HeaderNickName>
                                    <HeaderBtn onClick={onLogoutHandler}>
                                        😢
                                    </HeaderBtn>
                                    <HeaderBtn onClick={onMyPageHandler}>
                                        😋
                                    </HeaderBtn>
                                </Mainicon>
                            </HeaderWrap>
                        </HeaderFlex>
                    );
                }
            })()}
        </>
    );
}

const HeaderFlex = styled.div`
  ${flex({})}
    width: 100%;
    height: 75px;
    background-color: var(--primary);
  `
const HeaderWrap = styled.div`
${flex({ justify: 'space-between' })}
width: 100%;
height: 100%;
`;

const HeaderNickName = styled.div`
font-size: 1rem;
`

const HeaderBtn = styled.div`
font-size: 2rem;
margin-left: 1rem;
cursor: pointer;
`

const Imagebox = styled.div`
margin-Left: 1.5rem;
cursor: pointer;
`

const Mainicon = styled.div`
${flex({})}
margin-Right: 1.5rem;
`




export default Mainheader;

// // 로그인 조건
//     //   const cookie = getCookie("Authorization");
//     //   Boolean(cookie) ? 회원정보? : 로그인등보여주기;
//     return (
//         <StyleHeader>
//             {(() => {
//                 //로그인 됬을때 헤더
//                 if (is_login && is_token) {
//                     return (
//                         <React.Fragment>
//                             <HeaderBtn
//                                 _click={() => {
//                                     navigate("/alert");
//                                 }}
//                                 text={"알림"}
//                             />
//                             <HeaderBtn
//                                 _click={() => {
//                                     navigate("/mypage")
//                                 }}
//                                 text={"마이페이지"}
//                             />
//                         </React.Fragment>
//                     );
//                 }
//                 // 로그인 안됬을때 헤더
//                 else {
//                     return (
//                         <React.Fragment>
//                             <HeaderBtn
//                                 _click={() => {
//                                     navigate("/login");
//                                 }}
//                                 text={"로그인"}
//                             />
//                             <HeaderBtn
//                                 _click={() => {
//                                     navigate("/signup");
//                                 }}
//                                 text={"회원가입"}
//                             />
//                         </React.Fragment>
//                     );
//                 }
//             })()}
//         </StyleHeader>
//     );
// }
