import { Html, Head, Main, NextScript } from 'next/document';
import { colors } from '@/lib/theme';

export default function Document(): JSX.Element {
  return (
    <Html>
      <Head>
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-starturl' content='/' />
        <meta name='msapplication-navbutton-color' content='#ffffff' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta
          name='apple-mobile-web-app-status-bar-style'
          content='white-translucent'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
        />
        <link rel='manifest' href='manifest.json' />
      </Head>
      <body
        css={{
          backgroundColor: colors.white,
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
