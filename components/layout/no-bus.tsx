import { boxShadow, colors, opacity } from '@/lib/theme';

export default function NoBus(props: {
  trip: {
    line: string;
    destination: string;
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
          '0.5rem',
          null,
          opacity(colors.black, 12.5),
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
            color: colors.actions.pink,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1rem',
            fontWeight: 600,
          }}
        >
          Não há nenhum ônibus nessa linha
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
    </section>
  );
}
