import type { AppProps } from 'next/app';
import { font } from '@/lib/theme';
import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div
      css={{
        display: 'contents',
      }}
      className={font.className}
    >
      <Component {...pageProps} />
    </div>
  );
}
