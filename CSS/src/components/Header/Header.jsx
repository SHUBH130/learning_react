import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div >
        <h2 className={styles.header}>Learning React</h2>
        <button className={styles.btn}>Buy</button>
    </div>
  )
}

export default Header