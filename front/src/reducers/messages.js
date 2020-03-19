import {
  GET_MESSAGES_LIST_REQUEST,
  GET_MESSAGES_LIST_SUCCESS,
  GET_MESSAGES_LIST_FAILURE,
  GET_MESSAGE_SUCCESS,
  SOCKET_DISCONNECTED,
} from '../constants/ActionTypes'

const initialState = {
  loading: false,
  messages: [],
  chatId: -1,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MESSAGES_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case GET_MESSAGES_LIST_SUCCESS:
      return {
        loading: false,
        error: null,
        messages: action.payload.messages,
        chatId: action.payload.chatId,
      }
    case GET_MESSAGES_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    case GET_MESSAGE_SUCCESS:
      return {
        ...state,
        loading: false,
        messages: [...state.messages, action.payload],
      }
    case SOCKET_DISCONNECTED:
      return {
        ...state,
        loading: false,
        messages: action.payload,
      }
    default:
      return state
  }
}
