import type { SVGProps } from "react";

export const focusOrbitPaths = {
  primary:
    "M13 10.5C5.5 17.4 2.8 27.8 4.9 38.2C7.5 51.2 18.6 59.2 31.4 60.5C44.9 61.9 56.9 54.1 60.2 41.5C61.1 38.1 61.4 34.8 61 31.6",
  secondary:
    "M9 35C7.5 22 15 11 26 7C39 3 52 8 58 20C64 32 60 47 50 55",
};

export function FocusMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        d={focusOrbitPaths.primary}
        stroke="currentColor"
        strokeWidth="3.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity=".84"
      />
      <path
        d={focusOrbitPaths.secondary}
        stroke="currentColor"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity=".4"
      />
    </svg>
  );
}

export function FocusOrbitFrame() {
  return (
    <svg
      className="focus-orbit-frame"
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={focusOrbitPaths.primary}
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity=".72"
      />
      <path
        d={focusOrbitPaths.secondary}
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity=".34"
      />
    </svg>
  );
}
