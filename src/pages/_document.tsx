import NextDocument, { Head, Main, NextScript, DocumentContext, Html } from 'next/document';
import React, { useEffect } from 'react';
import { ServerStyleSheet } from 'styled-components';
import { VARIABLES, setCssVariables } from '../utils/functions/setCssVariables';

const gtag = `https://www.googletagmanager.com/gtag/js?id=G-17NDE99V73`;

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
        <head>
          <title>MP Films | Line Production in Madhya Pradesh</title>
          <script
            dangerouslySetInnerHTML={{
              __html: `function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KTH29NK8');`,
            }}
          />
          <meta
            name="description"
            content={
              'MP Films Line Production is a trusted and reliable line production company based in Madhya Pradesh. With years of experience in the film industry, we specialize in providing comprehensive production services to local and international clients. Our dedicated team of professionals is committed to delivering exceptional results, ensuring a seamless production process from start to finish.'
            }
          />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <meta property="og:url" content="https://mpfilms.co.in/" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={'MP Films | Line Production in Madhya Pradesh'} />
          <meta
            property="og:description"
            content={
              'MP Films Line Production is a trusted and reliable line production company based in Madhya Pradesh. With years of experience in the film industry, we specialize in providing comprehensive production services to local and international clients. Our dedicated team of professionals is committed to delivering exceptional results, ensuring a seamless production process from start to finish.'
            }
          />
          <meta property="og:image" content={'../sections/CopyInfo/images/MP FILMS.png'} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={'MP Films | Line Production in Madhya Pradesh'} />
          <meta
            name="twitter:description"
            content={
              'MP Films Line Production is a trusted and reliable line production company based in Madhya Pradesh. With years of experience in the film industry, we specialize in providing comprehensive production services to local and international clients. Our dedicated team of professionals is committed to delivering exceptional results, ensuring a seamless production process from start to finish.'
            }
          />
        </head>
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

        <script async src={gtag} />
        {/* {/ Inject the GA tracking code with the Measurement ID /} */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-17NDE99V73', {
                  page_path: window.location.pathname
                });
              `,
          }}
        />
        <body>
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-KTH29NK8"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
