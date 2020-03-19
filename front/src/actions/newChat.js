/* eslint-disable no-alert */
/* eslint-disable dot-notation */
import { CREATE_NEW_CHAT_REQUEST, CREATE_NEW_CHAT_SUCCESS, CREATE_NEW_CHAT_FAILURE } from '../constants/ActionTypes'

const createNewChatStarted = () => ({
  type: CREATE_NEW_CHAT_REQUEST,
})

const createNewChatSuccess = (chat) => ({
  type: CREATE_NEW_CHAT_SUCCESS,
  payload: chat,
})

const createNewChatFailure = (error) => ({
  type: CREATE_NEW_CHAT_FAILURE,
  payload: {
    error,
  },
})

export const createNewChat = () => {
  return (dispatch, getState) => {
    const contactId = prompt('Введите id контакта', 0)
    const data = new FormData()
    data.append('target_user_id', contactId)

    dispatch(createNewChatStarted())

    fetch(`/chats/create_pers_chat`, { method: 'POST', body: data })
      .then((resp) => resp.json())
      .then((dat) => {
        dispatch(createNewChatSuccess(dat))
      })
      .catch((err) => {
        dispatch(createNewChatFailure(err.message))
      })
  }
}
