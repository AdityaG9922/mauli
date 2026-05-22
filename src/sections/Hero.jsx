import React from 'react'
import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: 'relative', zIndex: 1,
        minHeight: '100svh',
        display: 'flex', flexDirection: 'column',
        justifyContent: 'center', alignItems: 'center',
        textAlign: 'center',
        padding: '90px 24px 70px',
      }}
    >
      {/* Badge */}
      <motion.div {...fadeUp(0)} style={{
        display: 'inline-flex', alignItems: 'center', gap: 7,
        background: 'var(--steel-50)',
        border: '1px solid var(--steel-100)',
        borderRadius: 100, padding: '6px 16px',
        fontSize: 11, fontWeight: 500, color: 'var(--steel-500)',
        letterSpacing: '0.07em', textTransform: 'uppercase',
        marginBottom: 28,
      }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--gold)', display: 'block', flexShrink: 0 }} />
        Pune, Maharashtra
      </motion.div>

      {/* Headline */}
      <motion.h1 {...fadeUp(0.1)} style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(40px, 10vw, 72px)',
        fontWeight: 700, lineHeight: 1.08,
        color: 'var(--steel-700)',
        letterSpacing: '-0.01em',
        marginBottom: 8,
      }}>
        Mauli Kitchen
      </motion.h1>
      <motion.h1 {...fadeUp(0.15)} style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(40px, 10vw, 72px)',
        fontWeight: 500, lineHeight: 1.08,
        color: 'var(--steel-400)',
        letterSpacing: '-0.01em',
        marginBottom: 24,
      }}>
        &amp; & Fabricators
      </motion.h1>

      {/* Divider */}
      <motion.div {...fadeUp(0.2)} style={{
        width: 48, height: 1,
        background: 'linear-gradient(90deg, transparent, var(--steel-200), transparent)',
        marginBottom: 24,
      }} />

      {/* Tagline */}
      <motion.p {...fadeUp(0.25)} style={{
        fontSize: 'clamp(14px, 3.5vw, 17px)',
        color: 'var(--gray-600)', maxWidth: 420,
        lineHeight: 1.75, fontWeight: 300,
        marginBottom: 44,
      }}>
        We create quality kitchen & fabrication work with attention to detail and modern finishing — crafted for homes across Pune.
      </motion.p>

      {/* CTA row */}
      <motion.div {...fadeUp(0.32)} style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
        <motion.a
          href="#services"
          whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(42,61,82,0.28)' }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: 'var(--steel-600)',
            color: '#fff', borderRadius: 100,
            padding: '14px 28px',
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
            boxShadow: '0 4px 16px rgba(42,61,82,0.22)',
            transition: 'background 0.2s',
          }}
        >
          Explore Our Work
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </motion.a>
        <motion.a
          href="#about"
          whileHover={{ background: 'var(--steel-50)' }}
          whileTap={{ scale: 0.97 }}
          style={{
            background: 'transparent',
            color: 'var(--steel-500)',
            border: '1px solid var(--steel-200)',
            borderRadius: 100, padding: '14px 28px',
            fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 500,
            textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8,
            transition: 'background 0.2s, border-color 0.2s',
          }}
        >
          About Us
        </motion.a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        {...fadeUp(0.5)}
        style={{
          position: 'absolute', bottom: 30, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
          opacity: 0.45,
        }}
        aria-hidden="true"
      >
        <span style={{ fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gray-400)' }}>
          Scroll
        </span>
        <motion.div
          animate={{ scaleY: [1, 0.5, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1, height: 36, background: 'linear-gradient(180deg, var(--gray-300) 0%, transparent 100%)', transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  )
}
