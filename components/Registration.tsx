"use client"
import { useState } from 'react'
import { db } from '@/lib/firebase'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { motion, AnimatePresence } from 'framer-motion'

export default function Registration() {
  const [email, setEmail] = useState('')
  const [specialization, setSpecialization] = useState('Tácticas Basadas en Turnos (TCG)')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    
    try {
      await addDoc(collection(db, 'registrations'), {
        email,
        specialization,
        timestamp: serverTimestamp(),
      })
      setSubmitted(true)
    } catch (err) {
      console.error("Error adding document: ", err)
      setError('Error en la transmisión. Intenta de nuevo.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="registro" className="section grid-bg" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Decorative pulse glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, var(--glow-cyan) 0%, transparent 70%)',
          opacity: 0.1,
          pointerEvents: 'none',
          zIndex: 0
        }}
      ></motion.div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 className="text-gradient">Fase Beta: Protocolo Génesis</h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>
            Las plazas para los primeros 500 comandantes están siendo asignadas por mérito táctico.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-panel" 
          style={{ 
            maxWidth: '550px', 
            margin: '0 auto', 
            border: '1px solid var(--accent-cyan)',
            boxShadow: '0 0 40px rgba(0, 243, 255, 0.1)'
          }}
        >
          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', letterSpacing: '0.2em', marginBottom: '0.5rem' }}>ESTADO DEL NÚCLEO: DISPONIBLE</div>
                  <h3 style={{ fontSize: '1.5rem' }}>SOLICITAR ACCESO</h3>
                </div>

                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.7rem', color: 'var(--accent-cyan)', fontWeight: 'bold' }}>IDENTIFICADOR DE RED (EMAIL)</label>
                    <input 
                      type="email" 
                      required 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="estratega_01@dominio.com"
                      style={{ 
                        width: '100%', 
                        padding: '1.2rem', 
                        background: 'rgba(255,255,255,0.03)', 
                        border: '1px solid rgba(255,255,255,0.1)', 
                        color: '#fff',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.3s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                    />
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.7rem', color: 'var(--accent-cyan)', fontWeight: 'bold' }}>ESPECIALIZACIÓN PREVIA</label>
                    <select 
                      value={specialization}
                      onChange={(e) => setSpecialization(e.target.value)}
                      style={{ 
                        width: '100%', 
                        padding: '1.2rem', 
                        background: 'rgba(255,255,255,0.03)', 
                        border: '1px solid rgba(255,255,255,0.1)', 
                        color: '#999',
                        borderRadius: '4px',
                        fontSize: '1rem',
                        outline: 'none',
                        appearance: 'none'
                      }}
                    >
                      <option style={{ background: '#000' }}>Tácticas Basadas en Turnos (TCG)</option>
                      <option style={{ background: '#000' }}>Estrategia Global (4X)</option>
                      <option style={{ background: '#000' }}>Simulación y Automatización</option>
                      <option style={{ background: '#000' }}>Nueva Inteligencia Operativa</option>
                    </select>
                  </div>

                  {error && <p style={{ color: 'var(--accent-magenta)', fontSize: '0.8rem', marginBottom: '1rem', textAlign: 'center' }}>{error}</p>}

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit" 
                    className="btn btn-primary" 
                    disabled={loading}
                    style={{ width: '100%', padding: '1.2rem', fontSize: '1rem', opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? 'CIFRANDO DATOS...' : 'ENVIAR PROTOCOLO DE ADMISIÓN'}
                  </motion.button>
                  
                  <p style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textAlign: 'center', marginTop: '1.5rem' }}>
                    Al unirte, aceptas que tu autoridad operativa será evaluada de forma constante.
                  </p>
                </form>
              </motion.div>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ padding: '2rem', textAlign: 'center' }}
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', damping: 12, delay: 0.2 }}
                  style={{ 
                    width: '60px', 
                    height: '60px', 
                    border: '2px solid var(--accent-cyan)', 
                    borderRadius: '50%', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    margin: '0 auto 2rem',
                    boxShadow: '0 0 20px var(--glow-cyan)'
                  }}
                >
                  <span style={{ color: 'var(--accent-cyan)', fontSize: '1.5rem' }}>✓</span>
                </motion.div>
                <h2 style={{ color: 'var(--accent-cyan)', marginBottom: '1.5rem' }}>TRANSMISIÓN EXITOSA</h2>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  Tu solicitud ha sido encriptada y enviada al núcleo de Stringe. <br />
                  Si tu perfil es compatible, recibirás coordenadas de acceso en breve.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    color: 'var(--accent-cyan)', 
                    textDecoration: 'underline', 
                    marginTop: '2rem', 
                    cursor: 'pointer',
                    fontSize: '0.8rem'
                  }}
                >
                  Volver a la Terminal
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
