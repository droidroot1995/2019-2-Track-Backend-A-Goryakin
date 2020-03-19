import { GET_GLOBAL_REQUEST, GET_GLOBAL_SUCCESS, GET_GLOBAL_FAILURE } from '../constants/ActionTypes'

const getGlobalStarted = () => ({
  type: GET_GLOBAL_REQUEST,
})

const getGlobalSuccess = (selected) => ({
  type: GET_GLOBAL_SUCCESS,
  payload: {
    selected,
  },
})

const getGlobalFailure = (error) => ({
  type: GET_GLOBAL_FAILURE,
  payload: {
    error,
  },
})

export const getGlobal = (selected) => {
  return (dispatch, getState) => {
    dispatch(getGlobalStarted())
    if (typeof selected !== 'undefined') {
      dispatch(getGlobalSuccess(selected))
    } else {
      dispatch(getGlobalFailure(-1))
    }
  }
}
