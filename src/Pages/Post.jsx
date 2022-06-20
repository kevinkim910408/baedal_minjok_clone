import React from 'react'
import styled from 'styled-components'
import flex from '../Components/Common/flex'
import Postfixed from '../Components/Postcomponents/Postfixed'
import Postbody from '../Components/Postcomponents/Postbody'
import Mainheader from '../Components/MainComponents/Mainheader'
import AddBtn from '../Components/Postcomponents/PostAddBtn'

const Post = () => {
  return (
    <>
      <Mainheader />
      <PostWrap>
        <PostDiv>
          <Postbody />
          <AddBtn />
          <Postbtn>등록하기</Postbtn>
        </PostDiv>
      </PostWrap>
    </>
  )
}

const PostWrap = styled.div`
    ${flex({})}
    height: 100vh;
    background-color: var(--black);
`;

const PostDiv = styled.div`
    ${flex({ direction: 'column', justify: 'flex-start' })}
    width: calc(100vh - 50vh);
    height: 700px;
    border: 2px solid var(--primary);
    border-radius: 10px;
    margin-bottom: 0rem;
    overflow: scroll;
`;

const Postbtn = styled.button`
`

export default Post