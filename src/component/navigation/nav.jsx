import React from 'react'
import styles from './nav.module.css'

function nav() {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <a href='#'>HOME</a>
          </li>
          <li>
            <a href='#'>ABOUT</a>
          </li>
          <li>
            <a href='#'>MEMBER</a>
          </li>
          <li>
            <a href='#'>ACHIEVEMENT</a>
          </li>
          <li>
            <a href='#'>CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default nav
