import * as React from 'react'
import { css } from '@emotion/react'
import { Layout, Seo } from '../components'

const NotFoundPage = () => (
  <Layout>
    <Seo
      title="404: Not found"
      description="You have reached a page that doesn't exist"
    />
    <div
      css={css`
        margin-top: 10vh;
        text-align: center;
      `}
    >
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
