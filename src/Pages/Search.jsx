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
                                        <p>{value.name}</p>
                                        <p>{value.location}</p>
                                        <p>최소주문금액: \{value.minPrice}</p>
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
    border-bottom: 1px dashed var( --font-secondary);
    margin-top: 1rem;
    cursor: pointer;
    &:hover{
        background-color:  #f1f1f1;
    }
    & > div > p{
        margin-bottom: 0.5rem;
    }
`;
export default Search;