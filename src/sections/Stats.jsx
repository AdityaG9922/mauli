import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { num: '500+', label: 'Projects Done' },
  { num: '8+', label: 'Years Experience' },
  { num: '100%', label: 'Quality Work' },
]

export default function Stats() {
  return (
    <section style={{ position: 'relative', zIndex: 1, padding: '0 24px 60px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          display: 'grid', gridTemplateColumns: 'repeat(3,1fr)',
          border: '1px solid var(--gray-200)', borderRadius: 14,
          overflow: 'hidden', maxWidth: 480, margin: '0 auto',
          background: 'var(--gray-200)',
          gap: '1px',
        }}
      >
        {stats.map((s, i) => (
          <div key={i} style={{
            background: '#fff', padding: '20px 12px',
            textAlign: 'center',
          }}>
            <div style={{
              fontFamily: 'var(--font-display)', fontSize: 30,
              fontWeight: 700, color: 'var(--steel-600)', lineHeight: 1,
            }}>
              {s.num}
            </div>
            <div style={{
              fontSize: 11, color: 'var(--gray-400)',
              marginTop: 4, fontWeight: 400, letterSpacing: '0.04em',
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
