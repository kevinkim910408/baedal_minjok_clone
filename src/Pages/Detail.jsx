import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { __getPostDetail } from '../Redux/modules/detail'
import styled from 'styled-components'
import flex from '../Components/Common/flex'
import Mainheader from '../Components/MainComponents/Mainheader'

const Detail = () => {
    const {detailLists} = useSelector(state=> state.detailReducer)
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(__getPostDetail({id:32}));
    },[dispatch])
  return (
    <>
        <Mainheader />
        <StWrap>
            <StDiv>
                <ul>
                    <StList></StList>
                    <StList></StList>
                    <StList>d</StList>
                    <StList>d</StList>
                    <StList>d</StList>
                    <StList>d</StList>
                </ul>
            </StDiv>
        </StWrap>
    </>
  )
}

export default Detail

const StWrap = styled.div`
    ${flex({direction:'column',align:'center'})}
    width: 100%;
    height: 100%;
    background-color: var(--white);
`;

const StDiv = styled.div`
    ${flex({direction:'column',justify:'flex-start'})}
    width: calc(100vh - 60vh);
    height: 700px;
    border: 1px solid black;
    overflow-y: scroll;
`;

const StList = styled.li`
    ${flex({direction:'column',justify:'flex-start'})}
    width: calc(100vh - 60vh);
    height: 150px;
    border: 1px solid black;
`;