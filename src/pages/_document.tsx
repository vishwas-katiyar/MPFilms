import NextDocument, { Head, Main, NextScript, DocumentContext, Html } from 'next/document';
import React, { useEffect } from 'react';
import { ServerStyleSheet } from 'styled-components';
import { VARIABLES, setCssVariables } from '../utils/functions/setCssVariables';
import TagManager from 'react-gtm-module';
// import GoogleTagManager from 'react-gtm-module';
// import { VARIABLES, setCssVariables } from 'utils/functions/setCssVariables';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    // TagManager.initialize(tagManagerArgs);
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await NextDocument.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href={'/fonts/teko700.woff2'}
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            as="font"
            type="font/woff"
            href={'/fonts/openSans400.woff'}
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            as="font"
            type="font/woff2"
            href={'/fonts/openSans800.woff2'}
            crossOrigin="anonymous"
          />

          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="theme-color" content="#000000"></meta>
          <script src="https://cdn.tailwindcss.com"></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `(${setCssVariables.toString()})({variables:${JSON.stringify(VARIABLES)}})`,
            }}
          />
        </Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-17NDE99V73"></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-17NDE99V73');`}
        </script>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
