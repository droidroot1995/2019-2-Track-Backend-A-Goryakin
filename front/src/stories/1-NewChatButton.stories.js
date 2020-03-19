import React from 'react'
import { Provider } from 'react-redux'
import store from '../store/store'
import NewChatButton from '../components/NewChatButton'

export default {
  title: 'NewChatButton',
  component: NewChatButton,
}

export const Button = () => (
  <Provider store={store}>
    <NewChatButton />
  </Provider>
)
