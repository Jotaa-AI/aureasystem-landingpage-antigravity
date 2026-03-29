import React from 'react';
import FadeIn from './FadeIn';

const Results = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className="container">
        <FadeIn delay={100} className="text-center" style={{ marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--color-text)' }}>
            De la incertidumbre del marketing a la predictibilidad de tu empresa.
          </h2>
        </FadeIn>

        <div className="grid grid-3" style={{ gap: '2rem' }}>
          
          <FadeIn delay={200}>
            <div style={{ 
              padding: '2rem', 
              borderRadius: 'var(--radius-md)', 
              backgroundColor: 'var(--color-bg)',
              border: '1px solid var(--color-gold-light)',
              height: '100%'
            }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-light-muted)', textDecoration: 'line-through' }}>
                Recepción estresada como call-center
              </span>
              <h3 style={{ fontSize: '1.4rem', marginTop: '1rem', color: 'var(--color-accent)' }}>
                Recepción operando a nivel premium
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginTop: '1rem', lineHeight: 1.6 }}>
                Tu equipo deja de perseguir a fantasmas inubicables y pasa a recibir consultas automáticamente agendadas por la IA directamente en el calendario.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div style={{ 
              padding: '2rem', 
              borderRadius: 'var(--radius-md)', 
              backgroundColor: 'var(--color-bg)',
              border: '1px solid var(--color-gold-light)',
              height: '100%'
            }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-light-muted)', textDecoration: 'line-through' }}>
                Cientos de curiosos preguntando "¿precio?"
              </span>
              <h3 style={{ fontSize: '1.4rem', marginTop: '1rem', color: 'var(--color-accent)' }}>
                Goteo continuo de prospectos educados
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginTop: '1rem', lineHeight: 1.6 }}>
                Eliminamos por fuerza a los regateadores de precio gracias a copys directos y perfilados IA para atender solo a pacientes que valoran tu centro.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div style={{ 
              padding: '2rem', 
              borderRadius: 'var(--radius-md)', 
              backgroundColor: 'var(--color-bg)',
              border: '1px solid var(--color-gold-light)',
              height: '100%'
            }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-light-muted)', textDecoration: 'line-through' }}>
                No entender el ROI de la agencia
              </span>
              <h3 style={{ fontSize: '1.4rem', marginTop: '1rem', color: 'var(--color-accent)' }}>
                Certidumbre matemática mensual
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginTop: '1rem', lineHeight: 1.6 }}>
                Sabes exactamente cuánto te cuesta adquirir un nuevo cliente de ácido hialurónico y sabes exactamente cuánto dinero deja esa campaña en el balance a mes vencido.
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};

export default Results;
