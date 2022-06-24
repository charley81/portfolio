import { Link } from 'gatsby'
import React from 'react'
import { navLinks, socialLinks } from '../constants/links'
import { css } from '@emotion/react'

const Footer = () => {
  return (
    <footer
      css={css`
        height: 5rem;
        display: flex;
        align-items: center;
        justify-content: center;

        .social-links {
          height: 5rem;
          display: flex;
          align-items: center;

          li {
            font-size: 1.25rem;
          }
        }
      `}
    >
      <ul className="all-links">
        {navLinks.map(link => {
          return (
            <li key={link.id}>
              <Link to={link.page}>{link.text}</Link>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}

export default Footer
