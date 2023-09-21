// this is Home Slide in Main Home Page not First Component Slide
import { motion } from 'framer-motion'
import React from 'react'

function HomeSlide(OgComponent) {
  return (
    <>
        <OgComponent />
        <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            exit={{ scaleY: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}}
        />
    </>
  )
}

export default HomeSlide