/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import GroupChatInfoHeader from './GroupChatInfoHeader'
import styles from '../styles/GroupChatInfo.module.css'

const GroupChatInfo = (props) => {
  return (
    <div className={styles.chat_info}>
      <GroupChatInfoHeader className={styles.header} />

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
          <h3 className={`${styles.main_text} ${styles.block}`}>Leave group</h3>
        </div>
      </div>

      <div className={styles.members_list}>
        <div className={styles.member}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className={styles.avatar}>
            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z" />
          </svg>
          <div className={styles.info}>
            <h3 className={styles.name}>Alexander</h3>
            <span className={styles.status}>Online</span>
          </div>
        </div>

        <div className={styles.member}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className={styles.avatar}>
            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z" />
          </svg>
          <div className={styles.info}>
            <h3 className={styles.name}>Andrew</h3>
            <span className={styles.status}>Online</span>
          </div>
        </div>

        <div className={styles.member}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className={styles.avatar}>
            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z" />
          </svg>
          <div className={styles.info}>
            <h3 className={styles.name}>Alex</h3>
            <span className={styles.status}>Offline</span>
          </div>
        </div>

        <div className={styles.member}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className={styles.avatar}>
            <path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z" />
          </svg>
          <div className={styles.info}>
            <h3 className={styles.name}>Matt</h3>
            <span className={styles.status}>Offline</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GroupChatInfo
