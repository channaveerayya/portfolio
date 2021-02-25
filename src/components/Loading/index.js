import React from 'react'
import styles from './Loading.module.scss'

function Loading() {
  return (
    <div
      style={{
        height: '75vh',
        width: '100%',
        display: 'flex',
      }}
    >
      <div className={styles.loading}>
        <div className={styles.dot}>L</div>
        <div className={styles.dot}>O</div>
        <div className={styles.dot}>A</div>
        <div className={styles.dot}>D</div>
        <div className={styles.dot}>I</div>
        <div className={styles.dot}>N</div>
        <div className={styles.dot}>G</div>
      </div>
    </div>
  )
}

export default Loading
