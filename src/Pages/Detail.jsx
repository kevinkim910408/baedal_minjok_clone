import React, { useEffect, useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { __getPostDetail } from '../Redux/modules/detail'
import { __postComment, __loadComment, __updateComment, __deleteComment } from '../Redux/modules/comment'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import flex from '../Components/Common/flex'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot, faClock, faTrashCan, faPenToSquare, faXmark } from "@fortawesome/free-solid-svg-icons";
import Mainheader from '../Components/MainComponents/Mainheader'
import Loading from './Status/Loading'
import Error from './Status/Error'
import { useRef } from 'react'
import {useParams} from 'react-router-dom'

const Detail = () => {
    const {detailLists, loading, error} = useSelector(state=> state.detailReducer)
    const {comments} = useSelector(state=> state.commentReducer)
    const [toggle, setToggle] = useState(false);
    const commentRef = useRef();
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // 업데이트 버튼 누르면 아래 toggle창 생기게 해주는 state
    const [edit, setEdit] = useState(false);
    const [updateId, setUpdataId] = useState(null);
    const [updateComment, setUpdateComment] = useState("");
    const username = localStorage.getItem("username")

    // 수정버튼 toggle
    const updateModal = (id) =>{
        setEdit(true)
        setUpdataId(id)
    }

    useEffect(()=>{
      dispatch(__loadComment({id:id}));
      dispatch(__getPostDetail({id:id}));
    },[dispatch, id])

    const onToggleReviewHandler = () => {
        setToggle(toggle=> !toggle);
    }

    const onSubmitCommentHandler = () => {
        setToggle(toggle=> !toggle);
        dispatch(__postComment({
            id: detailLists.restaurantId,
            comment: commentRef.current.value,
        }))
    }

    const onDeleteHandler = (payload) => {
        dispatch(__deleteComment(payload));
    }
    
    const updatePostHandler = (updatedData) => {
        dispatch(__updateComment(updatedData))
        setEdit(false)
    }
    const onBackHandler = () => {
        navigate(-1)
    }

  if(loading){
    return <Loading />
  }
  if(error){
    return <Error />
  }

  return (
    <>
        <Mainheader />
        <StWrap>
            <StDiv>
            <StBackBtn onClick={onBackHandler}>
                <FontAwesomeIcon icon={faXmark} />
            </StBackBtn>
                <ul>
                    <StPicBox>
                        <img src={detailLists.logoImg} style={{width:'100%', height:'200px'}} alt="" />
                    </StPicBox>
                    <StInfoBox>
                        <StInfoBoxZIndex>
                            <p>{detailLists.name}</p>
                            <div>
                                <div>
                                    <FontAwesomeIcon 
                                        className='icon' 
                                        icon={faLocationDot}
                                    />
                                    <span>{detailLists.location}</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon 
                                        className='icon' 
                                        icon={faPhone}
                                    />
                                    <span>{detailLists.phone}</span>
                                    </div>
                                <div>
                                    <FontAwesomeIcon className='icon' icon={faClock} />
                                    <span>{detailLists.openingHours}</span>
                                </div>
                            </div>
                         </StInfoBoxZIndex>
                    </StInfoBox>
                    <div style={{margin:'2rem'}}></div>
                    <StList style={{color:'gold', fontSize: '3rem', marginTop:'7rem', justifyContent:'center'}}>- 대표 메뉴 - </StList>
                    {
                        detailLists.length !== 0 ? 
                        detailLists.Menus.map((value,index)=>{
                            return  <StList key={index}>
                                    <div>
                                        <p>{value.menuName}</p>
                                        <p>₩ {value.price} </p>
                                        <p style={{fontSize:'1rem', color:'var(--font-secondary)'}}>{value.explain} </p>
                                    </div>
                                    <img style={{height:'120px'}} src={value.menuImg} alt="" />
                                </StList>
                        }) : <></>
                    }
                </ul>
                <p style={{color:'gold', fontSize: '2rem', margin:'1rem'}}>- 후기 -</p>
                <StFlexCol>
                    {
                        comments.map((value,index)=>{
                            return (<div key={index}>
                                <StInfoBox>
                                   <StFlexRowOnly>
                                        <p className='nickName'>{value.User?.nickname}:</p>
                                        <p>{value.review}</p>
                                   </StFlexRowOnly>
                                  {
                                    value.User?.nickname === username ? 
                                    <div className='icons'>
                                    <FontAwesomeIcon 
                                        style={{ marginLeft: "30px" }} 
                                        className="icon" 
                                        icon={faPenToSquare} 
                                        onClick={()=>updateModal(value.reviewId)}
                                    />
                                    <FontAwesomeIcon 
                                        style={{ marginLeft: "10px" }} 
                                        className="icon" 
                                        icon={faTrashCan} 
                                        onClick={()=>onDeleteHandler({reviewId: value.reviewId, restaurantId: value.restaurantId})}
                                    />
                                    </div> :  <></>
                                  }
                                </StInfoBox>
                                <StFlexColOnly>
                               {
                                    edit && updateId === value.reviewId &&(
                                        <div>
                                            <input
                                            type="text" 
                                            placeholder="설명은 여기에 써요"
                                            style={{width:'200px'}}
                                            onChange={(e)=>setUpdateComment(e.target.value)}
                                            maxLength={20}
                                            />
                                            <button onClick={()=>updatePostHandler({reviewId: value.reviewId, restaurantId: value.restaurantId, comment: updateComment})}>
                                                수정하기
                                            </button>
                                        </div>
                                    )
                                }
                                </StFlexColOnly>  
                            </div>

                            )
                        })
                    }

                </StFlexCol>
            </StDiv>
            {
                toggle ? 
                <StToggleBox>
                    <p>{detailLists.name}</p>
                    <p>{detailLists.location}</p>
                    <input 
                        type="text" 
                        ref={commentRef} 
                        placeholder="한줄 리뷰를 달아주세요! 최대 20자!"
                        maxLength={20}
                    />
                    <button onClick={onSubmitCommentHandler}>추가하기</button>
                </StToggleBox> : <></>
            }

            <StButton onClick={onToggleReviewHandler}>
                {
                    toggle ? 
                    <p>리뷰 닫기</p>:
                    <p>리뷰 달기</p>
                }
            </StButton>
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
    height: 650px;
    overflow-y: scroll;
    & > ul{
        margin-bottom: 1rem;
    }
`;

const StPicBox = styled.div`
    width: calc(100vh - 60vh);
    height: 300px;
    & > img{
        width: 100%;
    }
`;

const StBackBtn = styled.div`
    width: 100%;
    font-size: 2rem;
`;

const StInfoBox = styled.div`
    ${flex({})};
    width: calc(100vh - 60vh);
    height: 50px;
    border-bottom: 1px solid var(--font-secondary);
    margin-top: 1rem;
    & > p{
        font-size: 1rem;
        margin-left: 1rem;
    }
    & > .icons{
        width: 35%;
    }
    .icon:hover{
        cursor: pointer;
        color: var(--primary);
    }
`;

const StFlexCol = styled.div`
    ${flex({direction:'column'})};
    width: 100%;
    height: 500px;
`;

const StFlexColOnly = styled.div`
    ${flex({direction:'column'})};
`;

const StFlexRowOnly = styled.div`
    ${flex({justify:'flex-start'})};
    width: 100%;
    & > .nickName{
        width: 120px;
    }
`;

const StInfoBoxZIndex = styled.div`
    ${flex({direction:'column', justify:'space-evenly'})}
    width: 350px;
    height: 300px;
    background-color: white;
    border-radius: 30px;
    -webkit-box-shadow: 5px 15px 50px -10px rgba(0,0,0,0.36); 
    box-shadow: 5px 15px 50px -10px rgba(0,0,0,0.36);
    & > p{
        font-size: 2.5rem;
    }
    & > div > div{
        font-size: 1.5rem;
        color: var(--font-secondary)
    }
    & > div > div > span {
        margin-left: 1rem;
    }
`;

const StList = styled.li`
    ${flex({justify:'space-between'})}
    width: calc(100vh - 60vh);
    height: 150px;
    border-bottom: 1px solid var(--font-secondary);
    font-size: 1.2rem;
    & > img {
        width: 50%;
    }
    & > div > p {
        margin-bottom: 0.5rem;
    }
`;

const StButton = styled.button`
    width: 200px;
    margin-top: 1rem;
    padding: 10px;
    border-radius: 30px;
    font-size: 2rem;
`;

const StToggleBox = styled.div`
    ${flex({direction:'column'})}
    width: calc(100vh - 60vh);
    height: 300px;
    position: absolute;
    background-color: var(--white);
    border: 1px solid var(--primary);
    border-radius: 30px;
    & > input{
        width: 90%;
        height: 30px;
        font-weight: 700;
        font-size: 1rem;
        border: none;
        border-bottom: 1px solid var(--font-secondary);
        background-color: #f8f6f6;
    }
    & > button {
        width: 200px;
        margin-top: 1rem;
        padding: 10px;
        border-radius: 30px;
        font-size: 1.5rem;
    }
    & > p{
        font-size: 2rem;
        margin-bottom: 1rem;
    }
`;