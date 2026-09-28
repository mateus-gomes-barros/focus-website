export const focusRingPath =
  "M31.8 5.8C42.7 4.4 53.8 10.4 58.1 20.3C62.9 31.2 59.1 45.7 50 54.1C41.7 61.7 27.6 61.4 17.1 55.8C7.4 50.6 3.2 39.2 5.7 27.8C8.2 16.4 19.5 7.4 31.8 5.8Z";

export function FocusMark() {
  return (
    <svg
      className="focus-mark-svg"
      viewBox="0 0 64 64"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="focus-mark-metal" x1="10" y1="8" x2="55" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f1f3f2" />
          <stop offset=".45" stopColor="#8f9893" />
          <stop offset="1" stopColor="#444b47" />
        </linearGradient>
      </defs>
      <path
        d={focusRingPath}
        fill="rgba(255,255,255,.025)"
        stroke="url(#focus-mark-metal)"
        strokeWidth="4.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="32" r="4.2" fill="#aab0ad" opacity=".78" />
    </svg>
  );
}
