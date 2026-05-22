import React from 'react'
import { motion } from 'framer-motion'

export default function Services() {
  return (
    <section id="services" style={{ position: 'relative', zIndex: 1, padding: '80px 24px' }}>
      <div style={{ maxWidth: 520, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 40 }}
        >
          <div style={labelStyle}>What We Do</div>
          <h2 style={titleStyle}>Our Services</h2>
          <p style={bodyStyle}>
            Tap a service to explore our work — from custom kitchen trolleys to professional steel fabrication.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }} className="services-resp">
          <ServiceCard
            delay={0.1}
            icon={<KitchenIcon />}
            name="Kitchen Trolly"
            desc="Custom-designed kitchen trolleys built with precision steel work and modern finishing for every kitchen style."
            href="#kitchen-section"
          />
          <ServiceCard
            delay={0.2}
            icon={<FabIcon />}
            name="Fabrication"
            desc="Structural and custom steel fabrication for gates, grilles, furniture frames and industrial applications."
            href="#fabrication-section"
          />
        </div>
      </div>

      <style>{`
        @media(min-width:560px) { .services-resp { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  )
}

function ServiceCard({ delay, icon, name, desc, href }) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -3, boxShadow: '0 8px 28px rgba(30,40,55,0.11)' }}
      whileTap={{ scale: 0.98 }}
      style={{
        position: 'relative',
        background: '#fff',
        border: '1px solid var(--gray-200)',
        borderRadius: 22,
        padding: '32px 26px',
        cursor: 'pointer',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        gap: 12,
        boxShadow: '0 2px 12px rgba(30,40,55,0.07)',
        minHeight: 180,
        textDecoration: 'none',
        transition: 'border-color 0.25s',
        overflow: 'hidden',
      }}
    >
      {/* Background tint on hover */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, var(--steel-50) 0%, transparent 55%)',
        borderRadius: 22, pointerEvents: 'none',
      }} />

      {/* Icon */}
      <div style={{
        width: 48, height: 48,
        background: 'var(--steel-50)',
        borderRadius: 12,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        border: '1px solid var(--steel-100)',
        position: 'relative', zIndex: 1,
      }}>
        {icon}
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          fontFamily: 'var(--font-display)', fontSize: 24, fontWeight: 700,
          color: 'var(--steel-700)', marginBottom: 6,
        }}>
          {name}
        </div>
        <div style={{ fontSize: 13, color: 'var(--gray-600)', lineHeight: 1.65, fontWeight: 300 }}>
          {desc}
        </div>
      </div>

      {/* Arrow badge */}
      <div style={{
        position: 'absolute', top: 26, right: 26,
        width: 30, height: 30,
        background: 'var(--steel-600)',
        borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" aria-hidden="true">
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </div>
    </motion.a>
  )
}

function KitchenIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--steel-600)" strokeWidth="1.5" aria-hidden="true">
      <rect x="2" y="7" width="20" height="13" rx="2" />
      <path d="M2 10h20M8 7V5a2 2 0 014 0v2M6 15h.01M12 15h.01" />
    </svg>
  )
}

function FabIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--steel-600)" strokeWidth="1.5" aria-hidden="true">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
    </svg>
  )
}

const labelStyle = {
  fontSize: 11, fontWeight: 500, letterSpacing: '0.1em',
  textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 10,
}

const titleStyle = {
  fontFamily: 'var(--font-display)',
  fontSize: 'clamp(28px, 7vw, 44px)',
  fontWeight: 700, color: 'var(--steel-700)',
  lineHeight: 1.15, marginBottom: 14,
}

const bodyStyle = {
  fontSize: 15, color: 'var(--gray-600)',
  lineHeight: 1.75, fontWeight: 300, maxWidth: 400,
}
