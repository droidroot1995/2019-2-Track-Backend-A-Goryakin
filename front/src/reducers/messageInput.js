import { SEND_MESSAGE_REQUEST, SEND_MESSAGE_SUCCESS, SEND_MESSAGE_FAILURE } from '../constants/ActionTypes'

const initialState = {
  loading: false,
  message: null,
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case SEND_MESSAGE_SUCCESS:
      return {
        loading: false,
        error: null,
        message: action.payload,
      }
    case SEND_MESSAGE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    default:
      return state
  }
}
