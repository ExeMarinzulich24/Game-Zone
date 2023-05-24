import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/game-zone-logo.webp'
import {
  MainBtn,
  SuccessLogo,
  SuccessTitle,
  SuccessWrapper,
} from './success.styles'

export default function Success() {
  return (
    <SuccessWrapper>
      <SuccessLogo src={logo} alt="Game Lobby" />
      <SuccessTitle>Your game has been created.</SuccessTitle>
      <Link to="/home">
        <MainBtn>Back to home</MainBtn>
      </Link>
    </SuccessWrapper>
  )
}
