import { Link } from 'react-router-dom'
import logo from '../../assets/thegames.png'
import styles from './landing.module.scss'

export default function Landing() {
  return (
    <div className={styles.landing}>
      <img src={logo} alt="The Games" className={styles.logo} />
      
      <Link to="/home">
        <button className="main-button">PRESS START</button>
      </Link>
      <div className={styles.socialContainer}>
      <a href="https://www.linkedin.com/in/exemarinzulich/" target="_blank"><i className="fa fa-linkedin" id="linkedin"></i></a>
        
        <a href="https://github.com/ExeMarinzulich24" target="_blank"><i className="fa fa-github-square github" id="github"></i></a>
        
        
      </div>
    </div>
  )
}
