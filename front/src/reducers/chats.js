import { GET_CHATS_LIST_REQUEST, GET_CHATS_LIST_FAILURE, GET_CHATS_LIST_SUCCESS } from '../constants/ActionTypes'

const initialState = {
  loading: false,
  chats: [],
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CHATS_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case GET_CHATS_LIST_SUCCESS:
      return {
        loading: false,
        error: null,
        chats: action.payload,
      }
    case GET_CHATS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    default:
      return state
  }
}
