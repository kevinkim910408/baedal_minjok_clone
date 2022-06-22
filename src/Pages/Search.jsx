import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Mainheader from "../Components/MainComponents/Mainheader";
import styled from "styled-components";
import flex from "../Components/Common/flex";
import { __getPost } from "../Redux/modules/posting"



const Search = () => {
    const dispatch = useDispatch();
    //console.log(dispatch(__getPost));
    const [loadpost, setLoadpost] = useState();


    const page = useEffect(() => {
        dispatch(__getPost({ id: 1 }));
    }, [dispatch])

    // console.log(__getPost())
    // console.log(__get)
    console.log()

    return (
        <>
            <Mainheader />
            <StWrap>
                <StDiv>
                    <StoreList>
                        <div>로고이미지</div>
                        <div>
                            <div>상품 이름</div>
                            <div>가격</div>
                            <div>상품 설명</div>
                        </div>
                    </StoreList>
                </StDiv>
            </StWrap>
        </>
    );
}


const StWrap = styled.div`
    ${flex({ direction: 'column', align: 'center' })}
    width: 100%;
    height: 100%;
    background-color: var(--white);
`;

const StDiv = styled.div`
    ${flex({ direction: 'column', justify: 'flex-start' })}
    width: calc(100vh - 60vh);
    height: 500px;
    border: none;
`
const StoreList = styled.div`
    ${flex({ justify: 'space-evenly' })}
    width: 95%;
    min-height: 150px;
    border: 2px solid #0f0f0f;
    border-radius: 10px;
    margin: 1rem 0 1rem 0;
`;
export default Search;