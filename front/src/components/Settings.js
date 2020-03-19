/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import SettingsHeader from './SettingsHeader'
import styles from '../styles/Settings.module.css'

const Settings = (props) => {
  return (
    <div className={styles.chat_info}>
      <SettingsHeader />
      <div className={styles.item}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className={styles.icon}>
          <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z" />
        </svg>
        <div className={styles.info}>
          <h3 className={styles.main_text}>Preview links</h3>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={styles.toggle}>
          <path d="M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 320c-70.8 0-128-57.3-128-128 0-70.8 57.3-128 128-128 70.8 0 128 57.3 128 128 0 70.8-57.3 128-128 128z" />
        </svg>
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
          <h3 className={styles.main_text}>Sounds</h3>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={styles.toggle}>
          <path d="M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 320c-70.8 0-128-57.3-128-128 0-70.8 57.3-128 128-128 70.8 0 128 57.3 128 128 0 70.8-57.3 128-128 128z" />
        </svg>
      </div>
      <div className={styles.item}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className={styles.icon} />
        <div className={styles.info}>
          <h3 className={styles.main_text}>Vibration</h3>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className={styles.toggle}>
          <path d="M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 320c-70.8 0-128-57.3-128-128 0-70.8 57.3-128 128-128 70.8 0 128 57.3 128 128 0 70.8-57.3 128-128 128z" />
        </svg>
      </div>
    </div>
  )
}

export default Settings
