"use client"
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ESCENARIOS = [
  {
    id: 'A',
    title: 'La Ruptura de la Vanguardia',
    text: 'Tu unidad frontal ha acumulado 2 stacks de Fractura. El oponente prepara un ataque pesado. Si mantienes la posición, el próximo golpe aplicará el +20% de daño final. ¿Cómo ajustas el protocolo?',
    options: [
      { text: 'Contención: Ceder Momentum para aplicar un escudo de emergencia.', type: 'defensivo' },
      { text: 'Sacrificio: Mantener la posición para asegurar un contraataque letal.', type: 'agresivo' },
      { text: 'Rotación: Cambiar el objetivo de prioridad para forzar un Dodge.', type: 'adaptable' }
    ]
  },
  {
    id: 'B',
    title: 'El Umbral del Momentum',
    text: 'Tu equipo está a 1 stack de alcanzar el Momentum Nivel 3. Tienes un 50% de probabilidad de generar el CC necesario con tu habilidad actual o un 20% de asegurar una baja directa.',
    options: [
      { text: 'Presión: Priorizar la generación de Momentum para el buff de equipo.', type: 'defensivo' },
      { text: 'Ejecución: Ignorar el Momentum y buscar la eliminación inmediata.', type: 'agresivo' },
      { text: 'Incertidumbre: Ejecutar un amago para conservar el Combat Seed actual.', type: 'adaptable' }
    ]
  }
]

export default function TacticalTest() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<string[]>([])
  const [finished, setFinished] = useState(false)
  const [seed, setSeed] = useState("")

  useEffect(() => {
    setSeed(Math.random().toString(16).slice(2, 10).toUpperCase())
  }, [step])

  const handleOption = (type: string) => {
    const newAnswers = [...answers, type]
    if (step < ESCENARIOS.length - 1) {
      setAnswers(newAnswers)
      setStep(step + 1)
    } else {
      setAnswers(newAnswers)
      setFinished(true)
    }
  }

  const getProfile = () => {
    const counts = answers.reduce((acc: any, val) => {
      acc[val] = (acc[val] || 0) + 1
      return acc
    }, {})
    const top = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b)
    const profiles: any = {
      defensivo: 'Arquitecto de Sistemas',
      agresivo: 'Ejecutor Determinista',
      adaptable: 'Estratega Multimodal'
    }
    return profiles[top] || 'Comandante'
  }

  return (
    <section id="test" className="section grid-bg" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="text-gradient">Protocolo de Evaluación</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
            Validamos tu intuición táctica antes de darte acceso al motor determinista.
          </p>
        </motion.div>

        <div className="glass-panel" style={{ maxWidth: '850px', margin: '0 auto', border: '1px solid rgba(255,255,255,0.05)', minHeight: '500px' }}>
          <AnimatePresence mode="wait">
            {!finished ? (
              <motion.div 
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', borderBottom: '1px solid #222', paddingBottom: '1rem' }}>
                  <span style={{ color: 'var(--accent-magenta)', fontSize: '0.8rem', fontWeight: 'bold' }}>SCAN: 0{step + 1} / 0{ESCENARIOS.length}</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.7rem' }}>SEED: {seed}</span>
                </div>

                <h3 style={{ marginBottom: '1.5rem', fontSize: '1.8rem' }}>{ESCENARIOS[step].title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3.5rem', fontSize: '1.1rem', lineHeight: '1.8', borderLeft: '2px solid var(--accent-cyan)', paddingLeft: '1.5rem' }}>
                  {ESCENARIOS[step].text}
                </p>
                
                <div style={{ display: 'grid', gap: '1.2rem' }}>
                  {ESCENARIOS[step].options.map((opt, i) => (
                    <motion.button 
                      key={i} 
                      whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleOption(opt.type)}
                      className="btn btn-outline"
                      style={{ 
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'flex-start', 
                        textAlign: 'left', 
                        padding: '1.5rem 2rem',
                        width: '100%',
                        background: 'rgba(255,255,255,0.02)',
                        fontSize: '1rem'
                      }}
                    >
                      <span style={{ 
                        color: 'var(--accent-cyan)', 
                        marginRight: '1rem', 
                        fontWeight: 'bold',
                        flexShrink: 0,
                        whiteSpace: 'nowrap'
                      }}>[ {i + 1} ]</span>
                      <span>{opt.text}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '2rem 0' }}
              >
                <div style={{ color: 'var(--accent-gold)', fontSize: '0.8rem', fontWeight: 'bold', letterSpacing: '0.3em', marginBottom: '1rem' }}>EVALUACIÓN COMPLETADA</div>
                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  style={{ fontSize: '3rem', marginBottom: '1rem' }} 
                  className="glow-text"
                >
                  {getProfile()}
                </motion.h3>
                <div style={{ height: '2px', width: '100px', background: 'var(--accent-gold)', margin: '0 auto 2rem' }}></div>
                
                <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 3rem' }}>
                  Tu coherencia táctica ha sido validada. <br />
                  Has demostrado el rigor necesario para operar en la Fase Beta de Stringe.
                </p>
                
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#registro" 
                  className="btn btn-primary" 
                  style={{ padding: '1.2rem 3rem' }}
                >
                  Proceder al Registro de Acceso
                </motion.a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
