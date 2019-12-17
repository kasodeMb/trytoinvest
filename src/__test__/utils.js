import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'

import { shallow, mount, render } from '../enzyme'

const mountWithRouter = node => mount(<Router>{node}</Router>)
const shallowWithRouter = node => shallow(<Router>{node}</Router>)
const renderWithRouter = node => render(<Router>{node}</Router>)

function HookWrapper(props) {
  const hook = props.hook ? props.hook() : undefined
  const reactRouter = props.reactrouter ? props.reactrouter() : undefined
  return <div id="hookWrapper" hook={hook} reactrouter={reactRouter} />
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
const setHookState = newState =>
  jest.fn().mockImplementation(state => [newState, args => ({})])

export {
  HookWrapper,
  mountWithRouter,
  renderWithRouter,
  setHookState,
  shallowWithRouter,
  sleep,
}
