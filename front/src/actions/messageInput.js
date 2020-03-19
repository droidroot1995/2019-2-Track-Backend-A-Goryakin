/* eslint-disable dot-notation */
import { SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILURE } from '../constants/ActionTypes'


const sendMessageStarted = () => ({
  type: SEND_MESSAGE_REQUEST,
})

const sendMessageSuccess = (status) => ({
  type: SEND_MESSAGE_SUCCESS,
  payload: status,
})

const sendMessageFailure = (error) => ({
  type: SEND_MESSAGE_FAILURE,
  payload: {
    error,
  },
})

export const sendMessage = (chatId, message, attachments, audios) => {
  return (dispatch, getState) => {
    const data = new FormData()
    data.append('chat', chatId)
    data.append('content', message)

    dispatch(sendMessageStarted())

    fetch('/chats/send_msg', { method: 'POST', body: data })
      .then((resp) => resp.json())
      .then((dat) => {
        attachments.forEach((att) => {
          if (att.type !== 'location') {
            const attData = new FormData()
            attData.append('chat', chatId)
            attData.append('message', dat['message']['id'])
            attData.append('att_type', att.type)
            attData.append('url', att.src)
            fetch('/chats/upload', { method: 'POST', body: attData }).then((resp) => resp.json())
          }
        })

        audios.forEach((aud) => {
          const audioData = new FormData()
          audioData.append('chat', chatId)
          audioData.append('message', dat['message']['id'])
          audioData.append('att_type', aud.type)
          audioData.append('url', aud.src)
          fetch('/chats/upload', { method: 'POST', body: audioData }).then((resp) => resp.json())
        })

        dispatch(sendMessageSuccess(dat))
      })
      .catch((err) => dispatch(sendMessageFailure(err.message)))
  }
}
