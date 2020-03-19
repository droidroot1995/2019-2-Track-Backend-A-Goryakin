/* eslint-disable no-alert */
/* eslint-disable dot-notation */
import { GET_CHATS_LIST_REQUEST, GET_CHATS_LIST_SUCCESS, GET_CHATS_LIST_FAILURE } from '../constants/ActionTypes'

const getChatsListStarted = () => ({
  type: GET_CHATS_LIST_REQUEST,
})

const getChatsListSuccess = (chats) => ({
  type: GET_CHATS_LIST_SUCCESS,
  payload: chats,
})

const getChatsListFailure = (error) => ({
  type: GET_CHATS_LIST_FAILURE,
  payload: {
    error,
  },
})

export const getChats = () => {
  return (dispatch, getState) => {
    dispatch(getChatsListStarted())

    fetch(`/chats/list_chats`)
      .then((resp) => resp.json())
      .then((data) => {
        const dat = data['chats']
        const chats = []
        dat.forEach((ch) => {
          let msgTime = ''
          fetch(`/chats/chat_msg_list?chat_id=${ch.id}`)
            .then((respMsg) => respMsg.json())
            .then((msgData) => {
              const msgs = msgData['messages'].reverse()
              if (msgs.length !== 0) {
                const date = new Date(msgs[0].added_at)
                msgTime = `${date.getHours()}:${date.getMinutes()}`
              }
            })

          const chat = {
            id: ch.id,
            avatar: 'http://pikchyriki.net/avatar/krutye/64/76.jpg',
            name: ch.topic,
            time: msgTime,
            message: ch.last_message,
            isGroup: ch.is_group,
            status: '',
          }
          chats.push(chat)
        })

        dispatch(getChatsListSuccess(chats))
      })
      .catch((err) => {
        dispatch(getChatsListFailure(err.message))
      })
  }
}
