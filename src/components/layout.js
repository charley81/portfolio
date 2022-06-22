import React, { useState } from 'react'
import globalStyles from '../../styles/global-styles'
import { Global, css } from '@emotion/react'
import { Nav, Sidebar } from './index'

const Layout = ({ children }) => {
  const [openNav, setOpenNav] = useState(false)

  const toggleSidebar = () => setOpenNav(!openNav)

  return (
    <>
      <Global styles={globalStyles} />
      <Nav toggleSidebar={toggleSidebar} />
      {/* <Sidebar openNav={openNav} toggleSidebar={toggleSidebar} /> */}
      <main>{children}</main>
    </>
  )
}

export default Layout
