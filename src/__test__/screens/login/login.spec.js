import React from 'react'
import { act } from 'react-dom/test-utils'
import useReactRouter from 'use-react-router'
import useLogin from 'screens/login/login.hook'

import * as storeHook from 'store'

import Login from 'screens/login'
import { mountWithRouter, shallowWithRouter, HookWrapper } from '__test__/utils'

describe('login', () => {
  let wrapper
  const setState = jest.fn()
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation(init => [init, setState])

  afterEach(() => {
    jest.clearAllMocks()
    if (wrapper) {
      wrapper.unmount()
    }
  })

  it('renders component login', () => {
    wrapper = shallowWithRouter(<Login />)
    expect(wrapper.find(Login)).toBeDefined()
  })

  it('on click show password', () => {
    jest.spyOn(storeHook, 'useStoreActions').mockImplementation(() => jest.fn())

    act(() => {
      wrapper = mountWithRouter(
        <HookWrapper
          hook={() => useLogin()}
          reactrouter={() => useReactRouter()}
        />,
      )

      let { hook } = wrapper.find('div#hookWrapper').props()

      const { handleOnClickShowPassword } = hook

      handleOnClickShowPassword()
    })

    expect(setState).toHaveBeenCalled()
    expect(setState).toHaveBeenCalledWith(expect.any(Boolean))
  })
})
