import * as React from 'react'
import { Layout, Hero, Seo, Projects } from '../components/'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div>
      <Seo title="Home Page" description="Chris Harley Front End Developer" />
      <Hero />
      <Projects />
    </div>
  </Layout>
)

export default IndexPage
