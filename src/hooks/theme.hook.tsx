import { Theme } from '@material-ui/core/styles'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme'

import { Colors, Fonts } from 'config'
import { useStoreState, IStateModel } from 'store'


interface IType {
  theme: Theme
}

function useCustomTheme(): IType {
  const primary = useStoreState((state: IStateModel) => state.theme.primary)
  const error = useStoreState((state: IStateModel) => state.theme.error)

  const currentTheme: ThemeOptions = {
    spacing: 4,
    palette: {
      background: {
        default: Colors.athensGray,
      },
      primary: {
        main: primary,
        dark: Colors.camarone,
      },
      grey: {
        500: Colors.nobel,
        400: Colors.silver,
      },
      text: {
        disabled: Colors.nobel,
        primary: Colors.stormGray,
        secondary: Colors.black,
      },
      common: {
        black: Colors.black,
      },
      error: {
        main: error,
        50: Colors.alizarinCrimson,
      },
      action: {
        selected: 'rgba(232,246,232,0.4)',
      },
      type: 'light',
    },
    typography: {
      fontFamily: Fonts.roboto,
    },
    overrides: {

    },
  }

  const theme: Theme = createMuiTheme(currentTheme)

  return {
    theme,
  }
}

export default useCustomTheme
