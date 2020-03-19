/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import ChatInfoHeader from './ChatInfoHeader'
import styles from '../styles/ChatInfo.module.css'

const ChatInfo = (props) => {
  return (
    <div className={styles.chat_info}>
      <ChatInfoHeader className={styles.header} />
      <div className={styles.item}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={styles.icon}>
          <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
        </svg>
        <div className={styles.info}>
          <h3 className={styles.main_text}>+7 999-999-99-99</h3>
          <span className={styles.info_text}>Mobile</span>
        </div>
      </div>
      <div className={styles.item}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.icon}>
          <path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z" />
        </svg>
        <div className={styles.info}>
          <h3 className={styles.main_text}>Notifications</h3>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={styles.toggle}>
          <path d="M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 320c-70.8 0-128-57.3-128-128 0-70.8 57.3-128 128-128 70.8 0 128 57.3 128 128 0 70.8-57.3 128-128 128z" />
        </svg>
      </div>
      <div className={styles.item}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.icon} />
        <div className={styles.info}>
          <h3 className={`${styles.main_text} ${styles.block}`}>Block user</h3>
        </div>
      </div>
    </div>
  )
}

export default ChatInfo
