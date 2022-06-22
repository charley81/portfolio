import React from 'react'
import { CgClose } from 'react-icons/cg'
import links from '../constants/links'
import { css } from '@emotion/react'

const Sidebar = ({ openNav, toggleSidebar }) => {
  return (
    <aside className={openNav ? 'sideabr show-sidebar' : 'sidebar'}>
      {/* clsoe menu */}
      <button aria-label="close menu button">
        <CgClose type="button" className="close-btn" onClick={toggleSidebar} />
      </button>

      {/* side container */}
      <ul className={openNav ? 'sidebar-links' : null}>
        {links.map(link => {
          return (
            <li key={link.id}>
              <a href={link.url}>{link.text}</a>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
