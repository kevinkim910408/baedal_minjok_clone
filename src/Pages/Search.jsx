import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Mainheader from "../Components/MainComponents/Mainheader";
import styled from "styled-components";
import flex from "../Components/Common/flex";
import { __getPost } from "../Redux/modules/posting"
import Loading from './Status/Loading'

const Search = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const data = useSelector(state=> state.postReducer?.lists?.restaurantList)

    useEffect(() => {
        dispatch(__getPost());
    }, [dispatch])

    const onDetailPageMoveHandler = (id) => {
        navigate(`/detail/${id}`)
    }

    if(data === undefined){
        return <Loading />
    }

    return (
        <>
            <Mainheader />
            <StWrap>
                <StDiv>
                {
                    data?.map((value,index)=>{
                        return  <StoreList onClick={()=>onDetailPageMoveHandler(value.restaurantId)} key={index}>
                                    <img style={{width:'50%', height:'100px'}} src={value.logoImg} alt="" />
                                    <div>
                                        <div>{value.name}</div>
                                        <div>{value.location}</div>
                                        <div>최소주문금액: \{value.minPrice}</div>
                                    </div>
                                </StoreList>
                    })
                }
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