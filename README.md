# mui-easy-snackbar

> Simple util, using material-ui and material-ui-snackbar-provider, to easily display a snackbar for a multitude of use cases

[![NPM](https://img.shields.io/npm/v/mui-easy-snackbar.svg)](https://www.npmjs.com/package/mui-easy-snackbar) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save mui-easy-snackbar
```

## Demo

https://codesandbox.io/s/little-worker-lxpkf

# Docs

## MuiEasySnackbarProvider

You must wrap the MuiEasySnackbarProvider around the Router of your App.

Ex.

```js
import { MuiEasySnackbarProvider } from 'mui-easy-snackbar'

<MuiEasySnackbarProvider>
  <App>
</MuiEasySnackbarProvider>
```

## useMuiEasySnackbar()

Used to access snackbar in a functional component

```js
import { useMuiEasySnackbar } from 'mui-easy-snackbar'

const Example = () => {
  const snackbar = useMuiEasySnackbar()
}
```

## withMuiEasySnackbar()

Wrap this around a class component to access the snackbar in props

```js
import { withMuiEasySnackbar } from 'mui-easy-snackbar'

withMuiEasySnackbar(ExampleClassComponent)

class ExampleClassComponenet extends React.Component {
  this.props.snackbar.showSuccess('Hi')
}
```

## Snackbar Methods

### showError (Error object or String)

Displays Red modal

### showInfo (String)

Displays Blue Modal

### showSuccess (String)

Displays Green Modal

### showWarning (String)

Displays Yellow Modal

# Basic Example

```js
import React, { Fragment } from 'react'
import Button from '@material-ui/core/Button'

import { useMuiEasySnackbar } from 'mui-easy-snackbar'

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
  const snackbar = useMuiEasySnackbar()

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
```

## License

MIT © [Naveed-Naqi](https://github.com/Naveed-Naqi)
