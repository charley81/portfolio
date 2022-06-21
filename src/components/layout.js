import React from 'react'
import globalStyles from '../../styles/global-styles'
import { Global, css } from '@emotion/react'
import { Nav, Sidebar } from './index'

const Layout = ({ children }) => {
  return (
    <>
      <Global styles={globalStyles} />
      <main>{children}</main>
    </>
  )
}

export default Layout
