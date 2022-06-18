import styled from 'styled-components'
import {Link} from 'react-router-dom'
import flex from '../Common/flex'

// 공용
export const StInput = styled.input`
  width: calc(100vh - 60vh);
  height: 60px;
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid var(--font-secondary);
  margin-bottom: 2rem;
  &::placeholder{
    font-size: 1rem;
  }
`;

export const StTitle = styled.span`
  margin: 2rem;
  color: var(--primary);
  font-size: 2rem;
  font-weight: 700;
`;


export const StWrap = styled.div`
    ${flex({direction:'column',align:'center'})}
    width: 100%;
    height: 100%;
    background-color: var(--white);
    & > .pass {
      color: var(--primary);
    }
    & > .danger {
      color: var(--red);
    }
`;

// 회원가입
export const StSmallInput = styled.input`
  width: calc(100vh - 76vh);
  height: 60px;
  font-size: 1.2rem;
  border: none;
  border-bottom: 1px solid var(--font-secondary);
  margin-bottom: 1rem;
  &::placeholder{
    font-size: 1rem;
  }
`;

export const StSubmitButton = styled(StInput)`
  font-size: 1.5rem;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
`;

export const StDiv = styled.div`
  width: calc(100vh - 60vh);
  height: 50px;
  border: none;
  margin-bottom: 1rem;
`;

export const StFlexInfoInput = styled.div`
  ${flex({justify:'flex-start'})}
  width: calc(100vh - 60vh);
  & > span{
    margin: 0 0 1rem 0;
  }
`;

export const StButton = styled.button`
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  padding: 0.8rem;
`;

// 로그인
export const StFlex = styled.div`
  ${flex({direction:'column'})}
  width:100%;
`;

export const StButtonLogin = styled.button`
  width: calc(100vh - 60vh);
  height: 40px;
  margin-bottom: 3rem;
  border: none;
  background-color: transparent;
  color: black;
`;

export const StSubmitInput = styled(StInput)`
  font-size: 1.5rem;
  background-color: var(--primary);
  border: none;
  border-radius: 5px;
`;

export const StLink = styled(Link)`
  color: var(--primary) !important;
`;

export const StImg = styled.img`
  width: calc(100vh - 60vh);
  height: 60px;
`;