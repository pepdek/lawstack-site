export function IconClock({ color = 'var(--color-muted)' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" />
      <path d="M12 7v5l3.5 2" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}
