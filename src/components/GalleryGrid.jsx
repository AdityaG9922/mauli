import React from 'react'
import { motion } from 'framer-motion'

/**
 * GalleryGrid
 * @param {Array} images - Array of { src, alt, thumb } objects
 * @param {Function} onImageClick - Called with (src, alt) when image clicked
 * @param {string} sectionLabel - Label for placeholder
 * @param {number} placeholderCount - How many placeholders to show when images=[]
 */
export default function GalleryGrid({ images = [], onImageClick, sectionLabel = 'Photo', placeholderCount = 6 }) {
  const items = images.length > 0
    ? images
    : Array.from({ length: placeholderCount }, (_, i) => ({
        src: null,
        alt: `${sectionLabel} ${i + 1}`,
        index: i + 1,
      }))

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: 10,
    }}
    className="gallery-grid-responsive"
    >
      {items.map((item, i) => (
        <GalleryItem
          key={i}
          src={item.src}
          alt={item.alt}
          index={item.index || i + 1}
          label={sectionLabel}
          delay={i * 0.05}
          onClick={() => item.src && onImageClick(item.src, item.alt)}
        />
      ))}

      <style>{`
        @media (min-width: 600px) { .gallery-grid-responsive { grid-template-columns: repeat(3,1fr); gap: 14px; } }
        @media (min-width: 900px) { .gallery-grid-responsive { grid-template-columns: repeat(4,1fr); } }
      `}</style>
    </div>
  )
}

function GalleryItem({ src, alt, index, label, delay, onClick }) {
  const isPlaceholder = !src

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      whileHover={src ? { scale: 1.02 } : {}}
      onClick={onClick}
      role={src ? 'button' : undefined}
      tabIndex={src ? 0 : undefined}
      aria-label={src ? `View ${alt}` : undefined}
      onKeyDown={src ? (e) => { if (e.key === 'Enter' || e.key === ' ') onClick() } : undefined}
      style={{
        position: 'relative',
        borderRadius: 14,
        overflow: 'hidden',
        background: 'var(--steel-50)',
        border: '1px solid var(--gray-200)',
        aspectRatio: '4/3',
        cursor: src ? 'pointer' : 'default',
        transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
      }}
    >
      {src ? (
        <>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          {/* Hover overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'rgba(42,61,82,0.4)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            opacity: 0, transition: 'opacity 0.2s ease',
          }}
          className="gallery-hover-overlay"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" aria-hidden="true">
              <path d="M15 3h6m0 0v6m0-6L10 14M9 3H3v6M3 21h6M3 21V15m18 6h-6m6 0v-6" />
            </svg>
          </div>
        </>
      ) : (
        <Placeholder index={index} label={label} />
      )}

      <style>{`.gallery-hover-overlay:hover { opacity: 1 !important; }`}</style>
    </motion.div>
  )
}

function Placeholder({ index, label }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      gap: 8,
      color: 'var(--steel-300)',
    }}>
      <span style={{
        fontFamily: 'var(--font-display)', fontSize: 28,
        fontWeight: 600, color: 'var(--steel-200)',
      }}>
        0{index}
      </span>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--steel-200)" strokeWidth="1.2" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span style={{ fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>
        {label}
      </span>
    </div>
  )
}
