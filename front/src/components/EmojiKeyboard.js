import React from 'react'
import Emoji from './Emoji.js'
import styles from '../styles/EmojiKeyboard.module.css'

const EmojiKeyboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <Emoji etype="kbd" name=":smile:" />
        <Emoji etype="kbd" name=":angry:" />
        <Emoji etype="kbd" name=":alien:" />
        <Emoji etype="kbd" name=":screaming:" />
        <Emoji etype="kbd" name=":kiss:" />
      </div>
      <div className={styles.row}>
        <Emoji etype="kbd" name=":fear:" />
        <Emoji etype="kbd" name=":rolling_eyes:" />
        <Emoji etype="kbd" name=":adult:" />
        <Emoji etype="kbd" name=":tongue:" />
        <Emoji etype="kbd" name=":with_thermometer:" />
      </div>
      <div className={styles.row}>
        <Emoji etype="kbd" name=":monocle:" />
        <Emoji etype="kbd" name=":open_mouth:" />
        <Emoji etype="kbd" name=":eyebrow:" />
        <Emoji etype="kbd" name=":flushed:" />
        <Emoji etype="kbd" name=":confused:" />
      </div>
      <div className={styles.row}>
        <Emoji etype="kbd" name=":clown:" />
        <Emoji etype="kbd" name=":crying:" />
        <Emoji etype="kbd" name=":expressionless:" />
        <Emoji etype="kbd" name=":dizzy:" />
        <Emoji etype="kbd" name=":vomiting:" />
      </div>
    </div>
  )
}

export default EmojiKeyboard
