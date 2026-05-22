import React from 'react'
import { motion } from 'framer-motion'
import GalleryGrid from '../components/GalleryGrid.jsx'
import { kitchenImages } from '../assets/imageData.js'

export default function KitchenGallery({ onImageClick }) {
  return (
    <section
      id="kitchen-section"
      style={{
        position: 'relative', zIndex: 1,
        background: 'var(--gray-50)',
        borderTop: '1px solid var(--gray-200)',
        borderBottom: '1px solid var(--gray-200)',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 36 }}
        >
          <div style={labelStyle}>Gallery</div>
          <h2 style={titleStyle}>Kitchen Trolly</h2>
          <p style={bodyStyle}>
            Precision-crafted kitchen trolleys designed for modern homes — functional, clean, and built to last.
          </p>
        </motion.div>

        {/* Gallery */}
        <GalleryGrid
          images={kitchenImages}
          onImageClick={onImageClick}
          sectionLabel="Kitchen Trolly"
          placeholderCount={8}
        />

        {kitchenImages.length === 0 && (
          <p style={{
            marginTop: 16, fontSize: 12,
            color: 'var(--gray-400)', fontStyle: 'italic',
            textAlign: 'center',
          }}>
            Photos coming soon — add your images in <code>src/assets/imageData.js</code>
          </p>
        )}
      </div>
    </section>
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
  fontSize: 14, color: 'var(--gray-600)',
  lineHeight: 1.7, fontWeight: 300, maxWidth: 420,
}
