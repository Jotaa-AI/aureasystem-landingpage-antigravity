import React from 'react';
import FadeIn from './FadeIn';

const Urgency = () => {
  return (
    <section style={{ backgroundColor: 'var(--color-surface)', padding: '2rem 0' }}>
      <div className="container" style={{ maxWidth: '800px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <FadeIn delay={100} style={{ 
          borderLeft: '4px solid var(--color-gold)', 
          padding: '1rem 2rem',
          backgroundColor: 'var(--color-bg)'
        }}>
          <h3 style={{ fontSize: '1rem', textTransform: 'uppercase', color: 'var(--color-accent)', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
            Disponibilidad Estricta
          </h3>
          <p style={{ color: 'var(--color-text)', fontSize: '0.95rem', margin: 0, lineHeight: 1.6 }}>
            El esfuerzo técnico del ensamblaje del sistema en cada clínica impide comercializarlo en masa. Por ello, la <em>Oferta Fundadora</em> se limitará inapelablemente a <strong>5 plazas</strong>. Completadas éstas, la admisión pasará a ser de un máximo de <strong>4 nuevas clínicas/mes</strong> a tarifa oficial.
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default Urgency;
