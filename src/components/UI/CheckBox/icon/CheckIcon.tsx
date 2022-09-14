import { SVGProps } from 'react';

const CheckIcon = (
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) => (
  <svg width={15} height={12} xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='m1 6.57 3.572 3.572L13.714 1'
      stroke='#FFF'
      strokeWidth={2}
      fill='none'
    />
  </svg>
);

export default CheckIcon;
