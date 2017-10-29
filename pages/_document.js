import { ServerStyleSheet, injectGlobal } from 'styled-components'
import Document, { Head, Main, NextScript } from 'next/document'

import Footer from '../components/Footer'

injectGlobal`
  body {
    background: #f7ea34;
    padding: 0;
    margin: 0;

    ::selection {
      background: #ce137a;
      color: white;
    }
  }
`

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <title>Sonido Bragueta</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Barrio|Roboto&amp;subset=latin-ext"
            rel="stylesheet"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <Footer />
          <NextScript />
        </body>
      </html>
    )
  }
}
