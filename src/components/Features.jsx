import React from 'react';
import FadeIn from './FadeIn';
import { Check } from 'lucide-react';

const Features = () => {
  const items = [
    "Setup técnico integral de The PatientFlow System.",
    "Diseño y arquitectura del agente de Inteligencia Artificial para WhatsApp.",
    "Gestión hiper-premium de campañas B2C en Meta Ads.",
    "Configuración estricta de protocolos automáticos de nutrición y disminución de no-shows.",
    "Diseño y entrega de un panel de analítica en tiempo real (Dashboard).",
    "Optimización diaria, soporte técnico y acompañamiento estratégico constante."
  ];

  return (
    <section className="section" style={{ borderBottom: '1px solid var(--color-gold-light)' }}>
      <div className="container grid grid-2" style={{ alignItems: 'center' }}>
        <FadeIn delay={100}>
          <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--color-text)' }}>
            Desplegamos, mantenemos y optimizamos todo por ti.
          </h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginTop: '1rem' }}>
            Una infraestructura completa de principio a fin, diseñada para que tu centro estético disfrute de predictibilidad en la captación.
          </p>
        </FadeIn>

        <div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {items.map((item, idx) => (
              <FadeIn delay={200 + (idx * 50)} key={idx}>
                <li style={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  gap: '1rem',
                  padding: '1rem',
                  backgroundColor: 'var(--color-surface)',
                  borderRadius: 'var(--radius-sm)',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{ marginTop: '0.2rem' }}>
                    <Check size={20} color="var(--color-accent)" strokeWidth={3} />
                  </div>
                  <span style={{ color: 'var(--color-text)', fontWeight: 500 }}>{item}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
