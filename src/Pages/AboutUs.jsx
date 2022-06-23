import React from 'react'
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AboutUs = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
  return (
    <div style={{fontFamily: 'MYYeongnamnu'}}>
      <ScrollContainer>
      
    <ScrollPage page={0}>
      <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
        <span style={{ fontSize: "30px" }}>항해7기 A반 1조 배달의민족 클론코딩</span>
      </Animator>
    </ScrollPage>
    <ScrollPage page={1}>
      <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
        <p style={{ fontSize: "30px" }}>배달의민족🛵</p>
        <p style={{ fontSize: "30px" }}>제작기간: 2022-06-17 ~ 2022-06-23 </p>
      </Animator>
    </ScrollPage>

    <ScrollPage page={2}>
      <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -500))}>
        <p style={{ fontSize: "30px" }}>팀원🧚‍♀️🧚‍♂️</p>
        <p style={{ fontSize: "30px" }}>송민지, 강명지 - Node.js (Backend)</p>
        <p style={{ fontSize: "30px" }}>김용우, 김준호 - React.js (Frontend)</p>
      </Animator>
    </ScrollPage>

    <ScrollPage page={3}>
      <Animator animation={batch(Fade(), Sticky())}>
        <p style={{ fontSize: "30px", marginBottom:'20px' }}>
          API___
          <a target="_blank" href="https://docs.google.com/spreadsheets/d/1nkSmiWlZUSpsiGtWTSPAKK8nbsJpNw46fJ6KOHrPIhQ/edit"> 
          <FontAwesomeIcon className='icon' icon={faBook} />
          </a>
        </p>
        <p style={{ fontSize: "30px", marginBottom:'20px' }}>
          Front-End Git___
          <a target="_blank" href="https://github.com/kevinkim910408/Clone_1_frontend"> 
          <FontAwesomeIcon className='icon' icon={faGithub} />
          </a>
        </p>
        <p style={{ fontSize: "30px", marginBottom:'20px' }}>
          Back-End Git___
          <a target="_blank" href="https://github.com/monmokk/7th_clone_coding">
          <FontAwesomeIcon className='icon' icon={faGithub} />
          </a>
        </p>
      </Animator>
    </ScrollPage>

    </ScrollContainer>
  </div>
  )
}

export default AboutUs