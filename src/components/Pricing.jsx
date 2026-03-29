import React from 'react';
import FadeIn from './FadeIn';
import { CircleCheckBig } from 'lucide-react';

const Pricing = ({ openModal }) => {
  return (
    <section className="section" id="pricing" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="container">
        <FadeIn delay={100} className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--color-text)' }}>
            Asegura una ventaja competitiva permanente.
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto 0 auto' }}>
            Debido a los requerimientos de la IA y el despliegue manual, el coste escalará a las tarifas oficiales en breve.
          </p>
        </FadeIn>

        <div className="grid grid-2" style={{ alignItems: 'center', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
          
          <FadeIn delay={200}>
            {/* Tarifa Oficial Inminente */}
            <div style={{ 
              padding: '3rem 2rem', 
              borderRadius: 'var(--radius-md)', 
              backgroundColor: 'var(--color-surface)',
              border: '1px solid #EAEAEA',
              opacity: 0.6,
              filter: 'grayscale(100%)'
            }}>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>Próxima Tarifa Oficial</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Apertura al mercado masivo</p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>1.500€</span>
                <span style={{ fontSize: '1rem', color: 'var(--color-text-light-muted)' }}> /mes</span>
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                + Setup inicial: 2.000€
              </p>

              <hr style={{ border: 'none', borderTop: '1px solid #EAEAEA', margin: '2rem 0' }} />
              <button className="btn btn-outline" style={{ width: '100%', cursor: 'not-allowed' }} disabled>
                Tarifa aún inactiva
              </button>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            {/* Oferta Fundadora */}
            <div style={{ 
              padding: '3.5rem 2.5rem', 
              borderRadius: 'var(--radius-lg)', 
              backgroundColor: 'var(--color-surface)',
              border: '2px solid var(--color-gold)',
              boxShadow: 'var(--shadow-lg)',
              position: 'relative',
              transform: 'scale(1.05)',
              zIndex: 10
            }}>
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: 'var(--color-gold)',
                color: 'var(--color-bg-dark)',
                padding: '0.4rem 1.2rem',
                borderRadius: 'var(--radius-xl)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.05em'
              }}>
                CONDICIÓN FUNDADOR (5 PLAZAS)
              </div>

              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-text)', marginBottom: '0.5rem' }}>Acceso Temprano</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Precio cerrado vitaliciamente.</p>
              
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--color-text)' }}>1.000€</span>
                <span style={{ fontSize: '1rem', color: 'var(--color-text-muted)' }}> /mes</span>
              </div>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                <strong>+ Setup Tecnológico: 2.000€</strong><br/>
                <span style={{ fontSize: '0.85rem' }}>(Infraestructura no reembolsable)</span>
              </p>

              <ul style={{ listStyle: 'none', marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {['Sistema IA y Meta Ads incluidos', 'Dashboard Analítico', 'Bloqueo vitalicio de este precio', 'Garantía 100% Condicional Activa'].map((item, idx) => (
                  <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '0.9rem', color: 'var(--color-text)' }}>
                    <CircleCheckBig size={18} color="var(--color-accent)" /> {item}
                  </li>
                ))}
              </ul>

              <button onClick={openModal} className="btn btn-accent" style={{ width: '100%' }}>
                Solicitar Bloqueo de Plaza
              </button>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light-muted)', textAlign: 'center', marginTop: '1rem' }}>
                Permanencia operativa mínima: 3 meses.
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
