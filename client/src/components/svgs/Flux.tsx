import * as React from "react";
import { SVGProps } from "react";
const SvgFlux = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={700}
    height={700}
    role="img"
    {...props}
  >
    <defs>
      <linearGradient
        gradientTransform="rotate(150 .5 .5)"
        x1="50%"
        y1="0%"
        x2="50%"
        y2="100%"
        id="flux_svg__a"
      >
        <stop stopColor="#22c55e" offset="0%" />
        <stop stopColor="#2563eb" offset="100%" />
      </linearGradient>
      <filter
        id="flux_svg__b"
        x="-20%"
        y="-20%"
        width="140%"
        height="140%"
        filterUnits="objectBoundingBox"
        primitiveUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.005 0.003"
          numOctaves={2}
          seed={2}
          stitchTiles="stitch"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          result="turbulence"
        />
        <feGaussianBlur
          stdDeviation="20 0"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          in="turbulence"
          result="blur"
        />
        <feBlend
          mode="color-dodge"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          in="SourceGraphic"
          in2="blur"
          result="blend"
        />
      </filter>
    </defs>
    <path
      fill="url(#flux_svg__a)"
      filter="url(#flux_svg__b)"
      d="M0 0h700v700H0z"
    />
  </svg>
);
export default SvgFlux;
