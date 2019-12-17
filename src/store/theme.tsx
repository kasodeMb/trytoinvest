import { action, Action } from 'easy-peasy'

import { Colors } from 'config'

export interface ThemeModel {
  error: string
  primary: string

  resetStore: Action
  setError: Action<ThemeModel, string>
  setPrimary: Action<ThemeModel, string>
}

interface IState {
  error: string
  primary: string
}

const initialState: IState = {
  error: Colors.error,
  primary: Colors.primary,
}

const theme: ThemeModel = {
  ...initialState,
  resetStore: action((state: object): any => {
    return { ...state, ...initialState }
  }),
  setPrimary: action((state: IState, payload: string): void => {
    state.primary = payload
  }),
  setError: action((state: IState, payload: string): void => {
    state.error = payload
  }),
}

export default theme
