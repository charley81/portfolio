import * as React from 'react'
import Layout from '../components/layout'
import { Seo } from '../components'
import { css } from '@emotion/react'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div
      css={css`
        height: 100vh;
        margin-top: 16rem;
      `}
    >
      <h1>Home</h1>
    </div>
  </Layout>
)

export default IndexPage
