import React from 'react'
import loadgif from '../assets/loading.gif'
import styles from './utils.module.scss'

const Loading = () => (
  <img src={loadgif} alt="Loading..." className={styles.loading} />
)

export default Loading
