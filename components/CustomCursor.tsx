"use client"
import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  useEffect(() => {
    // Check if it's a touch device
    setIsMobile('ontouchstart' in window || navigator.maxTouchPoints > 0)

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const checkHover = () => {
      const hoveredElement = document.querySelectorAll('a, button, input, select')
      hoveredElement.forEach((el) => {
        el.addEventListener('mouseenter', () => setIsHovering(true))
        el.addEventListener('mouseleave', () => setIsHovering(false))
      })
    }

    window.addEventListener('mousemove', moveCursor)
    checkHover()

    return () => {
      window.removeEventListener('mousemove', moveCursor)
    }
  }, [cursorX, cursorY])

  const springConfig = { damping: 25, stiffness: 700 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  if (isMobile) return null

  return (
    <>
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 20,
          height: 20,
          backgroundColor: 'transparent',
          border: '1px solid var(--accent-cyan)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 2 : 1,
          opacity: 0.8,
        }}
      />
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 4,
          height: 4,
          backgroundColor: 'var(--accent-cyan)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          width: 150,
          height: 150,
          background: 'radial-gradient(circle, var(--glow-cyan) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9998,
          x,
          y,
          translateX: '-50%',
          translateY: '-50%',
          opacity: 0.15,
        }}
      />
    </>
  )
}
