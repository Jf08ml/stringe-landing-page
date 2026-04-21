import Link from 'next/link';

export default function WikiSidebar() {
  const categories = [
    { title: 'Fundamentos', links: [
      { name: 'Visión y Principios', href: '/wiki#vision' },
      { name: 'Arquitectura 3v3', href: '/wiki#arquitectura' },
      { name: 'Motor Matemático', href: '/wiki#motor' }
    ]},
    { title: 'Mecánicas', links: [
      { name: 'Fractura Táctica', href: '/wiki#sistemas' },
      { name: 'Economía Momentum', href: '/wiki#sistemas' },
      { name: 'Protocolos de Acción', href: '/wiki#configuracion' }
    ]},
    { title: 'Competición', links: [
      { name: 'Roster Oficial', href: '/wiki#roster' },
      { name: 'Sistema Ranked', href: '/wiki#ranked' },
      { name: 'Auditoría y Transparencia', href: '/wiki#adicionales' }
    ]}
  ];

  return (
    <aside style={{
      width: '280px',
      height: '100vh',
      position: 'sticky',
      top: 0,
      borderRight: '1px solid var(--border-color)',
      padding: '2rem',
      backgroundColor: '#0a0a0a',
      overflowY: 'auto'
    }}>
      <Link href="/" style={{ 
        color: 'var(--accent-cyan)', 
        textDecoration: 'none', 
        fontWeight: 'bold',
        display: 'block',
        marginBottom: '3rem',
        fontSize: '1.2rem'
      }}>← VOLVER</Link>

      {categories.map((cat, i) => (
        <div key={i} style={{ marginBottom: '2.5rem' }}>
          <h4 style={{ 
            fontSize: '0.7rem', 
            color: 'var(--text-secondary)', 
            marginBottom: '1rem',
            letterSpacing: '0.1em'
          }}>{cat.title}</h4>
          <ul style={{ listStyle: 'none' }}>
            {cat.links.map((link, j) => (
              <li key={j} style={{ marginBottom: '0.8rem' }}>
                <Link href={link.href} style={{ 
                  textDecoration: 'none', 
                  color: 'var(--text-primary)',
                  fontSize: '0.9rem',
                  transition: 'color 0.3s'
                }} className="wiki-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </aside>
  );
}
