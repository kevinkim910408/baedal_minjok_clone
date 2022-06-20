import React from 'react'
import styled from 'styled-components'
import flex from '../Components/Common/flex'
import Postbody from '../Components/Postcomponents/Postbody'
import Mainheader from '../Components/MainComponents/Mainheader'
import AddBtn from '../Components/Postcomponents/PostAddBtn'

const Post = () => {
  return (
    <>
      <Mainheader />
      <PostWrap>
        <PostInsideDiv>
          <PostDiv>
            <Postbody />
          </PostDiv>
          <div>
            <AddBtn />
            <button>등록하기</button>
          </div>
        </PostInsideDiv>
      </PostWrap>
    </>
  )
}

const PostWrap = styled.div`
    ${flex({direction:'column'})}
    height: calc(100vh - 75px);
    background-color: var(--black);
`;

const PostDiv = styled.div`
    ${flex({ direction: 'column', justify: 'flex-start' })}
    width: 100%;
    height: 100%;
    border: 2px solid var(--primary);
    border-radius: 10px;
    overflow: scroll;
`;

const PostInsideDiv = styled.div`
  ${flex({ direction: 'column' })}
  width: calc(100vh - 50vh);
  height: 700px;
`

export default Post