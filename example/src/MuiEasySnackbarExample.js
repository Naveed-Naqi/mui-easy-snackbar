import React, { Fragment } from 'react'
import Button from '@material-ui/core/Button'

import { useCustomSnackbar } from 'mui-easy-snackbar'

import { green, yellow } from '@material-ui/core/colors'

import { withStyles } from '@material-ui/core/styles'

const GreenButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700]
    }
  }
}))(Button)

const YellowButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],

    '&:hover': {
      backgroundColor: yellow[700]
    }
  }
}))(Button)

export default function MuiEasySnackbarExample() {
  const snackbar = useCustomSnackbar()

  return (
    <Fragment>
      <div>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => {
            snackbar.showError('Something went wrong')
          }}
        >
          Open Snackbar Error
        </Button>
      </div>
      <br></br>
      <div>
        <Button
          variant='contained'
          color='primary'
          onClick={() => {
            snackbar.showSuccess('Success')
          }}
        >
          Open Snackbar Success
        </Button>
      </div>
      <br></br>
      <div>
        <GreenButton
          variant='contained'
          color='secondary'
          onClick={() => {
            snackbar.showInfo('Some Info')
          }}
        >
          Open Snackbar Info
        </GreenButton>
      </div>
      <br></br>
      <div>
        <YellowButton
          variant='contained'
          color='primary'
          onClick={() => {
            snackbar.showWarning('Some Info')
          }}
        >
          Open Snackbar Warning
        </YellowButton>
      </div>
    </Fragment>
  )
}
