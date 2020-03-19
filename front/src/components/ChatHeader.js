/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/ChatHeader.module.css'

const ChatHeader = (props) => {
  const { chatInfo } = props

  const [menuOpened, setOpened] = useState(-1)

  let userAvatar = <img className={styles.avatar} />
  let userName = <h2 className={styles.contact_name} />

  const menu = React.useRef(null)

  if (typeof chatInfo !== 'undefined') {
    const { avatar, name } = chatInfo
    userAvatar = <img className={styles.avatar} src={avatar} />
    userName = <h2 className={styles.contact_name}>{name}</h2>
  }

  const handleMenuClick = () => {
    if (menuOpened < 0) {
      setOpened(1)
      menu.current.style.display = 'block'
    } else {
      setOpened(-1)
      menu.current.style.display = 'none'
    }
  }

  return (
    <div className={styles.header}>
      <Link className={styles.return} to="/list" name="return">
        <svg className={styles.return_button} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
        </svg>
      </Link>
      <div className={styles.contact_info}>
        {userAvatar}
        <div className={styles.info}>
          {userName}
          <p className={styles.contact_last_online}>was online 2 hours ago</p>
        </div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" className={styles.search} viewBox="0 0 512 512">
        <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.menu_button}
        onClick={handleMenuClick}
        viewBox="0 0 192 512"
      >
        <path d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z" />
      </svg>
      <menu className={styles.menu} ref={menu}>
        <li className={styles.menu_item}>
          <a>Info</a>
        </li>
        <li className={styles.menu_item}>
          <a>Mute</a>
        </li>
      </menu>
    </div>
  )
}

export default ChatHeader
