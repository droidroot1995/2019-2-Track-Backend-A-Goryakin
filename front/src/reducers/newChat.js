import { CREATE_NEW_CHAT_REQUEST, CREATE_NEW_CHAT_SUCCESS, CREATE_NEW_CHAT_FAILURE } from '../constants/ActionTypes'

const initialState = {
  loading: false,
  chat: null,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_CHAT_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case CREATE_NEW_CHAT_SUCCESS:
      return {
        loading: false,
        error: null,
        chats: action.payload,
      }
    case CREATE_NEW_CHAT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    default:
      return state
  }
}
