"use client"
import { motion } from 'framer-motion'

interface TextRevealProps {
  text: string
  className?: string
  style?: React.CSSProperties
  delay?: number
}

export default function TextReveal({ text, className, style, delay = 0 }: TextRevealProps) {
  const words = text.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay * i },
    }),
  }

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      x: () => Math.random() * 100 - 50,
      y: () => Math.random() * 100 - 50,
      scale: 2,
      filter: 'blur(10px)',
    },
  }

  return (
    <motion.span
      style={{ display: 'inline', whiteSpace: 'pre-wrap', ...style }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
          {word.split('').map((char, charIndex) => (
            <motion.span
              key={charIndex}
              variants={child}
              style={{ display: 'inline-block' }}
            >
              {char}
            </motion.span>
          ))}
          {/* Add space back after the word unless it's the last word */}
          {wordIndex !== words.length - 1 && <span>&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  )
}
