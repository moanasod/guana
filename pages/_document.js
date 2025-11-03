import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preload Playfair Display font for better performance */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* Character set and viewport meta tags */}
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#F8F7F2" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

