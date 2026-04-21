import Hero from '../components/Hero';
import TacticalTest from '../components/TacticalTest';
import Manifesto from '../components/Manifesto';
import Registration from '../components/Registration';
import GameFeatures from '../components/GameFeatures';

export default function Home() {
  return (
    <main>
      <Hero />
      <Manifesto />
      <GameFeatures />
      <TacticalTest />
      <Registration />
      
      <footer style={{ 
        padding: '4rem 0', 
        textAlign: 'center', 
        borderTop: '1px solid rgba(255,255,255,0.05)',
        color: 'var(--text-secondary)',
        fontSize: '0.8rem'
      }}>
        <div className="container">
          <div style={{ 
            marginBottom: '1.5rem', 
            display: 'flex', 
            justifyContent: 'center' 
          }}>
            <a href="/wiki" className="footer-link" style={{ 
              display: 'inline-block',
              maxWidth: '100%',
              lineHeight: '1.4'
            }}>
              ACCEDER AL DOCUMENTO MAESTRO (WIKI)
            </a>
          </div>
          <p>&copy; 2026 STRINGE. Dominio Digital Basado en Habilidad.</p>
        </div>
      </footer>
    </main>
  );
}
