/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react'
import Emoji from './Emoji'
import { stringReplacer } from './replacer'
import styles from '../styles/MessageBubble.module.css'

const MessageBubble = (props) => {
  const { msgInfo } = props
  const { name, msg, time, self, status } = msgInfo

  let msgStatus = ''
  if (status === 'sent' && self) {
    msgStatus = (
      <svg xmlns="http://www.w3.org/2000/svg" className={styles.sent} viewBox="0 0 512 512">
        <path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
      </svg>
    )
  } else if (status === 'sent_read' && self) {
    msgStatus = (
      <svg xmlns="http://www.w3.org/2000/svg" className={styles.sent_read} viewBox="0 0 512 512">
        <path d="M505 174.8l-39.6-39.6c-9.4-9.4-24.6-9.4-33.9 0L192 374.7 80.6 263.2c-9.4-9.4-24.6-9.4-33.9 0L7 302.9c-9.4 9.4-9.4 24.6 0 34L175 505c9.4 9.4 24.6 9.4 33.9 0l296-296.2c9.4-9.5 9.4-24.7.1-34zm-324.3 106c6.2 6.3 16.4 6.3 22.6 0l208-208.2c6.2-6.3 6.2-16.4 0-22.6L366.1 4.7c-6.2-6.3-16.4-6.3-22.6 0L192 156.2l-55.4-55.5c-6.2-6.3-16.4-6.3-22.6 0L68.7 146c-6.2 6.3-6.2 16.4 0 22.6l112 112.2z" />
      </svg>
    )
  }

  const msgContent = []

  const linkStl = {
    display: 'block',
    marginLeft: '30%',
  }

  const svgStl = {
    fill: 'rgb(128, 128, 128)',
    background: '#fff',
    padding: '10px',
  }

  let tmp = stringReplacer(msg.msg, /:(\w+):/g, (match, i) => {
    return <Emoji etype="msg" name={match} />
  })

  msgContent.push(tmp)

  let key = 0

  for (let i = 0; i < msg.attachments.length; i += 1) {
    key += 1

    if (msg.attachments[i].type === 'image') {
      tmp = (
        <a key={key} href={msg.attachments[i].url} style={linkStl}>
          <img src={msg.attachments[i].url} width="70px" height="70px" />
        </a>
      )
    } else if (msg.attachments[i].type === 'file') {
      tmp = (
        <a key={key} href={msg.attachments[i].url} style={linkStl}>
          <svg style={svgStl} width="70px" height="70px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" />
          </svg>
        </a>
      )
    } else if (msg.attachments[i].type === 'location') {
      tmp = (
        <a key={key} href={msg.attachments[i].url} style={linkStl}>
          <svg style={svgStl} width="70px" height="70px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
          </svg>
        </a>
      )
    }

    msgContent.push(tmp)
  }

  for (let i = 0; i < msg.audios.length; i += 1) {
    key += 1
    tmp = <audio key={key} controls src={msg.audios[i].url} />

    msgContent.push(tmp)
  }

  let messageClass = styles.them

  if (self) {
    messageClass = styles.me
  }

  return (
    <div className={`${styles.message_bubble_container} ${messageClass}`}>
      <div className={`${styles.message_bubble} ${messageClass}`}>
        <div className={styles.txt}>
          <p className={`${styles.name} ${messageClass}`}>{name}</p>
          <p className={styles.message}>{msgContent}</p>
          <p className={styles.message_info}>
            <span className={`${styles.time}`}>{time}</span>
            {msgStatus}
          </p>
        </div>
        <div className={styles.bubble_arrow} />
      </div>
    </div>
  )
}

export default MessageBubble
