import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import XTeamLogo from "../svg/x-team-logo.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ textAlign: `center`, width: `100%`}}>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    </div>
    <div style={{ width: `100%`, margin: `0`, textAlign: `center` }}>
      <div style={{ width: `100%`}}>
      <XTeamLogo/>
      </div>
      <div style={{
        display: `grid`,
        gridTemplateColumns: `repeat(3, 1fr)`,
        gridTemplateRowas: `1fr`
      }}>
        <div style={{
          gridArea: `1 / 1 / 2 / 2`
        }}/>
      <Image style={{
        gridArea: ` 1 / 2 / 2 / 3`,
        margin: `0`,
        maxWidth: `100% !important`
      }}/>
      <div style={{
        gridArea: `1 / 3 / 2 / 4`
      }}/>
      </div>
    </div>
    <div style={{
      textAlign: `center`
    }}>
    <Link  to="/page-2/">Go to page 2</Link>
    </div>
  </Layout>
)


export default IndexPage
