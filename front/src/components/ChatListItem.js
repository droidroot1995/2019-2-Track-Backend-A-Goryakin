/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-lonely-if */
/* eslint-disable react/prop-types */
import React from 'react'
import styles from '../styles/ChatListItem.module.css'

const ChatListItem = (props) => {
  const { chatInfo } = props
  const { avatar, name, time, message, isGroup, status } = chatInfo

  let msg = message

  if (message !== undefined && message.length > 20) {
    msg = message.slice(0, 20)
    msg += '...'
  }

  let msgStatus

  if (status === 'sent') {
    msgStatus = (
      <svg xmlns="http://www.w3.org/2000/svg" className={styles.sent} viewBox="0 0 512 512">
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
      </svg>
    )
  } else if (status === 'sent_read') {
    msgStatus = (
      <svg xmlns="http://www.w3.org/2000/svg" className={styles.sent_read} viewBox="0 0 512 512">
        <path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" />
      </svg>
    )
  } else {
    if (status !== '') {
      if (isGroup) {
        msgStatus = <span className={`${styles.msg_check} ${styles.group}`}>{status}</span>
      } else {
        msgStatus = <span className={`${styles.msg_check} ${styles.single}`}>{status}</span>
      }
    }
  }

  return (
    <div className={styles.item}>
      <img className={styles.avatar} src={avatar} />
      <div className={styles.message_info}>
        <div className={styles.info}>
          <p className={styles.contact_name}>{name}</p>
          <span className={styles.time}>{time}</span>
        </div>
        <div className={styles.message}>
          <p className={styles.msg}>{msg}</p>
        </div>
        {msgStatus}
      </div>
    </div>
  )
}

export default ChatListItem
