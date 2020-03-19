/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable dot-notation */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { getProfileInfo } from '../actions/profile'
import ProfileHeader from './ProfileHeader'
import styles from '../styles/Profile.module.css'

const Profile = (props) => {
  const { userInfo, getInfo } = props
  // const { avatar, name, username, bio } = userInfo

  const [userAvatar, setUserAvatar] = useState('')
  const [userFullName, setUserFullName] = useState('')
  const [userUsername, setUserUsername] = useState('')
  const [userBio, setUserBio] = useState('')

  /* const info = {
    avatar: userAvatar,
    name: userFullName,
    username: userUsername,
    bio: userBio,
  } */

  useEffect(() => {
    const abortController = new AbortController()

    setTimeout(() => getInfo(), 100)

    return () => {
      abortController.abort()
    }
  }, [getInfo])

  return (
    <div className={styles.profile}>
      <ProfileHeader userInfo={userInfo} />
      <div className={styles.profile_info}>
        <img className={styles.avatar} src={userInfo.avatar} />
        <div className={styles.name_info}>
          <h6>Полное имя</h6>
          <input
            className={styles.name_input}
            placeholder="Имя и Фамилия"
            value={userInfo.fullname}
            onChange={(event) => setUserFullName(event.target.value)}
          />
        </div>
        <div className={styles.username_info}>
          <div className={styles.username}>
            <h6>Имя пользователя</h6>
            <input
              className={styles.username_input}
              placeholder="Имя пользователя"
              value={userInfo.username}
              onChange={(event) => setUserUsername(event.target.value)}
            />
          </div>
          <h6 className={styles.hint}>Минимальная длина 5 символов</h6>
        </div>
        <div className={styles.bio_info}>
          <div className={styles.bio}>
            <h6>Информация о себе</h6>
            <textarea
              className={styles.bio_input}
              placeholder="Информация о себе"
              value={userInfo.bio}
              onChange={(event) => setUserBio(event.target.value)}
            />
          </div>
          <h6 className={styles.hint}>Любая информация о себе</h6>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  userInfo: state.profile.profile,
})

const mapDispatchToProps = (dispatch) => ({
  getInfo: () => dispatch(getProfileInfo()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile)
