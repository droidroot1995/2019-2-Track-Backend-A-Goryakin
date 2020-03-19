/* eslint-disable eqeqeq */
/* eslint-disable dot-notation */

import Centrifuge from 'centrifuge'
import {
  GET_MESSAGES_LIST_REQUEST,
  GET_MESSAGES_LIST_SUCCESS,
  GET_MESSAGES_LIST_FAILURE,
  GET_MESSAGE_SUCCESS,
} from '../constants/ActionTypes'

let socket = null
let connected = -1
let subscription = null

const getChatMessagesStarted = () => ({
  type: GET_MESSAGES_LIST_REQUEST,
})

const getChatMessagesSuccess = (msgs, cid) => ({
  type: GET_MESSAGES_LIST_SUCCESS,
  payload: {
    messages: msgs,
    chatId: cid
  }

})

const getChatMessageSuccess = (messages) => ({
  type: GET_MESSAGE_SUCCESS,
  payload: messages,
})

const getChatMessagesFailure = (error) => ({
  type: GET_MESSAGES_LIST_FAILURE,
  payload: {
    error,
  },
})

export const openWebSocket = (chatId, ctoken) => {
  return (dispatch, getState) => {
    if (connected === -1) {
      socket = new Centrifuge('ws://192.168.0.107:8080/connection/websocket')
      socket.setToken(ctoken)

      socket.on('connect', (context) => {
        connected = 1
        console.log('connected')
      })

      socket.on('disconnect', (context) => {
        console.log('disconnected')
      })

      subscription = socket.subscribe(`chat${chatId}`, (message) => {
        console.log(message.data.message)

        const recvMsg = message.data.message

        const date = new Date()

        const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`

        const msg = {
          name: '',
          msg: {
            attachments: [],
            msg: recvMsg.content,
            audios: [],
          },
          status: 'sent',
          self: recvMsg.self,
          time: `${date.getHours()}:${minutes}`,
        }

        dispatch(getChatMessageSuccess(msg))
      })

      socket.connect()
    }
  }
}

export const closeWebSocket = (chatId) => {
  return (dispatch, getState) => {
    connected = -1
    subscription.unsubscribe()
    subscription.removeAllListeners()
    socket.disconnect()

    subscription = null
    socket = null
  }
}

export const getChatMessages = (chatId) => {
  return (dispatch, getState) => {
    dispatch(getChatMessagesStarted())
    fetch(`/chats/chat_msg_list?chat_id=${chatId}`)
      .then((respMsg) => respMsg.json())
      .then((msgData) => {
        const msgDat = msgData['messages'].reverse()
        const chatMsgs = []
        msgDat.forEach((msgd, idx) => {
          const date = new Date(msgd.added_at)

          const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`

          const msg = {
            name: '',
            msg: {
              attachments: [],
              msg: msgd.content,
              audios: [],
            },
            status: 'sent',
            self: msgd.self,
            time: `${date.getHours()}:${minutes}`,
          }

          chatMsgs.push(msg)
        })
        dispatch(getChatMessagesSuccess(chatMsgs, chatId))
      })
      .catch((err) => {
        dispatch(getChatMessagesFailure(err.message))
      })
  }
}
