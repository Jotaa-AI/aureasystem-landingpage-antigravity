import React from 'react';
import FadeIn from './FadeIn';
const Hero = ({ openModal }) => {
  return (
    <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="container grid grid-2" style={{ alignItems: 'stretch' }}>
        
        {/* Columna Izquierda - Copy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingRight: '2rem', justifyContent: 'center' }}>
          <FadeIn delay={100}>
            <span style={{ 
              fontSize: '0.8rem', 
              fontWeight: 600, 
              letterSpacing: '0.1em', 
              color: 'var(--color-accent)',
              textTransform: 'uppercase',
              border: '1px solid var(--color-gold-light)',
              padding: '0.4rem 0.8rem',
              borderRadius: 'var(--radius-xl)',
              display: 'inline-block'
            }}>
              Exclusivo para clínicas premium de estética facial
            </span>
          </FadeIn>
          
          <FadeIn delay={200}>
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, margin: 0 }}>
              Consigue pacientes cualificados para tu clínica en menos de 30 días.
            </h1>
          </FadeIn>
          
          <FadeIn delay={300}>
            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', lineHeight: 1.6, maxWidth: '540px' }}>
              <strong>The PatientFlow System</strong> combina Meta Ads, y un flujo automatizado de llamadas + WhatsApp para erradicar los no-shows, responder en segundos y llenar tu agenda solo con pacientes que valoran la calidad de tu trabajo.
            </p>
          </FadeIn>
          
          <FadeIn delay={400} style={{ marginTop: '1rem' }}>
            <button onClick={openModal} className="btn btn-primary" style={{ padding: '1.2rem 2.5rem', fontSize: '1.1rem', display: 'inline-block' }}>
              Agendar Sesión Estratégica
            </button>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light-muted)', marginTop: '0.8rem' }}>
              Solo 5 plazas de Fundador disponibles. Aceptación sujeta a auditoría.
            </p>
          </FadeIn>
        </div>

        {/* Columna Derecha - Visual UI (Video) */}
        <FadeIn delay={300} style={{ height: '100%' }}>
          <div style={{ 
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            border: '4px solid var(--color-surface)',
            overflow: 'hidden',
            position: 'relative',
            backgroundColor: '#000',
            height: '100%'
          }}>
            <video 
              autoPlay 
              loop 
              controls
              playsInline
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            >
              <source src="https://assets.cdn.filesafe.space/ju5vSpTX0hpH3uI8cPSE/media/69c951fe9dbb420faeeb5326.mp4" type="video/mp4" />
              Tu navegador no soporta el formato de video.
            </video>
            
            {/* Decoración ambiental */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100px',
              height: '100px',
              background: 'radial-gradient(circle, var(--color-gold-light) 0%, transparent 70%)',
              zIndex: -1,
              opacity: 0.5
            }}></div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
};



export default Hero;
