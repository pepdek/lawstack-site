import { IconCheck } from './icons/IconCheck';
import { IconFlag } from './icons/IconFlag';

const handled = [
  'Scanned 47 open matters — $2,840 in unbilled time flagged',
  'Checked 12 trust accounts — all above threshold',
  'Confirmed payment: Garcia / $1,750 received Day 28',
];

export function MondayBriefMockup() {
  return (
    <div style={{
      maxWidth: '420px', margin: 'var(--space-6) auto 0',
      background: '#FFFFFF', borderRadius: 'var(--radius-lg)',
      overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
    }}>
      <div style={{ background: '#F5F5F5', padding: '12px 16px', borderBottom: '1px solid #E0E0E0' }}>
        <p style={{ fontSize: '11px', color: '#666', fontFamily: 'Inter, sans-serif' }}>
          your-billing-coordinator@lawstack.co
        </p>
        <p style={{ fontSize: '14px', fontWeight: 600, color: '#1A1A1A', marginTop: '4px', fontFamily: 'Inter, sans-serif' }}>
          Your billing summary — week of June 23
        </p>
      </div>
      <div style={{ padding: '20px 16px', fontFamily: 'Inter, sans-serif' }}>
        <p style={{ fontSize: '11px', color: '#888', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
          Week of June 23 · Agency: Supervised
        </p>
        <p style={{ fontSize: '12px', fontWeight: 600, color: '#1A1A1A', marginBottom: '8px' }}>
          NEEDS YOUR APPROVAL
        </p>
        <div style={{ background: '#F9F9F9', borderRadius: '8px', padding: '12px', marginBottom: '8px' }}>
          <p style={{ fontSize: '13px', color: '#1A1A1A' }}>Johnson / Custody dispute — $3,200 overdue 32 days</p>
          <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
            <button style={{ background: 'var(--color-cta)', color: 'var(--color-cta-text)', border: 'none', borderRadius: '6px', padding: '6px 14px', fontSize: '12px', fontWeight: 600, cursor: 'default' }}>Approve</button>
            <button style={{ background: 'transparent', border: '1px solid #DDD', borderRadius: '6px', padding: '6px 14px', fontSize: '12px', color: '#666', cursor: 'default' }}>Edit + Approve</button>
            <button style={{ background: 'transparent', border: '1px solid #DDD', borderRadius: '6px', padding: '6px 14px', fontSize: '12px', color: '#666', cursor: 'default' }}>Skip</button>
          </div>
        </div>
        <p style={{ fontSize: '12px', fontWeight: 600, color: '#1A1A1A', margin: '20px 0 8px' }}>
          HANDLED THIS WEEK
        </p>
        {handled.map(item => (
          <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
            <span style={{ marginTop: '2px', flexShrink: 0 }}><IconCheck color="#14B8A6" /></span>
            <p style={{ fontSize: '13px', color: '#444', lineHeight: 1.5 }}>{item}</p>
          </div>
        ))}
        <p style={{ fontSize: '12px', fontWeight: 600, color: '#1A1A1A', margin: '20px 0 8px' }}>
          ON YOUR RADAR
        </p>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
          <span style={{ marginTop: '2px', flexShrink: 0 }}><IconFlag color="#D97706" /></span>
          <p style={{ fontSize: '13px', color: '#444', lineHeight: 1.5 }}>
            Thompson / Estate planning / $4,100 — 58 days outstanding
          </p>
        </div>
        <div style={{ borderTop: '1px solid #EEE', marginTop: '20px', paddingTop: '12px' }}>
          <p style={{ fontSize: '12px', color: '#888' }}>AR in active sequences: $18,400</p>
          <p style={{ fontSize: '12px', color: '#888' }}>Recovered this month: $6,750</p>
        </div>
      </div>
    </div>
  );
}
