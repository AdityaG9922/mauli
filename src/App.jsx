import React, { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import AmbientBackground from './components/AmbientBackground.jsx'
import FloatingButtons from './components/FloatingButtons.jsx'
import Hero from './sections/Hero.jsx'
import Stats from './sections/Stats.jsx'
import Services from './sections/Services.jsx'
import KitchenGallery from './sections/KitchenGallery.jsx'
import FabricationGallery from './sections/FabricationGallery.jsx'
import About from './sections/About.jsx'
import Footer from './sections/Footer.jsx'
import ImageModal from './components/ImageModal.jsx'

export default function App() {
  const [modalSrc, setModalSrc] = useState(null)
  const [modalAlt, setModalAlt] = useState('')

  const openModal = (src, alt) => {
    if (!src) return
    setModalSrc(src)
    setModalAlt(alt)
  }

  const closeModal = () => {
    setModalSrc(null)
    setModalAlt('')
  }

  return (
    <>
      <AmbientBackground />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <KitchenGallery onImageClick={openModal} />
        <FabricationGallery onImageClick={openModal} />
        <About />
      </main>
      <Footer />
      <FloatingButtons />
      <ImageModal src={modalSrc} alt={modalAlt} onClose={closeModal} />
    </>
  )
}
