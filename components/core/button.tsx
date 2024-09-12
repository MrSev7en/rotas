import type { HTMLProps } from 'react';
import type { Interpolation, Theme } from '@emotion/react';
import { colors } from '@/lib/theme';

export default function Button(
  props: HTMLProps<HTMLButtonElement> & { css?: Interpolation<Theme> },
): JSX.Element {
  const css: any = props.css;

  return (
    <button
      css={{
        background: css?.background || colors.primary,
        color: css?.color || colors.white,
        width: '100%',
        height: 'fit-content',
        padding: '0.75rem 1rem',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        fontSize: '1rem',
        fontWeight: 500,
        border: 'none',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        outline: 'none',
        transition: 'filter 0.2s ease',
        ':active': {
          filter: 'brightness(75%)',
        },
        ...css,
      }}
      {...(props as any)}
    />
  );
}
