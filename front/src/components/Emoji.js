/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */

import React from 'react'
import { connect } from 'react-redux'
import { setEmoji } from '../actions/emoji'
import style from '../styles/Emoji.module.css'

const Emoji = (props) => {
  const { setEmji, name, etype } = props

  const match = name.match(/:(\w+):/g)
  let emName = name
  if (match === null) {
    emName = `:${name}:`
  }

  const handleEmojiClick = () => {
    setEmji(emName)
  }

  let emStyle = style.smile

  switch (emName) {
    case ':smile:':
      emStyle = style.smile
      break
    case ':angry:':
      emStyle = style.angry
      break
    case ':alien:':
      emStyle = style.alien
      break

    case ':screaming:':
      emStyle = style.screaming
      break

    case ':kiss:':
      emStyle = style.kiss
      break

    case ':fear:':
      emStyle = style.fear
      break

    case ':rolling_eyes:':
      emStyle = style.rolling_eyes
      break

    case ':adult:':
      emStyle = style.adult
      break

    case ':tongue:':
      emStyle = style.tongue
      break

    case ':with_thermometer:':
      emStyle = style.with_thermometer
      break

    case ':monocle:':
      emStyle = style.monocle
      break

    case ':open_mouth:':
      emStyle = style.open_mouth
      break

    case ':eyebrow:':
      emStyle = style.eyebrow
      break

    case ':flushed:':
      emStyle = style.flushed
      break

    case ':confused:':
      emStyle = style.confused
      break

    case ':clown:':
      emStyle = style.clown
      break

    case ':crying:':
      emStyle = style.crying
      break

    case ':expressionless:':
      emStyle = style.expressionless
      break

    case ':dizzy:':
      emStyle = style.dizzy
      break

    case ':vomiting:':
      emStyle = style.vomiting
      break

    default:
      emStyle = style.smile
      break
  }

  let emji = <span onClick={handleEmojiClick} className={emStyle} />

  if (etype === 'msg') {
    emji = <span className={emStyle} />
  }

  if (etype === 'kbd') {
    emji = <span onClick={handleEmojiClick} className={emStyle} />
  }

  return emji
}

const mapDispatchToProps = (dispatch) => ({
  setEmji: (emoji) => dispatch(setEmoji(emoji)),
})

export default connect(null, mapDispatchToProps)(Emoji)
