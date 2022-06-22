import React, { useEffect, useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { __getPostDetail } from '../Redux/modules/detail'
import { __postComment, __loadComment, __updateComment, __deleteComment } from '../Redux/modules/comment'
import styled from 'styled-components'
import flex from '../Components/Common/flex'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot, faClock, faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import Mainheader from '../Components/MainComponents/Mainheader'
import Loading from './Status/Loading'
import { useRef } from 'react'
import {useNavigate} from 'react-router-dom'

const Detail = () => {
    const {detailLists, loading} = useSelector(state=> state.detailReducer)
    const {comments} = useSelector(state=> state.commentReducer)
    const [toggle, setToggle] = useState(false);
    const commentRef = useRef();
    const navigate = useNavigate();

    const dispatch = useDispatch();

    // 업데이트 버튼 누르면 아래 toggle창 생기게 해주는 state
    const [edit, setEdit] = useState(false);
    const [updateId, setUpdataId] = useState(null);
    const [updateComment, setUpdateComment] = useState("");

    // 수정버튼 toggle
    const updateModal = (id) =>{
        setEdit(true)
        setUpdataId(id)
    }

    useEffect(()=>{
      dispatch(__getPostDetail({id:32}));
      dispatch(__loadComment({id:32}));
    },[dispatch])

    const onToggleReviewHandler = () => {
        setToggle(toggle=> !toggle);
    }

    const onSubmitCommentHandler = () => {
        dispatch(__postComment({
            id: detailLists.restaurantId,
            comment: commentRef.current.value,
        }))
    }

    const onDeleteHandler = (id) => {
        dispatch(__deleteComment(id));
    }


//   if(loading){
//     return <Loading />
//   }

  return (
    <>
        <Mainheader />
        <StWrap>
            <StDiv>
                <ul>
                    <StPicBox>
                        <img src="https://post-phinf.pstatic.net/MjAxOTA4MTlfMjgy/MDAxNTY2MTkzNDgyMDU5.k8dyis-tMy0GSiPkQDLveNQ8WEnpDpUg6fzAd-SAmXsg.LqfuUotXOPuObkao5cMb1Iqczzu2osIILHcjP3Vgf78g.JPEG/image_2219871881566193468342.jpg?type=w1200" alt="" />
                    </StPicBox>
                    <StInfoBox>
                        <StInfoBoxZIndex>
                            <p>{detailLists.name}</p>
                            <div>
                                <div>
                                    <FontAwesomeIcon 
                                        className='icon' 
                                        icon={faLocationDot}
                                        // onClick={()=>updateModal(commentId)}
                                    />
                                    <span>{detailLists.location}</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon 
                                        className='icon' 
                                        icon={faPhone}
                                        // onClick={()=>onDeleteHandler(32)}
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
                    <StList style={{color:'gold', fontSize: '3rem'}}>- 대표 메뉴 - </StList>
                    {
                        detailLists.length !== 0 ? 
                        detailLists.Menus.map((value,index)=>{
                            return  <StList key={index}>
                                    <div>
                                        <p>{value.menuName}</p>
                                        <p>₩ {value.price} </p>
                                        <p style={{fontSize:'1rem', color:'var(--font-secondary)'}}>{detailLists.Menus[0].explain} </p>
                                    </div>
                                    <img src="https://d3af5evjz6cdzs.cloudfront.net/images/uploads/800x0/kakaotalk_20180817_151911423_0a0b386f73084834dacb836bf50460e3.jpg" alt="" />
                                </StList>
                        }) : <></>
                    }
                </ul>
                <StInfoBox>
                    <p>username:</p>
                    <p>댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글댓글</p>
                    <FontAwesomeIcon style={{ marginLeft: "30px" }} className="icon" icon={faPenToSquare} />
                    <FontAwesomeIcon style={{ marginLeft: "10px" }} className="icon" icon={faTrashCan} />
                </StInfoBox>
                {/* {
                    edit && updateId === value.commentId &&(
                        <>
                            <input
                            type="text" 
                            placeholder="설명은 여기에 써요"
                            style={{width:'400px'}}
                            onChange={(e)=>setUpdateComment(e.target.value)}
                            />
                            <button onClick={()=>updatePostHandler({comment: updateComment, commentId: value.commentId})}>수정하기</button>
                        </>
                    )
                } */}
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

const StInfoBox = styled.div`
    ${flex({})};
    width: calc(100vh - 60vh);
    height: 200px;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--font-secondary);
    & > p{
        font-size: 1rem;
        margin-left: 1rem;
        
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
    ${flex({})}
    width: calc(100vh - 60vh);
    height: 150px;
    border-bottom: 1px solid var(--font-secondary);
    font-size: 1.5rem;
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