import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'

import './index.css'

import './demos/ipc'
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'


import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'

import theme from './theme'
import GlobalStyles from './GlobalStyles'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {/* <GlobalStyles /> */}
            <App />
        </ThemeProvider>
    </React.StrictMode>,
)

postMessage({ payload: 'removeLoading' }, '*')
