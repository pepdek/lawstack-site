import { useEffect } from 'react';

export default function Taita() {
  useEffect(() => {
    window.location.href = 'https://iq.lawstack.co';
  }, []);

  return (
    <main id="main-content" style={{ padding: '96px 24px', textAlign: 'center', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ color: 'var(--color-muted)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)' }}>
        Redirecting to Taita...
      </p>
    </main>
  );
}
