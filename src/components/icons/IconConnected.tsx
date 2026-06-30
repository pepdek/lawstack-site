export function IconConnected({ color = 'var(--color-accent)' }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="9" height="9" rx="2" stroke={color} strokeWidth="1.5" />
      <rect x="12" y="9" width="9" height="9" rx="2" stroke={color} strokeWidth="1.5" opacity="0.6" />
    </svg>
  );
}
