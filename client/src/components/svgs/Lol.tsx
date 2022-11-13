import * as React from "react";
import { SVGProps } from "react";
const SvgLol = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 800 800"
    role="img"
    {...props}
  >
    <path
      d="M262.87 250q180 107 150 150-415-51 150 150"
      markerEnd="url(#lol_svg__a)"
      transform="rotate(325 400 400)"
      strokeWidth={10}
      stroke="#eb5d1e"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray="20 20"
    />
    <defs>
      <marker
        markerWidth={5}
        markerHeight={5}
        refX={2.5}
        refY={2.5}
        viewBox="0 0 5 5"
        orient="auto"
        id="lol_svg__a"
      >
        <path fill="#eb5d1e" d="M0 5V0l5 2.5z" />
      </marker>
    </defs>
  </svg>
);
export default SvgLol;
