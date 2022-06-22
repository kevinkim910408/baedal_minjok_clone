import React, { useRef } from 'react'
import ExitHeader from '../Components/Common/ExitHeader'
import styled from 'styled-components'
import { useDispatch } from 'react-redux/es/exports'
import { useNavigate } from 'react-router-dom'
import flex from '../Components/Common/flex'
import { __userUpdate } from '../Redux/modules/user'

const UpdateUserInfo = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const username = localStorage.getItem("username")
    const numberOne = useRef();
    const numberTwo = useRef();
    const numberThree = useRef();
    const postAddress = useRef();

    const AddressOne = useRef();
    const AddressTwo  = useRef();
    const AddressThree = useRef();
    const AddressDetail = useRef();

    const onUpdateUserHandler = () =>{
        if(numberOne.current.value === "" || numberTwo.current.value === "" || numberThree.current.value === "" || 
            postAddress.current.value === "" || AddressOne.current.value === "" || AddressTwo.current.value === "" || AddressThree.current.value === "" ||  
            AddressDetail.current.value === ""){
            alert('빈칸이 있으면 안되고, 형식을 맞춰주세요')
            return;
        }
        if(numberOne.current.value.length > 3  || numberTwo.current.value.length > 4   || numberThree.current.value.length > 4){
            alert('휴대폰 번호를 제대로 입력해 주세요')
            return;
        }
        if(postAddress.current.value.length > 5  ){
            alert('우편번호를 제대로 입력해 주세요')
            return;
        } 
        dispatch(__userUpdate({
            phone: numberOne.current.value + numberTwo.current.value + numberThree.current.value,
            postAddress: postAddress.current.value,
            address: AddressOne.current.value + " " + AddressTwo.current.value + " " + AddressThree.current.value + " " + AddressDetail.current.value,
        }));
        alert('수정이 완료되었습니다.')
        navigate(-1)
    }

  return (
    <>
        <ExitHeader text="Mypage"/>
        <StWrap>
            <h1>내 정보 수정</h1>
            <StLine />
            <div>
                <p>닉네임: <span>{username}</span></p>
            </div>
            <StFlexColumn>
                <p>핸드폰 번호 </p>
               <StFlexRow>
                    <StInput 
                        type="number"
                        placeholder='010'
                        maxLength={3}
                        ref={numberOne}
                        value="010"
                    />
                    <StInput 
                        type="number"
                        placeholder='1234'
                        maxLength={4}
                        ref={numberTwo}
                    />
                    <StInput 
                        type="number"
                        placeholder='5678'
                        maxLength={4}
                        ref={numberThree}
                    />
               </StFlexRow>
            </StFlexColumn>
            <StFlexColumn>
                <p>배달 받을 주소 </p>
                <StFlexColumn>
                    <StInput 
                        type="number"
                        placeholder='우편번호'
                        maxLength={5}
                        ref={postAddress}
                    />
                    <StFlexRow>
                    <StInput 
                        type="text"
                        placeholder='서울시'
                        maxLength={5}
                        ref={AddressOne}
                    />
                    <StInput 
                        type="text"
                        placeholder='용산구'
                        maxLength={5}
                        ref={AddressTwo}
                    />
                    <StInput 
                        type="text"
                        placeholder='한남동'
                        maxLength={5}
                        ref={AddressThree}
                    />
                    </StFlexRow>
                    <StFlexRow>
                    <StInput 
                        type="text"
                        placeholder='상세주소'
                        maxLength={12}
                        style={{width:'350px'}}
                        ref={AddressDetail}
                    />
                    </StFlexRow>
                </StFlexColumn>
                <StButton onClick={onUpdateUserHandler}>수정하기</StButton>
            </StFlexColumn>
        </StWrap>
    </>
  )
}

export default UpdateUserInfo

export const StWrap = styled.div`
    ${flex({direction:'column',align:'center'})}
    width: 100%;
    height:500px;
    background-color: var(--white);
    margin-top: 1rem;
    & > h1 {
        font-size: 2rem;
    }
    & > div > p {
        font-size: 1.5rem;
    }
    & > div > p > span {
        background-color: var(--font-secondary);
        padding: 10px;
        border-radius: 30px;
    }
    & > div {
        height: 100px;
    }
`;

export const StFlexRow = styled.div`
    ${flex({})}
`;

export const StFlexColumn = styled.div`
    ${flex({direction:'column',justify:'flex-start'})}
    margin-bottom: 3rem;
    & > p {
        margin-bottom: 2rem;
    }
`;

export const StLine = styled.span`
    width: calc(100vh - 60vh);
    height: 1px;
    margin: 1.5rem;
    background-color: var(--font-secondary);
`;

export const StInput = styled.input`
    width: calc(100vh - 88vh);
    border: none;
    border-bottom: 1px solid var(--font-secondary) ;
    font-size: 1.2rem;
    margin-left: 1rem;
    margin-bottom: 1.5rem;
    &::placeholder{
        font-size: 1rem;
    }

`;

export const StButton = styled.button`
  font-size: 1.2rem;
  border: none;
  border-radius: 10px;
  padding: 0.8rem;
`;