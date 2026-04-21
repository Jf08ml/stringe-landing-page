"use client"
import { motion } from "framer-motion";

import TextReveal from "@/components/TextReveal";

export default function GameFeatures() {
  return (
    <section id="mecanicas" className="section grid-bg" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 className="text-gradient">
            <TextReveal text="Arquitectura Operativa" />
          </h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '1rem auto' }}>
            Fase 1: Motor de combate determinista diseñado para el dominio estratégico absoluto.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-panel" 
            style={{ position: 'relative', overflow: 'hidden' }}
          >
            <div style={{ color: 'var(--accent-cyan)', fontSize: '2rem', marginBottom: '1rem' }}>
              <span style={{ whiteSpace: 'nowrap' }}>01 /</span> DETERMINISMO
            </div>
            <h3>Reproducibilidad Total</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
              Sin inputs en tiempo real. Cada combate se rige por un Combat Seed único, permitiendo que la estrategia pura sea la única variable del éxito.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel" 
            style={{ position: 'relative', overflow: 'hidden', border: '1px solid var(--accent-magenta)' }}
          >
            <div style={{ color: 'var(--accent-magenta)', fontSize: '2rem', marginBottom: '1rem' }}>
              <span style={{ whiteSpace: 'nowrap' }}>02 /</span> PRESIÓN
            </div>
            <h3>Fractura & Momentum</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
              Sistemas avanzados de debilidad acumulativa (Fractura) y bonificaciones por presión sostenida (Momentum) que definen el ritmo del tablero.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass-panel" 
            style={{ position: 'relative', overflow: 'hidden', border: '1px solid var(--accent-gold)' }}
          >
            <div style={{ color: 'var(--accent-gold)', fontSize: '2rem', marginBottom: '1rem' }}>
              <span style={{ whiteSpace: 'nowrap' }}>03 /</span> MÉRITO
            </div>
            <h3>Glicko-2 Ranked</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
              Un ranking real basado en el mérito táctico. Temporadas de 6 semanas sin fricción artificial de LP o promociones.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ marginTop: '4rem', padding: '3rem', border: '1px solid var(--border-color)', borderRadius: '4px', textAlign: 'center' }}
        >
          <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }}>EL PROTOCOLO 3V3</h4>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
            10 Personajes con habilidades fijas para la Fase 1. El equilibrio perfecto para probar tu capacidad de simulación táctica.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
