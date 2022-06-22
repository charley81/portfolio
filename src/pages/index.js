import * as React from 'react'
import { Layout, Hero } from '../components/'
import { Seo } from '../components'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <Hero />
    </div>
  </Layout>
)

export default IndexPage
