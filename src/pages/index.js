import * as React from 'react'
import { Layout, Hero, Seo, Projects } from '../components/'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <Hero />
      <Projects />
    </div>
  </Layout>
)

export default IndexPage
