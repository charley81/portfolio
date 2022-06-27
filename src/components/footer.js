import { Link } from 'gatsby'
import React from 'react'
import { navLinks } from '../constants/links'
import { css } from '@emotion/react'

const Footer = () => {
  return (
    <footer
      css={css`
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        ul li a {
          transition: var(--transition);

          &:hover {
            color: var(--color-primary);
          }
        }
      `}
    >
      <ul>
        {navLinks.map(link => {
          const { url, text } = link
          return (
            <li key={link.id}>
              <Link to={url}>{text}</Link>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}

export default Footer
