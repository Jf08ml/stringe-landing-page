export default function WikiPage() {
  const characters = [
    { name: 'Aegor', role: 'Vanguard (Control)', hp: 1000, atk: 90, def: 140, spd: 80, ctrl: 30, res: 40, skills: ['Golpe Pesado', 'Embate', 'Guardia Alta', 'Dominio del Campo'], image: '/characters/aegor.png' },
    { name: 'Drakar', role: 'Vanguard (Ofensivo)', hp: 950, atk: 100, def: 120, spd: 85, ctrl: 25, res: 40, skills: ['Tajo Brutal', 'Fractura', 'Embestida', 'Grito de Guerra'], image: '/characters/drakar.png' },
    { name: 'Virex', role: 'Duelist (Ejecución)', hp: 850, atk: 150, def: 70, spd: 110, ctrl: 10, res: 20, skills: ['Corte Rápido', 'Estocada Vital', 'Impulso', 'Veredicto Final'], image: '/characters/virex.png' },
    { name: 'Nyx', role: 'Duelist (Tempo)', hp: 820, atk: 135, def: 75, spd: 115, ctrl: 20, res: 25, skills: ['Filo Veloz', 'Sombra Doble', 'Esquiva Calculada', 'Danza Letal'], image: '/characters/nyx.png' },
    { name: 'Kael', role: 'Controller (Silencio)', hp: 900, atk: 95, def: 100, spd: 95, ctrl: 50, res: 30, skills: ['Pulso Neural', 'Bloqueo Neural', 'Distorsión', 'Colapso Cognitivo'] },
    { name: 'Thorne', role: 'Controller (Fijación)', hp: 880, atk: 100, def: 95, spd: 90, ctrl: 55, res: 35, skills: ['Golpe Marcado', 'Cadena de Hierro', 'Marca del Cazador', 'Juicio Forzado'] },
    { name: 'Sera', role: 'Support (Ofensivo)', hp: 900, atk: 70, def: 80, spd: 105, ctrl: 30, res: 25, skills: ['Chispa', 'Llamado de Furia', 'Toque Vital', 'Acelerar Destino'] },
    { name: 'Ivena', role: 'Support (Defensivo)', hp: 920, atk: 65, def: 95, spd: 100, ctrl: 35, res: 40, skills: ['Pulso Sereno', 'Velo Protector', 'Purificar', 'Santuario'] },
    { name: 'Lyra', role: 'Strategist (Barra)', hp: 870, atk: 80, def: 90, spd: 100, ctrl: 40, res: 30, skills: ['Impulso Mental', 'Redistribuir Ritmo', 'Claridad Mental', 'Sobrecarga Táctica'] },
    { name: 'Orun', role: 'Strategist (Energía)', hp: 860, atk: 85, def: 85, spd: 95, ctrl: 45, res: 35, skills: ['Descarga', 'Drenaje', 'Catalizar', 'Inversión de Flujo'] },
  ];

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <header style={{ marginBottom: '6rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '2rem' }}>
        <span style={{ color: 'var(--accent-cyan)', fontSize: '0.9rem', fontWeight: 'bold', letterSpacing: '0.4em' }}>
          PROTOCOLO // DOCUMENTO MAESTRO V3.0
        </span>
        <h1 style={{ fontSize: '4rem', margin: '1.5rem 0', lineHeight: '1' }}>Manual Operativo <br /><span className="text-gradient">Stringe Fase 1</span></h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
          Sistema Congelado. Validado por 400.000+ combates simulados.
        </p>
      </header>

      {/* 01 Vision */}
      <section id="vision" style={{ marginBottom: '8rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--accent-cyan)' }}>01 / Visión y Principios</h2>
        <div className="glass-panel">
          <p style={{ marginBottom: '1.5rem' }}>Stringe es un juego de combate estratégico asíncrono 3v3. El combate se resuelve automáticamente según reglas pre-configuradas.</p>
          <ul style={{ color: 'var(--text-secondary)', listStyle: 'none' }}>
            <li style={{ marginBottom: '0.8rem' }}>🛡️ <strong>Estrategia de Configuración:</strong> Decide antes, observa después.</li>
            <li style={{ marginBottom: '0.8rem' }}>🛡️ <strong>Habilidad Competitiva:</strong> Anticipar escenarios y construir árboles de decisión robustos.</li>
            <li style={{ marginBottom: '0.8rem' }}>🛡️ <strong>Transparencia:</strong> Reproducibilidad total vía <em>Combat Seed</em>.</li>
          </ul>
        </div>
      </section>

      {/* 02 Arquitectura */}
      <section id="arquitectura" style={{ marginBottom: '8rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--accent-magenta)' }}>02 / Arquitectura del Combate</h2>
        <div className="glass-panel">
          <p>Sistema ATB (Active Time Battle): barra 0-100 por personaje. Cada personaje actúa según su propio reloj.</p>
          <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'rgba(0,0,0,0.3)', borderRadius: '4px' }}>
            <code style={{ color: 'var(--accent-magenta)' }}>barra += (SPD × 0.5 + 45) × 0.1</code>
          </div>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '1rem' }}>
            Cuando la barra ≥ 100, se ejecuta la acción. El desempate se resuelve por mayor barra, luego SPD, luego RNG del Seed.
          </p>
        </div>
      </section>

      {/* 03 Motor */}
      <section id="motor" style={{ marginBottom: '8rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--accent-gold)' }}>03 / Motor Matemático</h2>
        <div style={{ display: 'grid', gap: '2rem' }}>
          <div className="glass-panel">
            <h4 style={{ marginBottom: '1rem' }}>Fórmula de Daño Final</h4>
            <code style={{ fontSize: '0.8rem', color: 'var(--accent-gold)' }}>Final = (Base × (100 / (100 + DEF))) × Fractura × Variación(±5%)</code>
          </div>
          <div className="glass-panel">
            <h4 style={{ marginBottom: '1rem' }}>Probabilidad de Estado</h4>
            <code style={{ fontSize: '0.8rem' }}>Prob = Base × (1 + CTRL/100) × (100 / (100 + RES_efectivo)) + Momentum_Bonus</code>
          </div>
        </div>
      </section>

      {/* 04 Sistemas */}
      <section id="sistemas" style={{ marginBottom: '8rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--accent-cyan)' }}>04 / Sistemas de Memoria</h2>
        <div style={{ display: 'grid', gap: '2rem' }}>
          <div className="glass-panel" style={{ borderLeft: '4px solid var(--accent-gold)' }}>
            <h3 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>Fractura Táctica</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Stacks individuales (0-3). Se generan al recibir CC o presión consecutiva.</p>
            <p style={{ marginTop: '1rem' }}>+10% daño recibido por stack. A los 3 stacks (Exposición): +20% adicional y bloqueo de escudos.</p>
          </div>
          <div className="glass-panel" style={{ borderLeft: '4px solid var(--accent-cyan)' }}>
            <h3 style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }}>Economía de Momentum</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Recurso de equipo (0-6). Se genera mediante acciones tácticas exitosas (CC, Shields ≥ 8%, Cleanse).</p>
            <p style={{ marginTop: '1rem' }}>Ventaja (3 stacks): +15% daño, -10% costos. Dominio (6 stacks): +20% daño, -20% costos.</p>
          </div>
        </div>
      </section>

      {/* 05 Roster */}
      <section id="roster" style={{ marginBottom: '8rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>05 / Roster de Personajes (10)</h2>
        <div style={{ display: 'grid', gap: '2rem' }}>
          {characters.map(char => (
            <div key={char.name} className="glass-panel" style={{ padding: '0', display: 'flex', overflow: 'hidden', minHeight: '220px' }}>
              <div style={{ 
                width: '180px', 
                background: char.image ? `url(${char.image})` : 'rgba(255,255,255,0.02)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRight: '1px solid rgba(255,255,255,0.05)',
                position: 'relative'
              }}>
                {!char.image && (
                  <div style={{ 
                    position: 'absolute', 
                    top: '50%', 
                    left: '50%', 
                    transform: 'translate(-50%, -50%)',
                    fontSize: '0.6rem',
                    color: 'rgba(255,255,255,0.2)',
                    textAlign: 'center',
                    textTransform: 'uppercase',
                    letterSpacing: '0.2em'
                  }}>
                    Data <br /> Encrypted
                  </div>
                )}
                <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', padding: '0.5rem', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', fontSize: '0.6rem', textAlign: 'center', color: 'var(--accent-cyan)' }}>
                  ID: {char.name.toUpperCase()} // P1
                </div>
              </div>
              
              <div style={{ flex: 1, padding: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                  <h3 style={{ color: 'var(--accent-cyan)', margin: 0 }}>{char.name}</h3>
                  <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', border: '1px solid #333', padding: '0.2rem 0.6rem' }}>{char.role}</span>
                </div>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.6rem', textAlign: 'center' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.3rem' }}>HP <br /><span style={{ color: '#fff', fontSize: '0.8rem' }}>{char.hp}</span></div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.3rem' }}>ATK <br /><span style={{ color: '#fff', fontSize: '0.8rem' }}>{char.atk}</span></div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.3rem' }}>DEF <br /><span style={{ color: '#fff', fontSize: '0.8rem' }}>{char.def}</span></div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.3rem' }}>SPD <br /><span style={{ color: '#fff', fontSize: '0.8rem' }}>{char.spd}</span></div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.3rem' }}>CTRL <br /><span style={{ color: '#fff', fontSize: '0.8rem' }}>{char.ctrl}</span></div>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '0.3rem' }}>RES <br /><span style={{ color: '#fff', fontSize: '0.8rem' }}>{char.res}</span></div>
                </div>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {char.skills.map(s => (
                    <span key={s} style={{ 
                      fontSize: '0.6rem', 
                      background: 'rgba(0, 243, 255, 0.05)', 
                      border: '1px solid rgba(0, 243, 255, 0.1)',
                      color: 'rgba(255,255,255,0.8)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '2px'
                    }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 06 Configuracion */}
      <section id="configuracion" style={{ marginBottom: '8rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--accent-magenta)' }}>06 / Configuración Condicional</h2>
        <div className="glass-panel">
          <p style={{ marginBottom: '1.5rem' }}>Lógica de decisión por prioridad: El motor ejecuta la primera regla que se cumpla.</p>
          <div style={{ padding: '1rem', background: '#000', border: '1px solid #333', fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--accent-magenta)' }}>
            SI (Enemigo con menor HP &lt; 40%) Y (Energía &ge; 40) &rarr; USAR Habilidad 1
          </div>
          <ul style={{ marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)', listStyle: 'none' }}>
            <li>✔ Máximo 3 condiciones por habilidad.</li>
            <li>✔ Máximo 6 reglas por personaje.</li>
            <li>✔ Evaluación de estado propio, aliados, enemigos y global.</li>
          </ul>
        </div>
      </section>

      {/* 07 Ranked */}
      <section id="ranked" style={{ marginBottom: '8rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--accent-gold)' }}>07 / Sistema Ranked (Glicko-2)</h2>
        <div className="glass-panel">
          <div style={{ display: 'flex', gap: '4rem', marginBottom: '2rem' }}>
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)' }}>RATING INICIAL</div>
              <div style={{ fontSize: '2rem' }}>1500</div>
            </div>
            <div>
              <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)' }}>TEMPORADA</div>
              <div style={{ fontSize: '2rem' }}>6 SEM</div>
            </div>
          </div>
          <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Pura meritocracia. Ascensos y descensos automáticos por rating real.</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {['Iron', 'Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond', 'Master', 'GM', 'Challenger'].map(l => (
              <span key={l} style={{ fontSize: '0.6rem', padding: '0.2rem 0.6rem', border: '1px solid var(--accent-gold)', color: 'var(--accent-gold)' }}>{l}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 08 Adicionales */}
      <section id="adicionales" style={{ marginBottom: '10rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>08 / Transparencia y Auditoría</h2>
        <div style={{ display: 'grid', gap: '2rem' }}>
          <div className="glass-panel">
            <h4 style={{ color: 'var(--accent-cyan)', marginBottom: '1rem' }}>SISTEMA DE REPLAY LOG</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              Cada combate genera un log estructurado (JSON). Proporcionamos transparencia total: barra al actuar, energía antes/después, reglas disparadas y daño mitigado.
            </p>
          </div>
          <div className="glass-panel">
            <h4 style={{ color: 'var(--accent-magenta)', marginBottom: '1rem' }}>MATRIZ DE COUNTERS</h4>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>Relaciones directas 1v1 (Ciclo: Duelist &rarr; Support &rarr; Controller &rarr; Duelist).</p>
            <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' }}>
              Aegor neutraliza Duelists de burst (Virex) // Kael silencia combos de Strategists // Nyx explota objetivos con baja DEF (Sera).
            </div>
          </div>
        </div>
      </section>

      <footer style={{ marginTop: '10rem', padding: '2rem 0', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontSize: '0.7rem', textAlign: 'center' }}>
        FIN DEL DOCUMENTO MAESTRO // VERSIÓN 3.0 CONGELADA // STRINGE PHASE 1
      </footer>
    </div>
  );
}
