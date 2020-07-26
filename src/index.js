import React from 'react'
import { useSnackbar, SnackbarProvider } from 'material-ui-snackbar-provider'
import { Snackbar, Button } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

export const useMuiEasySnackbar = () => {
  const snackbar = useSnackbar()
  return React.useMemo(() => {
    const showMessage = (type) => (
      message,
      action,
      handleAction,
      customParameters
    ) => {
      let realMessage = message

      if (type === 'error') {
        if (typeof message !== 'string') {
          const err = message
          realMessage = (err.response && err.response.data) || err.message
        }
      }

      snackbar.showMessage(realMessage, action, handleAction, {
        ...customParameters,
        type
      })
    }
    return {
      ...snackbar,
      showInfo: showMessage('info'),
      showWarning: showMessage('warning'),
      showError: showMessage('error'),
      showSuccess: showMessage('success')
    }
  }, [snackbar])
}

export const withMuiEasySnackbar = (Component) => {
  return (props) => {
    const snackbar = useMuiEasySnackbar()
    return <Component snackbar={snackbar} {...props} />
  }
}

const Alert = (props) => {
  return <MuiAlert elevation={6} variant='filled' {...props} />
}

export const MuiEasySnackbar = ({
  message,
  action,
  ButtonProps,
  SnackbarProps,
  customParameters
}) => {
  return (
    <Snackbar autoHideDuration={3000} {...SnackbarProps}>
      <Alert
        severity={customParameters?.type}
        action={
          action != null && (
            <Button color='inherit' size='small' {...ButtonProps}>
              {action}
            </Button>
          )
        }
      >
        {message}
      </Alert>
    </Snackbar>
  )
}

export class MuiEasySnackbarProvider extends React.PureComponent {
  render() {
    return (
      <SnackbarProvider SnackbarComponent={MuiEasySnackbar}>
        {this.props.children}
      </SnackbarProvider>
    )
  }
}
