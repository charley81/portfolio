import { css } from '@emotion/react'
import '@fontsource/roboto' //defaults to 400
import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

const globalStyles = css`
  * {
    ::before,
    ::after {
      margin: 0;
      padding: 0;
    }
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`
