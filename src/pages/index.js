import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import XTeamLogo from "../svg/x-team-logo.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ textAlign: `center`}}>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    </div>
    <div style={{ width: `100%`, marginBottom: `1.45rem` }}>
      <div style={{ width: `100%`}}>
      <XTeamLogo/>
      </div>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>

  </Layout>
)




export default IndexPage
