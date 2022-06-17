// 로그인, 회원가입 유효성 검사 파일

// 아이디 형식 검사
export const idCheck = (username) => {
  const regPass = /^(?=.*[0-9a-zA-Z])[가-힣a-zA-Z0-9-_.]{4,15}$/;
  return regPass.test(username);
};

// 비밀번호 체크
export const passwordCheck = (passwordcheck) => {
  const regPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d~!@#$%^&*()+|=]{8,20}$/;
  return regPass.test(passwordcheck);
};

export const emailRegCheck = (email) =>{
  const regPass = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/g;
  return regPass.test(email);
}

// 정규식
// ^ => 시작
// (?=.*\d) => 0~9까지의 숫자 표현
// (?=.*[a-zA-Z]) => 알파벳

// 숫자 영어 필수 4-15
// 비번 영어숫자특수문자 필수 4-20