import React, { useEffect } from 'react'
import styled from 'styled-components';
import flex from '../Components/Common/flex';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Mainheader from '../Components/MainComponents/Mainheader'
import Pic from '../Assets/Image/mypagePic.png'
import Pic2 from '../Assets/Image/mypagePic2.jpg'
import Pic3 from '../Assets/Image/arrow.png'
import Pic4 from '../Assets/Image/mainSlide04.png'
import Pic5 from '../Assets/Image/mainSlide05.jpg'
import Pic6 from '../Assets/Image/Mypage_cate01.PNG'
import Pic7 from '../Assets/Image/Mypage_cate02.PNG'
import Pic8 from '../Assets/Image/Mypage_cate03.PNG'
import { __getUser } from '../Redux/modules/user';

const Mypage = () => {
    const username = localStorage.getItem('username')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {address, phone} = useSelector(state=>state.userReducer)
    const onUserProfileUpdate = () => {
        navigate('/UpdateUserInfo')
    }

    useEffect(()=>{
        dispatch(__getUser());
    },[dispatch])

    return (
        <>
            <Mainheader username={username}/>
            <StWrap>
                <StDiv>
                    <h1>My 배민</h1>
                    <img src={Pic} alt="" />
                    <StLoginDiv>
                        <div style={{display:'flex', alignItems:'center'}}>
                            <img src={Pic2} alt="" />
                            <div>
                                <p>{username}님</p>
                                <p>어서오세요</p>
                            </div>
                        </div>
                        <img 
                            class="icon" 
                            src={Pic3} 
                            alt="" 
                            onClick={()=>{
                                navigate('/UpdateUserInfo')
                            }} 
                            style={{cursor:'pointer'}}
                        />
                    </StLoginDiv>
                    {
                    address===null ? 
                    <div>
                        <p>아래의 회원정보 수정을 눌러서</p>
                        <p>전화번호와 주소를 추가해주세요</p>
                    </div> :
                    <div>
                        <p>주소:{address}</p>
                        <p>핸드폰:{phone}</p>
                    </div>
                    }
                    <StGrid>
                        <div onClick={onUserProfileUpdate}>
                            <img src={Pic8} alt="" />
                        </div>
                        <div>
                            <img src={Pic7} alt="" />
                        </div>
                        <div>
                            <img src={Pic6} alt="" />
                        </div>
                    </StGrid>  
                    <div>
                        <img src={Pic4} alt="" />
                        <img src={Pic5} alt="" />
                    </div>
                </StDiv>
            </StWrap>
        </>
    );
}

export default Mypage

export const StWrap = styled.div`
    ${flex({direction:'column',align:'center'})}
    width: 100%;
    height: 100%;
    background-color: var(--white);
`;

export const StDiv = styled.div`
    ${flex({direction:'column',justify:'flex-start'})}
    width: calc(100vh - 60vh);
    height: 700px;
    border: none;
    & > h1{
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0.5rem 0 0.5rem 0;
    }
    & > img{
        width:100%;
        margin-bottom: 1rem;
    }
    & > div > img{
        width: calc(100vh - 60vh);
        height: 150px;
        margin-bottom: 0.5rem;
    }

    & > div > p{
        margin-bottom: 1rem;
    }
`;

export const StLoginDiv = styled.div`
    ${flex({justify:'space-between'})}
    width: 100%;
    margin-bottom: 1rem;
    & > div > img{
        width: 90px;
        height: 90px;
        border-radius: 100%;
        border: 1px solid black;
        margin-left: 1rem;
    }
    & > div > p,
    & > div > div > p{
        font-size: 1rem;
        margin-left: 0.5rem;
        margin-bottom: 1rem;
    }
    & > .icon{
        width: 30px;
        height: 30px;
        border: none;
        opacity: 0.5;
    }
`;

export const StGrid = styled.div`
    display: grid;
    grid-template-columns: 110px 110px 110px;
    margin-bottom: 1rem;
    gap: 10px;
    & > div{
        width: 100%;
        height: 100px;
        border: 2px solid gray;
    }
    & > div:hover{
        background-color: var(--font-secondary);
    }

    & > div > img{
        width: 100%;
        height: 100%;
    }
`;