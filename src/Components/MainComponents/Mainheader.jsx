import React, { useState } from 'react';
import styled from "styled-components";
import flex from '../Common/flex';
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import mainlogo from "../../image/mainlogo2.png"

// 위에 폰트
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Mainheader = () => {
    const navigate = useNavigate();
    const onLoginHandler = () => {
        navigate('/Signin')
    }
    return (
        <>
            <HeaderFlex>
                <HeaderWrap>
                    <Imagebox>
                        <img src={mainlogo} style={{ width: '150px' }} />
                    </Imagebox>
                    <Mainicon>
                        <HeaderBtn onClick={onLoginHandler}>
                            😋
                        </HeaderBtn>
                    </Mainicon>
                </HeaderWrap>
            </HeaderFlex>
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
