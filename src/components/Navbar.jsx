import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: 'rgba(255,255,255,0.88)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--gray-200)',
        padding: '0 20px', height: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        boxShadow: scrolled ? '0 1px 16px rgba(30,40,55,0.09)' : 'none',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      <a
        href="#hero"
        style={{
          fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 700,
          color: 'var(--steel-700)', letterSpacing: '0.02em', lineHeight: 1.2,
          maxWidth: 220, textDecoration: 'none',
        }}
      >
        Mauli Kitchen
        <span style={{
          display: 'block', fontSize: 11, fontFamily: 'var(--font-body)',
          fontWeight: 400, color: 'var(--steel-400)', letterSpacing: '0.08em',
          textTransform: 'uppercase', marginTop: 1,
        }}>
          Trolly &amp; Fabricators
        </span>
      </a>

      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <a href="#about" style={styles.navGhost}>Services</a>
        <a
          href="https://wa.me/919921932038"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.navSolid}
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
      </div>
    </motion.nav>
  )
}

const styles = {
  navGhost: {
    fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500,
    padding: '8px 16px', borderRadius: 100, cursor: 'pointer',
    textDecoration: 'none', transition: 'all 0.2s ease',
    background: 'transparent', color: 'var(--steel-600)',
    border: '1px solid var(--steel-200)',
  },
  navSolid: {
    fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500,
    padding: '8px 16px', borderRadius: 100, cursor: 'pointer',
    textDecoration: 'none', transition: 'all 0.2s ease',
    background: 'var(--steel-600)', color: '#fff',
    border: '1px solid var(--steel-600)',
    display: 'inline-flex', alignItems: 'center', gap: 6,
  },
}

function WhatsAppIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
