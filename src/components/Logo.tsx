export function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 140 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="LawStack"
      role="img"
      style={{ height: '24px', width: 'auto' }}
    >
      <text
        x="0" y="24"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="28"
        fill="#FFFFFF"
      >L</text>
      <rect x="0" y="28" width="18" height="2.5" fill="#A3E635" rx="1" />
      <text
        x="26" y="23"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="14"
        fill="#FFFFFF"
        letterSpacing="1.2"
      >LAWSTACK</text>
    </svg>
  );
}
