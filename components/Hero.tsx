"use client"
import "@fontsource/outfit/800.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import TextReveal from "@/components/TextReveal";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacityBg = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleContent = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section 
      ref={containerRef}
      className="section hero-container" 
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        position: 'relative',
        backgroundImage: 'url("/hero-bg.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        overflow: 'hidden'
      }}
    >
      {/* Parallax Layer Overlay */}
      <motion.div 
        style={{
          y: yBg,
          opacity: opacityBg,
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at center, rgba(5, 5, 5, 0.2) 0%, rgba(5, 5, 5, 1) 100%)',
          zIndex: 1
        }} 
      />

      <div className="scanline-overlay"></div>
      
      <motion.div 
        className="container" 
        style={{ zIndex: 10, position: 'relative', scale: scaleContent }}
      >
        <motion.div 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ 
            display: 'inline-block', 
            padding: '0.5rem 1.5rem', 
            border: '1px solid var(--accent-cyan)',
            background: 'rgba(0, 243, 255, 0.05)',
            marginBottom: '2rem',
            borderRadius: '2px',
            textShadow: '0 0 10px var(--glow-cyan)'
          }}
        >
          <span style={{
            color: 'var(--accent-cyan)',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            letterSpacing: '0.5em',
            textTransform: 'uppercase'
          }}>Transmisión Encriptada // Protocolo Génesis</span>
        </motion.div>
        
        <div style={{ position: 'relative' }}>
          <h1 className="text-gradient" style={{
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            lineHeight: '1',
            marginBottom: '1.5rem',
            letterSpacing: '-0.04em',
            fontWeight: 900
          }}>
            <TextReveal text="CADA MOVIMIENTO" delay={0.5} /><br />
            <span style={{ color: '#fff' }}>
              <TextReveal text="ESTÁ ESCRITO." delay={0.8} />
            </span><br />
            <span style={{ color: 'var(--accent-cyan)' }}>
              <TextReveal text="¿PUEDES ROMPER EL SISTEMA?" delay={1.1} />
            </span>
          </h1>
          
          {/* Glitch Overlay Text (Occasional Flash) */}
          <motion.h1 
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              fontSize: 'clamp(2.5rem, 8vw, 6rem)',
              lineHeight: '1',
              letterSpacing: '-0.04em',
              color: 'var(--accent-magenta)',
              zIndex: -1,
              opacity: 0,
              pointerEvents: 'none'
            }}
            animate={{ 
              opacity: [0, 0.3, 0],
              x: [0, 15, -15, 0]
            }}
            transition={{ duration: 0.1, repeat: Infinity, repeatDelay: 6 }}
          >
            CADA MOVIMIENTO<br />
            ESTÁ ESCRITO.<br />
            ¿PUEDES ROMPER EL SISTEMA?
          </motion.h1>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          style={{
            color: '#e2e8f0', // Increased contrast (light gray)
            fontSize: 'clamp(1.1rem, 2.2vw, 1.3rem)',
            maxWidth: '850px',
            margin: '0 auto 3.5rem',
            fontWeight: 400,
            lineHeight: '1.8',
            textShadow: '0 2px 4px rgba(0,0,0,0.5)' // Better legibility
          }}
        >
          Validado por <motion.strong whileHover={{ scale: 1.1, color: '#fff' }}>400.000+</motion.strong> combates simulados. <br />
          Stringe es el entorno competitivo donde la lógica derrota a la probabilidad.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <motion.a 
            href="#registro" 
            className="btn btn-primary" 
            style={{ minWidth: '240px', padding: '1.2rem' }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 30px var(--glow-cyan)',
              letterSpacing: '0.15em'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Pre-registro Beta
          </motion.a>
          <motion.a 
            href="#mecanicas" 
            className="btn btn-outline" 
            style={{ minWidth: '240px', padding: '1.2rem' }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: 'rgba(0, 243, 255, 0.1)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explorar Protocolo
          </motion.a>
        </motion.div>
      </motion.div>
      
      {/* Animated Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '3rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 5,
          textAlign: 'center'
        }}
      >
        <motion.div 
          animate={{ 
            height: [0, 40, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ 
            width: '2px', 
            background: 'var(--accent-cyan)', 
            margin: '0 auto' 
          }}
        />
        <p style={{ fontSize: '0.6rem', color: 'var(--accent-cyan)', marginTop: '0.8rem', opacity: 0.4, letterSpacing: '0.4em' }}>ADMISIÓN</p>
      </motion.div>
    </section>
  );
}
