"use client"
import { motion, Variants } from 'framer-motion'

interface TextRevealProps {
  text: string
  className?: string
  style?: React.CSSProperties
  delay?: number
}

export default function TextReveal({ text, className, style, delay = 0 }: TextRevealProps) {
  const words = text.split(' ')

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { 
        staggerChildren: 0.05, 
        delayChildren: delay 
      },
    },
  }

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 150,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      x: 10,
      scale: 1.1,
    },
  }

  return (
    <motion.span
      style={{ display: 'inline', whiteSpace: 'pre-wrap', ...style }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
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
          {wordIndex !== words.length - 1 && <span style={{ display: 'inline-block' }}>&nbsp;</span>}
        </span>
      ))}
    </motion.span>
  )
}
