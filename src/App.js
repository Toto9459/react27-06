import './font.css';
import './reset.css';
import styled, { createGlobalStyle } from 'styled-components';
import { useState } from "react";
import Navbar from './components/navbar';
import Menu from './components/menu'
import HomePage from './components/homepage';
import {secondColor, primaryLightColor, primaryColor, secondLightColor, thirdLightColor, thirdColor} from '../src/components/common';

const GlobalStyle = createGlobalStyle`

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    @media (min-width: 1400px) {
      font-size: 80%;
    }
    @media (max-width: 1100px) {
      font-size: 50%;
    }
    @media (max-width: 850px) {
      font-size: 40%;
    }
    @media (max-width: 650px) {
      font-size: 30%;
    }
    @media (max-width: 380px) {
      font-size: 20%;
    }
  }

  body {
    background-color: ${props => props.isLight === true ? primaryLightColor : primaryColor};
  }

  ::-moz-selection {
    background: ${props => props.isLight === true ? "#AAAE8E" : "#305275"};
    text-shadow: none;
  }
  ::selection {
      background: ${props => props.isLight === true ? "#AAAE8E" : "#305275"};
      text-shadow: none;
  }
  ::-webkit-scrollbar{
      width: 10px;
      border-left: 2px solid ${props => props.isLight === true ? thirdLightColor : thirdColor};
  }
  ::-webkit-scrollbar-thumb{
      background-color: ${props => props.isLight === true ? secondLightColor : secondColor};
      border-radius: 15px;
  }
`





function App() {

  const [openMenu, setOpenMenu] = useState(false)
  const [lightMode, setlightMode] = useState(false)

  return (
    <div className="App" style={{display: "flex",justifyContent: "flex-end"}}>
      <GlobalStyle isLight={lightMode} />
      {/* <Navbar setOpenMenu={setOpenMenu} openMenu={openMenu} setlightMode={setlightMode} lightMode={lightMode}/>
      <Menu setOpenMenu={setOpenMenu} openMenu={openMenu}/> */}
      {/* {openMenu &&  <Menu setOpenMenu={setOpenMenu} openMenu={openMenu}/>} */}
      <HomePage setlightMode={setlightMode} lightMode={lightMode}/>
    </div>
  );
}

export default App;
