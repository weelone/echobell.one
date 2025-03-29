import { SVGProps } from "react";

export const Logo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} viewBox="0 0 230 203" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M229.48 5.18968C223.488 63.2832 174.393 108.591 114.716 108.591C55.1928 108.591 6.19691 63.5159 0 5.63764C37.2122 1.96514 76.4782 0 117.059 0C155.958 0 193.648 1.80557 229.48 5.18968Z" fill="currentColor" fill-opacity="0.9" />
      <rect x="105.472" y="146.057" width="18.9653" height="56.8958" rx="9.48264" fill="currentColor" fill-opacity="0.9" />
      <rect x="178.837" y="132.768" width="18.9653" height="56.8958" rx="9.48264" transform="rotate(-33.2639 178.837 132.768)" fill="currentColor" fill-opacity="0.9" />
      <rect width="18.9653" height="56.8958" rx="9.48264" transform="matrix(-0.836153 -0.548497 -0.548497 0.836153 50.1242 132.768)" fill="currentColor" fill-opacity="0.9" />
    </svg>
  );
};