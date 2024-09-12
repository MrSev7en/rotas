import type { GetServerSideProps } from 'next';
import { colors, gradient, opacity } from '@/lib/theme';
import Button from '@/components/core/button';
import NoBus from '@/components/layout/no-bus';
import StillWaiting from '@/components/layout/still-waiting';
import StartingRoute from '@/components/layout/starting-route';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { direction } = context.query;

  if (direction !== 'forward' && direction !== 'backward') {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
};

export default function Page(): JSX.Element {
  return (
    <>
      <iframe
        css={{
          width: '100vw',
          height: '100vh',
        }}
        src='https://bustime.noxxonsat.com.br/emtu/v4/emtu.html?linha=283'
      />
      <footer
        css={{
          width: 'calc(100vw - 2rem)',
          height: 'fit-content',
          margin: '1rem',
          position: 'fixed',
          left: 0,
          bottom: 0,
          flexDirection: 'column',
          gap: '1rem',
          borderTopLeftRadius: '1rem',
          borderTopRightRadius: '1rem',
          borderBottomLeftRadius: '0.5rem',
          borderBottomRightRadius: '0.5rem',
          zIndex: 1,
          '::before': {
            content: '""',
            background: gradient(
              'to top',
              opacity(colors.primary, 50),
              colors.transparent,
            ),
            width: '100vw',
            height: '50vh',
            position: 'fixed',
            left: 0,
            bottom: 0,
            zIndex: -1,
            pointerEvents: 'none',
          },
        }}
      >
        <StartingRoute
          trip={{
            line: '557',
            destination: 'Vila Aliança',
          }}
          bus={{
            currentLocation: 'Av. Autonomistas',
            remainingTime: 300,
          }}
        />
        {/* <NoBus
          trip={{
            line: '557',
            destination: 'Vila Aliança',
          }}
        /> */}
        {/* <StillWaiting
          trip={{
            line: '557',
            destination: 'Vila Aliança',
            totalTime: 500,
            taxPrice: 574,
          }}
          bus={{
            currentLocation: 'Av. Autonomistas',
            vehiclePlate: 'ZIP5732',
            remainingTime: 300,
          }}
        /> */}
        <Button>Voltar ao menu</Button>
      </footer>
    </>
  );
}
