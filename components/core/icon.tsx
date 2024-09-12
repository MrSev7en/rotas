import type { SVGAttributes } from 'react';
import type { Interpolation, Theme } from '@emotion/react';
import { colors } from '@/lib/theme';

type List = Exclude<keyof typeof Icons, 'prototype'>;

interface Props extends SVGAttributes<SVGElement> {
  css?: Interpolation<Theme>;
  size?: `${string}rem`;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
}

const Template = (props: Props): JSX.Element => {
  return (
    <svg
      {...props}
      width={props.size || '2rem'}
      height={props.size || '2rem'}
      fill={props.fill ? props.fill : colors.none}
      stroke={props.stroke ? props.stroke : colors.none}
      viewBox='0 0 32 32'
      clipRule='evenodd'
      fillRule='evenodd'
      strokeWidth={props.strokeWidth || 2}
      strokeLinecap='round'
      strokeLinejoin='round'
      children={props.children}
    />
  );
};

export function Icon(props: Props & { name: List }): JSX.Element {
  return Icons[props.name](props);
}

export default class Icons {
  public static Camera = (props: Props): JSX.Element => (
    <Template {...props}>
      <path d='M18.25 9H13.75L11.5 11.7H8.8C8.32261 11.7 7.86477 11.8896 7.52721 12.2272C7.18964 12.5648 7 13.0226 7 13.5V21.6C7 22.0774 7.18964 22.5352 7.52721 22.8728C7.86477 23.2104 8.32261 23.4 8.8 23.4H23.2C23.6774 23.4 24.1352 23.2104 24.4728 22.8728C24.8104 22.5352 25 22.0774 25 21.6V13.5C25 13.0226 24.8104 12.5648 24.4728 12.2272C24.1352 11.8896 23.6774 11.7 23.2 11.7H20.5L18.25 9Z' />
      <path d='M16 19.8C17.4912 19.8 18.7 18.5912 18.7 17.1C18.7 15.6088 17.4912 14.4 16 14.4C14.5088 14.4 13.3 15.6088 13.3 17.1C13.3 18.5912 14.5088 19.8 16 19.8Z' />
    </Template>
  );

  public static Circle = (props: Props): JSX.Element => (
    <Template {...props}>
      <rect
        width='31'
        height='31'
        rx='16'
        x='0.390503'
        y='0.846252'
        fill='current'
      />
    </Template>
  );

  public static Document = (props: Props): JSX.Element => (
    <Template {...props}>
      <path d='M18.6667 2.66669V8.00002C18.6667 8.70726 18.9477 9.38554 19.4478 9.88564C19.9479 10.3857 20.6261 10.6667 21.3334 10.6667H26.6667M13.3334 12H10.6667M21.3334 17.3334H10.6667M21.3334 22.6667H10.6667M20 2.66669H8.00004C7.2928 2.66669 6.61452 2.94764 6.11442 3.44774C5.61433 3.94783 5.33337 4.62611 5.33337 5.33335V26.6667C5.33337 27.3739 5.61433 28.0522 6.11442 28.5523C6.61452 29.0524 7.2928 29.3334 8.00004 29.3334H24C24.7073 29.3334 25.3856 29.0524 25.8857 28.5523C26.3858 28.0522 26.6667 27.3739 26.6667 26.6667V9.33335L20 2.66669Z' />
    </Template>
  );

  public static Fading = (props: Props): JSX.Element => (
    <Template {...props}>
      <path d='M15.9992 7C17.7451 6.99968 19.4535 7.50727 20.916 8.46089C22.3786 9.41451 23.5321 10.773 24.2361 12.3707C24.9401 13.9685 25.164 15.7365 24.8807 17.4594C24.5974 19.1822 23.8191 20.7854 22.6406 22.0736M19.5988 15.9992L15.9992 12.3995M15.9992 12.3995L12.3995 15.9992M15.9992 12.3995V19.5988M7.44996 13.1869C7.1632 14.0586 7.01146 14.9691 7 15.8867M7.74693 19.5988C8.25224 20.7614 8.99744 21.8041 9.93373 22.6586M9.37218 9.91123C9.6233 9.63787 9.89108 9.3803 10.174 9.14M12.9791 24.4764C15.2232 25.2759 17.6927 25.1529 19.8463 24.1344' />
    </Template>
  );

  public static Home = (props: Props): JSX.Element => (
    <Template {...props}>
      <path d='M25 24.0526V15.5261C25.0001 15.2504 24.9367 14.9781 24.8142 14.7281C24.6918 14.4781 24.5132 14.2564 24.291 14.0784L17.291 8.39502C16.93 8.10598 16.4726 7.94739 16 7.94739C15.5274 7.94739 15.07 8.10598 14.709 8.39502L7.709 14.0784C7.4868 14.2564 7.30824 14.4781 7.18579 14.7281C7.06333 14.9781 6.99993 15.2504 7 15.5261V24.0526' />
    </Template>
  );

  public static Lens = (props: Props): JSX.Element => (
    <Template {...props}>
      <path d='M18.079 12.4L23.245 21.346M13.921 12.4H24.253M11.842 16L17.008 7.054M13.921 19.6L8.755 10.654M18.079 19.6H7.747M20.158 16L14.992 24.946M25 16C25 20.9706 20.9706 25 16 25C11.0294 25 7 20.9706 7 16C7 11.0294 11.0294 7 16 7C20.9706 7 25 11.0294 25 16Z' />
    </Template>
  );

  public static Location = (props: Props): JSX.Element => (
    <Template {...props}>
      <path d='M26.6667 13.3334C26.6667 19.9907 19.2814 26.924 16.8014 29.0654C16.5703 29.2391 16.2891 29.333 16 29.333C15.711 29.333 15.4297 29.2391 15.1987 29.0654C12.7187 26.924 5.33337 19.9907 5.33337 13.3334C5.33337 10.5044 6.45718 7.79127 8.45757 5.79088C10.458 3.79049 13.1711 2.66669 16 2.66669C18.829 2.66669 21.5421 3.79049 23.5425 5.79088C25.5429 7.79127 26.6667 10.5044 26.6667 13.3334Z' />
      <path d='M16 17.3334C18.2092 17.3334 20 15.5425 20 13.3334C20 11.1242 18.2092 9.33335 16 9.33335C13.7909 9.33335 12 11.1242 12 13.3334C12 15.5425 13.7909 17.3334 16 17.3334Z' />
    </Template>
  );

  public static Money = (props: Props): JSX.Element => (
    <Template {...props}>
      <path d='M7.99996 16H8.01329M24 16H24.0133M5.33329 8H26.6666C28.1394 8 29.3333 9.19391 29.3333 10.6667V21.3333C29.3333 22.8061 28.1394 24 26.6666 24H5.33329C3.86053 24 2.66663 22.8061 2.66663 21.3333V10.6667C2.66663 9.19391 3.86053 8 5.33329 8ZM18.6666 16C18.6666 17.4728 17.4727 18.6667 16 18.6667C14.5272 18.6667 13.3333 17.4728 13.3333 16C13.3333 14.5272 14.5272 13.3333 16 13.3333C17.4727 13.3333 18.6666 14.5272 18.6666 16Z' />
    </Template>
  );

  public static Search = (props: Props): JSX.Element => (
    <Template {...props}>
      <path d='M25 25L20.7 20.7M23 15C23 19.4183 19.4183 23 15 23C10.5817 23 7 19.4183 7 15C7 10.5817 10.5817 7 15 7C19.4183 7 23 10.5817 23 15Z' />
    </Template>
  );

  public static Song = (props: Props): JSX.Element => (
    <Template {...props}>
      <path d='M16.5 22C16.5 24.2091 14.7091 26 12.5 26C10.2909 26 8.5 24.2091 8.5 22C8.5 19.7909 10.2909 18 12.5 18C14.7091 18 16.5 19.7909 16.5 22ZM16.5 22V6L23.5 10' />
    </Template>
  );

  public static Timer = (props: Props): JSX.Element => (
    <Template {...props}>
      <path d='M13.3334 3.51294H18.6667M16 19.5129L20 15.5129M26.6667 19.5129C26.6667 25.404 21.8911 30.1796 16 30.1796C10.109 30.1796 5.33337 25.404 5.33337 19.5129C5.33337 13.6219 10.109 8.84627 16 8.84627C21.8911 8.84627 26.6667 13.6219 26.6667 19.5129Z' />
    </Template>
  );

  public static User = (props: Props): JSX.Element => (
    <Template {...props}>
      <path d='M16 17C18.7614 17 21 14.7614 21 12C21 9.23858 18.7614 7 16 7C13.2386 7 11 9.23858 11 12C11 14.7614 13.2386 17 16 17ZM16 17C18.1217 17 20.1566 17.8429 21.6569 19.3431C23.1571 20.8434 24 22.8783 24 25M16 17C13.8783 17 11.8434 17.8429 10.3431 19.3431C8.84285 20.8434 8 22.8783 8 25' />
    </Template>
  );

  public static Wave = (props: Props): JSX.Element => (
    <Template {...props}>
      <path d='M7 14.3V17M10.6 10.7V20.6M14.2 8V24.2M17.8 12.5V18.8M21.4 9.8V21.5M25 14.3V17' />
    </Template>
  );
}
