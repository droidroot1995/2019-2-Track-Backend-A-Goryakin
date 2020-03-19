/* eslint-disable eqeqeq */
/* eslint-disable dot-notation */
import { GET_PROFILE_INFO_REQUEST, GET_PROFILE_INFO_SUCCESS, GET_PROFILE_INFO_FAILURE } from '../constants/ActionTypes'

const getProfileInfoStarted = () => ({
  type: GET_PROFILE_INFO_REQUEST,
})

const getProfileInfoSuccess = (info) => ({
  type: GET_PROFILE_INFO_SUCCESS,
  payload: info,
})

const getProfileInfoFailure = (error) => ({
  type: GET_PROFILE_INFO_FAILURE,
  payload: {
    error,
  },
})

export const getProfileInfo = () => {
  return (dispatch, getState) => {
    dispatch(getProfileInfoStarted())

    fetch(`/users/profile`)
      .then((resp) => resp.json())
      .then((data) => {
        const uinfo = data['profile']
        const user = {
          avatar: uinfo.avatar,
          fullname: uinfo.first_name,
          username: uinfo.username,
          bio: '',
        }

        dispatch(getProfileInfoSuccess(user))
      })
      .catch((err) => {
        dispatch(getProfileInfoFailure(err.message))
      })
  }
}
