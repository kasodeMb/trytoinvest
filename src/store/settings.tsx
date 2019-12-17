import { action, Action } from 'easy-peasy'

export interface SettingsModel {
  theme: string

  resetStore: Action<SettingsModel, object>
  toggleTheme: Action<SettingsModel>
}

interface State {
  theme: string
}

const initialState: State = {
  theme: 'light',
}

const settings: SettingsModel = {
  ...initialState,
  resetStore: action((state: object): any => {
    return { ...state, ...initialState }
  }),
  toggleTheme: action((state: State): void => {
    state.theme = state.theme === 'light' ? 'dark' : 'light'
  }),
}

export default settings
