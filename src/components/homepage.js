import React from 'react';
import styled from 'styled-components';
import Marquee from './pagecontent/marquee';
import Marquee2 from './pagecontent/marquee2';
import Marquee3 from './pagecontent/marquee3';
import Marquee4 from './pagecontent/marquee4';
import Education from './pagecontent/education';
import Landing from './pagecontent/landing';
import Work from './pagecontent/work';
import About from './pagecontent/about';
import DarkBtn from './pagecontent/darkbtn';
import {primaryLightColor, primaryColor} from './common';


const HomePageContainer = styled.main`
  height: auto;
  width: calc(100% - 100px);
  background-color: ${props => props.isLight === true ? primaryLightColor : primaryColor};
  transition: all .3s ease-in;

  @media (min-width: 1400px) {
    width: calc(100% - 150px);
  }

  @media (max-width: 850px) {
    width: 100%;
  }
`

const landing = ({lightMode, setlightMode}) => {

  return (
    <HomePageContainer isLight={lightMode}>
      {/* <DarkBtn setlightMode={setlightMode} lightMode={lightMode}/>
      <Landing setlightMode={setlightMode} lightMode={lightMode}/>
      <Marquee setlightMode={setlightMode} lightMode={lightMode}/>
      <Education setlightMode={setlightMode} lightMode={lightMode}/>
      <Marquee2 setlightMode={setlightMode} lightMode={lightMode}/> */}
      <Work setlightMode={setlightMode} lightMode={lightMode}/>
      {/* <Marquee3 setlightMode={setlightMode} lightMode={lightMode}/>
      <About setlightMode={setlightMode} lightMode={lightMode}/>
      <Marquee4 setlightMode={setlightMode} lightMode={lightMode}/> */}
    </HomePageContainer>
  )
}

export default landing
