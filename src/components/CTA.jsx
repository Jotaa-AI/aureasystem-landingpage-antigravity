import React from 'react';
import FadeIn from './FadeIn';

const CTA = ({ openModal }) => {
  return (
    <section className="bg-dark" id="auditoria" style={{ padding: '6rem 0 3rem 0', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '700px' }}>
        <FadeIn delay={100}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', color: 'var(--color-text-light)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            La ineficiencia es el impuesto más alto que paga una clínica.
          </h2>
          <p style={{ color: 'var(--color-text-light-muted)', fontSize: '1.2rem', marginBottom: '3rem' }}>
            Deja las operaciones tecnológicas avanzadas para nosotros. Dedica el 100% de tu tiempo a la excelencia clínica y a la dirección médica de tu centro.
          </p>
        </FadeIn>
        
        <FadeIn delay={200}>
          <button onClick={openModal} className="btn dark-mode-btn" style={{ padding: '1.2rem 2.8rem', fontSize: '1.1rem', color: 'var(--color-bg-dark)', fontWeight: 600 }}>
            Agendar Auditoría Telefónica Gratuita
          </button>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light-muted)', marginTop: '1.5rem' }}>
            Charla táctica de 20 minutos por Zoom. Evaluamos si tu clínica cumple con los requisitos mínimos de integración y resolvemos tus dudas. Sin presión comercial insistente.
          </p>
        </FadeIn>
      </div>

      <div style={{ marginTop: '5rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.85rem', color: 'var(--color-text-light-muted)' }}>
          <div>&copy; {new Date().getFullYear()} Aurea Systems. Todos los derechos reservados.</div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#" style={{ hover: 'text-white' }}>Aviso Legal</a>
            <a href="#" style={{ hover: 'text-white' }}>Privacidad</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
