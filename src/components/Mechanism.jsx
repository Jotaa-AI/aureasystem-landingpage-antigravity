import React from 'react';
import FadeIn from './FadeIn';
import { Megaphone, User, Zap, Filter, CalendarCheck, ArrowRight } from 'lucide-react';

const Mechanism = () => {
  const flowSteps = [
    {
      icon: <Megaphone size={28} />,
      title: "Anuncios",
      desc: "Campañas optimizadas para atraer pacientes interesados."
    },
    {
      icon: <User size={28} />,
      title: "Paciente Potencial",
      desc: "El paciente potencial muestra interés real."
    },
    {
      icon: <Zap size={28} />,
      title: "Contacto < 1 min",
      desc: "IA responde instantáneamente 24/7."
    },
    {
      icon: <Filter size={28} />,
      title: "Cualificación",
      desc: "Filtramos solo pacientes serios y rentables."
    },
    {
      icon: <CalendarCheck size={28} />,
      title: "Cita Agendada",
      desc: "Paciente confirmado directamente en tu agenda."
    }
  ];

  const stats = [
    { value: "< 1 min", label: "Tiempo de respuesta" },
    { value: "24/7", label: "IA activa siempre" },
    { value: "100%", label: "Pacientes atendidos" }
  ];

  return (
    <section className="section" id="sistema" style={{ backgroundColor: '#0A0A0A', color: '#FFFFFF', padding: '6rem 0' }}>
      <div className="container">
        
        {/* Cabecera de la sección */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <FadeIn delay={100}>
            <span style={{ 
              fontSize: '0.85rem', 
              fontWeight: 600, 
              letterSpacing: '0.2em', 
              color: 'var(--color-gold)', 
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '1rem'
            }}>
              NUESTRO ENFOQUE
            </span>
            <h2 style={{ 
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
              fontFamily: 'serif', 
              marginBottom: '1.5rem',
              color: '#FFFFFF'
            }}>
              No es marketing. Es un sistema.
            </h2>
            <p style={{ 
              color: '#A1A1AA', 
              fontSize: '1.15rem', 
              maxWidth: '700px', 
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              Sistema automatizado de captación, cualificación y agendado de pacientes. <br/>
              Sin intervención manual. Sin potenciales pacientes perdidos.
            </p>
          </FadeIn>
        </div>

        {/* Flujo Interactivo */}
        <div style={{ position: 'relative', marginBottom: '6rem' }}>
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'flex-start',
            gap: '1rem',
            position: 'relative',
            flexWrap: 'wrap'
          }}>
            {flowSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                {/* Paso del Flujo */}
                <FadeIn delay={200 + (idx * 150)} style={{ flex: '1', minWidth: '160px', textAlign: 'center' }}>
                  <div className="flow-node-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="flow-icon-container" style={{
                      width: '80px',
                      height: '80px',
                      borderRadius: '24px',
                      backgroundColor: '#1A1A1A',
                      border: '1px solid #333',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.5rem',
                      color: 'var(--color-gold)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 0 0 0 rgba(212, 175, 55, 0)'
                    }}>
                      {step.icon}
                    </div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#FFFFFF' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#71717A', lineHeight: 1.5, padding: '0 0.5rem' }}>
                      {step.desc}
                    </p>
                  </div>
                </FadeIn>

                {/* Flecha entre pasos (solo si no es el último) */}
                {idx < flowSteps.length - 1 && (
                  <div className="flow-arrow" style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    height: '80px', 
                    color: '#3F3F46',
                    marginTop: '0' 
                  }}>
                    <ArrowRight className="hidden-mobile" size={24} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Cajas de Estadísticas */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1.5rem',
          marginTop: '4rem'
        }}>
          {stats.map((stat, idx) => (
            <FadeIn delay={800 + (idx * 100)} key={idx}>
              <div style={{ 
                backgroundColor: '#161616', 
                border: '1px solid #27272A',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                textAlign: 'center',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }} className="stat-card">
                <span style={{ 
                  display: 'block', 
                  fontSize: '2.5rem', 
                  fontWeight: 800, 
                  color: '#FFFFFF', 
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.02em'
                }}>
                  {stat.value}
                </span>
                <span style={{ 
                  color: '#71717A', 
                  fontSize: '0.95rem', 
                  fontWeight: 500,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  {stat.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

      </div>

      <style>{`
        .flow-icon-container:hover {
          transform: translateY(-5px);
          border-color: var(--color-gold);
          box-shadow: 0 10px 30px -10px rgba(212, 175, 55, 0.4);
          background-color: #222;
        }
        .stat-card:hover {
          border-color: #3F3F46;
          transform: scale(1.02);
        }
        @media (max-width: 768px) {
          .hidden-mobile { display: none; }
          .flow-arrow { display: none; }
          .grid-2 { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
};

export default Mechanism;
