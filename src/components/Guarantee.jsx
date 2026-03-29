import React from 'react';
import FadeIn from './FadeIn';
import { ShieldAlert, Fingerprint } from 'lucide-react';

const Guarantee = () => {
  return (
    <section className="section" style={{ backgroundColor: 'var(--color-bg-dark)', color: 'var(--color-text-light)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <FadeIn delay={100} className="text-center" style={{ marginBottom: '3rem' }}>
          <Fingerprint size={48} color="var(--color-gold)" style={{ margin: '0 auto 1.5rem auto' }} strokeWidth={1} />
          <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', color: 'var(--color-text-light)', marginBottom: '1rem' }}>
            Riesgo Cero. Nosotros asumimos el peso.
          </h2>
          <p style={{ color: 'var(--color-text-light-muted)', fontSize: '1.1rem' }}>
            No corres el riesgo de pagar por un sistema que no rinde. Está por contrato.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div style={{ 
            border: '1px solid var(--color-gold)', 
            borderRadius: 'var(--radius-md)', 
            padding: '3rem',
            position: 'relative',
            backgroundColor: 'var(--color-surface-dark)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              
              <div>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                  <ShieldAlert size={20} /> Garantía &lt; 30 Días
                </h3>
                <p style={{ color: 'var(--color-text-light-muted)', lineHeight: 1.6 }}>
                  Si la <strong>infraestructura tecnológica no está operativa al completo en 4 semanas</strong>, el coste de Setup tecnológico corre de nuestra cuenta y te lo reembolsamos íntegro.
                </p>
              </div>

              <div style={{ borderTop: '1px solid rgba(216, 195, 165, 0.2)', paddingTop: '2.5rem' }}>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
                  <ShieldAlert size={20} /> Garantía Rendimiento 30 Días
                </h3>
                <p style={{ color: 'var(--color-text-light-muted)', lineHeight: 1.6 }}>
                  Sabemos lo que hacemos. Si auditas positivamente tu clínica, inviertes tu cuota de Meta Ads acordada, operas el sistema según protocolo y <strong>no logramos pacientes sentados en tu gabinete</strong> en un plazo de 30 días... suprimiremos nuestro fee de gestión mensual. Seguiremos incurriendo en costes operativos sin cobrar por nuestros servicios hasta que logremos el objetivo.
                </p>
              </div>

            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Guarantee;
