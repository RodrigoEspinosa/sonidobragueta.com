import React from 'react'
import fetch from 'isomorphic-fetch'

import Cast from '../components/Cast'
import Main from '../components/Main'
import PageTitle from '../components/PageTitle'
import CastGallery from '../components/CastGallery'
import PageSubtitle from '../components/PageSubtitle'

class IndexPage extends React.Component {

  static defaultProps = {
    casts: []
  }

  static async getInitialProps () {
    const res = await fetch(process.env.MIXCLOUD_CLOUDCASTS_URL)
    const { data: casts } = await res.json()
    return { casts }
  }

  render () {
    const { casts } = this.props
    return (
      <Main>
        <PageTitle>Sonido Bragueta</PageTitle>

        <PageSubtitle>
          Gustavo Sala e Ignacio Alcuri tienen mucho para decir. Mentira, pero mientras
          {' '}
          haya libertad de expresión, ellos seguirán abusando de ella con alevosía.
        </PageSubtitle>

        {/* DISPALY THE PODCASTS */}
        <CastGallery>
          {casts.map((castData, index) =>
            <Cast key={index} latest={index === 0} {...castData} />
          )}
        </CastGallery>
      </Main>
    )
  }
}

export default IndexPage
