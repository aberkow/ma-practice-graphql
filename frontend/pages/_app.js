import React from 'react';
import App, { Container } from 'next/app';

/**
 * A custom App component that will initialize all pages.
 * Enables:
 * - Persistent layout between pages
 * - Keeping state between page navigation
 * - Custom error handling
 * - Injecting additional data into pages
 * see the docs https://nextjs.org/docs#custom-app
 */

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps }
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp;