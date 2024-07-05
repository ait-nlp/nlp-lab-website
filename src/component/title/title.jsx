import React from 'react'
import styles from './title.module.css'

function title({ title, discription }) {
  return (
    <div>
      <div className={styles.title}>
        <h2>{title}</h2>
        <p>{discription}</p>
      </div>
    </div>
  )
}

export default title
