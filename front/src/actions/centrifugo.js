/* eslint-disable dot-notation */
import { GET_CENT_TOKEN_REQUEST, GET_CENT_TOKEN_SUCCESS, GET_CENT_TOKEN_FAILURE} from '../constants/ActionTypes'


const sendTokenStarted = () => ({
  type: GET_CENT_TOKEN_REQUEST,
})

const sendTokenSuccess = (ctoken) => ({
  type: GET_CENT_TOKEN_SUCCESS,
  payload: ctoken
})

const sendTokenFailure = (error) => ({
  type: GET_CENT_TOKEN_FAILURE,
  payload: {
    error,
  },
})

export const getToken = () => {
  return (dispatch, getState) => {
    dispatch(sendTokenStarted())

    fetch('/centrifugo/', { method: 'GET'})
      .then((resp) => resp.json())
      .then((dat) => {
        dispatch(sendTokenSuccess(dat.token))
      })
      .catch((err) => dispatch(sendTokenFailure(err.message)))
  }
}
