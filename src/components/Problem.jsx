import React from 'react';
import FadeIn from './FadeIn';
import { Clock, MessageSquareX, CalendarX2, BarChartBig } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: <Clock size={28} color="var(--color-gold)" strokeWidth={1.5} />,
      title: "La Fuga del Minuto 1",
      desc: "Un potencial paciente que no es atendido en los primeros 5 minutos se va con tu competencia local. Es humanamente imposible que una recepción gane a esa ventana de tiempo."
    },
    {
      icon: <MessageSquareX size={28} color="var(--color-gold)" strokeWidth={1.5} />,
      title: "El Agujero Negro de WhatsApp",
      desc: "Potenciales pacientes que preguntan 'precio' y luego te dejan en visto, conversaciones fantasma y horas perdidas persiguiendo posibles pacientes."
    },
    {
      icon: <CalendarX2 size={28} color="var(--color-gold)" strokeWidth={1.5} />,
      title: "Desperdicio Operativo",
      desc: "Doctores con horas huecas o cancelaciones de última hora (no-shows) que rompen la planificación del día y dinamitan tu rentabilidad."
    },
    {
      icon: <BarChartBig size={28} color="var(--color-gold)" strokeWidth={1.5} />,
      title: "Ceguera Atributiva",
      desc: "Inviertes en publicidad pero a final de mes no sabes con exactitud qué euros entraron en caja gracias a esas campañas y cuáles no."
    }
  ];

  return (
    <section className="section bg-dark" id="problema">
      <div className="container">
        <FadeIn delay={100} className="text-center" style={{ marginBottom: '4rem' }}>
          <span style={{ 
            fontSize: '0.8rem', 
            fontWeight: 600, 
            letterSpacing: '0.1em', 
            color: 'var(--color-gold)',
            textTransform: 'uppercase'
          }}>
            EL DIAGNÓSTICO DEL CRECIMIENTO
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--color-text-light)', marginTop: '0.5rem', marginBottom: '1.5rem' }}>
            Más volumen de potenciales pacientes ya no es la métrica de éxito.<br/>Es el inicio del caos.
          </h2>
        </FadeIn>

        <div className="grid grid-2" style={{ gap: '2rem' }}>
          {problems.map((prob, idx) => (
            <FadeIn delay={200 + (idx * 100)} key={idx}>
              <div style={{
                backgroundColor: 'var(--color-surface-dark)',
                padding: '2.5rem',
                borderRadius: 'var(--radius-md)',
                height: '100%',
                border: '1px solid rgba(255,255,255,0.05)',
                transition: 'transform 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ marginBottom: '1.5rem' }}>{prob.icon}</div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-text-light)', marginBottom: '1rem' }}>{prob.title}</h3>
                <p style={{ color: 'var(--color-text-light-muted)', fontSize: '1rem', lineHeight: 1.6 }}>{prob.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={600} className="text-center" style={{ marginTop: '4rem' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'inline-block' }}>
            Tu clínica no necesita una agencia tradicional que te prometa perfiles dudosos.<br/>
            <strong style={{ color: 'var(--color-gold)' }}>Necesitas un ecosistema de ingeniería de conversión.</strong>
          </p>
        </FadeIn>
      </div>
    </section>
  );
};

export default Problem;
