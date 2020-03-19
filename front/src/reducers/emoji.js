import { SET_EMOJI, CLEAR_EMOJI } from '../constants/ActionTypes'

const initialState = {
  emoji: '',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_EMOJI:
      return {
        ...state,
        emoji: action.payload,
      }
    case CLEAR_EMOJI:
      return {
        ...state,
        emoji: '',
      }
    default:
      return state
  }
}
