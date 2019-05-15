import React from 'react'
import { createGlobalStyle } from 'styled-components'

import Landing from '@/screens/Landing'

const StyledGlobal = createGlobalStyle`
  * {
    box-sizing: border-box;
    flex-wrap: wrap;
  }

  html, body {
    overflow-x: hidden;
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 24px;
  }
`

const App = () => (
  <>
    <StyledGlobal />
    <Landing />
  </>
)

export default App
