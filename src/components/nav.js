import React from 'react'
import { navLinks, socialLinks } from '../constants/links'
import { css } from '@emotion/react'
import { CgMenuGridO } from 'react-icons/cg'
import { Link } from 'gatsby'

const Nav = ({ toggleSidebar }) => {
  return (
    <nav
      css={css`
        width: 100%;
        display: flex;
        align-items: center;
        padding: 2rem 0;
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

          a {
            position: relative;

            &::after {
              position: absolute;
              content: '';
              width: 100%;
              height: 3px;
              top: 100%;
              left: 0;
              background: var(--color-primary);
              transition: transform 0.5s;
              transform: scaleX(0);
              transform-origin: right;
            }

            &:hover::after {
              transform: scaleX(1);
              transform-origin: left;
            }
          }
        }

        .social-links {
          display: none;
        }

        @media screen and (min-width: 1000px) {
          button {
            display: none;
          }

          .section-links {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .social-links {
            display: flex;
            align-items: center;
            justify-content: center;

            a {
              display: flex;
              align-items: center;
            }
          }

          .nav-center {
            display: grid;
            grid-template-columns: auto 1fr auto;
            align-items: center;
          }

          .social-link {
            font-size: 1.5rem;
            transition: var(--transition);

            &:nth-of-type(2) {
              margin-left: 1rem;
            }

            &:hover {
              color: var(--color-primary);
            }
          }
        }
      `}
    >
      <div className="nav-center">
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
        <ul className="section-links">
          {navLinks.map(link => {
            return (
              <Link key={link.id} to={`/${link.section}`}>
                {link.text}
              </Link>
            )
          })}
        </ul>
        <ul className="social-links">
          {socialLinks.map(link => {
            return (
              <a
                href={link.url}
                key={link.id}
                className="social-link"
                target="_blank"
              >
                {link.icon}
              </a>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
