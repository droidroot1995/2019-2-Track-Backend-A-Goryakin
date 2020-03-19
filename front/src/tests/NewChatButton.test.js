import React from 'react'
import { Provider } from 'react-redux'
import renderer from 'react-test-renderer'
import store from '../store/store'
import NewChatButton from '../components/NewChatButton'

it('renders correctly', () => {
  const button = renderer
    .create(
      <Provider store={store}>
        <NewChatButton />
      </Provider>,
    )
    .toJSON()
  expect(button).toMatchSnapshot()
})
