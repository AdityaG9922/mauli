import React from 'react'
import { motion } from 'framer-motion'

const WHATSAPP_URL = 'https://wa.me/919921932038'
const INSTAGRAM_URL = 'https://www.instagram.com/maulikitchentrolley12345?igsh=bHhsYjd6YXZrMHhu'

export default function About() {
  return (
    <section id="about" style={{ position: 'relative', zIndex: 1, padding: '80px 24px' }}>
      <div style={{ maxWidth: 520, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 36 }}
        >
          <div style={labelStyle}>About Us</div>
          <h2 style={titleStyle}>Meet the Team</h2>
          <p style={bodyStyle}>
            Family-run craftsmanship serving Pune with pride and precision since our founding.
          </p>
        </motion.div>

        {/* About Card */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{
            background: '#fff',
            border: '1px solid var(--gray-200)',
            borderRadius: 22, padding: '36px 28px',
            boxShadow: '0 2px 12px rgba(30,40,55,0.07)',
          }}
        >
          {/* Owners */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 28 }}>
            <OwnerRow initials="SM" name="Sandip More" title="Co-Owner & Master Craftsman" />
            <OwnerRow initials="DM" name="Dnyaneshwar More" title="Co-Owner & Fabrication Specialist" />
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'var(--gray-200)', marginBottom: 24 }} />

          {/* Address */}
          <div style={{ marginBottom: 24 }}>
            <div style={{
              fontSize: 11, fontWeight: 500, letterSpacing: '0.08em',
              textTransform: 'uppercase', color: 'var(--gold)',
              marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8" aria-hidden="true">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
              </svg>
              Our Address
            </div>
            <address style={{
              fontSize: 14, color: 'var(--gray-600)',
              lineHeight: 1.9, fontWeight: 300, fontStyle: 'normal',
            }}>
              Sr. No. 43/2/2, Yashmukati Appartment,<br />
              Pokale Vastti, Near Dhareshwar Mandir,<br />
              Dhayri, Pune, Maharashtra
            </address>
          </div>

          {/* Contact links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            <ContactLink
              href={WHATSAPP_URL}
              label="+91 99219 32038 — WhatsApp Us"
              iconColor="#25D366"
              icon={<WhatsAppIcon color="#25D366" />}
            />
            <ContactLink
              href={INSTAGRAM_URL}
              label="Follow on Instagram"
              iconColor="#e1306c"
              icon={<InstagramIcon />}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function OwnerRow({ initials, name, title }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <div style={{
        width: 44, height: 44, borderRadius: '50%',
        background: 'linear-gradient(135deg, var(--steel-100), var(--steel-200))',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700,
        color: 'var(--steel-600)', flexShrink: 0,
        border: '1px solid var(--steel-200)',
      }}>
        {initials}
      </div>
      <div>
        <div style={{ fontSize: 15, fontWeight: 500, color: 'var(--steel-700)' }}>{name}</div>
        <div style={{ fontSize: 12, color: 'var(--gray-400)', fontWeight: 400, marginTop: 2 }}>{title}</div>
      </div>
    </div>
  )
}

function ContactLink({ href, label, icon }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ background: 'var(--steel-50)', borderColor: 'var(--steel-200)' }}
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        fontSize: 13, color: 'var(--gray-600)', textDecoration: 'none',
        fontWeight: 400, padding: '10px 14px',
        borderRadius: 8, background: 'var(--gray-50)',
        border: '1px solid var(--gray-200)',
        transition: 'background 0.2s, border-color 0.2s',
      }}
    >
      {icon}
      {label}
    </motion.a>
  )
}

function WhatsAppIcon({ color }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={color || '#25D366'} aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" style={{ flexShrink: 0 }}>
      <defs>
        <linearGradient id="ig-about" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#f09433" />
          <stop offset="50%" stopColor="#dc2743" />
          <stop offset="100%" stopColor="#bc1888" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-about)" />
      <path fill="#fff" d="M12 7a5 5 0 100 10A5 5 0 0012 7zm0 8a3 3 0 110-6 3 3 0 010 6zm4.5-8.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z" />
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
  lineHeight: 1.15, marginBottom: 12,
}
const bodyStyle = {
  fontSize: 15, color: 'var(--gray-600)',
  lineHeight: 1.75, fontWeight: 300, maxWidth: 400,
}
