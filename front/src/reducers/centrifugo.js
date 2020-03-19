import { GET_CENT_TOKEN_REQUEST, GET_CENT_TOKEN_SUCCESS, GET_CENT_TOKEN_FAILURE } from '../constants/ActionTypes'

const initialState = {
  loading: false,
  token: '',
  error: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CENT_TOKEN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case GET_CENT_TOKEN_SUCCESS:
      return {
        loading: false,
        error: null,
        token: action.payload,
      }
    case GET_CENT_TOKEN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      }
    default:
      return state
  }
}