"use client"
import { motion } from "framer-motion";

import TextReveal from "@/components/TextReveal";

export default function Manifesto() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="manifiesto" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '5rem', borderLeft: '4px solid var(--accent-magenta)', paddingLeft: '2rem' }}
        >
          <span style={{ color: 'var(--accent-magenta)', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '0.3em' }}>[ PRINCIPIOS FUNDACIONALES ]</span>
          <h2 className="text-gradient-magenta" style={{ fontSize: 'clamp(1.8rem, 6vw, 3rem)', marginTop: '1rem' }}>
            <TextReveal text="Un Deporte de Habilidad Táctica" />
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}
        >
          <motion.div variants={itemVariants} className="glass-panel" style={{ padding: '2.5rem', borderColor: 'rgba(255, 0, 255, 0.2)' }}>
            <h3 style={{ color: 'var(--accent-magenta)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
              <span style={{ whiteSpace: 'nowrap' }}>01 /</span> CONFIGURACIÓN PREVIA
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: "1.8" }}>
              Tus decisiones ocurren antes del combate. Configura reglas condicionales, prioridades y sinergias. Observa cómo tu arquitectura táctica se enfrenta al meta sin intervención manual.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="glass-panel" style={{ padding: '2.5rem', borderColor: 'rgba(0, 243, 255, 0.2)' }}>
            <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
              <span style={{ whiteSpace: 'nowrap' }}>02 /</span> TRANSPARENCIA TOTAL
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: "1.8" }}>
              Reproducibilidad completa vía <em>Combat Seed</em>. Cada acción es verificable, auditable y transparente. Eliminamos la "caja negra" del azar para premiar la intuición matemática.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="glass-panel" style={{ padding: '2.5rem', borderColor: 'rgba(255, 204, 0, 0.2)' }}>
            <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>
              <span style={{ whiteSpace: 'nowrap' }}>03 /</span> MÉRITO SOBRE RNG
            </h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: "1.8" }}>
              "Perdí porque configuré mal la prioridad", no "porque el RNG me odia". Stringe es un entorno donde el mejor estratega gana, periodo. Sin golpes críticos milagrosos ni esquivas vacías.
            </p>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Decorative background element */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.05, 0.08, 0.05]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, var(--glow-magenta) 0%, transparent 70%)',
          opacity: 0.05,
          pointerEvents: 'none',
          zIndex: 1
        }}
      ></motion.div>
    </section>
  );
}
