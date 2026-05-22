import React from 'react'
import { motion } from 'framer-motion'
import GalleryGrid from '../components/GalleryGrid.jsx'
import { fabricationImages } from '../assets/imageData.js'

export default function FabricationGallery({ onImageClick }) {
  return (
    <section
      id="fabrication-section"
      style={{
        position: 'relative', zIndex: 1,
        background: 'var(--gray-50)',
        borderBottom: '1px solid var(--gray-200)',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 36 }}
        >
          <div style={labelStyle}>Gallery</div>
          <h2 style={titleStyle}>Fabrication Work</h2>
          <p style={bodyStyle}>
            Custom steel and metal fabrication — gates, grilles, furniture, and structural work done with care.
          </p>
        </motion.div>

        <GalleryGrid
          images={fabricationImages}
          onImageClick={onImageClick}
          sectionLabel="Fabrication"
          placeholderCount={6}
        />

        {fabricationImages.length === 0 && (
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
