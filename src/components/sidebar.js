import React from 'react'
import { CgClose } from 'react-icons/cg'
import { navLinks, socialLinks } from '../constants/links'
import { css } from '@emotion/react'
import { Link } from 'gatsby'

const Sidebar = ({ openNav, toggleSidebar }) => {
  return (
    <aside
      className={openNav ? 'sidebar show-sidebar' : 'sidebar'}
      css={css`
        .sidebar-links {
          display: flex;
          flex-direction: column;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-top: 1rem;

          .social-link {
            font-size: 1.5rem;
          }
        }

        button {
          position: absolute;
          top: 1rem;
          right: 1rem;
          cursor: pointer;
          color: var(--color-dark);
          font-size: 2rem;
          background: transparent;
          border: transparent;
          transition: var(--transition);

          &:hover {
            transform: var(--scale) var(--rotate);
            color: var(--color-primary);
          }
        }
      `}
    >
      {/* close menu */}
      <button aria-label="close menu button">
        <CgClose type="button" className="close-btn" onClick={toggleSidebar} />
      </button>

      {/* side container */}
      <ul className={openNav ? 'sidebar-links' : null}>
        {navLinks.map(link => {
          const { id, url, text } = link
          return (
            <Link key={id} to={url} className="nav-link">
              {text}
            </Link>
          )
        })}
        <ul className="social-links">
          {socialLinks.map(link => {
            const { id, url } = link
            return (
              <a key={id} href={url} className="social-link">
                {link.icon}
              </a>
            )
          })}
        </ul>
      </ul>
    </aside>
  )
}

export default Sidebar
