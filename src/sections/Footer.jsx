import React from 'react'

export default function Footer() {
  return (
    <footer style={{
      position: 'relative', zIndex: 1,
      background: 'var(--steel-700)',
      color: 'rgba(255,255,255,0.6)',
      textAlign: 'center',
      padding: '40px 24px',
      fontSize: 12, lineHeight: 1.8,
    }}>
      <div style={{
        fontFamily: 'var(--font-display)', fontSize: 20,
        fontWeight: 700, color: 'rgba(255,255,255,0.85)',
        marginBottom: 8,
      }}>
        Mauli Kitchen Trolly &amp; Fabricators
      </div>
      <address style={{ fontStyle: 'normal', fontSize: 11, lineHeight: 1.9 }}>
        Sr. No. 43/2/2, Yashmukati Appartment, Pokale Vastti,<br />
        Near Dhareshwar Mandir, Dhayri, Pune, Maharashtra
      </address>
      <div style={{ marginTop: 6 }}>
        <a
          href="https://wa.me/919921932038"
          style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: 11 }}
        >
          +91 99219 32038
        </a>
      </div>
      <div style={{ marginTop: 20, fontSize: 10, opacity: 0.35 }}>
        © {new Date().getFullYear()} Mauli Kitchen Trolly and Fabricators. All rights reserved.
      </div>
    </footer>
  )
}
