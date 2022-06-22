import React, { useEffect }  from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { __getPostDetail } from '../Redux/modules/detail'
import styled from 'styled-components'
import flex from '../Components/Common/flex'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faLocationDot, faClock } from "@fortawesome/free-solid-svg-icons";
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
                    <StPicBox>
                        <img src="https://post-phinf.pstatic.net/MjAxOTA4MTlfMjgy/MDAxNTY2MTkzNDgyMDU5.k8dyis-tMy0GSiPkQDLveNQ8WEnpDpUg6fzAd-SAmXsg.LqfuUotXOPuObkao5cMb1Iqczzu2osIILHcjP3Vgf78g.JPEG/image_2219871881566193468342.jpg?type=w1200" alt="" />
                    </StPicBox>
                    <StInfoBox>
                        <StInfoBoxZIndex>
                            <p>{detailLists.name}</p>
                            <div>
                                <div>
                                    <FontAwesomeIcon className='icon' icon={faLocationDot} />
                                    <span>{detailLists.location}</span>
                                </div>
                                <div>
                                    <FontAwesomeIcon className='icon' icon={faPhone} />
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
                            return  <StList>
                                    <div>
                                        <p>{value.menuName}</p>
                                        <p>₩ {value.price} </p>
                                        <p style={{fontSize:'1rem', color:'var(--font-secondary)'}}>{detailLists.Menus[0].explain} </p>
                                    </div>
                                    <img src="https://d3af5evjz6cdzs.cloudfront.net/images/uploads/800x0/kakaotalk_20180817_151911423_0a0b386f73084834dacb836bf50460e3.jpg" alt="" />
                                </StList>
                            }) :
                            <></>
                    }
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
    overflow-y: scroll;
`;

const StPicBox = styled.div`
    width: calc(100vh - 60vh);
    height: 300px;
    & > img{
        width: 100%;
    }
`;

const StInfoBox = styled.div`
    ${flex({})}
    width: calc(100vh - 60vh);
    height: 200px;
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
    ${flex({direction:'row'})}
    width: calc(100vh - 60vh);
    height: 150px;
    border-bottom: 1px solid var(--font-secondary);
    font-size: 1.5rem;
    & > img {
        width: 50%;
    }
`;