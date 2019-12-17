import React, { memo, ReactElement } from 'react'

import { Box, CircularProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  centerContent: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
})

function Loader(): ReactElement {
  const classes = useStyles()

  return (
    <Box className={classes.centerContent} position="absolute">
      <CircularProgress />
    </Box>
  )
}

export default memo(Loader)
