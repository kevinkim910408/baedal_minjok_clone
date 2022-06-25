import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  __userSignUp,
  __userIdCheck,
  __userEmailCheck,
} from "../../Redux/modules/user";
import {
  passwordRegCheck,
  emailRegCheck,
  idRegCheck,
} from "../../Shared/LoginCheck";
import {
  StInput,
  StWrap,
  StSmallInput,
  StSubmitButton,
  StDiv,
  StTitle,
  StFlexInfoInput,
  StButton,
} from "./SigninupStyled";
import ExitHeader from "../Common/ExitHeader";

const NICKNAME_MAX_LENGTH = 6;
const EMAIL_MAX_LENGTH = 25;
const PW_MAX_LENGTH = 20;
const PW_MIN_LENGTH = 8;

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // states
  const [nickName, setNickName] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pwTwo, setPwTwo] = useState("");
  const [savedId, setSavedId] = useState("");
  const [savedEmail, setSavedEmail] = useState("");

  const { idCheck, emailCheck } = useSelector((state) => state.userReducer); // get data from Store

  // 버튼 비활성화 함수들
  const onDisableHandler = () => {
    if (passwordRegCheck(pw) === false) return true;
    else if (passwordRegCheck(pwTwo) === false) return true;
    else if (
      Boolean(!email) ||
      Boolean(!nickName) ||
      Boolean(pw?.length < PW_MIN_LENGTH) ||
      Boolean(pwTwo?.length < PW_MIN_LENGTH)
    )
      return true;
    else if (pw !== pwTwo) return true;
    else if (idCheck === false) return true;
    else if (emailCheck === false) return true;
    else return false;
  };

  const onDupIdDisableHandler = () => {
    if (idRegCheck(nickName) === false) return true;
    if (idCheck === false) return false;
    if (nickName !== savedId) return false;
    else return true;
  };

  const onDupEmailDisableHandler = () => {
    if (emailRegCheck(email) === false) return true;
    if (emailCheck === false) return false;
    if (email !== savedEmail) return false;
    else return true;
  };

  // 서버 연결 함수들
  const onSignUpHandler = () => {
    dispatch(__userSignUp({ email, nickName, pw, pwTwo }));
    alert("회원가입이 완료되었습니다.");
    navigate("/signin");
  };
  const onIdDupCheckHandler = (id) => {
    dispatch(__userIdCheck({ id }));
    setSavedId(nickName);
  };
  const onEmailDupCheckHandler = (email) => {
    dispatch(__userEmailCheck({ email }));
    setSavedEmail(email);
  };

  return (
    <>
      <StWrap>
        <ExitHeader text="signin" />
        {/* 텍스트 */}
        <StTitle>회원가입</StTitle>
        <StFlexInfoInput>
          <span>필수 정보를 입력해주세요.</span>
        </StFlexInfoInput>
        {/* Inputs */}
        <StDiv>
          <StSmallInput
            type="text"
            placeholder="닉네임*(2-6글자)"
            onChange={(e) => setNickName(e.target.value)}
            maxLength={NICKNAME_MAX_LENGTH}
          />
          <StButton
            disabled={onDupIdDisableHandler()}
            onClick={() => {
              onIdDupCheckHandler(nickName);
            }}
          >
            중복체크
          </StButton>
        </StDiv>

        <StDiv>
          <StSmallInput
            type="email"
            placeholder="아이디*(이메일형식)"
            onChange={(e) => setEmail(e.target.value)}
            maxLength={EMAIL_MAX_LENGTH}
          />
          <StButton
            disabled={onDupEmailDisableHandler()}
            onClick={() => {
              onEmailDupCheckHandler(email);
            }}
          >
            중복체크
          </StButton>
        </StDiv>

        <StInput
          type="password"
          placeholder="비밀번호"
          onChange={(e) => setPw(e.target.value)}
          maxLength={PW_MAX_LENGTH}
        />
        {passwordRegCheck(pw) ? (
          <p className="pass">형식에 맞는 비밀번호 입니다.</p>
        ) : (
          <p className="danger"> 영문+숫자 8-20자로 만들어 주세요.</p>
        )}

        <StInput
          type="password"
          placeholder="비밀번호 재확인"
          onChange={(e) => setPwTwo(e.target.value)}
          maxLength={PW_MAX_LENGTH}
        />
        {pw === pwTwo && pwTwo?.length > PW_MIN_LENGTH ? (
          <p className="pass">형식에 맞는 비밀번호 입니다.</p>
        ) : (
          <p className="danger"> 비밀번호가 일치하지 않거나 공백입니다.</p>
        )}

        <StSubmitButton
          as="button"
          onClick={onSignUpHandler}
          disabled={onDisableHandler()}
        >
          가입하기
        </StSubmitButton>
      </StWrap>
    </>
  );
};

export default Signup;
