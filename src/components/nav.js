import React from 'react'
import links from '../constants/links'
import { css } from '@emotion/react'
import { CgMenuGridO } from 'react-icons/cg'
import { AnchorLink } from 'gatsby-plugin-anchor-links'

const Nav = ({ toggleSidebar }) => {
  return (
    <nav
      css={css`
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 5rem;
        display: flex;
        align-items: center;
        z-index: 1;

        .nav-center {
          width: 90vw;
          max-width: var(--max-width);
          margin: 0 auto;
        }

        .nav-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .small-text {
          border: 2px solid var(--color-dark);
          border-radius: 50%;
          padding: 0.25rem;
          transition: var(--transition);
          cursor: pointer;

          &:hover {
            color: var(--color-primary);
            border-color: var(--color-primary);
          }
        }

        button {
          background: transparent;
          border: transparent;
        }

        .toggle-btn {
          height: 24px;
          width: 24px;
          transition: var(--transition);
          cursor: pointer;

          &:hover {
            color: var(--color-primary);
          }
        }

        .section-links {
          display: none;
        }
      `}
    >
      <div className="nav-center">
        {/* header */}
        <div className="nav-header">
          <p className="small-text">CH</p>
          <button aria-label="toggle">
            <CgMenuGridO
              type="button"
              className="toggle-btn"
              onClick={toggleSidebar}
            />
          </button>
        </div>
        {/* links */}
        <ul className="section-links">
          {links.map(link => {
            return (
              <AnchorLink key={link.id} to={`/${link.section}`}>
                {link.text}
              </AnchorLink>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
