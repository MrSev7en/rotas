import { boxShadow, colors, opacity } from '@/lib/theme';
import { Icon } from '@/components/core/icon';
import { Formatter } from '@/lib/parser';

export default function StartingRoute(props: {
  trip: {
    line: string;
    destination: string;
  };
  bus: {
    currentLocation: string;
    remainingTime: number;
  };
}): JSX.Element {
  return (
    <section
      css={{
        background: colors.light,
        width: '100%',
        height: 'fit-content',
        padding: '1rem',
        flexDirection: 'column',
        gap: '1rem',
        borderRadius: '1rem',
        boxShadow: boxShadow(
          '0.125rem',
          '0.125rem',
          '0.25rem',
          null,
          opacity(colors.black, 25),
        ),
      }}
    >
      <div
        css={{
          width: '100%',
          height: 'fit-content',
          flexDirection: 'column',
          gap: '0.25rem',
        }}
      >
        <span
          css={{
            color: colors.actions.green,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1rem',
            fontWeight: 600,
          }}
        >
          Acabou de iniciar o percurso
        </span>
        <span
          css={{
            color: colors.black,
            fontSize: '1.5rem',
            fontWeight: 800,
          }}
        >
          Linha&nbsp;{props.trip.line}&nbsp;
          <span
            css={{
              color: colors.secondary,
              fontSize: '1rem',
              fontWeight: 600,
            }}
          >
            para&nbsp;{props.trip.destination}
          </span>
        </span>
      </div>
      <div
        css={{
          width: '100%',
          height: 'fit-content',
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <div
          css={{
            width: '100%',
            height: 'fit-content',
            flexDirection: 'column',
            gap: '0.25rem',
          }}
        >
          <span
            css={{
              color: colors.secondary,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              fontSize: '0.875rem',
              fontWeight: 400,
            }}
          >
            <Icon name='Location' stroke={colors.secondary} size='1rem' />
            &nbsp;Localização
          </span>
          <span
            css={{
              color: colors.black,
              fontSize: '1rem',
              fontWeight: 600,
            }}
          >
            {props.bus.currentLocation}
          </span>
        </div>
        <div
          css={{
            width: '100%',
            height: 'fit-content',
            flexDirection: 'column',
            gap: '0.25rem',
          }}
        >
          <span
            css={{
              color: colors.secondary,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              fontSize: '0.875rem',
              fontWeight: 400,
            }}
          >
            <Icon name='Timer' stroke={colors.secondary} size='1rem' />
            &nbsp;Chegará até você em
          </span>
          <span
            css={{
              color: colors.black,
              fontSize: '1rem',
              fontWeight: 600,
            }}
          >
            {Formatter('datetime', props.bus.remainingTime)}
          </span>
        </div>
      </div>
    </section>
  );
}
