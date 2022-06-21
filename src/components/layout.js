import React, { useContext } from 'react'
import globalStyles from '../../styles/global-styles'
import { Global, css } from '@emotion/react'
import { Nav, Sidebar } from './index'
import { GatsbyContext } from '../context/context'

const Layout = ({ children }) => {
  const { isSidebarOpen } = useContext(GatsbyContext)

  return (
    <>
      <Global styles={globalStyles} />
      <Nav />
      {isSidebarOpen && <Sidebar />}
      <main>{children}</main>
    </>
  )
}

export default Layout
