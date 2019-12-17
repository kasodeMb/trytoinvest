import React, { memo, ReactElement } from 'react'

import { makeStyles, Box, Link, Typography } from '@material-ui/core'
import { Link as RouterLink } from 'react-router-dom'


const useStyles = makeStyles({
  centerContent: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
})

function NotFound(): ReactElement {
  const classes = useStyles()

  return (
    <Box className={classes.centerContent} position="absolute">
      <Typography color="textPrimary" variant="h1">
        Page Not Found
      </Typography>
      <Box mt={3}>
        <Link color="primary" component={RouterLink} variant="subtitle1" to="/">
          Return to Home Page
        </Link>
      </Box>
    </Box>
  )
}

export default memo(NotFound)
