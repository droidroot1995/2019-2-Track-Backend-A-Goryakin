import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'
import EmojiKeyboard from '../components/EmojiKeyboard'

export default {
  title: 'EmojiKeyboard',
  component: EmojiKeyboard,
}

export const Keyboard = () => (
  <Provider store={store}>
    <EmojiKeyboard />
  </Provider>
)
