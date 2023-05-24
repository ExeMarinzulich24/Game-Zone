import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../assets/thegames.png'
import { getGames, getGenres } from '../../redux/actions/actions.js'
import styles from './landing.module.scss'

export default function Landing() {
  return (
    <div className={styles.landing}>
      <img src={logo} alt="Game Lobby" className={styles.logo} />
      
      <Link to="/home">
        <button className="main-button">PRESS START</button>
      </Link>
      <div className={styles.socialContainer}>
        <i className="fa fa-linkedin" id="linkedin"></i>
        
        <i className="fa fa-github-square github" id="github"></i>
        
      </div>
    </div>
  )
}
