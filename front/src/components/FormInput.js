/* eslint-disable object-shorthand */
/* eslint-disable prefer-destructuring */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/require-default-props */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { sendMessage } from '../actions/messageInput'
import { clearEmoji } from '../actions/emoji'
import EmojiKeyboard from './EmojiKeyboard'
import styles from '../styles/FormInput.module.css'

const FormInput = (props) => {
  const { placeholder, selected, emoji, sendMsg, clearEmji, filesDragAndDrop } = props

  const [filesDrag, setFilesDrag] = filesDragAndDrop

  const [hState, setHState] = useState({
    isRecording: -1,
    isFUOpened: -1,
    isEmojiKOpened: -1,
    attachments: [],
    audios: [],
    attachNum: null,
    audiosNum: null,
    stream: null,
    recorder: null,
    filesDrag: undefined,
  })

  let fileDrag = filesDrag

  const isRecording = hState.isRecording
  const isFUOpened = hState.isFUOpened
  const isEmojiKOpened = hState.isEmojiKOpened
  const attachments = hState.attachments
  let attachNum = hState.attachNum
  const audios = hState.audios
  let audiosNum = hState.audiosNum
  let stream = hState.stream
  let recorder = hState.recorder

  const imagesInput = React.useRef(null)
  const filesInput = React.useRef(null)

  if (hState.attachNum === null && attachments.length > 0) {
    attachNum = <div className={styles.attach_num}>{attachments.length}</div>
    setHState({
      isRecording: isRecording,
      isFUOpened: isFUOpened,
      isEmojiKOpened: isEmojiKOpened,
      attachments: attachments,
      audios: audios,
      attachNum: attachNum,
      audiosNum: audiosNum,
      stream: stream,
      recorder: recorder,
      filesDrag: undefined,
    })
  }

  if (hState.filesDrag !== undefined) {
    fileDrag = hState.filesDrag
    setFilesDrag(null)
  }

  let chunks = []

  let record = null

  let emojiKeyboard = null

  if (stream === null && recorder === null) {
    if ('mediaDevices' in navigator) {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((rstream) => {
          stream = rstream
          recorder = new MediaRecorder(stream)

          recorder.addEventListener('stop', (event) => {
            const tmp = {}
            tmp.type = 'audio'
            tmp.src = new Blob(chunks, { type: recorder.mimeType })
            chunks = []
            tmp.url = URL.createObjectURL(tmp.src)

            audios.push(tmp)

            audiosNum = <div className={styles.audio_num}>{audios.length}</div>
            attachNum = hState.attachNum
            setHState({
              isRecording: isRecording,
              isFUOpened: isFUOpened,
              isEmojiKOpened: isEmojiKOpened,
              attachments: hState.attachments,
              audios: audios,
              attachNum: attachNum,
              audiosNum: audiosNum,
              stream: stream,
              recorder: recorder,
              filesDrag: undefined,
            })
          })

          recorder.addEventListener('dataavailable', (event) => {
            chunks.push(event.data)
          })

          setHState({
            isRecording: isRecording,
            isFUOpened: isFUOpened,
            isEmojiKOpened: isEmojiKOpened,
            attachments: attachments,
            audios: audios,
            attachNum: attachNum,
            audiosNum: audiosNum,
            stream: stream,
            recorder: recorder,
            filesDrag: undefined,
          })
        })
        .catch((error) => {
          stream = undefined
          recorder = undefined

          setHState({
            isRecording: isRecording,
            isFUOpened: isFUOpened,
            isEmojiKOpened: isEmojiKOpened,
            attachments: attachments,
            audios: audios,
            attachNum: attachNum,
            audiosNum: audiosNum,
            stream: stream,
            recorder: recorder,
            filesDrag: undefined,
          })
        })
    }
  }

  const dataUriToBlob = (dataURI) => {
    const byteString = atob(dataURI.split(',')[1])
    const mimeString = dataURI
      .split(',')[0]
      .split(':')[1]
      .split(';')[0]
    const buffer = new ArrayBuffer(byteString.length)
    const intArr = new Uint8Array(buffer)
    for (let i = 0; i < byteString.length; i += 1) {
      intArr[i] = byteString.charCodeAt(i)
    }

    const blob = new Blob([buffer], { type: mimeString })
    return blob
  }

  const textarea = React.useRef(null)

  const handleRecordClick = () => {
    if (isRecording < 0) {
      if (recorder !== undefined) {
        recorder.start()
      }

      record = (
        <svg
          className={styles.stop_record}
          onClick={handleRecordClick}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
        </svg>
      )

      audiosNum = hState.audiosNum
      setHState({
        isRecording: 1,
        isFUOpened: isFUOpened,
        isEmojiKOpened: isEmojiKOpened,
        attachments: attachments,
        audios: audios,
        attachNum: attachNum,
        audiosNum: audiosNum,
        stream: stream,
        recorder: recorder,
        filesDrag: undefined,
      })
    }
    if (isRecording > 0) {
      if (recorder !== undefined) {
        recorder.stop()
      }

      record = (
        <svg
          className={styles.record}
          onClick={handleRecordClick}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 352 512"
        >
          <path d="M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z" />
        </svg>
      )

      audiosNum = hState.audiosNum
      setHState({
        isRecording: -1,
        isFUOpened: isFUOpened,
        isEmojiKOpened: isEmojiKOpened,
        attachments: attachments,
        audios: audios,
        attachNum: attachNum,
        audiosNum: audiosNum,
        stream: stream,
        recorder: recorder,
        filesDrag: undefined,
      })
    }
  }

  if (isRecording < 0) {
    record = (
      <svg
        className={styles.record}
        onClick={handleRecordClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 352 512"
      >
        <path d="M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z" />
      </svg>
    )
  }

  let fileUploadMenu = null

  const handleFileUploadClick = () => {
    if (hState.isFUOpened < 0) {
      setHState({
        isRecording: isRecording,
        isFUOpened: 1,
        isEmojiKOpened: isEmojiKOpened,
        attachments: attachments,
        audios: audios,
        attachNum: attachNum,
        audiosNum: audiosNum,
        stream: stream,
        recorder: recorder,
        filesDrag: undefined,
      })
    } else {
      setHState({
        isRecording: isRecording,
        isFUOpened: -1,
        isEmojiKOpened: isEmojiKOpened,
        attachments: attachments,
        audios: audios,
        attachNum: attachNum,
        audiosNum: audiosNum,
        stream: stream,
        recorder: recorder,
        filesDrag: undefined,
      })
    }
  }

  const handleCurrentGeolocation = () => {
    let lat = 0
    let lon = 0

    const tmp = {}
    tmp.type = 'location'

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        lat = position.coords.latitude
        lon = position.coords.longitude

        tmp.url = `https://www.openstreetmap.org/#map=18/${lat}/${lon}`
      })
    } else {
      tmp.url = `https://www.openstreetmap.org/#map=18/0/0`
    }

    attachments.push(tmp)
    attachNum = <div className={styles.attach_num}>{attachments.length}</div>

    setHState({
      isRecording: isRecording,
      isFUOpened: -1,
      isEmojiKOpened: isEmojiKOpened,
      attachments: attachments,
      audios: audios,
      attachNum: attachNum,
      audiosNum: audiosNum,
      stream: stream,
      recorder: recorder,
      filesDrag: undefined,
    })
  }

  const handleFilesSelect = (e) => {
    const fileSelect = filesInput.current

    if (fileSelect) {
      fileSelect.click()
    }
  }

  const handleFiles = (e) => {
    e.preventDefault()
    const files = e.target.files
    for (let i = 0; i < files.length; i += 1) {
      const tmp = {}
      const file = files[i]

      if (file.type.startsWith('image/')) {
        tmp.type = 'image'
      } else {
        tmp.type = 'file'
      }

      const reader = new FileReader()
      reader.addEventListener('load', (event) => {
        tmp.src = dataUriToBlob(event.target.result)
      })

      reader.readAsDataURL(file)

      tmp.url = window.URL.createObjectURL(file)

      attachments.push(tmp)
      attachNum = <div className={styles.attach_num}>{attachments.length}</div>
      setHState({
        isRecording: isRecording,
        isFUOpened: -1,
        isEmojiKOpened: isEmojiKOpened,
        attachments: attachments,
        audios: audios,
        attachNum: attachNum,
        audiosNum: audiosNum,
        stream: stream,
        recorder: recorder,
        filesDrag: undefined,
      })
    }
  }

  const handleImagesSelect = (e) => {
    const fileSelect = imagesInput.current
    if (fileSelect) {
      fileSelect.click()
    }
  }

  if (isFUOpened < 0) {
    fileUploadMenu = null
  } else {
    fileUploadMenu = (
      <menu className={styles.menu}>
        <li className={styles.menu_item} onClick={handleImagesSelect}>
          <svg className={styles.file_upload_image} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z" />
          </svg>
          <span className={styles.file_upload_text}>Изображение</span>
          <input
            className={styles.file_input}
            type="file"
            multiple
            accept="image/*"
            onChange={handleFiles}
            ref={imagesInput}
          />
        </li>
        <li className={styles.menu_item} onClick={handleFilesSelect}>
          <svg className={styles.file_upload_image} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm160-14.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z" />
          </svg>
          <span className={styles.file_upload_text}>Файл</span>
          <input className={styles.file_input} type="file" multiple onChange={handleFiles} ref={filesInput} />
        </li>
        <li className={styles.menu_item} onClick={handleCurrentGeolocation}>
          <svg className={styles.file_upload_image} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
          </svg>
          <span className={styles.file_upload_text}>Местоположение</span>
        </li>
        <li className={styles.menu_item}>
          <svg className={styles.file_upload_image} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
          </svg>
          <span className={styles.file_upload_text}>Контакт</span>
        </li>
      </menu>
    )
  }

  if (isRecording < 0) {
    record = (
      <svg
        className={styles.record}
        onClick={handleRecordClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 352 512"
      >
        <path d="M176 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S80 42.98 80 96v160c0 53.02 42.98 96 96 96zm160-160h-16c-8.84 0-16 7.16-16 16v48c0 74.8-64.49 134.82-140.79 127.38C96.71 376.89 48 317.11 48 250.3V208c0-8.84-7.16-16-16-16H16c-8.84 0-16 7.16-16 16v40.16c0 89.64 63.97 169.55 152 181.69V464H96c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h160c8.84 0 16-7.16 16-16v-16c0-8.84-7.16-16-16-16h-56v-33.77C285.71 418.47 352 344.9 352 256v-48c0-8.84-7.16-16-16-16z" />
      </svg>
    )
  } else {
    record = (
      <svg
        className={styles.stop_record}
        onClick={handleRecordClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z" />
      </svg>
    )
  }

  if (isEmojiKOpened < 0) {
    emojiKeyboard = null
  } else {
    emojiKeyboard = <EmojiKeyboard />
  }

  if (fileDrag) {
    for (let i = 0; i < fileDrag.length; i += 1) {
      const tmp = {}
      const file = filesDrag[i]

      if (file.type.startsWith('image/')) {
        tmp.type = 'image'
      } else {
        tmp.type = 'file'
      }

      const reader = new FileReader()
      reader.addEventListener('load', (event) => {
        tmp.src = dataUriToBlob(event.target.result)
      })

      reader.readAsDataURL(file)

      tmp.url = window.URL.createObjectURL(file)

      attachments.push(tmp)

      attachNum = <div className={styles.attach_num}>{attachments.length}</div>

      setFilesDrag(null)
      setHState({
        isRecording: isRecording,
        isFUOpened: isFUOpened,
        isEmojiKOpened: isEmojiKOpened,
        attachments: attachments,
        audios: audios,
        attachNum: attachNum,
        audiosNum: audiosNum,
        stream: stream,
        recorder: recorder,
        filesDrag: null,
      })
    }
  }

  if (emoji !== '') {
    textarea.current.value += emoji.emoji
    clearEmji()
  }

  const handleEmojiKClick = () => {
    if (hState.isEmojiKOpened < 0) {
      setHState({
        isRecording: isRecording,
        isFUOpened: isFUOpened,
        isEmojiKOpened: 1,
        attachments: attachments,
        audios: audios,
        attachNum: attachNum,
        audiosNum: audiosNum,
        stream: stream,
        recorder: recorder,
        filesDrag: undefined,
      })
    } else {
      setHState({
        isRecording: isRecording,
        isFUOpened: isFUOpened,
        isEmojiKOpened: -1,
        attachments: attachments,
        audios: audios,
        attachNum: attachNum,
        audiosNum: audiosNum,
        stream: stream,
        recorder: recorder,
        filesDrag: undefined,
      })
    }
  }

  const handleKeyPress = (e) => {
    if (e.charCode === 13) {
      e.preventDefault()
      const msg = textarea.current.value.trim()

      if (attachments !== [] || audios !== [] || msg !== '') {
        setHState({
          isRecording: isRecording,
          isFUOpened: isFUOpened,
          isEmojiKOpened: isEmojiKOpened,
          attachments: [],
          audios: [],
          attachNum: null,
          audiosNum: null,
          stream: null,
          recorder: null,
          filesDrag: undefined,
        })

        textarea.current.value = ''
        clearEmji()
        sendMsg(selected, msg, attachments, audios)
      }
    }
  }

  return (
    <div className={styles.form_input}>
      <textarea
        id="message_input"
        type="text"
        className={styles.text_input}
        ref={textarea}
        placeholder={placeholder}
        onKeyPress={handleKeyPress}
      />
      <div className={styles.emoji_button_container}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.file_upload}
          onClick={handleEmojiKClick}
          viewBox="0 0 496 512"
        >
          <path
            className={styles.path_emoji}
            d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm80 168c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-160 0c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm194.8 170.2C334.3 380.4 292.5 400 248 400s-86.3-19.6-114.8-53.8c-13.6-16.3 11-36.7 24.6-20.5 22.4 26.9 55.2 42.2 90.2 42.2s67.8-15.4 90.2-42.2c13.4-16.2 38.1 4.2 24.6 20.5z"
          />
        </svg>
      </div>
      <div className={styles.file_upload_container}>
        {attachNum}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.file_upload}
          onClick={handleFileUploadClick}
          viewBox="0 0 448 512"
        >
          <path
            className={styles.path}
            d="M43.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L254.392 34c44.316-45.332 116.351-45.336 160.671 0 43.89 44.894 43.943 117.329 0 162.276L232.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L171.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292 4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798-19.189-19.627-49.957-19.637-69.154 0L90.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313 34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485z"
          />
        </svg>
      </div>
      <div className={styles.audio_upload_container}>
        {audiosNum}
        {record}
      </div>
      {fileUploadMenu}
      {emojiKeyboard}
    </div>
  )
}

const mapStateToProps = (state) => ({
  selected: state.global.selected,
  emoji: state.emoji.emoji,
})

const mapDispatchToProps = (dispatch) => ({
  sendMsg: (chatId, msg, attachments, audios) => dispatch(sendMessage(chatId, msg, attachments, audios)),
  clearEmji: () => dispatch(clearEmoji()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FormInput)
