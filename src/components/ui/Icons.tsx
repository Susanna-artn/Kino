import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 20): SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  xmlns: 'http://www.w3.org/2000/svg',
  'aria-hidden': true,
});

export function TelegramIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path
        d="M21.7 3.2 2.9 10.5c-1.2.5-1.2 1.2-.2 1.5l4.6 1.4 10.7-6.7c.5-.3 1-.2.6.2l-8.7 7.9-.3 4.8c.5 0 .7-.2 1-.5l2.4-2.3 4.8 3.5c.9.5 1.5.2 1.7-.8l3.2-14.7c.3-1.3-.5-1.8-1-1.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function MailIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path
        d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm0 2v.4l8 5 8-5V7H4Zm16 2.6-7.5 4.7a1 1 0 0 1-1 0L4 9.6V17h16V9.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GithubIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.6.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.2.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1 .8-.2 1.7-.3 2.5-.3.8 0 1.7.1 2.5.3 1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5C19.1 20.5 22 16.7 22 12.2 22 6.6 17.5 2 12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function VkIcon({ size = 20, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path
        d="M13.2 17.6c-5.7 0-9-3.9-9.1-10.4h2.9c.1 4.8 2.2 6.8 3.9 7.2V7.2h2.7v4.2c1.7-.2 3.4-2.1 4-4.2h2.7c-.5 2.7-2.4 4.5-3.7 5.3 1.3.6 3.5 2.2 4.4 5.1h-3c-.7-2.2-2.3-3.9-4.4-4.1v4.1h-.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ClockIcon({ size = 14, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path
        d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 2a7 7 0 1 1 0 14 7 7 0 0 1 0-14Zm-.5 3a1 1 0 0 1 1 1v3l2.2 1.3a1 1 0 0 1-1 1.7l-2.7-1.6a1 1 0 0 1-.5-.9V9a1 1 0 0 1 1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function ArrowUpRight({ size = 14, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path
        d="M7 7h10v10h-2V10.4L7.7 17.7l-1.4-1.4L13.6 9H7V7Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function CheckIcon({ size = 16, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path
        d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function MenuIcon({ size = 22, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path d="M4 7h16v2H4V7Zm0 4h16v2H4v-2Zm0 4h16v2H4v-2Z" fill="currentColor" />
    </svg>
  );
}

export function CloseIcon({ size = 22, ...rest }: IconProps) {
  return (
    <svg {...base(size)} {...rest}>
      <path
        d="m6.4 5-1.4 1.4L10.6 12l-5.6 5.6L6.4 19 12 13.4 17.6 19 19 17.6 13.4 12 19 6.4 17.6 5 12 10.6 6.4 5Z"
        fill="currentColor"
      />
    </svg>
  );
}
