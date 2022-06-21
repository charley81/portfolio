import { css } from '@emotion/react'
import '@fontsource/roboto' //defaults to 400
import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

const globalStyles = css`
  :root {
    --color-primary: #66aefa;
    --color-secondary: #ffd182;
    --color-light: #f0ebe3;
    --color-dark: #292622;
    --color-grey-1: #ada290;
    --color-grey-2: #666055;
    --transition: all 0.3s ease;
    --border-radius: 4px;
    --font-family: 'Roboto', sans-serif;
    --max-width: 1300px;
    --box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  * {
    ::before,
    ::after {
      margin: 0;
      padding: 0;
    }
  }

  body {
    font-family: var(--font-family);
    line-height: 1.5;
    background: var(--color-light);
    color: var(--color-dark);
    font-size: 1rem;
  }
`
