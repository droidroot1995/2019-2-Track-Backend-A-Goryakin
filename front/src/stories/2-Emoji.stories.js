import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'
import Emoji from '../components/Emoji.js'

export default {
  title: 'Emoji',
  component: null,
}

export const Smiling = () => (
  <Provider store={store}>
    <Emoji etype="msg" name=":smile:" />
    <Emoji etype="msg" name=":angry:" />
    <Emoji etype="msg" name=":alien:" />
    <Emoji etype="msg" name=":screaming:" />
    <Emoji etype="msg" name=":kiss:" />
    <Emoji etype="msg" name=":fear:" />
    <Emoji etype="msg" name=":rolling_eyes:" />
    <Emoji etype="msg" name=":adult:" />
    <Emoji etype="msg" name=":tongue:" />
    <Emoji etype="msg" name=":with_thermometer:" />
    <Emoji etype="msg" name=":monocle:" />
    <Emoji etype="msg" name=":open_mouth:" />
    <Emoji etype="msg" name=":eyebrow:" />
    <Emoji etype="msg" name=":flushed:" />
    <Emoji etype="msg" name=":confused:" />
    <Emoji etype="msg" name=":clown:" />
    <Emoji etype="msg" name=":crying:" />
    <Emoji etype="msg" name=":expressionless:" />
    <Emoji etype="msg" name=":dizzy:" />
    <Emoji etype="msg" name=":vomiting:" />
  </Provider>
)
