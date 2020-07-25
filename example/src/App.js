import React from 'react'
import 'mui-easy-snackbar/dist/index.css'
import MuiEasySnackbarExample from './MuiEasySnackbarExample'
import { MuiEasySnackbarProvider } from 'mui-easy-snackbar'

const App = () => {
  return (
    <MuiEasySnackbarProvider>
      <MuiEasySnackbarExample />
    </MuiEasySnackbarProvider>
  )
}

export default App
