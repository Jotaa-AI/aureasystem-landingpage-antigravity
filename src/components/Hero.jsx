import React from 'react';
import FadeIn from './FadeIn';
import { Bot, CheckCircle, CalendarDays, TrendingUp } from 'lucide-react';

const Hero = ({ openModal }) => {
  return (
    <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: '4rem', paddingBottom: '4rem' }}>
      <div className="container grid grid-2" style={{ alignItems: 'center' }}>
        
        {/* Columna Izquierda - Copy */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingRight: '2rem' }}>
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
              Escala tu flujo de pacientes cualificados.<br />
              <span style={{ color: 'var(--color-text-muted)' }}>Toma el control absoluto de tu clínica.</span>
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

        {/* Columna Derecha - Visual UI (Dashboard simulado) */}
        <FadeIn delay={300}>
          <div style={{ 
            backgroundColor: 'var(--color-surface)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--color-gold-light)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            position: 'relative'
          }}>
            {/* Header del UI simulado */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #F3F4F6', paddingBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <TrendingUp size={20} color="var(--color-accent)" />
                <span style={{ fontWeight: 600, color: 'var(--color-text)' }}>Resumen Diario</span>
              </div>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Hoy, 10:24 AM</span>
            </div>

            {/* Notificaciones UI simuladas */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <NotificationItem 
                icon={<Bot size={18} color="#4A5A6A" />} 
                title="Lead contactado por IA" 
                time="Hace 32s" 
                detail="Interés: Ácido Hialurónico Labios"
                isActive={true}
              />
              <NotificationItem 
                icon={<CheckCircle size={18} color="#10B981" />} 
                title="Cualificación superada" 
                time="Hace 2m" 
                detail="Presupuesto aceptado visualmente"
              />
              <NotificationItem 
                icon={<CalendarDays size={18} color="#D8C3A5" />} 
                title="Consulta agendada automáticamente" 
                time="Hace 4m" 
                detail="Próximo Martes a las 17:30h"
              />
            </div>

            {/* Decoración ambiental para el "Quiet Luxury" */}
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

// Sub-componente gráfico para la UI del Dashboard
const NotificationItem = ({ icon, title, time, detail, isActive = false }) => (
  <div style={{ 
    display: 'flex', 
    gap: '1rem', 
    padding: '1rem', 
    backgroundColor: isActive ? 'var(--color-bg)' : '#FFFFFF',
    borderRadius: 'var(--radius-sm)',
    borderLeft: isActive ? '3px solid var(--color-accent)' : '3px solid transparent',
    transition: 'all 0.3s ease'
  }}>
    <div style={{ 
      width: '36px', height: '36px', 
      borderRadius: '50%', 
      backgroundColor: 'var(--color-gold-light)', 
      display: 'flex', justifyContent: 'center', alignItems: 'center' 
    }}>
      {icon}
    </div>
    <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.2rem' }}>
        <h4 style={{ fontSize: '0.95rem', margin: 0 }}>{title}</h4>
        <span style={{ fontSize: '0.75rem', color: 'var(--color-text-light-muted)' }}>{time}</span>
      </div>
      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', margin: 0 }}>{detail}</p>
    </div>
  </div>
);

export default Hero;
