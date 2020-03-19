import React from 'react'
import MessageBubble from '../components/MessageBubble'

export default {
  title: 'MessageBubble',
  component: MessageBubble,
}

const msgSent = {
  name: 'Alex',
  msg: {
    attachments: [],
    audios: [],
    msg: 'Hello',
  },
  time: '00:00',
  self: true,
  status: 'sent',
  attachments: [],
  audios: [],
}

const msgSentRead = {
  name: 'Alex',
  msg: {
    attachments: [],
    audios: [],
    msg: 'Hello',
  },
  time: '00:00',
  self: true,
  status: 'sent_read',
  attachments: [],
  audios: [],
}

const msg = {
  name: 'Alex',
  msg: {
    attachments: [],
    audios: [],
    msg: 'Hello',
  },
  time: '00:00',
  self: false,
  status: 'sent_read',
}

export const SentMessage = () => <MessageBubble msgInfo={msgSent} />

export const SentReadMessage = () => <MessageBubble msgInfo={msgSentRead} />

export const Message = () => <MessageBubble msgInfo={msg} />
