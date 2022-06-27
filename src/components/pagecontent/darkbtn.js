import React from 'react'
import styled from 'styled-components';
import {primaryColor,primaryLightColor, secondColor, thirdColor} from '../common';


const Button = styled.button`
  position: fixed;
  bottom: 3%;
  right: 3%;
  height: 40px;
  width: 40px;
  z-index: 100;
  background-color: ${props => props.isLight === true ?  primaryColor : primaryLightColor };
  border: none;
  border-radius: 25%;
`

function Darkbtn({lightMode, setlightMode}) {

  const ClickBtn = () => {
    setlightMode(!lightMode)
  }

  return (
    <Button 
    onClick={ClickBtn}
    isLight={lightMode} />
  )
}

export default Darkbtn