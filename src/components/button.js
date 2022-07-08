import React from 'react'
import { css } from '@emotion/react'

const Button = ({ text }) => {
  return (
    <button
      css={css`
        background: var(--color-dark);
        color: var(--color-light);
        display: block;
        padding: 1rem 2rem;
        width: 100%;
        border: 1px solid transparent;
        border-radius: var(--border-radius);
        transition: var(--transition);
        font-style: inherit;
        font-size: 1rem;

        &:hover {
          background: transparent;
          border: 1px solid var(--color-dark);
          color: var(--color-dark);
        }
      `}
    >
      {text}
    </button>
  )
}

export default Button
