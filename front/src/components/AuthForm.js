/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import { API_URL } from '../constants/constans'
import styles from '../styles/AuthForm.module.css'

const AuthForm = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.auth}>
        <h2 className={styles.headerName}>React Chat</h2>
        <a href={`${API_URL}/social_auth/login/instagram`} className={`${styles.authButton} ${styles.authInstagram}`}>
          <span className={styles.authText}>Log in with Instagram</span>
        </a>
        <a href={`${API_URL}/social_auth/login/facebook`} className={`${styles.authButton} ${styles.authFacebook}`}>
          <span className={styles.authText}>Log in with Facebook</span>
        </a>
        <a
          href={`${API_URL}/social_auth/login/vk-oauth2/`}
          className={`${styles.authButton} ${styles.authVK}`}
          name="authVK"
        >
          <span className={styles.authText}>Log in with VK</span>
        </a>
        <a href={`${API_URL}/social_auth/login/twitter/`} className={`${styles.authButton} ${styles.authTwitter}`}>
          <span className={styles.authText}>Log in with Twitter</span>
        </a>
      </div>
    </div>
  )
}

export default AuthForm
