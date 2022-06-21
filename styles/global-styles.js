import { css } from '@emotion/react'
import '@fontsource/roboto' //defaults to 400
import '@fontsource/roboto/100.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '@fontsource/roboto/900.css'

const globalStyles = css`
  /* CSS Variables */
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

  /* Base Styles */
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
    font-size: 1rem;
    font-weight: 500;
  }

  ul,
  li {
    list-style: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--color-dark);
    font-weight: 900;
    line-height: 1.25;
    letter-spacing: -2px;
  }

  h1 {
    font-size: 64px;
  }

  h2 {
    font-size: 40px;
  }

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
    display: block;
  }

  .small-text {
    font-size: 14px;
    font-weight: 500;
  }

  @media screen and (min-width: 744px) {
    h1 {
      font-size: 104px;
      line-height: 122px;
    }

    h2 {
      font-size: 64px;
    }
  }

  /* Global Classes */

  /* Media Quries */
  @media screen and (min-width: 1200px) {
    h1 {
      font-size: 176px;
      line-height: 176px;
    }

    h2 {
      font-size: 104px;
    }
  }
`

export default globalStyles
