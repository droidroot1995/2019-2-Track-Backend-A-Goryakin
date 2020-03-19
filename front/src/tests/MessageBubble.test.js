import React from 'react'
import renderer from 'react-test-renderer'
import MessageBubble from '../components/MessageBubble'

it('renders correctly sent message', () => {
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

  const bubble = renderer.create(<MessageBubble msgInfo={msgSent} />).toJSON()
  expect(bubble).toMatchSnapshot()
})

it('renders correctly sent + read message', () => {
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

  const bubble = renderer.create(<MessageBubble msgInfo={msgSentRead} />).toJSON()
  expect(bubble).toMatchSnapshot()
})

it('renders correctly received message', () => {
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

  const bubble = renderer.create(<MessageBubble msgInfo={msg} />).toJSON()
  expect(bubble).toMatchSnapshot()
})
