import { SET_EMOJI, CLEAR_EMOJI } from '../constants/ActionTypes'

const setEmojiAct = (emoji) => ({
  type: SET_EMOJI,
  payload: {
    emoji,
  },
})

const clearEmojiAct = () => ({
  type: CLEAR_EMOJI,
  payload: '',
})

export const setEmoji = (emoji) => {
  return (dispatch, getState) => {
    dispatch(setEmojiAct(emoji))
  }
}

export const clearEmoji = () => {
  return (dispatch, getState) => {
    dispatch(clearEmojiAct())
  }
}
