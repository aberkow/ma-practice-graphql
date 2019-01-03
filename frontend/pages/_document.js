import Document, { Head, Main, NextScript } from 'next/document'

/**
 * _document is only rendered on the server side and not on the client side
 * Event handlers like onClick can't be added to this file
 * Very useful for server side rendering of styles and meta tags
 */


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument