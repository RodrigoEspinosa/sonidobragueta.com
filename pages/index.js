import React from 'react'
import Head from 'next/head'
import fetch from 'isomorphic-fetch'

import Cast from '../components/Cast'
import Footer from '../components/Footer'
import PageTitle from '../components/PageTitle'
import CastGallery from '../components/CastGallery'
import PageSubtitle from '../components/PageSubtitle'

const MIXCLOUD_BASE_URL = 'https://api.mixcloud.com'
const MIXCLOUD_USERNAME = 'sonidobragueta'
const MIXCLOUD_CLOUDCASTS_URL = `${MIXCLOUD_BASE_URL}/${MIXCLOUD_USERNAME}/cloudcasts`

const IndexPageHead = () => (
  <Head>
    <meta charset='utf-8' />
    <title>Sonido Bragueta</title>
    <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    <link href='https://fonts.googleapis.com/css?family=Barrio|Roboto&amp;subset=latin-ext' rel='stylesheet' />
  </Head>
)

class IndexPage extends React.Component {

  static defaultProps = {
    casts: []
  }

  static async getInitialProps () {
    const res = await fetch(MIXCLOUD_CLOUDCASTS_URL)
    const { data: casts } = await res.json()
    // console.log(casts[0])
    return { casts }
  }

  render () {
    const { casts } = this.props
    return (
      <main>
        <style jsx>{`
          body {
            background: #ffffa6;
          }

          main {
            margin: 0 auto;
            padding: 10px;
          }
        `}</style>

        <IndexPageHead />
        <PageTitle>Sonido Bragueta</PageTitle>

        <PageSubtitle>
          Gustavo Sala e Ignacio Alcuri tienen mucho para decir. Mentira, pero mientras
          {' '}
          haya libertad de expresión, ellos seguirán abusando de ella con alevosía.
        </PageSubtitle>

        {/* DISPALY THE PODCASTS */}
        <CastGallery>
          {casts.map((castData, index) =>
            <Cast key={index} {...castData} />
          )}
        </CastGallery>

        <Footer />
      </main>
    )
  }
}

export default IndexPage
